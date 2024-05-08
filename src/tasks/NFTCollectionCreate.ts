import { NFTCollectionV4__factory } from '../../typechain-types'
import { newCollectionEventEvent } from '../../typechain-types/contracts/NFTCollectionV4/NFTCollectionV4';
import { ContractAddr, ContractType, MXCL2Provider } from "../const/network";
import { Logx } from '../log';
import { generateBlockRanges } from '../uitls';
import { findBlockNumberByTimeInterval } from './erc20transfer';
export default async function NFTCollectionEvents(
  startTime?: number,
  endTime?: number
) {
  const provider = MXCL2Provider
  const contract = NFTCollectionV4__factory.connect(
    ContractAddr.MXCL2Mainnet[ContractType.NFTCollection],
    provider
  )
  let startBlock = 17677439
  let endBlock = await provider.getBlockNumber();

  if (startTime)
    [startBlock, endBlock] = await findBlockNumberByTimeInterval(provider, startTime, endTime)

  const data = [] as newCollectionEventEvent[]
  for await (const { fromBlock, toBlock } of generateBlockRanges(startBlock, endBlock)) {
    try {
      let events = await contract.queryFilter(
        contract.filters.newCollectionEvent(),
        fromBlock,
        toBlock
      );
      data.push(...events)
      Logx.info(`Process Events from block ${fromBlock} to ${toBlock}`);
    } catch (error) {
      Logx.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message);
    }
  }
  return data
}