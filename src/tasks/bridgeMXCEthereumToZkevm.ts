import { BigNumber } from "ethers"
import { ContractAddr, ContractType, ETHProvider, SepoliaProvider } from "../const/network"
import processERC20Transfer from "./erc20transfer"
import { TransferEvent } from "../../typechain-types/contracts/interfaces/IMintableERC20"

export interface EthereumTransferMXCRecord {
  value: BigNumber
}

export async function bridgeMXCEthereumToZkevm(mainnet = true, startTime?: number, endTime?: number) {
  const ethereumTransferMXCRecords = new Map<string, BigNumber>()
  const Contracts = mainnet ? ContractAddr.Ethereum : ContractAddr.Sepolia
  const Provider = mainnet ? ETHProvider : SepoliaProvider
  await processERC20Transfer(
    Contracts[ContractType.MXCTOKEN],
    Provider,
    17677439,
    async (events: TransferEvent[]) => {
      for (let i = 0; i < events.length; i++) {
        const [from, to, value] = events[i].args
        const current = ethereumTransferMXCRecords.get(from) || BigNumber.from(0)
        ethereumTransferMXCRecords.set(from, current.add(value))
      }
    },
    null,
    Contracts[ContractType.MXCERC20L1Bridge],
    startTime,
    endTime
  )
  return ethereumTransferMXCRecords
}
