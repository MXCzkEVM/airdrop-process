import {GraphQLClient} from "graphql-request";

interface GraphQLResponse {

}

const queryClient = new GraphQLClient("https://mxc-graph.mxc.com/subgraphs/name/mnsdomains/mns");

export async function getMainnetMNSAddresses() {
    const res = await queryClient.request(`query getNames($id: ID!) {
        wrappedDomains(where: {owner: $id},first: 1000) {
          domain {
            id
            labelName
            labelhash
            name
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

export default async function (address: string) {
    const res = await queryClient.request(`query getNames($id: ID!) {
        wrappedDomains(where: {owner: $id},first: 1000) {
          domain {
            id
            labelName
            labelhash
            name
          }
        }
    }`, {id: address}) as unknown as {
        wrappedDomains: {
            labelName: string
        }[]
    }
    return res.wrappedDomains
}