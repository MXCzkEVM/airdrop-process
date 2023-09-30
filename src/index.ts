import {program} from 'commander'
import {processTask, syncMXCL2Addresses} from "./tasks";
import {DB} from "./db";

program
    .name("task process")
    .command('processTask <taskID>')
    .description('Process Task by provide taskID')
    .action(processTask)
    .version('0.1.0');

program.name("sync MXC L2 addresses")
    .command("syncL2")
    .description("Sync MXC L2 All Address")
    .action(syncMXCL2Addresses)
    .version("0.1.0")


program.parse();