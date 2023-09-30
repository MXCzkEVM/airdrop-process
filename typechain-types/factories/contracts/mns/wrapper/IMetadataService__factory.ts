/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IMetadataService,
  IMetadataServiceInterface,
} from "../../../../contracts/mns/wrapper/IMetadataService";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMetadataService__factory {
  static readonly abi = _abi;
  static createInterface(): IMetadataServiceInterface {
    return new utils.Interface(_abi) as IMetadataServiceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMetadataService {
    return new Contract(address, _abi, signerOrProvider) as IMetadataService;
  }
}
