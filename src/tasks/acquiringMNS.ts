import type { GraphQLClient } from 'graphql-request'

export interface GraphResultByDomains {
  wrappedDomains: {
    owner: {
      id: string
    }
    domain: {
      labelName: string
    }
  }[]
}

export async function getMNSAddresses(client: GraphQLClient) {
  let skip = 0
  let addresses: string[] = []
  for (let i = 0; i < 100; i++) {
    skip = i * 1000
    const { wrappedDomains } = await client.request<GraphResultByDomains>(
      `query getNames {
            wrappedDomains(skip: ${skip}, first: 1000) {
                owner {
                  id
                }
            }
        }`,
    )
    if (wrappedDomains.length === 0)
      break
    addresses = [...addresses, ...wrappedDomains.map(item => item.owner.id)]
  }

  return addresses
}

export default async function (client: GraphQLClient, address: string) {
  const { wrappedDomains } = await client.request<GraphResultByDomains>(
    `query getNames($id: ID!) {
        wrappedDomains(where: {owner: $id},first: 1000) {
          domain {
            id
            labelName
            labelhash
            name
          }
        }
    }`,
    { id: address.toLowerCase() },
  )
  return wrappedDomains
}
