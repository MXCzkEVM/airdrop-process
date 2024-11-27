import chalk from 'chalk'

const log = console.log
const stdOut = process.stdout.write.bind(process.stdout)
export class Logx {
  static error(...v: any[]) {
    log(chalk.bold.redBright(v))
  }

  static success(...v: any[]) {
    log(chalk.bold.greenBright(v))
  }

  static debug(...v: any[]) {
    log(chalk.bold.grey(v))
  }

  static info(...v: any[]) {
    log(chalk.bold.blackBright(v))
  }

  static infoStdout(...v: any[]) {
    stdOut(chalk.bold.blackBright(v))
  }
}
