import {program} from 'commander'
import {generateSnapshots, processAll, processTask, syncMXCL2Addresses} from "./tasks";
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

program.name("process all")
    .command("processAll")
    .description("process All task")
    .action(processAll)
    .version("0.1.0")

program.name("generate snapshot")
    .command("snapshot")
    .description("generate or update snapshots")
    .action(generateSnapshots)
    .version("0.1.0")

program.parse();