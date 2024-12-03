import { ethers } from 'ethers'
import { chains } from '../config'

export const providers = {
  [chains.geneva.id]: new ethers.providers.StaticJsonRpcProvider(chains.moonchain.rpc),
  [chains.moonchain.id]: new ethers.providers.StaticJsonRpcProvider(chains.ethereum.rpc),
  [chains.ethereum.id]: new ethers.providers.StaticJsonRpcProvider(chains.sepolia.rpc),
  [chains.sepolia.id]: new ethers.providers.StaticJsonRpcProvider(chains.geneva.rpc),
} as const
