/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MinimalReceiver,
  MinimalReceiverInterface,
} from "../../../contracts/libs/MinimalReceiver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610488806100206000396000f3fe6080604052600436106100435760003560e01c806301ffc9a71461004f578063150b7a0214610084578063bc197c81146100c8578063f23a6e61146100f457600080fd5b3661004a57005b600080fd5b34801561005b57600080fd5b5061006f61006a366004610157565b610120565b60405190151581526020015b60405180910390f35b34801561009057600080fd5b506100af61009f36600461025b565b630a85bd0160e11b949350505050565b6040516001600160e01b0319909116815260200161007b565b3480156100d457600080fd5b506100af6100e3366004610343565b63bc197c8160e01b95945050505050565b34801561010057600080fd5b506100af61010f3660046103ed565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b148061015157506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006020828403121561016957600080fd5b81356001600160e01b03198116811461018157600080fd5b9392505050565b80356001600160a01b038116811461019f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156101e3576101e36101a4565b604052919050565b600082601f8301126101fc57600080fd5b813567ffffffffffffffff811115610216576102166101a4565b610229601f8201601f19166020016101ba565b81815284602083860101111561023e57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561027157600080fd5b61027a85610188565b935061028860208601610188565b925060408501359150606085013567ffffffffffffffff8111156102ab57600080fd5b6102b7878288016101eb565b91505092959194509250565b600082601f8301126102d457600080fd5b8135602067ffffffffffffffff8211156102f0576102f06101a4565b8160051b6102ff8282016101ba565b928352848101820192828101908785111561031957600080fd5b83870192505b848310156103385782358252918301919083019061031f565b979650505050505050565b600080600080600060a0868803121561035b57600080fd5b61036486610188565b945061037260208701610188565b9350604086013567ffffffffffffffff8082111561038f57600080fd5b61039b89838a016102c3565b945060608801359150808211156103b157600080fd5b6103bd89838a016102c3565b935060808801359150808211156103d357600080fd5b506103e0888289016101eb565b9150509295509295909350565b600080600080600060a0868803121561040557600080fd5b61040e86610188565b945061041c60208701610188565b93506040860135925060608601359150608086013567ffffffffffffffff81111561044657600080fd5b6103e0888289016101eb56fea2646970667358221220a6f5c7166b924ccf2a9c43d350c3656c8b0be11a08b79ea61068b15524e8b9a564736f6c63430008120033";

type MinimalReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinimalReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinimalReceiver__factory extends ContractFactory {
  constructor(...args: MinimalReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MinimalReceiver> {
    return super.deploy(overrides || {}) as Promise<MinimalReceiver>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MinimalReceiver {
    return super.attach(address) as MinimalReceiver;
  }
  override connect(signer: Signer): MinimalReceiver__factory {
    return super.connect(signer) as MinimalReceiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinimalReceiverInterface {
    return new utils.Interface(_abi) as MinimalReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinimalReceiver {
    return new Contract(address, _abi, signerOrProvider) as MinimalReceiver;
  }
}
