import { BigNumber } from 'ethers'
import { MXCMarketplace__factory } from '../typechain/factories/contracts/MXCMarketPlace.sol'
import { ContractAddr, ContractType, MXCL2Provider } from '../const/network'
import { Logx } from '../log'
import { generateBlockRanges } from '../uitls'

export default async function () {
  const contract = MXCMarketplace__factory.connect(ContractAddr.MXCL2Mainnet[ContractType.MXCMarketPlace], MXCL2Provider)
  const addresses = new Map<string, {
    volumn: BigNumber
  }>()
  const endBlock = await MXCL2Provider.getBlockNumber()

  for await (const { fromBlock, toBlock } of generateBlockRanges(1, endBlock)) {
    try {
      const events = await contract.queryFilter(
        contract.filters.OrderSuccessful(),
        fromBlock,
        toBlock,
      )
      events.forEach((e) => {
        if (addresses.has(e.args.buyer)) {
          addresses.set(e.args.buyer, { volumn: addresses.get(e.args.buyer).volumn.add(e.args.totalPrice) })
        }
        else {
          addresses.set(e.args.buyer, { volumn: BigNumber.from(0) })
        }
      })
      Logx.info(`Process Events from block ${fromBlock} to ${toBlock}`)
    }
    catch (error) {
      Logx.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message)
    }
  }
  return addresses
}
