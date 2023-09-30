import {DB} from "../db";
import {DataTypes, Model} from "sequelize";

export class MXCSnapShots extends Model {}

MXCSnapShots.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: DataTypes.TEXT,
    tasks: DataTypes.JSON,
    zks_sum: DataTypes.INTEGER,
},{
    sequelize: DB,
    modelName: 'mxc_snapshots',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
