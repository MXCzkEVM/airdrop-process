import {Logx} from "../log";
import {
    ContractAddr,
    ContractType,
    ETHProvider,
    MXCL2Provider,
    SepoliaProvider,
    WannseeProvider
} from "../const/network";
import processERC20Transfer from "./erc20transfer";
import {TransferEvent} from "../../typechain-types/@openzeppelin/contracts/token/ERC20/IERC20";
import {MXCAddressTaskModel} from '../models';
import {MXCAddressesModel} from "../models/mxc_addresses";
import {Sequelize} from "sequelize";
import acquiringMNS, {getMNSAddresses, mnsMainnetGraphClient, mnsWannseeGraphClient} from "./acquiringMNS";
import bridgingMoreThanValueOfAssets from "./bridgingMoreThanValueOfAssets";
import {parseEther} from "ethers/lib/utils";
import tradeVolumnOnMXCSwap, {getMXCSwapAddresses} from "./tradeVolumnOnMXCSwap";
import {getHexagonAddresses, processHexagonBalance} from "./processHexagonBalance";
import {getERC20Addresses, processERC20Balance} from "./processERC20Balance";
import {BigNumber} from "ethers";
import tradeVolumnOnNFTMarketplace from "./tradeVolumnOnNFTMarketplace";

export let addresses:Map<string, MXCAddressesModel> = new Map();

class Tasks {
    static processTask1 =  async () => {
        await processERC20Transfer(ContractAddr.Ethereum[ContractType.MXCTOKEN],
            ETHProvider,
            17677439,
            async (events: TransferEvent[]) => {
                    for(let i = 0 ; i < events.length; i++) {
                        await MXCAddressTaskModel.findOrCreate({
                            where: {address: events[i].args.from, task_id: 1},
                        })
                    }
        }, null, ContractAddr.Ethereum[ContractType.MXCERC20L1Bridge])
     }

