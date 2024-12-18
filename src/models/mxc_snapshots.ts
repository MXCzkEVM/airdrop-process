import { DataTypes, Model } from 'sequelize'
import { DB } from '../db'

export class MXCSnapShotsModel extends Model {}

MXCSnapShotsModel.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  address: DataTypes.TEXT,
  tasks: DataTypes.TEXT,
  zks_sum: DataTypes.INTEGER,
}, {
  sequelize: DB,
  modelName: 'mxc_snapshots',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
