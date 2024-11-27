import dayjs from 'dayjs'
import { describe, it } from 'vitest'
import { GenevaProvider } from '../src/const/network'
import { findBlockNumberByTime } from '../src/tasks/erc20transfer'

describe('findBlockNumberByTime', () => {
  it.skip('find blocks that match on Monday', async () => {
    await findBlockNumberByTime(GenevaProvider, dayjs().day(-16).unix())
  })
})
