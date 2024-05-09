import { Logx } from "../log";
import moment from 'moment-timezone';
import {
  ContractAddr,
  ContractType,
  ETHProvider,
  MXCL2Provider,
  SepoliaProvider,
  GenevaProvider
} from "../const/network";
import processERC20Transfer from "./erc20transfer";
import { TransferEvent } from "../../typechain-types/@openzeppelin/contracts/token/ERC20/IERC20";
import { MXCAddressTaskModel } from '../models';
import { MXCAddressesModel } from "../models/mxc_addresses";
import { Op, Sequelize } from "sequelize";
import acquiringMNS, { getMNSAddresses, mnsMainnetGraphClient, mnsGenevaGraphClient } from "./acquiringMNS";
import acquiringNeoM2pro from "./acquiringNeoM2pro";
import bridgingMoreThanValueOfAssets from "./bridgingMoreThanValueOfAssets";
import { parseEther } from "ethers/lib/utils";
import tradeVolumnOnMXCSwap, { getMXCSwapAddresses, swapExactMXCForTokens } from "./tradeVolumnOnMXCSwap";
import { getHexagonByAddresses, processHexagonBalance } from "./processHexagonBalance";
import { getERC20Addresses, processERC20Balance } from "./processERC20Balance";
import { BigNumber, ethers } from "ethers";
import tradeVolumnOnNFTMarketplace from "./tradeVolumnOnNFTMarketplace";
import { MXCSnapShotsModel } from "../models/mxc_snapshots";
import { MXCTasksModel } from "../models/mxc_tasks";
import providingLiquidityOnMXCSwap from "./providingLiquidityOnMXCSwap";
import migrate from "../migrate";
import dayjs from "dayjs";
import axios from 'axios'
import { getPublishedTasks, isInFrance, isInUSA, parseTankUID, scientificToDecimal } from "../uitls";
import { bridgeMXCEthereumToZkevm } from "./bridgeMXCEthereumToZkevm";
import { processMSC20Transactions } from "./msc20mint";
import NFTCollectionEvents from "./NFTCollectionCreate";
import { cellToLatLng } from "h3-js";
export let addresses: Map<string, MXCAddressesModel> = new Map();

class Tasks {
  static processTask1 = async (task_id = 1, time?: number) => {
    await processERC20Transfer(
      ContractAddr.Ethereum[ContractType.MXCTOKEN],
      ETHProvider,
      17677439,
      async (events: TransferEvent[]) => {
        for (let i = 0; i < events.length; i++) {
          await MXCAddressTaskModel.findOrCreate({
            where: { address: events[i].args.from, task_id },
          })
        }
      },
      null,
      ContractAddr.Ethereum[ContractType.MXCERC20L1Bridge],
      time
    )
  }

