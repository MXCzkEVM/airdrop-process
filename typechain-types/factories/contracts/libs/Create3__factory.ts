/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Create3,
  Create3Interface,
} from "../../../contracts/libs/Create3";

const _abi = [
  {
    inputs: [],
    name: "ErrorCreatingContract",
    type: "error",
  },
  {
    inputs: [],
    name: "ErrorCreatingProxy",
    type: "error",
  },
  {
    inputs: [],
    name: "TargetAlreadyExists",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206e6693fbb725a89dcc2931fd9bf4a6826b31e46311d5c02d0cb250dcedc2134e64736f6c63430008120033";

type Create3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Create3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Create3__factory extends ContractFactory {
  constructor(...args: Create3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Create3> {
    return super.deploy(overrides || {}) as Promise<Create3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Create3 {
    return super.attach(address) as Create3;
  }
  override connect(signer: Signer): Create3__factory {
    return super.connect(signer) as Create3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Create3Interface {
    return new utils.Interface(_abi) as Create3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Create3 {
    return new Contract(address, _abi, signerOrProvider) as Create3;
  }
}
