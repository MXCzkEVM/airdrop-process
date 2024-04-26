import {beforeEach, describe, expect, test} from 'vitest'
import { BigNumber } from "ethers"
import {bridgeMXCEthereumToZkevm} from '../src/tasks/bridgeMXCEthereumToZkevm'
import dayjs from 'dayjs'
import { formatEther, parseEther } from 'ethers/lib/utils'
import { getPublishedTasks, parseTankUID } from '../src/uitls'
import { MXCAddressTaskModel, MXCTasksModel } from '../src/models'
import axios from 'axios'

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
    // console.log('transfer length: ', [...ethereumTransferMXCRecords.values()].length)
    const address = '0x0795D90c6d60F7c77041862E9aE5059B4d5e0d7A'
    // console.log('transfer amount: ', formatEther(ethereumTransferMXCRecords.get(address) || '0'))
  })

  test('parseDeadlineTasks', async () => {
    const publishedTasks = await getPublishedTasks(dayjs().valueOf())

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
        expiredAt: dayjs().day(6).hour(29).minute(29).second(29).valueOf(),
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
    const timeByStartWeek = dayjs().day(1).hour(0).minute(0).second(0).unix()

    console.log('publishedTasks: ', publishedTasks)

    const parseCalls: Record<string, any> = {
      'mainnet_week-01': async (id: any) => {
        const ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(timeByStartWeek)
        for (const address of ethereumTransferMXCRecords.keys()) {
          if (!ethereumTransferMXCRecords.get(address)?.gte(parseEther('2500')))
            continue
          
          await MXCAddressTaskModel.findOrCreate({ where: { address, task_id: id } })
        }
      },
      'testnet_week-01': async (id: any) => {
        const ethereumTransferMXCRecords = await bridgeMXCEthereumToZkevm(timeByStartWeek, false)
        console.log('ethereumTransferMXCRecords.keys()', [...ethereumTransferMXCRecords.keys()].length)
        for (const address of ethereumTransferMXCRecords.keys()) {
          console.log('address: ', address)
          console.log('value: ', ethereumTransferMXCRecords.get(address)?.toString())
          console.log('ether: ', parseEther('2500').toString())
          if (!ethereumTransferMXCRecords.get(address)?.gte(parseEther('2500')))
            continue
          await MXCAddressTaskModel.findOrCreate({ where: { address, task_id: id } })
        }
      },
      // 'mainnet_week-02': (id: any) => swap(id, timeByStartWeek),
      // 'mainnet_week-03': (id: any) => swapWithToSensor1000(id, timeByStartWeek),
      // 'mainnet_week-04': (id: any) => swapWithToXsd5000(id, timeByStartWeek),
    }

    for (const task of publishedTasks) {
      console.log(`run task --- ${task.id}`, parseTankUID(task))
      await parseCalls[parseTankUID(task)]?.(task.id)
    }
  })
})