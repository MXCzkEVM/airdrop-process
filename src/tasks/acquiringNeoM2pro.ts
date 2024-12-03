import { graphQLClients } from '../common'

export interface GraphResultByTokenInfos {
  mep1004TokenInfos: {
    owner: string
    tokenId: string
    sncode: string
    mep1002TokenId: string
  }[]
}

export default async function (startTime?: number, endTime?: number, testnet = false) {
  const graphClient = testnet ? graphQLClients.neoM2proTestnet : graphQLClients.neoM2proMainnet
  const mep1004map = new Map<string, { tokenId: string, sncode: string, mep1002TokenId: string }[]>()

  let skip = 0

  for (let i = 0; i < 100; i++) {
    skip = i * 1000
    const query = [
      startTime && `createBlockTimestamp_gte: "${startTime}"`,
      endTime && `createBlockTimestamp_lte: "${endTime}"`,
    ]

    const { mep1004TokenInfos } = await graphClient.request<GraphResultByTokenInfos>(
      `
        query mep1004tokeninfos {
          mep1004TokenInfos(first: 1000,skip: ${skip}, where: {${query.filter(Boolean)}}) {
            id
            owner
            tokenId
            sncode
            mep1002TokenId
          }
        }
      `,
    )
    if (mep1004TokenInfos.length === 0)
      break
    for (let j = 0; j < mep1004TokenInfos.length; j++) {
      if (!mep1004map.has(mep1004TokenInfos[j].owner))
        mep1004map.set(mep1004TokenInfos[j].owner, [])
      mep1004map.set(
        mep1004TokenInfos[j].owner,
        mep1004map.get(mep1004TokenInfos[j].owner).concat([{
          tokenId: mep1004TokenInfos[j].tokenId,
          sncode: mep1004TokenInfos[j].sncode,
          mep1002TokenId: mep1004TokenInfos[j].mep1002TokenId,
        }]),
      )
    }
  }

  return mep1004map
}
