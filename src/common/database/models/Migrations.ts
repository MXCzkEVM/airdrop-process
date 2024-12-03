import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../connect'

export class Migrations extends Model {}

Migrations.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  migrate_name: {
    type: DataTypes.STRING, // unique
    unique: true,
  },
}, {
  sequelize,
  modelName: 'migrations',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
