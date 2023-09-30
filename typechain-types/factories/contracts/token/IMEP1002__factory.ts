/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMEP1002,
  IMEP1002Interface,
} from "../../../contracts/token/IMEP1002";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "geolocation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMEP1002__factory {
  static readonly abi = _abi;
  static createInterface(): IMEP1002Interface {
    return new utils.Interface(_abi) as IMEP1002Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMEP1002 {
    return new Contract(address, _abi, signerOrProvider) as IMEP1002;
  }
}