  // transaction during 2,3,4
  static processTask2 = async () => {
    const monthSeconds = 2592000;
    for (const address of addresses.keys()) {
      const between = moment(addresses.get(address).dataValues.last_transaction_time).unix() - moment(addresses.get(address).dataValues.first_transaction_time).unix()
      if (between > 2 * monthSeconds) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 2 },
        })
      }
      if (between > 3 * monthSeconds) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 3 },
        })
      }
      if (between > 4 * monthSeconds) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 4 },
        })
      }
    }
  }

  // transaction count 5-8
  static processTask5 = async () => {
    let taskIds = {
      5: 5,
      15: 6,
      30: 7,
      100: 8,
    }
    for (const address of addresses.keys()) {
      const count = await MXCL2Provider.getTransactionCount(address)
      for (const amount of Object.keys(taskIds)) {
        if (count >= Number(amount)) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  //More than N dApp interactions
  static processTask9 = async () => {
    for (const address of addresses.keys()) {
      const dapp_interactions = addresses.get(address).get().dapp_interactions || [];
      if (dapp_interactions.length >= 2) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 9 },
        })
      }
      if (dapp_interactions.length >= 3) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 10 },
        })
      }
    }
  }

  //Acquiring MNS  11-13
  static processTask11 = async () => {
    const addresses = await getMNSAddresses(mnsMainnetGraphClient);

    for (let i = 0; i < addresses.length; i++) {
      const mns = await acquiringMNS(mnsMainnetGraphClient, addresses[i])
      await MXCAddressTaskModel.findOrCreate({
        where: { address: ethers.utils.getAddress(addresses[i]), task_id: 11 },
      })
      if (mns.length >= 3) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: ethers.utils.getAddress(addresses[i]), task_id: 12 },
        })
      }
      for (let j = 0; j < mns.length; j++) {
        if (mns[j].domain.labelName !== "" && mns[j].domain.labelName.length <= 4) {
          await MXCAddressTaskModel.findOrCreate({
            where: { address: ethers.utils.getAddress(addresses[i]), task_id: 13 },
          })
        }
      }
    }
  }

  static processTask14 = async () => {
    let taskIds = {
      50000: 14,
      250000: 15,
      500000: 16,
      1000000: 17,
    }
    for (const address of addresses.keys()) {
      const value = scientificToDecimal(addresses.get(address).get().transaction_aggregate_value_mxc)
      for (const amount of Object.keys(taskIds)) {
        if (BigNumber.from(value || 0).gte(parseEther(amount))) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  // bridgeValueAssets 18- 22
  static processTask18 = async () => {
    const addressMap = await bridgingMoreThanValueOfAssets();
    let taskIds = {
      500000: 18,
      1000000: 19,
      2500000: 20,
      5000000: 21,
      10000000: 22
    }
    for (const address of addressMap.keys()) {
      for (const amount of Object.keys(taskIds)) {
        if (addressMap.get(address).value.gte(parseEther(amount))) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  // trade volume mxc swap 23-27
  static processTask23 = async () => {
    let taskIds = {
      500000: 23,
      2500000: 24,
      5000000: 25,
      10000000: 26,
      25000000: 27
    }
    for (const address of addresses.keys()) {
      const tradeVolumnUSD = await tradeVolumnOnMXCSwap(address)
      const tradeMXC = tradeVolumnUSD
      for (const amount of Object.keys(taskIds)) {
        if (tradeMXC >= Number(amount)) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  // trade volume mxc marketplace 28-32
  static processTask28 = async () => {
    const map = await tradeVolumnOnNFTMarketplace();
    let taskIds = {
      500000: 28,
      2500000: 29,
      5000000: 30,
      10000000: 31,
      25000000: 32
    }

    for (const address of map.keys()) {
      let v = map.get(address).volumn;
      for (const amount of Object.keys(taskIds)) {
        if (v.gte(parseEther(amount))) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  // providing MXC/XSD, MXC/XMXC liquidity MXC 33-37
  static processTask33 = async () => {
    let taskIds = {
      100000: 33,
      500000: 34,
      1000000: 35,
      20000000: 36,
      50000000: 37
    }
    for (const address of addresses.keys()) {
      const lpUSD = await providingLiquidityOnMXCSwap(address, ["0xb6b9be6e9645ede1e92e5c4a8b9f21cf09c43207", "0x0079e51773f3cd803188119b7bf18a415fbc53b4"])
      const lpMXC = lpUSD
      for (const amount of Object.keys(taskIds)) {
        if (lpMXC >= Number(amount)) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  //Minting N hexagon 38-40
  static processTask38 = async () => {
    const hexagons = await getHexagonByAddresses(ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken], MXCL2Provider)

    const taskIds = {
      1: 38,
      2: 39,
      3: 40
    }
    for (let i = 0; i < hexagons.length; i++) {
      const balance = await processHexagonBalance(ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken], MXCL2Provider, hexagons[i].address)
      for (const amount of Object.keys(taskIds)) {
        if (balance >= Number(amount)) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: {
              address: ethers.utils.getAddress(hexagons[i].address),
              task_id: taskId
            },
          })
        }
      }
    }
  }

  // XSD balance
  static processTask41 = async () => {
    const addresses = await getERC20Addresses(ContractAddr.MXCL2Mainnet[ContractType.XSDToken], MXCL2Provider);

    for (let i = 0; i < addresses.length; i++) {
      const balance = await processERC20Balance(ContractAddr.MXCL2Mainnet[ContractType.XSDToken], MXCL2Provider, addresses[i]);

      if (balance.gte(BigNumber.from(1000).mul(BigNumber.from(10).pow(18)))) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: ethers.utils.getAddress(addresses[i]), task_id: 41 },
        })
      }
    }

  }

  // moon token
  static processTask61 = async () => {
    for (const address of addresses.keys()) {
      const balance = await processERC20Balance(ContractAddr.MXCGeneva[ContractType.MOONToken], GenevaProvider, address);

      if (balance.gte(BigNumber.from(10).pow(18))) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 61 },
          defaults: {
            times: balance.div(BigNumber.from(10).pow(18)).toNumber()
          }
        })
      }
    }
  }

  // Bridging funds into geneva Testnet
  static processTask62 = async (task_id = 62, time?: number) => {
    // L1 -> L2
    await processERC20Transfer(ContractAddr.Sepolia[ContractType.MXCTOKEN],
      SepoliaProvider,
      3854984,
      async (events: TransferEvent[]) => {
        for (let i = 0; i < events.length; i++) {
          await MXCAddressTaskModel.findOrCreate({
            where: { address: events[i].args.from, task_id: task_id },
          })
        }
      }, null, ContractAddr.Sepolia[ContractType.MXCERC20L1Bridge], time)
  }

  // geneva transaction count 63-65
  static processTask63 = async () => {
    let taskIds = {
      3: 63,
      5: 64,
      10: 65,
    }
    for (const address of addresses.keys()) {
      const count = await GenevaProvider.getTransactionCount(address)
      for (const amount of Object.keys(taskIds)) {
        if (count >= Number(amount)) {
          const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
          await MXCAddressTaskModel.findOrCreate({
            where: { address: address, task_id: taskId },
          })
        }
      }
    }
  }

  // geneva dapp 66-67
  static processTask66 = async () => {
    for (const address of addresses.keys()) {
      const dapp_interactions = addresses.get(address).get().testnet_dapp_interactions || [];
      if (dapp_interactions.length >= 1) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 66 },
        })
      }
      if (dapp_interactions.length >= 2) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: address, task_id: 67 },
        })
      }
    }
  }

  //Acquiring MNS  68-69
  static processTask68 = async () => {
    const addresses = await getMNSAddresses(mnsGenevaGraphClient);

    for (let i = 0; i < addresses.length; i++) {
      const mns = await acquiringMNS(mnsGenevaGraphClient, addresses[i])
      await MXCAddressTaskModel.findOrCreate({
        where: { address: ethers.utils.getAddress(addresses[i]), task_id: 68 },
      })
      if (mns.length >= 3) {
        await MXCAddressTaskModel.findOrCreate({
          where: { address: ethers.utils.getAddress(addresses[i]), task_id: 69 },
        })
      }
    }
  }

  //Acquiring NEO m2pro  51-60
  static processTask51 = async () => {
    const mep1004Map = await acquiringNeoM2pro()

    for (const address of mep1004Map.keys()) {
      let neoNum = 0
      let m2xNum = 0

      for (let item of mep1004Map.get(address)) {
        if (item.sncode.startsWith('NEO')) neoNum++
        if (item.sncode.startsWith('M2X')) m2xNum++
      }

      let task51 = false // Own 1 NEO registered on AXS                   10000
      let task52 = false // Own 2 NEOs registered on AXS                  20000
      let task53 = false // Own more than 3 NEOs registered on AXS        50000
      let task54 = false // Own 5 NEOs registered on AXS                  100000
      let task55 = false // Own more than 5 NEOs registered on AXS        300000
      let task56 = false // Own 1 M2 Pro registered on AXS                50000
      let task57 = false // Own more than 2 M2 Pros registered on AXS     100000
      let task58 = false // Own more than 3 M2 Pros registered on AXS     170000
      let task59 = false // Own 5 M2 Pros registered on AXS               350000
      let task60 = false // Own more than 5 M2 Pros registered on AXS     500000

      if (neoNum >= 1) {
        task51 = true
      }
      if (neoNum >= 2) {
        task52 = true
      }
      if (neoNum >= 3) {
        task53 = true
      }
      if (neoNum >= 5) {
        task54 = true
      }
      if (neoNum > 5) {
        task55 = true
      }

      if (m2xNum >= 1) {
        task56 = true
      }
      if (m2xNum >= 2) {
        task57 = true
      }
      if (m2xNum >= 3) {
        task58 = true
      }
      if (m2xNum >= 5) {
        task59 = true
      }
      if (m2xNum > 5) {
        task60 = true
      }

      if (task51) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 51 } })

      if (task52) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 52 } })

      if (task53) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 53 } })

      if (task54) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 54 } })

      if (task55) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 55 } })

      if (task56) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 56 } })

      if (task57) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 57 } })

      if (task58) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 58 } })

      if (task59) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 59 } })

      if (task60) await MXCAddressTaskModel.findOrCreate({ where: { address: ethers.utils.getAddress(address), task_id: 60 } })
    }

  }

  static parseDeadlineTasks = async () => {
    const publishedTasks = await getPublishedTasks(dayjs().unix())

    // load by github json
    const response = await axios('https://raw.githubusercontent.com/MXCzkEVM/airdrop-tasks/main/tasks.json')
    // { tank: string, name: string, testnet: boolean, zks: number }[]
    const dashboardTanks = response.data as any[]

    // filter same tasks
    const publishingTasks = dashboardTanks.filter(task =>
      !publishedTasks.some(it => parseTankUID(it) === parseTankUID(task))
    )

    if (!publishingTasks.length)
      return

    const publishingHandleTasks = publishingTasks.map(item => {
      return {
        task_name: item.name,
        task: item.task,
        testnet: item.testnet ? 1 : 0,
        expiredAt: dayjs().day(6).hour(22).unix(),
        zks: item.zks
      }
    })

    const processes = publishingHandleTasks.map(task => MXCTasksModel.create(task))
    await Promise.all(processes)

    console.log('Published from the tasks dashboard: ')
    publishingTasks.forEach(t => console.log(`task:${parseTankUID(t)} - name:${t.name}`))
  }

  static processDeadlineTasks = async () => {
    const publishedTasks = await getPublishedTasks()

    const parseCalls: Record<string, any> = {
      'mainnet_week-01': (id: any, s: number, e: number) => bridge2500MXC(id, s, e),
      'mainnet_week-02': (id: any, s: number, e: number) => swap(id, s, e),
      'mainnet_week-03': (id: any, s: number, e: number) => swapWithToSensor1000(id, s, e),
      'mainnet_week-04': (id: any, s: number, e: number) => swapWithToXsd5000(id, s, e),
      'mainnet_week-05': (id: any, s: number, e: number) => mintInscription(id, s, e),
      'mainnet_week-06': (id: any, s: number, e: number) => createNftCollection(id, s, e),
      'mainnet_week-07': (id: any, s: number, e: number) => mintHexagonInUSA(id, s, e),
      'mainnet_week-08': (id: any, s: number, e: number) => mintHexagonInFrance(id, s, e),
    }

    for (const task of publishedTasks) {
      const s = dayjs.unix(task.expiredAt).day(1).hour(0).minute(0).second(0).unix()
      const e = dayjs.unix(task.expiredAt).day(6).hour(59).minute(59).second(59).unix()
      console.log('s: ', dayjs.unix(s).format())
      await parseCalls[parseTankUID(task)](task.id, s, e)
    }

    async function bridge2500MXC(task_id: number, s: number, e: number) {
      const ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(true, s, e)
      for (const address of ethereumTransferMXCRecords.keys()) {
        if (!ethereumTransferMXCRecords.get(address).gte(parseEther('2500')))
          continue
        await MXCAddressTaskModel.findOrCreate({ where: { address, task_id } })
      }
    }
    async function swap(task_id: number, s: number, e: number) {
      for (const address of addresses.keys()) {
        const swaps = await swapExactMXCForTokens(address, undefined, s, e)
        if (!swaps.length)
          continue
        await MXCAddressTaskModel.findOrCreate({
          where: { address, task_id: task_id },
        })
      }
    }
    async function swapWithToSensor1000(task_id: number, s: number, e: number) {
      for (const address of addresses.keys()) {
        const swaps = await swapExactMXCForTokens(
          address,
          { to: ContractAddr.MXCL2Mainnet[ContractType.SensorToken] },
          s,
          e
        )
        const balance = swaps.reduce((p, c) => p + Number(c.to.value), 0)
        if (balance < 1000)
          continue
        await MXCAddressTaskModel.findOrCreate({
          where: { address, task_id: task_id },
        })
      }
    }
    async function swapWithToXsd5000(task_id: number, s: number, e: number) {
      for (const address of addresses.keys()) {
        const swaps = await swapExactMXCForTokens(
          address,
          { to: ContractAddr.MXCL2Mainnet[ContractType.XSDToken] },
          s,
          e
        )
        const balance = swaps.reduce((p, c) => p + Number(c.to.value), 0)
        if (balance < 5000)
          continue
        await MXCAddressTaskModel.findOrCreate({
          where: { address, task_id: task_id },
        })
      }
    }
    async function mintInscription(task_id: number, s: number, e: number) {
      const inscriptions = await processMSC20Transactions(true, 17677439, s, e)
      const mints = inscriptions.filter(inscription => inscription.data.op === 'mint')
      for (const { transaction } of mints) {
        for (const address of addresses.keys()) {
          if (address.toLowerCase() !== transaction.from.toLowerCase())
            continue
          await MXCAddressTaskModel.findOrCreate({
            where: { address, task_id: task_id },
          })
        }
      }
    }
    async function createNftCollection(task_id: number, s: number, e: number) {
      const events = await NFTCollectionEvents(s, e)
      for (const event of events) {
        const [from, to, value] = event.args
        for (const address of addresses.keys()) {
          if (address.toLowerCase() !== from.toLowerCase())
            continue
          await MXCAddressTaskModel.findOrCreate({
            where: { address, task_id: task_id },
          })
        }
      }
    }
    async function mintHexagonInUSA(task_id: number, s: number, e: number) {
      const hexagons = await getHexagonByAddresses(
        ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken],
        MXCL2Provider,
        s, e
      )
      for (const { address, hexagon } of hexagons) {
        if (!isInUSA(...cellToLatLng(hexagon)))
          continue
        await MXCAddressTaskModel.findOrCreate({
          where: { address, task_id: task_id },
        })
      }
    }
    async function mintHexagonInFrance(task_id: number, s: number, e: number) {
      const hexagons = await getHexagonByAddresses(
        ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken],
        MXCL2Provider,
        s, e
      )
      for (const { address, hexagon } of hexagons) {
        if (!isInFrance(...cellToLatLng(hexagon)))
          continue
        await MXCAddressTaskModel.findOrCreate({
          where: { address, task_id: task_id },
        })
      }
    }
  }
}

