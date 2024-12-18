import { Sequelize } from 'sequelize'
import { Logx } from '../log'

export const DB = new Sequelize({
  dialect: 'sqlite',
  storage: './snapshots.sqlite',
  logging: Logx.info,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
})

try {
  DB.authenticate().then(() => {
    Logx.success('Connection has been established successfully.')
  })
}
catch (error) {
  Logx.error('Unable to connect to the database:', error)
}
