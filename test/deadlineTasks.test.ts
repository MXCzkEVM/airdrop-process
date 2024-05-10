import { describe, it } from "vitest";
import { getPublishedTasks } from "../src/uitls";
import dayjs from "dayjs";


describe('deadlineTasks', () => {
  it('parseDeadlineTasks', async () => {
    const publishedTasks = await getPublishedTasks(dayjs().unix())

    console.log('publishedTasks: ', publishedTasks)
  })
})