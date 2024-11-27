import { cellToLatLng } from 'h3-js'
import { describe, it } from 'vitest'
import { ContractAddr, ContractType, MXCL2Provider } from '../src/const/network'
import { getHexagonByAddresses } from '../src/tasks/processHexagonBalance'

describe('getHexagonByAddresses', () => {
  it.skip('find Hexagons that match on Monday', async () => {
    const hexagons = await getHexagonByAddresses(
      ContractAddr.MXCL2Mainnet[ContractType.MEP1002NamingToken],
      MXCL2Provider,
    )
    const [lat, lon] = cellToLatLng(hexagons[0].hexagon)
    console.log({ lat, lon })
  })
})