     static processTask2 = async () => {
        const monthSeconds = 2592000;
        for(const address of addresses.keys()) {
            const between = addresses.get(address).get().last_transaction_time - addresses.get(address).get().first_transaction_time
            if(between > 2*monthSeconds) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 2},
                })
            }
            if(between > 3*monthSeconds) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 3},
                })
            }
            if(between > 4*monthSeconds) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 4},
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
        for(const address of addresses.keys()) {
            const count = await MXCL2Provider.getTransactionCount(address)
            for(const amount of Object.keys(taskIds)) {
                if(count >= Number(amount)) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: address, task_id: taskId},
                    })
                }
            }
        }
     }

     //More than N dApp interactions
     static processTask9 = async() => {
        for(const address of addresses.keys()) {
            const dapp_interactions = addresses.get(address).get().dapp_interactions
            if(dapp_interactions.length >= 2) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 9},
                })
            }
            if(dapp_interactions.length >= 3) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 10},
                })
            }
        }
     }

    //Acquiring MNS  11-13
    static processTask11 = async () => {
        const addresses = await getMNSAddresses(mnsMainnetGraphClient);

        for(let i = 0; i < addresses.length; i++) {
            const mns = await acquiringMNS(mnsMainnetGraphClient,addresses[i])
            await MXCAddressTaskModel.findOrCreate({
                where: {address: addresses[i], task_id: 11},
            })
            if(mns.length >= 3) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 12},
                })
            }
            for(let j = 0; j < mns.length; j++) {
                if(mns[j].labelName != "" && mns[j].labelName.length <= 4) {
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: addresses[i], task_id: 13},
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
            const value = addresses.get(address).get().transaction_aggregate_value_mxc
            for(const amount of Object.keys(taskIds)) {
                if(BigNumber.from(value || 0).gte(parseEther(amount))) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: address, task_id: taskId},
                    })
                }
            }
        }
    }

    // bridgeValueAssets 18- 22
    static processTask18 = async() => {
        const addressMap = await bridgingMoreThanValueOfAssets();
        let taskIds = {
            500000: 18,
            1000000: 19,
            2500000: 20,
            5000000: 21,
            10000000: 22
        }
        for(const address of addressMap.keys()) {
            for(const amount of Object.keys(taskIds)) {
                if(addressMap.get(address).value.gte(parseEther(amount))) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: address, task_id: taskId},
                    })
                }
            }
        }
    }

    // trade volume mxc swap 23-27
    static processTask23 = async() => {
        const addresses = await getMXCSwapAddresses()
        let taskIds = {
            500000: 23,
            2500000: 24,
            5000000: 25,
            10000000: 26,
            25000000: 27
        }
        for(let i = 0; i < addresses.length; i++) {
            const tradeVolumnUSD = await tradeVolumnOnMXCSwap(addresses[i])
            const tradeMXC = tradeVolumnUSD / 0.02
            for(const amount of Object.keys(taskIds)) {
                if(tradeMXC >= Number(amount)) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: addresses[i], task_id: taskId},
                    })
                }
            }
        }
    }

    // trade volume mxc marketplace 28-32
    static processTask28 = async() => {
        const map = await tradeVolumnOnNFTMarketplace();
        let taskIds = {
            500000: 28,
            2500000: 29,
            5000000: 30,
            10000000: 31,
            25000000: 32
        }

        for(const address of map.keys()) {
            let v = map.get(address).volumn;
            for(const amount of Object.keys(taskIds)) {
                if(v.gte(parseEther(amount))) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: address, task_id: taskId},
                    })
                }
            }
        }
    }

    // providing liquidity MXC 33-37
    static processTask33 = async() => {
        const addresses = await getMXCSwapAddresses();
        let taskIds = {
            100000: 33,
            500000: 34,
            1000000: 35,
            20000000: 36,
            50000000: 37
        }
        for(let i = 0; i < addresses.length; i++) {
            const lpUSD = await tradeVolumnOnMXCSwap(addresses[i])
            const lpMXC = lpUSD / 0.02
            for(const amount of Object.keys(taskIds)) {
                if(lpMXC >= Number(amount)) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: addresses[i], task_id: taskId},
                    })
                }
            }
        }
    }

    //Minting N hexagon 38-40
    static processTask38 = async() => {
        const addresses = await getHexagonAddresses(ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken], MXCL2Provider)

        const taskIds = {
            1: 38,
            2: 39,
            3: 40
        }
        for(let i = 0; i < addresses.length;i++) {
            const balance = await processHexagonBalance(ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken],MXCL2Provider, addresses[i])
            for(const amount of Object.keys(taskIds)) {
                if(balance >= Number(amount)) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: addresses[i], task_id: taskId},
                    })
                }
            }
        }
    }

    // XSD balance
    static processTask41 = async() => {
        const addresses = await getERC20Addresses(ContractAddr.MXCL2Mainnet[ContractType.XSDToken],MXCL2Provider);

        for(let i = 0 ; i< addresses.length; i++) {
            const balance = await processERC20Balance(ContractAddr.MXCL2Mainnet[ContractType.XSDToken], MXCL2Provider, addresses[i]);

            if(balance.gte(BigNumber.from(1000).mul(1e18))) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 41},
                })
            }
        }

    }

    // moon token
    static processTask42 = async() => {
        for(const address of addresses.keys()) {
            // TODO: 5+points
            const balance = await processERC20Balance(ContractAddr.MXCWannsee[ContractType.MOONToken], WannseeProvider, address);

            if(balance.gt(BigNumber.from(0))) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 42},
                })
            }
        }
    }

    // Bridging funds into Wannsee Testnet
    static processTask43 = async () => {
        // L1 -> L2
        await processERC20Transfer(ContractAddr.Sepolia[ContractType.MXCTOKEN],
            SepoliaProvider,
            3854984,
            async (events: TransferEvent[]) => {
                for(let i = 0 ; i < events.length; i++) {
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: events[i].args.from, task_id: 43},
                    })
                }
            }, null, ContractAddr.Sepolia[ContractType.MXCERC20L1Bridge])
    }

    // wannsee transaction count 44-46
    static processTask44 = async () => {
        let taskIds = {
            3: 44,
            5: 45,
            10: 46,
        }
        for(const address of addresses.keys()) {
            const count = await WannseeProvider.getTransactionCount(address)
            for(const amount of Object.keys(taskIds)) {
                if(count >= Number(amount)) {
                    const taskId = taskIds[amount as unknown as keyof typeof taskIds] as number;
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: address, task_id: taskId},
                    })
                }
            }
        }
    }

    // wannsee dapp 47-48
    static processTask47 = async() => {
        for(const address of addresses.keys()) {
            const dapp_interactions = addresses.get(address).get().testnet_dapp_interactions
            if(dapp_interactions.length >= 1) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 47},
                })
            }
            if(dapp_interactions.length >= 2) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: address, task_id: 48},
                })
            }
        }
    }

    //Acquiring MNS  49-50
    static processTask49 = async () => {
        const addresses = await getMNSAddresses(mnsWannseeGraphClient);

        for(let i = 0; i < addresses.length; i++) {
            const mns = await acquiringMNS(mnsWannseeGraphClient,addresses[i])
            await MXCAddressTaskModel.findOrCreate({
                where: {address: addresses[i], task_id: 49},
            })
            if(mns.length >= 3) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 50},
                })
            }
        }
    }
}

export const processTask = async (taskID: number) => {
    if(addresses.size === 0) {
        const all = await MXCAddressesModel.findAll()
        for(let i = 0; i < all.length; i++) {
            addresses.set(all[i].get().address, all[i])
        }
    }
    await syncMXCL2Addresses();
    // @ts-ignore
    if(Tasks[`processTask${taskID}`] !== undefined) {
        try {
            // @ts-ignore
            Tasks[`processTask${taskID}`]();
            Logx.success(`Process Task ${taskID} success`)
        } catch (e) {
            Logx.error(`process task ${taskID} error: `,e.message)
        }
    }else {
        Logx.error(`taskID ${taskID} not implement`)
    }
    return;
}

// also process task id 2,3,4,9,10,47,48

