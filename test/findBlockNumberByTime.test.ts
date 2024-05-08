import { describe, it } from "vitest";
import { findBlockNumberByTime } from '../src/tasks/erc20transfer'
import dayjs from "dayjs";
import { GenevaProvider } from "../src/const/network";
describe('findBlockNumberByTime', () => {
  it('Find blocks that match on Monday', async () => {
    await findBlockNumberByTime(GenevaProvider, dayjs().day(1).unix())
  })
})