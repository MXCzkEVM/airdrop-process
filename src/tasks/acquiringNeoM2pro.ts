import {GraphQLClient} from "graphql-request";

export const neoM2proWannseeGraphClient = new GraphQLClient("http://149.28.212.112:8000/subgraphs/name/mxczkevm/mep1004-graph");

export default async function (address: string) {

  let arr: any = []

  let skip = 0

  for (let i = 0; i < 10; i++) {
    skip = i * 1000

    const res: any = await neoM2proWannseeGraphClient.request(`query {
      transfers(
        skip: ${skip},first: 1000,
        where: { to: "${address}" }
      ) {
        id
        from
        to
        tokenId
        blockNumber
        blockTimestamp
        transactionHash
        sncode
      }
    }`)

    arr = [...arr, ...res.transfers]
  }

  return arr

}
