import { GraphQLClient } from "graphql-request";

const queryClient = new GraphQLClient("https://graph-node.moonchain.com/subgraphs/name/ianlapham/uniswap-v2-dev");
const testnetQueryClient = new GraphQLClient("https://geneva-graph-node.moonchain.com/subgraphs/name/ianlapham/uniswap-v2-dev");

export async function getMXCSwapAddresses() {
  let skip = 0;
  let addresses: string[] = [];
  for (let i = 0; i < 100; i++) {
    skip = i * 1000;
    const res = await queryClient.request(`
        query users {
          users(first: 1000, skip:${skip}) {
            id
          }
        }`) as unknown as {
      users: { id: string }[]
    }
    if (res.users.length === 0) {
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
        }`,
      { user: address.toLowerCase() }) as unknown as { swaps: { amountUSD: string }[] }
    result = result + res.swaps.reduce((prev, curr) => prev + Number(curr.amountUSD), 0)
    if (res.swaps.length === 0 || res.swaps.length !== 1000) {
      break;
    }
  }
  return result;
}

export async function swapExactMXCForTokens(
  address: string,
  swap?: { from?: string, to?: string },
  startTime?: string | number,
  endTime?: string | number,
  testnet?: boolean
) {
  let skip = 0;
  const client = testnet ? testnetQueryClient : queryClient
  const data = [] as any[]
  const pairsQuery = [
    swap?.from && `token0: "${swap.from}"`,
    swap?.to && `token1: "${swap.to}"`,
  ].filter(Boolean)

  const swapsQuery = [
    startTime && `timestamp_gte: "${startTime}"`,
    endTime && `timestamp_lte: "${endTime}"`,
    `from: "${address}"`,
    pairsQuery.length && `pair_: {${pairsQuery}}`,
  ].filter(Boolean)
  for (let i = 0; i < 100; i++) {
    skip = i * 1000;

    const { swaps }: any = await client.request(
      `
        query transactions {
          swaps(
            orderBy: timestamp,
            where: {${swapsQuery}},
            skip: ${skip},
            first: 1000
          ) {
            from
            pair {
              token0 {
                symbol
                id
              }
              token1 {
                symbol
                id
              }
              reserve0
              reserve1
              reserveETH
              reserveUSD
            }
            amountUSD
            amount1Out
            amount1In
            amount0Out
            amount0In
            timestamp
          }
        }
      `,
      { user: address.toLowerCase() }
    )

    if (swaps.length === 0)
      continue;
    data.push(...swaps.map((swap: any) => {
      return {
        signer: swap.from,
        from: {
          ...swap.pair.token0,
          value: swap.amount1In
        },
        to: {
          ...swap.pair.token1,
          value: swap.amount0Out
        }
      }
    }))

  }
  return data as {
    from: { id: string, symbol: string, value: string },
    to: { id: string, symbol: string, value: string }
    signer: string,
  }[]
}