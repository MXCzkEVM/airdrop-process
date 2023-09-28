import {program} from 'commander'
import {processTask} from "./tasks";

program
    .name("task process")
    .command('processTask <taskID>')
    .description('Process Task by provide taskID')
    .action(processTask)
    .version('0.1.0');


program.parse();