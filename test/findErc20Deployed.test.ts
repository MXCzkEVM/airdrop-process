import { BigNumber, Contract } from 'ethers'
import { describe, it } from 'vitest'
import erc20factory from '../src/const/contracts/erc20factory'
import { MXCL2Provider } from '../src/const/network'

describe('findErc20Deployed', () => {
  it('find all deploy erc20 token', async () => {
    const provider = MXCL2Provider
    const contract = new Contract(
      erc20factory.address,
      erc20factory.abi,
      provider,
    )
    // const events = await contract.queryFilter('ERC20Deployed')
    // console.log('events ---', events.filter(e => e.args?.operator === '0x0795D90c6d60F7c77041862E9aE5059B4d5e0d7A'))
    console.log(BigNumber.from('0x608692964444602367').toHexString())
  })
})

async function getHoldersInLast30Days(tokenAddress, providerUrl) {
  // 连接到以太坊网络
  const provider = new ethers.providers.JsonRpcProvider(providerUrl)

  // 创建代币合约的实例
  const tokenContract = new ethers.Contract(tokenAddress, ERC20_ABI, provider)

  // 获取当前区块号
  const currentBlock = await provider.getBlockNumber()

  // 估算30天前的区块号（大约每15秒产生一个区块）
  const blocksPerDay = 24 * 60 * 60 / 15
  const block30DaysAgo = currentBlock - (30 * blocksPerDay)

  // 获取过去30天内的所有转账事件
  const transferEvents = await tokenContract.queryFilter(tokenContract.filters.Transfer(), block30DaysAgo, currentBlock)

  // 创建一个集合以存储独特的持有者地址
  const holderAddresses = new Set()
  transferEvents

  // 遍历所有转账事件
  for (const event of transferEvents) {
    // 检查from和to地址在事件时的余额是否大于0
    const fromBalance = await tokenContract.balanceOf(event.args.from, { blockTag: event.blockNumber })
    const toBalance = await tokenContract.balanceOf(event.args.to, { blockTag: event.blockNumber })

    if (fromBalance.lte(1000)) {
      holderAddresses.add(event.args.from)
    }
    if (toBalance.gt(0)) {
      holderAddresses.add(event.args.to)
    }
  }

  // 返回所有持有者地址的数组
  return Array.from(holderAddresses)
}
