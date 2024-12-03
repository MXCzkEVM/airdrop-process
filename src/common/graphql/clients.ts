import { GraphQLClient } from 'graphql-request'

export const mnsMainnet = new GraphQLClient('https://graph-node.moonchain.com/subgraphs/name/mnsdomains/mns')
export const mnsTestnet = new GraphQLClient('https://geneva-graph-node.moonchain.com/subgraphs/name/mnsdomains/mns')

export const neoM2proMainnet = new GraphQLClient('https://graph-node.moonchain.com/subgraphs/name/mxczkevm/mep1004-graph')
export const neoM2proTestnet = new GraphQLClient('https://geneva-graph-node.moonchain.com/subgraphs/name/mxczkevm/mep1004-graph')
