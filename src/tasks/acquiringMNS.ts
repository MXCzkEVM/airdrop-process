import {GraphQLClient} from "graphql-request";

export const mnsMainnetGraphClient = new GraphQLClient("https://graph-node.moonchain.com/subgraphs/name/mnsdomains/mns");

export const mnsGenevaGraphClient = new GraphQLClient("https://geneva-graph-node.moonchain.com/subgraphs/name/mnsdomains/mns");

export async function getMNSAddresses(client: GraphQLClient) {
    let skip = 0;
    let addresses: string[] = [];
    for (let i = 0; i < 100; i++) {
        skip = i * 1000;
        const res = await client.request(`query getNames {
            wrappedDomains(skip: ${skip},first: 1000) {
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
        if(res.wrappedDomains.length === 0) {
            break;
        }
        addresses = [...addresses, ...res.wrappedDomains.map(item => item.owner.id)]
    }

    return addresses;
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