import {GraphQLClient} from "graphql-request";
import {BigNumber} from "ethers";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");

export default async function (address: string) {
    const res = await queryClient.request(`
    query mints($user: Bytes!) {
      mints(orderBy: timestamp, orderDirection: desc, where: {from: $user}) {
        amountUSD
      }
    }`) as unknown as {
        mints: {
            amountUSD: number
        }[]
    }
    return res.mints.reduce((prev,curr) => prev + curr.amountUSD, 0)
}