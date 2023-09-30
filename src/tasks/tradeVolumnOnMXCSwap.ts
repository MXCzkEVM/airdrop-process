import {GraphQLClient} from "graphql-request";

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/ianlapham/uniswap-v2-dev");

export async function getMXCSwapAddresses() {
    let skip = 0;
    let addresses:string[] = [];
    for(let i = 0; i < 100; i++) {
        skip = i * 1000;
        const res = await queryClient.request(`
        query users {
          users(where: {id_not: 0},first: 1000, skip:${skip}) {
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
    const res = await queryClient.request(`
    query mints($user: Bytes!) {
      mints(orderBy: timestamp, orderDirection: desc, where: {to: $user}) {
        amountUSD
      }
    }`) as unknown as {
        mints: {
            amountUSD: number
        }[]
    }
    return res.mints.reduce((prev,curr) => prev + curr.amountUSD, 0)
}