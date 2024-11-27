import { GraphQLClient } from 'graphql-request'

export const neoM2proMainnetGraphClient = new GraphQLClient('https://graph-node.moonchain.com/subgraphs/name/mxczkevm/mep1004-graph')
export const neoM2proTestnetGraphClient = new GraphQLClient('https://geneva-graph-node.moonchain.com/subgraphs/name/mxczkevm/mep1004-graph')

export default async function (startTime?: number, endTime?: number, testnet = false) {
  const graphClient = testnet ? neoM2proTestnetGraphClient : neoM2proMainnetGraphClient
  const mep1004Map = new Map<string, { tokenId: string, sncode: string, mep1002TokenId: string }[]>()

  let skip = 0

  for (let i = 0; i < 100; i++) {
    skip = i * 1000

    const query = [
      startTime && `createBlockTimestamp_gte: "${startTime}"`,
      endTime && `createBlockTimestamp_lte: "${endTime}"`,
    ]
    const res = await graphClient.request(`
    query mep1004tokeninfos {
      mep1004TokenInfos(first: 1000,skip: ${skip}, where: {${query.filter(Boolean)}}) {
        id
        owner
        tokenId
        sncode
        mep1002TokenId
      }
    }`) as unknown as {
      mep1004TokenInfos: {
        owner: string
        tokenId: string
        sncode: string
        mep1002TokenId: string
      }[]
    }
    if (res.mep1004TokenInfos.length === 0) {
      break
    }
    for (let j = 0; j < res.mep1004TokenInfos.length; j++) {
      if (!mep1004Map.has(res.mep1004TokenInfos[j].owner))
        mep1004Map.set(res.mep1004TokenInfos[j].owner, [])

      mep1004Map.set(res.mep1004TokenInfos[j].owner, mep1004Map.get(res.mep1004TokenInfos[j].owner).concat([{
        tokenId: res.mep1004TokenInfos[j].tokenId,
        sncode: res.mep1004TokenInfos[j].sncode,
        mep1002TokenId: res.mep1004TokenInfos[j].mep1002TokenId,
      }]))
    }
  }

  return mep1004Map
}
