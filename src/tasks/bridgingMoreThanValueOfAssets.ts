import type { BigNumber } from 'ethers'
import type { TransferEvent } from '../../typechain-types/@openzeppelin/contracts/token/ERC20/IERC20'
import { ContractAddr, ContractType, ETHProvider } from '../const/network'
import processERC20Transfer from './erc20transfer'

export default async function () {
  const addressesMap: Map<string, { value: BigNumber }> = new Map()

  // L1 -> L2
  await processERC20Transfer(ContractAddr.Ethereum[ContractType.MXCTOKEN], ETHProvider, 17677439, async (events: TransferEvent[]) => {
    for (let i = 0; i < events.length; i++) {
      const [from, to, value] = events[i].args
      if (addressesMap.has(from)) {
        addressesMap.set(from, {
          value: addressesMap.get(from).value.add(value),
        })
      }
      else {
        addressesMap.set(from, {
          value,
        })
      }
    }
  }, null, ContractAddr.Ethereum[ContractType.MXCERC20L1Bridge])

  // L2 -> L1

  await processERC20Transfer(ContractAddr.Ethereum[ContractType.MXCTOKEN], ETHProvider, 17677439, async (events: TransferEvent[]) => {
    for (let i = 0; i < events.length; i++) {
      const [from, to, value] = events[i].args
      if (addressesMap.has(to)) {
        addressesMap.set(to, {
          value: addressesMap.get(to).value.add(value),
        })
      }
      else {
        addressesMap.set(to, {
          value,
        })
      }
    }
  }, ContractAddr.Ethereum.MXCL1BridgeEOA, null)

  return addressesMap
}
