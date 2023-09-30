/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC6551Account,
  ERC6551AccountInterface,
} from "../../../contracts/token/ERC6551Account";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "TransactionExecuted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "executeCall",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
  "0x608060405234801561001057600080fd5b50610a22806100206000396000f3fe6080604052600436106100595760003560e01c806301ffc9a7146100655780631626ba7e1461009a5780638da5cb5b146100d35780639e5d4c4914610100578063affed0e014610120578063fc0c546a1461014457600080fd5b3661006057005b600080fd5b34801561007157600080fd5b506100856100803660046106c5565b61017c565b60405190151581526020015b60405180910390f35b3480156100a657600080fd5b506100ba6100b5366004610705565b6101b3565b6040516001600160e01b03199091168152602001610091565b3480156100df57600080fd5b506100e86101ea565b6040516001600160a01b039091168152602001610091565b61011361010e3660046107d8565b6102da565b60405161009191906108b1565b34801561012c57600080fd5b5061013660005481565b604051908152602001610091565b34801561015057600080fd5b5061015961040d565b604080519384526001600160a01b03909216602084015290820152606001610091565b60006001600160e01b031982166301ffc9a760e01b14806101ad57506001600160e01b03198216630801407360e31b145b92915050565b6000806101c86101c16101ea565b8585610425565b905080156101e05750630b135d3f60e11b90506101ad565b5060009392505050565b600080600080306001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401606060405180830381865afa15801561022e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025291906108c4565b925092509250468314610269576000935050505090565b6040516331a9108f60e11b8152600481018290526001600160a01b03831690636352211e90602401602060405180830381865afa1580156102ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d291906108fd565b935050505090565b60606102e46101ea565b6001600160a01b0316336001600160a01b03161461033a5760405162461bcd60e51b815260206004820152600f60248201526e2737ba103a37b5b2b71037bbb732b960891b604482015260640160405180910390fd5b60008081546103489061091a565b9190508190555083856001600160a01b03167f47d99ad340f52da66535aff7e10da1ceb85a32bcbd9fa1c42314d194545e14d2858560405161038b929190610941565b60405180910390a36000856001600160a01b03168585856040516103b0929190610970565b60006040518083038185875af1925050503d80600081146103ed576040519150601f19603f3d011682016040523d82523d6000602084013e6103f2565b606091505b50925090508061040457815160208301fd5b50949350505050565b600080600061041a610569565b925092509250909192565b600080600061043485856105bc565b9092509050600081600481111561044d5761044d610980565b14801561046b5750856001600160a01b0316826001600160a01b0316145b1561047b57600192505050610562565b600080876001600160a01b0316631626ba7e60e01b88886040516024016104a3929190610996565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516104e191906109b7565b600060405180830381855afa9150503d806000811461051c576040519150601f19603f3d011682016040523d82523d6000602084013e610521565b606091505b5091509150818015610534575080516020145b801561055b57508051630b135d3f60e11b9061055990830160209081019084016109d3565b145b9450505050505b9392505050565b60408051606080825260808201909252600091829182918291906020820181803683370190505090506060604d60208301303c808060200190518101906105b091906108c4565b93509350935050909192565b60008082516041036105f25760208301516040840151606085015160001a6105e687828585610601565b945094505050506105fa565b506000905060025b9250929050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561063857506000905060036106bc565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561068c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166106b5576000600192509250506106bc565b9150600090505b94509492505050565b6000602082840312156106d757600080fd5b81356001600160e01b03198116811461056257600080fd5b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561071857600080fd5b82359150602083013567ffffffffffffffff8082111561073757600080fd5b818501915085601f83011261074b57600080fd5b81358181111561075d5761075d6106ef565b604051601f8201601f19908116603f01168101908382118183101715610785576107856106ef565b8160405282815288602084870101111561079e57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6001600160a01b03811681146107d557600080fd5b50565b600080600080606085870312156107ee57600080fd5b84356107f9816107c0565b935060208501359250604085013567ffffffffffffffff8082111561081d57600080fd5b818701915087601f83011261083157600080fd5b81358181111561084057600080fd5b88602082850101111561085257600080fd5b95989497505060200194505050565b60005b8381101561087c578181015183820152602001610864565b50506000910152565b6000815180845261089d816020860160208601610861565b601f01601f19169290920160200192915050565b6020815260006105626020830184610885565b6000806000606084860312156108d957600080fd5b8351925060208401516108eb816107c0565b80925050604084015190509250925092565b60006020828403121561090f57600080fd5b8151610562816107c0565b60006001820161093a57634e487b7160e01b600052601160045260246000fd5b5060010190565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b8183823760009101908152919050565b634e487b7160e01b600052602160045260246000fd5b8281526040602082015260006109af6040830184610885565b949350505050565b600082516109c9818460208701610861565b9190910192915050565b6000602082840312156109e557600080fd5b505191905056fea26469706673582212201ebf4844e5a4174b9887c821c192cdf5803ae10ea2c6cc1999f7402b12a5b00264736f6c63430008120033";

type ERC6551AccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC6551AccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC6551Account__factory extends ContractFactory {
  constructor(...args: ERC6551AccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC6551Account> {
    return super.deploy(overrides || {}) as Promise<ERC6551Account>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC6551Account {
    return super.attach(address) as ERC6551Account;
  }
  override connect(signer: Signer): ERC6551Account__factory {
    return super.connect(signer) as ERC6551Account__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC6551AccountInterface {
    return new utils.Interface(_abi) as ERC6551AccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC6551Account {
    return new Contract(address, _abi, signerOrProvider) as ERC6551Account;
  }
}
