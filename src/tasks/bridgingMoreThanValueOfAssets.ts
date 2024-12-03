import type { BigNumber } from 'ethers'
import type { TransferEvent } from '../typechain/@openzeppelin/contracts/token/ERC20/IERC20'
import { providers } from '../common'
import { addresses, chains } from '../config'
import processERC20Transfer from './erc20transfer'

export default async function () {
  const addressesMap: Map<string, { value: BigNumber }> = new Map()

  // L1 -> L2
  await processERC20Transfer(
    addresses[chains.ethereum.id].MXCTOKEN,
    providers[chains.ethereum.id],
    17677439,
    async (events: TransferEvent[]) => {
      for (let i = 0; i < events.length; i++) {
        const [from, _to, value] = events[i].args
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
    },
    null,
    addresses[chains.ethereum.id].MXCERC20L1Bridge,
  )

  // L2 -> L1

  await processERC20Transfer(
    addresses[chains.ethereum.id].MXCTOKEN,
    providers[chains.ethereum.id],
    17677439,
    async (events: TransferEvent[]) => {
      for (let i = 0; i < events.length; i++) {
        const [_from, to, value] = events[i].args
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
    },
    addresses[chains.ethereum.id].MXCL1BridgeEOA,
    null,
  )

  return addressesMap
}
