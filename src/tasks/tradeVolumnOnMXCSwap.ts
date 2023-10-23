import {GraphQLClient} from "graphql-request";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");

export async function getMXCSwapAddresses() {
    let skip = 0;
    let addresses:string[] = [];
    for(let i = 0; i < 100; i++) {
        skip = i * 1000;
        const res = await queryClient.request(`
        query users {
          users(first: 1000, skip:${skip}) {
            id
          }
        }`) as unknown as {
            users: {id: string}[]
        }
        if(res.users.length === 0) {
            break;
        }
        addresses = [...addresses, ...res.users.map(item => item.id)]
    }
    return addresses;
}

export default async function (address: string) {
    let skip = 0;
    let result = 0;
    for (let i = 0; i < 100; i++) {
        skip = i * 1000;
        const res = await queryClient.request(`
        query transactions($user: Bytes!) {
          swaps(orderBy: timestamp, orderDirection: desc, where: {from: $user}, skip: ${skip}, first: 1000) {
            amountUSD
          }
        }`, {user: address.toLowerCase()}) as unknown as {
            swaps: {
                amountUSD: string
            }[]
        }
        result = result + res.swaps.reduce((prev,curr) => prev + Number(curr.amountUSD), 0)
        if(res.swaps.length === 0 || res.swaps.length !== 1000) {
            break;
        }
    }
    return result;
}