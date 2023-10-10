import {GraphQLClient} from "graphql-request";

export const mnsMainnetGraphClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/mnsdomains/mns");

export const mnsWannseeGraphClient = new GraphQLClient("https://mxc-graph-node.mxc.com/subgraphs/name/mnsdomains/mns");

export async function getMNSAddresses(client: GraphQLClient) {
    const res = await client.request(`query getNames {
        wrappedDomains(first: 1000) {
            owner {
              id
            }
        }
    }`) as unknown as {
        wrappedDomains: {
            owner: {
                id: string
            }
        }[]
    }

    return res.wrappedDomains.map((item) => item.owner.id)
}

export default async function (client: GraphQLClient, address: string) {
    const res = await client.request(`query getNames($id: ID!) {
        wrappedDomains(where: {owner: $id},first: 1000) {
          domain {
            id
            labelName
            labelhash
            name
          }
        }
    }`, {id: address.toLowerCase()}) as unknown as {
        wrappedDomains: {
            domain: {
                labelName: string
            }
        }[]
    }
    return res.wrappedDomains
}