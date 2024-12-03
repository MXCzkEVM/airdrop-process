import type { Provider } from '@ethersproject/providers'
import { MEP1002NamingToken__factory } from '../typechain'
import { Logx } from '../log'
import { generateBlockRanges } from '../uitls'
import { findBlockNumberByTimeInterval } from './erc20transfer'

export async function getHexagonByAddresses(
  addr: string,
  provider: Provider,
  startTime?: number,
  endTime?: number,
) {
  const contract = MEP1002NamingToken__factory.connect(addr, provider)
  const data: { address: string, hexagon: string }[] = []
  await (async () => {
    let startBlock = 1
    let endBlock = await provider.getBlockNumber()
    if (startTime)
      [startBlock, endBlock] = await findBlockNumberByTimeInterval(provider, startTime, endTime)
    for await (const { fromBlock, toBlock } of generateBlockRanges(startBlock, endBlock)) {
      try {
        const events = await contract.queryFilter(
          contract.filters.Transfer(),
          fromBlock,
          toBlock,
        )
        events.forEach((e) => {
          data.push({
            hexagon: e.args.tokenId.toHexString(),
            address: e.args.to,
          })
        })

        Logx.info(`Process Events from block ${fromBlock} to ${toBlock}`)
      }
      catch (error) {
        Logx.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message)
      }
    }
  })()
  return data
}
export async function processHexagonBalance(addr: string, provider: Provider, owner: string) {
  const contract = MEP1002NamingToken__factory.connect(addr, provider)

  return Number(await contract.balanceOf(owner))
}
