import {GraphQLClient} from "graphql-request";
import {BigNumber} from "ethers";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");
export default async function (address: string, pairs: string[]) {
    const res = await queryClient.request(`
    query mints($user: Bytes!, $pairs: [Bytes!]) {
      mints(orderBy: timestamp, orderDirection: desc, where: {to: $user, pair_in: $pairs}, first: 1000, skip: 0) {
        amountUSD,
        to
      }
}`,{user: address.toLowerCase(), pairs: pairs.map(item => item.toLowerCase())}) as unknown as {
        mints: {
            amountUSD: string
        }[]
    }
    return res.mints.reduce((prev,curr) => prev + Number(curr.amountUSD), 0)
}