export const processTask = async (taskID: number) => {
  await init();
  await syncMXCL2Addresses();
  // @ts-ignore
  if (Tasks[`processTask${taskID}`] !== undefined) {
    try {
      // @ts-ignore
      await Tasks[`processTask${taskID}`]();
      Logx.success(`Process Task ${taskID} success`)
    } catch (e) {
      Logx.error(`process task ${taskID} error: `, e.message)
    }
  } else {
    Logx.error(`taskID ${taskID} not implement`)
  }
  return;
}

// also process task id 2,3,4,9,10,47,48

const mainnetDAPPContracts = {
  [ContractAddr.MXCL2Mainnet[ContractType.MNS]]: "MNS",
  [ContractAddr.MXCL2Mainnet[ContractType.MXCAAVEPool]]: "AAVE",
  [ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken]]: "Hexagon",
  [ContractAddr.MXCL2Mainnet[ContractType.MXCMarketPlace]]: "NFT",
  [ContractAddr.MXCL2Mainnet[ContractType.MEP2542]]: "MEP2542Mining",
  [ContractAddr.MXCL2Mainnet[ContractType.MXCSwapRouter]]: "SWAP",
  [ContractAddr.MXCL2Mainnet[ContractType.MXCERC20L2Bridge]]: "BridgeL2_L1"
};

