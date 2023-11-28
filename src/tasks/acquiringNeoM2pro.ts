import {GraphQLClient} from "graphql-request";

export const neoM2proWannseeGraphClient = new GraphQLClient("http://149.28.212.112:8000/subgraphs/name/mxczkevm/mep1004-graph");

export default async function () {

  const mep1004Map = new Map<string, {tokenId: string, sncode: string}[]>();

  let skip = 0

  for (let i = 0; i < 100; i++) {
    skip = i * 1000

    const res = await neoM2proWannseeGraphClient.request(`query {
    query mep1004tokeninfos {
      mep1004TokenInfos(first: 1000,skip: ${skip}) {
        id
        owner
        tokenId
        sncode
      }
    }`) as unknown as {
      mep1004TokenInfos: {
        owner: string
        tokenId: string
        sncode: string
      }[]
    }
    if (res.mep1004TokenInfos.length === 0) {
      break;
    }
    for(let j = 0; j < res.mep1004TokenInfos.length; j++) {
      if (!mep1004Map.has(res.mep1004TokenInfos[j].owner)) mep1004Map.set(res.mep1004TokenInfos[j].owner,[]);

      mep1004Map.set(res.mep1004TokenInfos[j].owner, mep1004Map.get(res.mep1004TokenInfos[j].owner).concat([{
        tokenId: res.mep1004TokenInfos[j].tokenId,
        sncode: res.mep1004TokenInfos[j].sncode
      }]))
    }
  }

  return mep1004Map;

}
