import {Logx} from "../log";
import {ContractAddr, ContractType, ETHProvider, MXCL2Provider} from "../const/network";
import processERC20Transfer from "./erc20transfer";
import {TransferEvent} from "../../typechain-types/@openzeppelin/contracts/token/ERC20/IERC20";
import {MXCAddressTaskModel} from '../models';
import {MXCAddressesModel} from "../models/mxc_addresses";
import {Sequelize} from "sequelize";
import transationsMoreThan from "./transationsMoreThan";
import acquiringMNS, {getMainnetMNSAddresses} from "./acquiringMNS";
import bridgingMoreThanValueOfAssets from "./bridgingMoreThanValueOfAssets";
import {parseEther} from "ethers/lib/utils";
import tradeVolumnOnMXCSwap, {getMXCSwapAddresses} from "./tradeVolumnOnMXCSwap";
import {getHexagonAddresses, processHexagonBalance} from "./processHexagonBalance";
import {getERC20Addresses, processERC20Balance} from "./processERC20Balance";
import {BigNumber} from "ethers";
import {MXCSnapShots} from "../models/mxc_snapshots";

export let addresses: MXCAddressesModel[] = [];

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
        }, null, ContractAddr.Ethereum[ContractType.ERC20Bridge])
     }

     static processTask5 = async () => {
        await transationsMoreThan(5,async (address: string) => {
            await MXCAddressTaskModel.findOrCreate({
                where: {address: address, task_id: 5},
            })
        })
     }

    static processTask6 = async () => {
        await transationsMoreThan(15,async (address: string) => {
            await MXCAddressTaskModel.findOrCreate({
                where: {address: address, task_id: 6},
            })
        })
    }
    static processTask7 = async () => {
        await transationsMoreThan(30,async (address: string) => {
            await MXCAddressTaskModel.findOrCreate({
                where: {address: address, task_id: 7},
            })
        })
    }

    static processTask8 = async() => {
        await transationsMoreThan(100,async (address: string) => {
            await MXCAddressTaskModel.findOrCreate({
                where: {address: address, task_id: 8},
            })
        })
    }

    //Acquiring MNS  11-13
    static processTask11 = async () => {
        const addresses = await getMainnetMNSAddresses();

        for(let i = 0; i < addresses.length; i++) {
            const mns = await acquiringMNS(addresses[i])
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

    // bridgeValueAssets 18- 22
    static processTask18 = async() => {
        const steps = [parseEther("500000"),parseEther("1000000"),parseEther("2500000"),parseEther("5000000"),parseEther("10000000")]
        for(let i = 0; i < addresses.length; i++) {
            const res = await bridgingMoreThanValueOfAssets(addresses[i].get().address, steps)
            for(let j = 0; i < res.length; j++) {
                if(res[j]) {
                    await MXCAddressTaskModel.findOrCreate({
                        where: {address: addresses[i], task_id: 18+j},
                    })
                }
            }
        }
    }

    // trade volume mxc swap 23-27
    static processTask23 = async() => {
        const addresses = await getMXCSwapAddresses()
        for(let i = 0; i < addresses.length; i++) {
            const tradeVolumnUSD = await tradeVolumnOnMXCSwap(addresses[i])
            const tradeMXC = tradeVolumnUSD / 0.02
            if(tradeMXC > 500000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 23},
                })
            }else if(tradeMXC > 2500000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 24},
                })
            }else if(tradeMXC > 5000000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 25},
                })
            }else if(tradeMXC > 10000000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 26},
                })
            }else if(tradeMXC > 25000000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 27},
                })
            }
        }
    }

    // providing liquidity MXC 33-37

    static processTask33 = async() => {
        const addresses = await getMXCSwapAddresses();
        for(let i = 0; i < addresses.length; i++) {
            const lpUSD = await tradeVolumnOnMXCSwap(addresses[i])
            const lpMXC = lpUSD / 0.02
            if(lpMXC > 100000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 33},
                })
            }else if(lpMXC > 500000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 34},
                })
            }else if(lpMXC > 1000000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 35},
                })
            }else if(lpMXC > 2000000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 36},
                })
            }else if(lpMXC > 5000000) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 37},
                })
            }
        }
    }

    static processTask38 = async() => {
        const addresses = await getHexagonAddresses(ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken], MXCL2Provider)
        for(let i = 0; i < addresses.length;i++) {
            const balance = await processHexagonBalance(ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken],MXCL2Provider, addresses[i])
            if(balance) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 38},
                })
            }else if(balance >= 2) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 39},
                })
            }else if(balance >= 3) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 40},
                })
            }
        }
    }

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

    static processTask42 = async() => {
        for(let i = 0 ; i< addresses.length; i++) {
            // TODO: 5+points
            const balance = await processERC20Balance(ContractAddr.MXCL2Mainnet[ContractType.MOONToken], MXCL2Provider, addresses[i].get().address);

            if(balance.gt(BigNumber.from(0))) {
                await MXCAddressTaskModel.findOrCreate({
                    where: {address: addresses[i], task_id: 42},
                })
            }
        }
    }


}

export const processTask = async (taskID: number) => {
    if(addresses.length === 0) {
        addresses = await MXCAddressesModel.findAll()
    }
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
    const latestBlockNumber = await MXCL2Provider.getBlockNumber();

    for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
        const block = await MXCL2Provider.getBlockWithTransactions(i);

        for (const transaction of block.transactions) {
            const fromAddress = transaction.from;
            const toAddress = transaction.to;
            await MXCAddressesModel.findOrCreate({
                where: {address: fromAddress},
                defaults: {
                    block_number: i
                }
            })
        }
    }




}