const genevaDAPPContracts = {
  [ContractAddr.MXCGeneva[ContractType.MNS]]: "MNS",
  [ContractAddr.MXCGeneva[ContractType.MXCAAVEPool]]: "AAVE",
  [ContractAddr.MXCGeneva[ContractType.MEP1002NamingToken]]: "Hexagon",
  [ContractAddr.MXCGeneva[ContractType.MXCMarketPlace]]: "NFT",
  [ContractAddr.MXCGeneva[ContractType.MEP2542]]: "MEP2542Mining",
  [ContractAddr.MXCGeneva[ContractType.MXCSwapRouter]]: "SWAP",
  [ContractAddr.MXCGeneva[ContractType.MXCERC20L2Bridge]]: "BridgeL2_L1"
}

const init = async () => {
  await migrate()
  if (addresses.size === 0) {
    const all = await MXCAddressesModel.findAll()
    for (let i = 0; i < all.length; i++) {
      addresses.set(all[i].get().address, all[i])
    }
  }
}

export const syncMXCL2Addresses = async () => {
  let startBlockNumber = 1;
  const lastOne = await MXCAddressesModel.findOne({
    order: Sequelize.literal('block_number DESC'),
    limit: 1
  })
  if (lastOne !== null) {
    startBlockNumber = lastOne.get().block_number;
  }
  Logx.info("Sync MXCL2 Addresses from", startBlockNumber)
  let latestBlockNumber = await MXCL2Provider.getBlockNumber();

  const mainnetAddresses = Object.keys(mainnetDAPPContracts).map(item => item.toLowerCase())
  for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
    Logx.infoStdout(`\r sync ${i}/${latestBlockNumber}`);
    const block = await MXCL2Provider.getBlockWithTransactions(i);

    if (!block || !block.transactions) continue;
    for (const transaction of block.transactions) {
      const fromAddress = transaction.from;
      const toAddress = transaction.to;
      const [addr, created] = await MXCAddressesModel.findOrCreate({
        where: { address: fromAddress },
        defaults: {
          first_transaction_time: moment(new Date(block.timestamp * 1000)).format('YYYY-MM-DD HH:mm:ss.SSS Z'),
          block_number: i
        }
      })

      const dapp_interactions = JSON.parse(addr.get().dapp_interactions || '[]');
      if (toAddress) {
        if (mainnetAddresses.includes(toAddress.toLowerCase())) {
          for (let i = 0; i < mainnetAddresses.length; i++) {
            if (mainnetAddresses[i] !== toAddress.toLowerCase()) {
              continue;
            }
            if (!dapp_interactions.includes(Object.values(mainnetDAPPContracts)[i])) {
              dapp_interactions.push(Object.values(mainnetDAPPContracts)[i])
            }
          }
        }
      }


      const receipt = await MXCL2Provider.getTransactionReceipt(transaction.hash);
      const transactionAggregateValueMXC = BigNumber.from(scientificToDecimal(addr.get().transaction_aggregate_value_mxc).toString() || 0)
      addr.set('transaction_aggregate_value_mxc', transactionAggregateValueMXC.add(receipt.gasUsed.mul(transaction.gasPrice)).toString())
      addr.set('block_number', i)
      addr.set('dapp_interactions', JSON.stringify(dapp_interactions))
      addr.set('last_transaction_time', moment(new Date(block.timestamp * 1000)).format('YYYY-MM-DD HH:mm:ss.SSS Z'));
      await addr.save();
      addresses.set(addr.get().address, addr)
    }
  }

  // geneva
  const genevaAddresses = Object.keys(genevaDAPPContracts).map(item => item.toLowerCase())

  const genevaLastOne = await MXCAddressesModel.findOne({
    order: Sequelize.literal('testnet_block_number DESC'),
    limit: 1
  })
  startBlockNumber = 1;
  if (genevaLastOne !== null) {
    startBlockNumber = genevaLastOne.get().testnet_block_number;
  }
  latestBlockNumber = await GenevaProvider.getBlockNumber();
  for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
    Logx.infoStdout(`\r sync testnet ${i}/${latestBlockNumber}`);

    const block = await GenevaProvider.getBlockWithTransactions(i);

    if (!block || !block.transactions) continue;
    for (const transaction of block.transactions) {
      const fromAddress = transaction.from;
      const toAddress = transaction.to;
      if (["0x0000777735367b36bC9B61C50022d9D0700dB4Ec", "0x064ccaeA28cc971eAa427fAb4BDd02a77638dD82"].
        map(item => item.toLowerCase()).includes(fromAddress.toLowerCase()) && (latestBlockNumber - startBlockNumber) > 10000) {
        continue;
      }
      const [addr, created] = await MXCAddressesModel.findOrCreate({
        where: { address: fromAddress },
        defaults: {
          first_transaction_time: moment(new Date(block.timestamp * 1000)).format('YYYY-MM-DD HH:mm:ss.SSS Z'),
          testnet_block_number: i,
        }
      })
      const testnet_dapp_interactions = JSON.parse(addr.get().testnet_dapp_interactions || '[]')
      if (toAddress) {
        if (genevaAddresses.includes(toAddress.toLowerCase())) {
          for (let i = 0; i < genevaAddresses.length; i++) {
            if (genevaAddresses[i] === toAddress.toLowerCase()) {
              if (!testnet_dapp_interactions.includes(Object.values(genevaDAPPContracts)[i])) {
                testnet_dapp_interactions.push(Object.values(genevaDAPPContracts)[i])
              }
            }
          }
        }
      }

      addr.set('testnet_block_number', i)
      addr.set('testnet_dapp_interactions', JSON.stringify(testnet_dapp_interactions))
      addr.set('last_transaction_time', moment(new Date(block.timestamp * 1000)).format('YYYY-MM-DD HH:mm:ss.SSS Z'));
      await addr.save();
      addresses.set(addr.get().address, addr)
    }
  }

}


