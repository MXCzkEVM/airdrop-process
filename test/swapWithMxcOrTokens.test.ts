import { describe, expect, it } from 'vitest'
import { ContractAddr, ContractType } from '../src/const/network'
import { swapExactMXCForTokens } from '../src/tasks/tradeVolumnOnMXCSwap'

describe('swapWithMxcOrTokens', () => {
  const address = '0x0795D90c6d60F7c77041862E9aE5059B4d5e0d7A'

  it('address for all swaps', async () => {
    const swaps = await swapExactMXCForTokens(
      address,
      undefined,
      undefined,
      undefined,
      true,
    )
    expect(swaps.length).gt(0)
  })
  it('address swap for 1000 sensor', { timeout: 0 }, async () => {
    const swaps = await swapExactMXCForTokens(
      address,
      { to: '0x727A7734afBB01C20681Cdd4F68b98F53ddD521b' },
      undefined,
      undefined,
      true,
    )
    const total = swaps.reduce((p, c) => p + Number(c.to.value), 0)
    expect(total).gte(1000)
  })
  it.skip('address swap for 5000 XSD', async () => {
    const swaps = await swapExactMXCForTokens(
      address,
      { to: ContractAddr.MXCL2Mainnet[ContractType.XSDToken] },
      undefined,
      undefined,
      true,
    )
    const total = swaps.reduce((p, c) => p + Number(c.to.value), 0)
    expect(total).gte(5000)
  })
})
