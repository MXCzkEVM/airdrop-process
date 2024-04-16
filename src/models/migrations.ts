import {DB} from "../db";
import {DataTypes, Model} from "sequelize";

export class MigrationsModel extends Model {}

MigrationsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    migrate_name: {
        type: DataTypes.STRING, //unique
        unique: true
    },
},{
    sequelize: DB,
    modelName: 'migrations',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
