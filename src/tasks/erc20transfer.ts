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
  startTime?: number,
  endTime?: number
) {
  const contract = ERC20__factory.connect(addr, provider);
  await (async () => {
    let endBlock = await provider.getBlockNumber();

    if (startTime)
      [startBlock, endBlock] = await findBlockNumberByTimeInterval(provider, startTime, endTime)

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

export async function findBlockNumberByTime(provider: Provider, time: number) {
  const latestBlockNumber = await provider.getBlockNumber();
  let low = 0;
  let high = latestBlockNumber;
  let mid;
  
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    const block = await provider.getBlock(mid);
    
    console.log(`Searching in range ${low} - ${high}, current mid is ${mid}`);
    
    if (block.timestamp === time) {
      console.log(`Found exact match at block number ${mid}`);
      return mid;
    } 
    else if (block.timestamp < time) {
      low = mid + 1;
    } 
    else {
      high = mid - 1;
    }
  }

  const closestBlockNumber = (await provider.getBlock(mid)).timestamp < time ? mid : mid - 1;
  console.log(`No exact match, returning closest lower block number ${closestBlockNumber}`);
  return closestBlockNumber;
}

export async function findBlockNumberByTimeInterval(provider: Provider, startTime: number, endTime?: number) {
  const currentTime = dayjs().unix()
  const currentBlockNumber = await provider.getBlockNumber()
  endTime = endTime ? Math.min(currentTime, endTime)  : currentTime
  console.log('------------------', 'find start block number', '------------------')

  const from = currentTime >= startTime
    ? await findBlockNumberByTime(provider, startTime)
    : currentBlockNumber - 1


  console.log('------------------', 'find end block number', '------------------')

  const to = endTime
    ? endTime >= currentTime
      ? currentBlockNumber
      : await findBlockNumberByTime(provider, endTime)
    : await provider.getBlockNumber()

  console.log(`find interval block number : [${from}, ${to}]`)
  return [from, to] as const;
}