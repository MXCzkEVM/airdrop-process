import { Op } from "sequelize";
import { MXCTasksModel } from "../models";

export async function* generateBlockRanges(startBlock: number, endBlock: number, step: number = 10000) {
  let fromBlock = startBlock;
  let toBlock = fromBlock + step;

  while (fromBlock < endBlock) {
    yield { fromBlock, toBlock: Math.min(toBlock, endBlock) };
    fromBlock = toBlock + 1;
    toBlock += step;
  }
}

export function scientificToDecimal(scientificNotation: number) {
  if (typeof scientificNotation !== 'number' && typeof scientificNotation !== 'string') {
    return '0';
  }
  const parts = scientificNotation.toString().split('e+');
  const base = parts[0].replace('.', '');
  const power = parseInt(parts[1], 10);

  let result = base;
  for (let i = 0; i < power; i++) {
    result += '0';
  }

  return result;
}

const scientificNotation = 4.256019729263741e+22;
const stringNumber = scientificToDecimal(scientificNotation);

export async function getPublishedTasks(time?: number) {
  const taskModels = await MXCTasksModel.findAll({
    where: {
      expiredAt: {
        ...(time
          ? { [Op.gte]: time }
          : { [Op.not]: null }
        ),
      }
    }
  })
  return taskModels.map(v => v.get())
}
export function parseTankUID({ task, testnet }: any) {
  return `${testnet ? 'testnet' : 'mainnet'}_${task}`
}