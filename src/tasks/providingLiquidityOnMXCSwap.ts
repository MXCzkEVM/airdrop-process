import {GraphQLClient} from "graphql-request";
import {BigNumber} from "ethers";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");
export default async function (address: string, pair: string) {
    const res = await queryClient.request(`
    query mints($user: Bytes!, $pair: Bytes!) {
      mints(orderBy: timestamp, orderDirection: desc, where: {to: $user, pair: $pair}) {
        amountUSD,
      }
}`,{user: address.toLowerCase(), pair: pair.toLowerCase()}) as unknown as {
        mints: {
            amountUSD: string
        }[]
    }
    return res.mints.reduce((prev,curr) => prev + Number(curr.amountUSD), 0)
}