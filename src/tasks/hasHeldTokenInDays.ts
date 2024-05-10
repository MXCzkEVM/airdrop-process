import { ERC20__factory } from "../../typechain-types";
import { Provider } from "@ethersproject/providers";
import { findBlockNumberByTimeInterval } from "./erc20transfer";
import dayjs from "dayjs";
import { utils } from "ethers";

export async function hasHeldTokenInDays(provider: Provider, addresses: string[], token: string, time?: number) {
  const contract = ERC20__factory.connect(token, provider);
  const [startBlock, endBlock] = await findBlockNumberByTimeInterval(
    provider,
    dayjs(time).day(-30).unix()
  )

  // 获取过去 30 天内所有的 Transfer 事件
  const transferEvents = await contract.queryFilter(
    contract.filters.Transfer(),
    startBlock,
    endBlock
  );

  let qualifiedHolders = new Set(addresses); // 开始时假设所有地址都合格

  // 检查 Transfer 事件，移除那些余额降至 1000 以下的地址
  for (let event of transferEvents) {
    // 如果发送方在地址列表中，检查其余额是否降至 1000 以下
    if (qualifiedHolders.has(event.args.from)) {
      const balance = await contract.balanceOf(event.args.from);
      const minBalance = utils.parseUnits('1000', 'ether');
      if (balance.lt(minBalance)) {
        qualifiedHolders.delete(event.args.from);
      }
    }
    // 如果接收方在地址列表中，无需做什么，因为我们假设所有地址开始时都有足够的余额
  }

  // 最后，再次检查每个地址现在的余额是否仍然至少有 1000 个代币
  for (let address of qualifiedHolders) {
    const balance = await contract.balanceOf(address);
    const minBalance = utils.parseUnits('1000', 'ether');
    if (balance.lt(minBalance)) {
      qualifiedHolders.delete(address);
    }
  }

  return Array.from(qualifiedHolders);
}