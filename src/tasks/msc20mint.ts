import { Provider } from "@ethersproject/providers";
import { findBlockNumberByTimeInterval } from "./erc20transfer";
import { arange } from '@hairy/utils'
import { toUtf8String } from "ethers/lib/utils";
import { MXCL2Provider, GenevaProvider } from "../const/network";
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

  console.log('find block details start')
  const blocks = await Promise.all(
    arange(startBlock, endBlock).map(index => provider.getBlock(index).catch(() => undefined))
  ).then(blocks => blocks.filter(Boolean))

  console.log('find block details length: ', blocks.length)

  console.log('find transaction details start')
  const transactions = await Promise.all(
    blocks.flatMap(block => block.transactions.map((hash:string) => provider.getTransaction(hash)))
  )
  return transactions
  .filter(trn => trn.data.startsWith('0x7b2270223a226d73632d323022'))
  .map((transaction) => {
    return {
      data: JSON.parse(toUtf8String(transaction.data)) as InscriptionJSON, 
      transaction: transaction,
    }
  })
}