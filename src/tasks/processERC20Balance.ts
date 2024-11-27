import type { Provider } from '@ethersproject/providers'
import { ERC20__factory } from '../../typechain-types'
import { Logx } from '../log'
import { generateBlockRanges } from '../uitls'

export async function getERC20Addresses(addr: string, provider: Provider) {
  const contract = ERC20__factory.connect(addr, provider)
  const addresses: string[] = []
  await (async () => {
    const endBlock = await provider.getBlockNumber()

    for await (const { fromBlock, toBlock } of generateBlockRanges(1, endBlock)) {
      try {
        const events = await contract.queryFilter(
          contract.filters.Transfer(),
          fromBlock,
          toBlock,
        )
        events.forEach((e) => {
          addresses.push(e.args.to)
        })

        Logx.info(`Process Events from block ${fromBlock} to ${toBlock}`)
      }
      catch (error) {
        Logx.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message)
      }
    }
  })()
  return addresses
}
export async function processERC20Balance(addr: string, provider: Provider, owner: string) {
  const contract = ERC20__factory.connect(addr, provider)
  return contract.balanceOf(owner)
}
