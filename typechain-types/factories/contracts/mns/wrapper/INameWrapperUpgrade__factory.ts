/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INameWrapperUpgrade,
  INameWrapperUpgradeInterface,
} from "../../../../contracts/mns/wrapper/INameWrapperUpgrade";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "name",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "wrappedOwner",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "fuses",
        type: "uint32",
      },
      {
        internalType: "uint64",
        name: "expiry",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "extraData",
        type: "bytes",
      },
    ],
    name: "wrapFromUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class INameWrapperUpgrade__factory {
  static readonly abi = _abi;
  static createInterface(): INameWrapperUpgradeInterface {
    return new utils.Interface(_abi) as INameWrapperUpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INameWrapperUpgrade {
    return new Contract(address, _abi, signerOrProvider) as INameWrapperUpgrade;
  }
}
