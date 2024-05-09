import { describe, it } from "vitest";
import { findBlockNumberByTime } from '../src/tasks/erc20transfer'
import dayjs from "dayjs";
import { GenevaProvider } from "../src/const/network";
import erc20factory from "../src/const/contracts/erc20factory";
import { Contract } from "ethers";
describe('findErc20Deployed', () => {
  it('Find all deploy erc20 token', async () => {
    const provider = GenevaProvider
    const contract = new Contract(
      erc20factory.address,
      erc20factory.abi,
      provider
    )
    const events = await contract.queryFilter('ERC20Deployed')
   console.log('events ---', events)
  })
})