/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SSTORE2Map,
  SSTORE2MapInterface,
} from "../../../../contracts/libs/sstore2/SSTORE2Map";

const _abi = [
  {
    inputs: [],
    name: "WriteError",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bb6fbf81ffa85ffbae9392877ea1609613fb3f6da6db15f9216cbd3ce380f87064736f6c63430008120033";

type SSTORE2MapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SSTORE2MapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SSTORE2Map__factory extends ContractFactory {
  constructor(...args: SSTORE2MapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SSTORE2Map> {
    return super.deploy(overrides || {}) as Promise<SSTORE2Map>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SSTORE2Map {
    return super.attach(address) as SSTORE2Map;
  }
  override connect(signer: Signer): SSTORE2Map__factory {
    return super.connect(signer) as SSTORE2Map__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SSTORE2MapInterface {
    return new utils.Interface(_abi) as SSTORE2MapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SSTORE2Map {
    return new Contract(address, _abi, signerOrProvider) as SSTORE2Map;
  }
}
