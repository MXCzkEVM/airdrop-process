
import chalk from 'chalk';
import {Logx} from "../log";

const log = console.log;
class Tasks {
    static processTask1 =  () => {
        Logx.success("process Task 1 success")
     }
}

export const processTask = async (taskID: number) => {
    // @ts-ignore
    if(Tasks[`processTask${taskID}`] !== undefined) {
        // @ts-ignore
        return Tasks[`processTask${taskID}`]();
    }else {
        Logx.error(`taskID ${taskID} not implement`)
    }
    return;
}