/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SensorProfile,
  SensorProfileInterface,
} from "../../../../contracts/token/MEP803.sol/SensorProfile";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_appContractAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_sensorProfileURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tier",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sensorProfileContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_appContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "_sensorProfileURI",
        type: "string",
      },
    ],
    name: "SensorProfileDeployed",
    type: "event",
  },
  {
    inputs: [],
    name: "appContractAddress",
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
    inputs: [],
    name: "getTier",
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
    inputs: [],
    name: "profileURIHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tier",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161066438038061066483398101604081905261002f916101ba565b600180546001600160a01b0385166001600160a01b0319918216179091556000805490911633178155610061836100c9565b60028190559050600361007483826102c5565b50826040516100839190610384565b604051908190038120906001600160a01b0386169030907f58c01c7a654a86f7254a6bba29359082f045ac3706d50c88388e7a41242e75a290600090a4505050506103a0565b6000816040516020016100dc9190610384565b604051602081830303815290604052805190602001209050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561012a578181015183820152602001610112565b50506000910152565b600082601f83011261014457600080fd5b81516001600160401b038082111561015e5761015e6100f9565b604051601f8301601f19908116603f01168101908282118183101715610186576101866100f9565b8160405283815286602085880101111561019f57600080fd5b6101b084602083016020890161010f565b9695505050505050565b6000806000606084860312156101cf57600080fd5b83516001600160a01b03811681146101e657600080fd5b60208501519093506001600160401b038082111561020357600080fd5b61020f87838801610133565b9350604086015191508082111561022557600080fd5b5061023286828701610133565b9150509250925092565b600181811c9082168061025057607f821691505b60208210810361027057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156102c057600081815260208120601f850160051c8101602086101561029d5750805b601f850160051c820191505b818110156102bc578281556001016102a9565b5050505b505050565b81516001600160401b038111156102de576102de6100f9565b6102f2816102ec845461023c565b84610276565b602080601f831160018114610327576000841561030f5750858301515b600019600386901b1c1916600185901b1785556102bc565b600085815260208120601f198616915b8281101561035657888601518255948401946001909101908401610337565b50858210156103745787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000825161039681846020870161010f565b9190910192915050565b6102b5806103af6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806316f4d0221461005c578063363e998d1461007a5780635ad701c2146100a55780638da5cb5b146100ad578063b0677cb1146100c0575b600080fd5b6100646100d7565b60405161007191906101f7565b60405180910390f35b60015461008d906001600160a01b031681565b6040516001600160a01b039091168152602001610071565b610064610165565b60005461008d906001600160a01b031681565b6100c960025481565b604051908152602001610071565b600380546100e490610245565b80601f016020809104026020016040519081016040528092919081815260200182805461011090610245565b801561015d5780601f106101325761010080835404028352916020019161015d565b820191906000526020600020905b81548152906001019060200180831161014057829003601f168201915b505050505081565b60606003805461017490610245565b80601f01602080910402602001604051908101604052809291908181526020018280546101a090610245565b80156101ed5780601f106101c2576101008083540402835291602001916101ed565b820191906000526020600020905b8154815290600101906020018083116101d057829003601f168201915b5050505050905090565b600060208083528351808285015260005b8181101561022457858101830151858201604001528201610208565b506000604082860101526040601f19601f8301168501019250505092915050565b600181811c9082168061025957607f821691505b60208210810361027957634e487b7160e01b600052602260045260246000fd5b5091905056fea264697066735822122075ec4f8a472cfc8496bd1caf9ac500bf395326dc5e3b8d4ddd719e4cbfceb1eb64736f6c63430008120033";

type SensorProfileConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SensorProfileConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SensorProfile__factory extends ContractFactory {
  constructor(...args: SensorProfileConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _appContractAddress: PromiseOrValue<string>,
    _sensorProfileURI: PromiseOrValue<string>,
    _tier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SensorProfile> {
    return super.deploy(
      _appContractAddress,
      _sensorProfileURI,
      _tier,
      overrides || {}
    ) as Promise<SensorProfile>;
  }
  override getDeployTransaction(
    _appContractAddress: PromiseOrValue<string>,
    _sensorProfileURI: PromiseOrValue<string>,
    _tier: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _appContractAddress,
      _sensorProfileURI,
      _tier,
      overrides || {}
    );
  }
  override attach(address: string): SensorProfile {
    return super.attach(address) as SensorProfile;
  }
  override connect(signer: Signer): SensorProfile__factory {
    return super.connect(signer) as SensorProfile__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SensorProfileInterface {
    return new utils.Interface(_abi) as SensorProfileInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SensorProfile {
    return new Contract(address, _abi, signerOrProvider) as SensorProfile;
  }
}