export const processAll = async () => {
  await init();
  await syncMXCL2Addresses();
  await MXCSnapShotsModel.truncate();
  await Tasks.processTask1();
  await Tasks.processTask2();
  await Tasks.processTask5();
  await Tasks.processTask9();
  await Tasks.processTask11();
  await Tasks.processTask14();
  await Tasks.processTask18();
  await Tasks.processTask23();
  await Tasks.processTask28();
  await Tasks.processTask33();
  await Tasks.processTask38();
  await Tasks.processTask41();
  // await Tasks.processTask61();
  // await Tasks.processTask62();
  await Tasks.processTask63();
  await Tasks.processTask66();
  await Tasks.processTask68();
  await Tasks.parseDeadlineTasks();
  await Tasks.processDeadlineTasks();
  await generateSnapshots();
}

export const generateSnapshots = async () => {
  await init();
  Logx.info("Start generate snapshot")
  const length = addresses.size;
  const i = 0;

  const tasks = await MXCTasksModel.findAll();
  const tasksMap = new Map();
  for (let i = 0; i < tasks.length; i++) {
    tasksMap.set(tasks[i].get().id, tasks[i].get())
  }
  for (const address of addresses.keys()) {
    Logx.infoStdout(`\r snapshots ${i}/${length}`);
    const [addrSnapShot, find] = await MXCSnapShotsModel.findOrCreate({
      where: { address: address },
    })
    const addrTasks = [];
    const taskIDs = await MXCAddressTaskModel.findAll({
      where: { address: address }
    })
    let zks_sum = 0;
    for (const taskIDRecord of taskIDs) {
      addrTasks.push(taskIDRecord.get().task_id);
      zks_sum += tasksMap.get(taskIDRecord.get().task_id).zks * taskIDRecord.get().times;
    }

    addrSnapShot.set('tasks', JSON.stringify(addrTasks));
    addrSnapShot.set('zks_sum', zks_sum);
    await addrSnapShot.save();

  }
  Logx.success("Generate snapshot finished")
}


async function generateTask51Table() {
  await MXCTasksModel.findOrCreate({ where: { id: 51, task_name: 'Own 1 NEO registered on AXS', zks: 10000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 52, task_name: 'Own 2 NEOs registered on AXS', zks: 20000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 53, task_name: 'Own more than 3 NEOs registered on AXS', zks: 50000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 54, task_name: 'Own 5 NEOs registered on AXS', zks: 100000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 55, task_name: 'Own more than 5 NEOs registered on AXS', zks: 300000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 56, task_name: 'Own 1 M2 Pro registered on AXS', zks: 50000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 57, task_name: 'Own more than 2 M2 Pros registered on AXS', zks: 100000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 58, task_name: 'Own more than 3 M2 Pros registered on AXS', zks: 170000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 59, task_name: 'Own 5 M2 Pros registered on AXS', zks: 350000 } })
  await MXCTasksModel.findOrCreate({ where: { id: 60, task_name: 'Own more than 5 M2 Pros registered on AXS', zks: 500000 } })
}
