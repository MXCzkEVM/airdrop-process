import chalk from 'chalk'

const log = console.log
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

}
