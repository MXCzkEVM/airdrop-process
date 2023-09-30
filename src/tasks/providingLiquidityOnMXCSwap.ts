import {GraphQLClient} from "graphql-request";
import {BigNumber} from "ethers";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");

export default async function (address: string) {
    const res = await queryClient.request(`
    query transactions($user: Bytes!) {
      swaps(orderBy: timestamp, orderDirection: desc, where: {to: $user}) {
        amountUSD
      }
    }`) as unknown as {
        swaps: {
            amountUSD: number
        }[]
    }
    return res.swaps.reduce((prev,curr) => prev + curr.amountUSD, 0)
}