const mainnetDAPPContracts = {
    [ContractAddr.MXCL2Mainnet[ContractType.MNS]]:"MNS",
    [ContractAddr.MXCL2Mainnet[ContractType.MXCAAVEPool]]: "AAVE",
    [ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken]]: "Hexagon",
    [ContractAddr.MXCL2Mainnet[ContractType.MXCMarketPlace]]: "NFT",
    [ContractAddr.MXCL2Mainnet[ContractType.MEP2542]]: "MEP2542Mining",
    [ContractAddr.MXCL2Mainnet[ContractType.MXCSwapRouter]]: "SWAP",
    [ContractAddr.MXCL2Mainnet[ContractType.MXCERC20L2Bridge]]: "BridgeL2_L1"
};

const wannseeDAPPContracts = {
    [ContractAddr.MXCWannsee[ContractType.MNS]]: "MNS",
    [ContractAddr.MXCWannsee[ContractType.MXCAAVEPool]]: "AAVE",
    [ContractAddr.MXCWannsee[ContractType.MEP1002NamingToken]]: "Hexagon",
    [ContractAddr.MXCWannsee[ContractType.MXCMarketPlace]]: "NFT",
    [ContractAddr.MXCWannsee[ContractType.MEP2542]]: "MEP2542Mining",
    [ContractAddr.MXCWannsee[ContractType.MXCSwapRouter]]: "SWAP",
    [ContractAddr.MXCWannsee[ContractType.MXCERC20L2Bridge]]: "BridgeL2_L1"
}

export const syncMXCL2Addresses = async() => {
    let startBlockNumber = 1;
    const lastOne = await MXCAddressesModel.findOne({
        order: Sequelize.literal('block_number DESC'),
        limit: 1
    })
    if(lastOne !== null) {
        startBlockNumber = lastOne.get().block_number;
    }
    Logx.info("Sync MXCL2 Addresses from", startBlockNumber)
    let latestBlockNumber = await MXCL2Provider.getBlockNumber();

    for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
        const block = await MXCL2Provider.getBlockWithTransactions(i);

        for (const transaction of block.transactions) {
            const fromAddress = transaction.from;
            const toAddress = transaction.to;
            const [addr,created] = await MXCAddressesModel.findOrCreate({
                where: {address: fromAddress},
                defaults: {
                    block_number: i
                }
            })
            addresses.set(addr.get().address, addr)

            const dapp_interactions = JSON.parse(addr.get().dapp_interactions || '[]')
            if(toAddress) {
                if(Object.keys(mainnetDAPPContracts).includes(toAddress.toLowerCase())) {
                    for(let i = 0; i < Object.keys(mainnetDAPPContracts).length; i++) {
                        if(Object.keys(mainnetDAPPContracts)[i].toLowerCase() === toAddress.toLowerCase()) {
                            dapp_interactions.push(Object.values(mainnetDAPPContracts)[i])
                        }
                    }
                }
            }


            const receipt = await MXCL2Provider.getTransactionReceipt(transaction.hash);
            const transactionAggregateValueMXC = BigNumber.from(addr.get().transaction_aggregate_value_mxc || 0)
            addr.set('transaction_aggregate_value_mxc', transactionAggregateValueMXC.add(receipt.gasUsed.mul(transaction.gasPrice)).toString())
            addr.set('block_number', i)
            addr.set('dapp_interactions',JSON.stringify(dapp_interactions))
            addr.set('last_transaction_time', block.timestamp);
            await addr.save();
        }
    }

    const wannseelastOne = await MXCAddressesModel.findOne({
        order: Sequelize.literal('block_number DESC'),
        limit: 1
    })
    if(wannseelastOne !== null) {
        startBlockNumber = wannseelastOne.get().block_number;
    }
    latestBlockNumber = await WannseeProvider.getBlockNumber();
    for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
        const block = await MXCL2Provider.getBlockWithTransactions(i);

        for (const transaction of block.transactions) {
            const fromAddress = transaction.from;
            const toAddress = transaction.to;
            const [addr,created] = await MXCAddressesModel.findOrCreate({
                where: {address: fromAddress},
                defaults: {
                    testnet_block_number: i,
                }
            })
            addresses.set(addr.get().address, addr)

            const dapp_interactions = JSON.parse(addr.get().dapp_interactions || '[]')
            if(toAddress) {
                for(let i = 0; i < Object.keys(wannseeDAPPContracts).length; i++) {
                    if(Object.keys(wannseeDAPPContracts)[i].toLowerCase() === toAddress.toLowerCase()) {
                        dapp_interactions.push(Object.values(mainnetDAPPContracts)[i])
                    }
                }
            }

            addr.set('testnet_block_number', i)
            addr.set('testnet_dapp_interactions',JSON.stringify(dapp_interactions))
            await addr.save();
        }
    }

}

export const processAllTasks = async() => {
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
    await Tasks.processTask42();
    await Tasks.processTask43();
    await Tasks.processTask44();
    await Tasks.processTask47();
    await Tasks.processTask49();

    // todo: regenerate snapshot
}