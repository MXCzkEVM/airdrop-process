import { Provider } from "@ethersproject/providers";
import { findBlockNumberByTimeInterval } from "./erc20transfer";
import { toUtf8String } from "ethers/lib/utils";
import { MXCL2Provider, GenevaProvider } from "../const/network";

function arange(x1: number, x2: number, stp = 1, z: any[] = [], z0 = z.length) {
  if (!x2)
    x1 -= x2 = x1;
  for (let z1 = z0 + Math.max(Math.ceil((++x2 - x1) / stp), 0); z0 < z1; x1 += stp)
    z[z0++] = x1;
  return z;
}

export interface ScanDeployJSON {
  p: 'msc-20'
  op: 'deploy'
  tick: string
  max: string
  lim: string
}
export interface ScanMintJSON {
  p: 'msc-20'
  op: 'mint'
  tick: string
  amt: string | number
  hex: string
}
export interface ScanTransferJSON {
  p: 'msc-20'
  op: 'transfer'
  tick: string
  amt: string
}
export interface ScanListJSON {
  p: 'msc-20'
  op: 'list'
  tick: string
  amt: string
  pre: string
  exp: string
  hex: string
  r: string
  s: string
  v: number
}
export interface ScanCancelJSON {
  p: 'msc-20'
  op: 'cancel'
  tick: string
  hash: string
}
export type InscriptionJSON = ScanDeployJSON | ScanMintJSON | ScanTransferJSON | ScanListJSON | ScanCancelJSON

export async function processMSC20Transactions(
  mainnet = true,
  startBlock: number,
  startTime?: number,
  endTime?: number
) {
  const provider = mainnet ? MXCL2Provider : GenevaProvider
  let endBlock = await provider.getBlockNumber();
  if (startTime)
    [startBlock, endBlock] = await findBlockNumberByTimeInterval(
      provider,
      startTime,
      endTime
    )
  const transactions: any[] = []
  for (const blockNumber of arange(startBlock, endBlock)) {
    const block = await provider.getBlock(blockNumber)
    for (const hash of block.transactions) {
      transactions.push(await provider.getTransaction(hash))
    }
  }


  console.log('find transaction details start')

  return transactions
    .filter(trn => trn.data.startsWith('0x7b2270223a226d73632d323022'))
    .map((transaction) => {
      return {
        data: JSON.parse(toUtf8String(transaction.data)) as InscriptionJSON,
        transaction: transaction,
      }
    })
}