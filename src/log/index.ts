import chalk from 'chalk'

const log = console.log
export class Logx {
    static error(str: string) {
        log(chalk.bold.redBright(str))
    }

    static success(str: string) {
        log(chalk.bold.greenBright(str))
    }

    static info(str: string) {
        log(chalk.bold.bgBlack.white(str))
    }

}
