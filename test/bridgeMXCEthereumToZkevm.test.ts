import { beforeEach, describe, expect, test } from 'vitest'
import { BigNumber } from "ethers"
import { bridgeMXCEthereumToZkevm } from '../src/tasks/bridgeMXCEthereumToZkevm'
import dayjs from 'dayjs'
import { formatEther, parseEther } from 'ethers/lib/utils'
import { getPublishedTasks, parseTankUID } from '../src/uitls'
import { MXCAddressTaskModel, MXCTasksModel } from '../src/models'
import axios from 'axios'

describe('task:bridgeMXCEthereumToZkevm', () => {
  let ethereumTransferMXCRecords: Map<string, BigNumber>

  beforeEach(async () => {
    const firstWeekTime = dayjs().day(1).hour(0).minute(0).second(0).unix()
    ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(
      false,
      firstWeekTime,
    )
  },
  )
  test('Transfer 50 MXC to ZKEVM from 0x0795...0d7A this week', () => {
    // console.log('transfer length: ', [...ethereumTransferMXCRecords.values()].length)
    const address = '0x0795D90c6d60F7c77041862E9aE5059B4d5e0d7A'
    // console.log('transfer amount: ', formatEther(ethereumTransferMXCRecords.get(address) || '0'))
  })

  test('parseDeadlineTasks', async () => {
    const publishedTasks = await getPublishedTasks(dayjs().unix())

    // load by github json
    const response = await axios('https://raw.githubusercontent.com/MXCzkEVM/airdrop-tasks/main/tasks.json')
    // { tank: string, name: string, testnet: boolean, zks: number }[]
    const dashboardTanks = response.data as any[]

    // filter same tasks
    const publishingTasks = dashboardTanks.filter(task =>
      !publishedTasks.some(it => parseTankUID(it) === parseTankUID(task))
    )

    if (!publishingTasks.length)
      return

    const publishingHandleTasks = publishingTasks.map(item => {
      return {
        task_name: item.name,
        task: item.task,
        testnet: item.testnet ? 1 : 0,
        expiredAt: dayjs().day(6).hour(29).minute(29).second(29).unix(),
        zks: item.zks
      }
    })

    const processes = publishingHandleTasks.map(task => MXCTasksModel.create(task))
    await Promise.all(processes)

    console.log('Published from the tasks dashboard: ')
    publishingTasks.forEach(t => console.log(`task:${parseTankUID(t)} - name:${t.name}`))
  })

  test('processDeadlineTasks', async () => {
    const publishedTasks = await getPublishedTasks(dayjs().valueOf())

    console.log('publishedTasks: ', publishedTasks)

    const parseCalls: Record<string, any> = {
      'mainnet_week-01': async (id: any, s: number, e: number) => {
        const ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(true, s, e)
        for (const address of ethereumTransferMXCRecords.keys()) {
          if (!ethereumTransferMXCRecords.get(address)?.gte(parseEther('2500')))
            continue
          await MXCAddressTaskModel.findOrCreate({ where: { address, task_id: id } })
        }
      },
      'testnet_week-01': async (id: any, s: number, e: number) => {
        const ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(false, s, e)
        for (const address of ethereumTransferMXCRecords.keys()) {
          if (!ethereumTransferMXCRecords.get(address)?.gte(parseEther('2500')))
            continue
          await MXCAddressTaskModel.findOrCreate({ where: { address, task_id: id } })
        }
      },
    }

    for (const task of publishedTasks) {
      const s = dayjs.unix(task.expiredAt).day(1).hour(0).minute(0).second(0).unix()
      const e = dayjs.unix(task.expiredAt).day(6).hour(59).minute(59).second(59).unix()
      console.log('scan time: ', dayjs.unix(task.expiredAt).format())
      await parseCalls[parseTankUID(task)](task.id, s, e)
    }
  })
})