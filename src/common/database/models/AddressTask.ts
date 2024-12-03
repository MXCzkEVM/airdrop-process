import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../connect'

export class AddressTask extends Model {}

AddressTask.init(
  {
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
  },
  {
    sequelize,
    modelName: 'mxc_address_tasks',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
)
