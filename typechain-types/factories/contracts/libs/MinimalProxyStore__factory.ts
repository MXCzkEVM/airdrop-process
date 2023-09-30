/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MinimalProxyStore,
  MinimalProxyStoreInterface,
} from "../../../contracts/libs/MinimalProxyStore";

const _abi = [
  {
    inputs: [],
    name: "ContextOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "CreateError",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212209dcf95d43f91400e29959e5183eff42482e8bea650f554d83f8e5414d4e3cba764736f6c63430008120033";

type MinimalProxyStoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinimalProxyStoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinimalProxyStore__factory extends ContractFactory {
  constructor(...args: MinimalProxyStoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MinimalProxyStore> {
    return super.deploy(overrides || {}) as Promise<MinimalProxyStore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MinimalProxyStore {
    return super.attach(address) as MinimalProxyStore;
  }
  override connect(signer: Signer): MinimalProxyStore__factory {
    return super.connect(signer) as MinimalProxyStore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalProxyStoreInterface {
    return new utils.Interface(_abi) as MinimalProxyStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinimalProxyStore {
    return new Contract(address, _abi, signerOrProvider) as MinimalProxyStore;
  }
}
