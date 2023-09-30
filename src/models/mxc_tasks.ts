import {DB} from "../db";
import {DataTypes, Model} from "sequelize";

export class MXCTasks extends Model {}

MXCTasks.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task_name: DataTypes.TEXT,
    zks: DataTypes.INTEGER,
    testnet: DataTypes.INTEGER,
},{
    sequelize: DB,
    modelName: 'mxc_tasks',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
