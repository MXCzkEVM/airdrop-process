import processERC20Transfer from "./erc20transfer";
import {ERC20__factory} from "../../typechain-types";
import {ContractAddr, ContractType, ETHProvider} from "../const/network";
import {TransferEvent} from "../../typechain-types/@openzeppelin/contracts/token/ERC20/IERC20";
import {MXCAddressTaskModel} from "../models";
import {BigNumber} from "ethers";

export default async function (address:string, mxc: BigNumber[] ): Promise<boolean[]> {
    const contract = ERC20__factory.connect(ContractAddr.Ethereum[ContractType.ERC20Bridge], ETHProvider);
    let value = BigNumber.from(0)
    const results : boolean[]= mxc.map(() => false);
    await processERC20Transfer(ContractAddr.Ethereum[ContractType.MXCTOKEN],
        ETHProvider,
        17677439,
        async (events: TransferEvent[]) => {
            for(let i = 0 ; i < events.length; i++) {
                value = value.add(events[i].args.value)
                for(let j = 0; j < mxc.length; j++) {
                    if(value.gte(mxc[j])) {
                        results[j] = true;
                    }
                }
            }
        }, address, ContractAddr.Ethereum[ContractType.ERC20Bridge])
    return results;
}