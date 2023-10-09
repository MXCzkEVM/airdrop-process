import {GraphQLClient} from "graphql-request";
import {BigNumber} from "ethers";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");

export default async function (address: string) {
    const res = await queryClient.request(`
    query mints($user: Bytes!) {
      mints(orderBy: timestamp, orderDirection: desc, where: {to: $user}) {
        amountUSD
      }
    }`,{user: address.toLowerCase()}) as unknown as {
        mints: {
            amountUSD: string
        }[]
    }
    return res.mints.reduce((prev,curr) => prev + Number(curr.amountUSD), 0)
}