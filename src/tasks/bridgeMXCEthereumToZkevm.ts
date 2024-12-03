import type { TransferEvent } from '../typechain/contracts/interfaces/IMintableERC20'
import { BigNumber } from 'ethers'
import { providers } from '../common'
import { addresses, chains } from '../config'
import processERC20Transfer from './erc20transfer'

export interface EthereumTransferMXCRecord {
  value: BigNumber
}

export async function bridgeMXCEthereumToZkevm(startTime?: number, endTime?: number, testnet = false) {
  const ethereumTransferMXCRecords = new Map<string, BigNumber>()
  await processERC20Transfer(
    addresses[testnet ? chains.sepolia.id : chains.ethereum.id].MXCTOKEN,
    providers[testnet ? chains.sepolia.id : chains.ethereum.id],
    17677439,
    async (events: TransferEvent[]) => {
      for (let i = 0; i < events.length; i++) {
        const [from, _to, value] = events[i].args
        const current = ethereumTransferMXCRecords.get(from) || BigNumber.from(0)
        ethereumTransferMXCRecords.set(from, current.add(value))
      }
    },
    null,
    addresses[testnet ? chains.sepolia.id : chains.ethereum.id].MXCERC20L1Bridge,
    startTime,
    endTime,
  )

  return ethereumTransferMXCRecords
}
