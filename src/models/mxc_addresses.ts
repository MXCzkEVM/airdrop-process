import {DB} from "../db";
import {DataTypes, Model} from "sequelize";

export class MXCAddressesModel extends Model {}

MXCAddressesModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address: {
        type: DataTypes.TEXT,
        unique: true
    },
    block_number: DataTypes.INTEGER,
    testnet_block_number: DataTypes.INTEGER,
    dapp_interactions: DataTypes.TEXT,
    testnet_dapp_interactions: DataTypes.TEXT,
    transaction_aggregate_value_mxc: DataTypes.INTEGER,
    first_transaction_time: DataTypes.DATE,
    last_transaction_time: DataTypes.DATE
},{
    sequelize: DB,
    modelName: 'mxc_addresses',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
