import { program } from 'commander'
import migrate from './migrate'
import { generateSnapshots, processAll, processTask, syncMXCL2Addresses } from './tasks'

program
  .name('task process')
  .command('processTask <taskID>')
  .description('Process Task by provide taskID')
  .action(processTask)
  .version('0.1.0')

program.name('sync MXC L2 addresses')
  .command('syncL2')
  .description('Sync MXC L2 All Address')
  .action(syncMXCL2Addresses)
  .version('0.1.0')

program.name('process all')
  .command('processAll')
  .description('process All task')
  .action(processAll)
  .version('0.1.0')

program.name('generate snapshot')
  .command('snapshot')
  .description('generate or update snapshots')
  .action(generateSnapshots)
  .version('0.1.0')

program.name('migrate')
  .command('migrate')
  .description('database migrate')
  .action(migrate)
  .version('0.1.0')

program.parse()
