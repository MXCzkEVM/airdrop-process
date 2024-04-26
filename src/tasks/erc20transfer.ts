import { ERC20__factory } from "../../typechain-types";
import { ContractAddr, ContractType, ETHProvider } from "../const/network";
import { generateBlockRanges } from "../uitls";
import { Provider } from "@ethersproject/providers";
import { TransferEvent } from "../../typechain-types/@openzeppelin/contracts/token/ERC20/ERC20";
import { Logx } from "../log";
import { TypedEventFilter } from "../../typechain-types/common";
import { BigNumberish } from "ethers";
import dayjs from "dayjs";

export default async function processERC20Transfer(
  addr: string,
  provider: Provider,
  startBlock: number,
  cb: (events: TransferEvent[]) => Promise<boolean | void>,
  from?: string,
  to?: string,
  time?: number
) {
  const contract = ERC20__factory.connect(addr, provider);
  await (async () => {
    const endBlock = await provider.getBlockNumber();
    
    if (time)
      startBlock = await findLastBlockNumberByTime(provider, time)

    console.log('-----------', startBlock)
    for await (const { fromBlock, toBlock } of generateBlockRanges(startBlock, endBlock)) {
      try {
        let events = await contract.queryFilter(
          contract.filters.Transfer(from, to),
          fromBlock,
          toBlock
        );
    

        if (await cb(events)) {
          return;
        }
        Logx.info(`Process Events from block ${fromBlock} to ${toBlock}`);
      } catch (error) {
        Logx.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message);
      }
    }
  })();
}

const caches: Record<string, number> = {

}

async function findLastBlockNumberByTime(provider: Provider, time: number) {
  if (caches[time])
      return caches[time]

  const latestBlockNumber = await provider.getBlockNumber();

  let startBlockNumber = latestBlockNumber;

  while (true) {
    const block = await provider.getBlock(startBlockNumber);
    if (time >= block.timestamp)
      break;
    startBlockNumber--;
  }

  return startBlockNumber;
}