import { Sequelize } from 'sequelize'
import { Logger } from '../logger'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './snapshots.sqlite',
  logging: Logger.info,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

try {
  sequelize.authenticate().then(() => Logger.success('Connection has been established successfully.'))
}
catch (error) {
  Logger.error('Unable to connect to the database:', error)
}
