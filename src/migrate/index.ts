import {MigrationsModel, MXCAddressesModel, MXCAddressTaskModel} from "../models";
import {MXCTasksModel} from "../models";
import {DB} from "../db"
import {Op} from "sequelize";
export default async function () {
    await DB.sync({ alter: true })
    await addGenevaTasks()
    await genevaTaskTestnetIDTwo()
    await resetTestnetBlockNumber()
}

export async function addGenevaTasks() {
    const migrated = await migrate()
    if(!migrated) {
        await MXCTasksModel.bulkCreate([
            {
                id: 61,
                task_name: "Possess MOON token in wallet (applicable with 5+ points)",
                zks: 1000,
                testnet: 1
            },
            {
                id: 62,
                task_name: "Bridging funds into Geneva Testnet",
                zks: 100,
                testnet: 1
            },
            {
                id: 63,
                task_name: "Executing more than 3 transactions",
                zks: 300,
                testnet: 1
            },
            {
                id: 64,
                task_name: "Executing more than 5 transactions",
                zks: 500,
                testnet: 1
            },
            {
                id: 65,
                task_name: "Executing more than 10 transactions",
                zks: 1000,
                testnet: 1
            },

            {
                id: 66,
                task_name: "Interacting with 1 dApp",
                zks: 100,
                testnet: 1
            },
            {
                id: 67,
                task_name: "Interacting with more than 2 dApps",
                zks: 300,
                testnet: 1
            },
            {
                id: 68,
                task_name: "Acquiring 1 MNS",
                zks: 1000,
                testnet: 1
            },
            {
                id: 69,
                task_name: "Acquiring more than 3 MNS",
                zks: 5000,
                testnet: 1
            },
        ])
    }
}

export async function genevaTaskTestnetIDTwo() {
    const migrated = await migrate()
    if(!migrated) {
        await MXCTasksModel.update({
            testnet: 2
        },{
            where: {
                id: {
                    [Op.between]: [61, 69]
                }
            }
        })
    }
}

export async function resetTestnetBlockNumber() {
    const migrated = await migrate()
    if(!migrated) {
        await MXCAddressesModel.update({
            testnet_block_number: 0
        },{
            where: {
                testnet_block_number: {
                    [Op.gt]: 0
                }
            }
        })
    }
}


async function migrate() {
    let name = getCallerFunctionName(1)
    const migrate = await MigrationsModel.findOne({
        where: {
            migrate_name: name
        }
    })
    if(!migrate) {
        await MigrationsModel.create({
            migrate_name: name
        })
    }
    return !!migrate
}


function getCallerFunctionName(level = 1) {
    const error = new Error();
    const stackLines = error.stack.split('\n').slice(level + 2);
    const callerLine = stackLines[0];
    return callerLine.match(/at (\S+)/)[1];
}

