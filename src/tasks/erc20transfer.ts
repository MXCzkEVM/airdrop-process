import type { Provider } from '@ethersproject/providers'
import type { TransferEvent } from '../typechain/@openzeppelin/contracts/token/ERC20/ERC20'
import dayjs from 'dayjs'
import { Logger } from '../common'
import { ERC20__factory } from '../typechain'
import { generateBlockRanges } from '../uitls'

export default async function processERC20Transfer(
  addr: string,
  provider: Provider,
  startBlock: number,
  cb: (events: TransferEvent[]) => Promise<boolean | void>,
  from?: string,
  to?: string,
  startTime?: number,
  endTime?: number,
) {
  const contract = ERC20__factory.connect(addr, provider)
  await (async () => {
    let endBlock = await provider.getBlockNumber()

    if (startTime)
      [startBlock, endBlock] = await findBlockNumberByTimeInterval(provider, startTime, endTime)

    for await (const { fromBlock, toBlock } of generateBlockRanges(startBlock, endBlock)) {
      try {
        const events = await contract.queryFilter(
          contract.filters.Transfer(from, to),
          fromBlock,
          toBlock,
        )
        if (await cb(events)) {
          return
        }
        Logger.info(`Process Events from block ${fromBlock} to ${toBlock}`)
      }
      catch (error) {
        Logger.error(`Error querying blocks ${fromBlock} to ${toBlock}:`, error.message)
      }
    }
  })()
}

export async function findBlockNumberByTime(provider: Provider, time: number) {
  const latestBlockNumber = await provider.getBlockNumber()
  let low = 0
  let high = latestBlockNumber
  let mid

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    const block = await provider.getBlock(mid)

    Logger.info(`Searching in range ${low} - ${high}, current mid is ${mid}`)

    if (block.timestamp === time) {
      Logger.info(`Found exact match at block number ${mid}`)
      return mid
    }
    else if (block.timestamp < time) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  const closestBlockNumber = (await provider.getBlock(mid)).timestamp < time ? mid : mid - 1
  Logger.info(`No exact match, returning closest lower block number ${closestBlockNumber}`)
  return closestBlockNumber
}

export async function findBlockNumberByTimeInterval(provider: Provider, startTime: number, endTime?: number) {
  const currentTime = dayjs().unix()
  const currentBlockNumber = await provider.getBlockNumber()
  endTime = endTime ? Math.min(currentTime, endTime) : currentTime
  Logger.info('------------------', 'find start block number', '------------------')

  const from = currentTime >= startTime
    ? await findBlockNumberByTime(provider, startTime)
    : currentBlockNumber - 1

  Logger.info('------------------', 'find end block number', '------------------')

  const to = endTime
    ? endTime >= currentTime
      ? currentBlockNumber
      : await findBlockNumberByTime(provider, endTime)
    : await provider.getBlockNumber()

  Logger.info(`find interval block number : [${from}, ${to}]`)
  return [from, to] as const
}
