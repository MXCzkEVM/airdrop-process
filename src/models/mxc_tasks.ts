import { DataTypes, Model } from 'sequelize'
import { DB } from '../db'

export class MXCTasksModel extends Model {}

MXCTasksModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task_name: DataTypes.TEXT,
  zks: DataTypes.INTEGER,
  testnet: DataTypes.INTEGER,

  // tasks within the time period
  expiredAt: DataTypes.TIME,
  task: DataTypes.TEXT,
}, {
  sequelize: DB,
  modelName: 'mxc_tasks',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
