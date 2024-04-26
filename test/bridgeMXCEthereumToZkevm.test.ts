import {beforeEach, describe, expect, test} from 'vitest'
import { BigNumber } from "ethers"
import {bridgeMXCEthereumToZkevm} from '../src/tasks/bridgeMXCEthereumToZkevm'
import dayjs from 'dayjs'
import { formatEther } from 'ethers/lib/utils'
import { getPublishedTasks } from '../src/uitls'

describe('task:bridgeMXCEthereumToZkevm', () => {
  let ethereumTransferMXCRecords: Map<string, BigNumber>
  const firstWeekTime = dayjs().day(1).hour(0).minute(0).second(0).unix()

  beforeEach(async () => {
    ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(
      firstWeekTime,
      false
    )
  },
  0
)
  test('Transfer 50 MXC to ZKEVM from 0x0795...0d7A this week', () => {
    console.log('transfer length: ', [...ethereumTransferMXCRecords.values()].length)
    const address = '0x0795D90c6d60F7c77041862E9aE5059B4d5e0d7A'
    console.log('transfer amount: ', formatEther(ethereumTransferMXCRecords.get(address) || '0'))
  })

  test('find Model data item', async () => {
    console.log('PublishedTasks: ', await getPublishedTasks(firstWeekTime))
  })
})