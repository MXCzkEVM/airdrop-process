import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../connect'

export class Snapshots extends Model {}

Snapshots.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: DataTypes.TEXT,
    tasks: DataTypes.TEXT,
    zks_sum: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'mxc_snapshots',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
)
