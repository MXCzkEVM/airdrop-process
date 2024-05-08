import { describe, it } from "vitest";
import dayjs from "dayjs";
import { ContractAddr, ContractType, GenevaProvider, MXCL2Provider } from "../src/const/network";
import { getHexagonByAddresses } from '../src/tasks/processHexagonBalance'

describe('getHexagonByAddresses', () => {
  it('Find Hexagons that match on Monday', async () => {
    const hexagons = await getHexagonByAddresses(
      ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken],
      MXCL2Provider
    )
    console.log(hexagons)
  })
})