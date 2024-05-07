import { describe, it, expect } from "vitest";
import { processMSC20Transactions } from '../src/tasks/msc20mint'
import dayjs from "dayjs";

describe('msc20', () => {
  const address = '0x0795D90c6d60F7c77041862E9aE5059B4d5e0d7A'

  it('mint 1 inscription', { timeout: 0 }, async () => {
    const s = dayjs().day(1).hour(0).minute(0).second(0).unix()
    const e = dayjs().day(6).hour(59).minute(59).second(59).unix()
    const inscriptions = await processMSC20Transactions(true, 17677439, s, e)
    const mints = inscriptions.filter(inscription => inscription.data.op === 'mint')
    const myMints = mints.filter(({transaction}) => transaction.from.toLowerCase() === address.toLowerCase())
    console.log(inscriptions)
  })
})