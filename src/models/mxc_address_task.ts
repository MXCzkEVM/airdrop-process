import { DataTypes, Model } from 'sequelize'
import { DB } from '../db'

export class MXCAddressTaskModel extends Model {}

MXCAddressTaskModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: DataTypes.TEXT,
  task_id: DataTypes.INTEGER,
  times: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
}, {
  sequelize: DB,
  modelName: 'mxc_address_tasks',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
