/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ProxiedMaxisCoin,
  ProxiedMaxisCoinInterface,
} from "../../../../contracts/token/MaxisCoin.sol/ProxiedMaxisCoin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "ControllerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    name: "LPWANFee",
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
    name: "__Controllable_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "controllers",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_defaultLPWANFee",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeWhiteList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_LPWANFee",
        type: "uint256",
      },
    ],
    name: "setLPWANFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b506080516126eb61004c60003960008181610aa201528181610ae201528181610ba301528181610be30152610c7201526126eb6000f3fe6080604052600436106101c25760003560e01c806361d027b3116100f7578063a9059cbb11610095578063dd62ed3e11610064578063dd62ed3e146104ef578063e0dba60f1461050f578063e7cd4a041461052f578063f2fde38b1461054f57600080fd5b8063a9059cbb1461045f578063cd98163c1461047f578063d505accf1461049f578063da8c229e146104bf57600080fd5b80637ecebe00116100d15780637ecebe00146103ec5780638da5cb5b1461040c57806395d89b411461042a578063a457c2d71461043f57600080fd5b806361d027b31461036857806370a08231146103a1578063715018a6146103d757600080fd5b80633644e515116101645780634772b7531161013e5780634772b753146103145780634f1ef2861461032b57806352d1902d1461033e5780635d79343d1461035357600080fd5b80633644e515146102bf5780633659cfe6146102d457806339509351146102f457600080fd5b806318160ddd116101a057806318160ddd146102445780632042e5c21461026357806323b872dd14610283578063313ce567146102a357600080fd5b806306fdde03146101c7578063095ea7b3146101f25780631794bb3c14610222575b600080fd5b3480156101d357600080fd5b506101dc61056f565b6040516101e99190611f66565b60405180910390f35b3480156101fe57600080fd5b5061021261020d366004611fb5565b610601565b60405190151581526020016101e9565b34801561022e57600080fd5b5061024261023d366004611fdf565b61061b565b005b34801561025057600080fd5b5060cc545b6040519081526020016101e9565b34801561026f57600080fd5b5061024261027e36600461201b565b61087d565b34801561028f57600080fd5b5061021261029e366004611fdf565b6109db565b3480156102af57600080fd5b50604051601281526020016101e9565b3480156102cb57600080fd5b50610255610a89565b3480156102e057600080fd5b506102426102ef36600461201b565b610a98565b34801561030057600080fd5b5061021261030f366004611fb5565b610b77565b34801561032057600080fd5b506102556101645481565b61024261033936600461204c565b610b99565b34801561034a57600080fd5b50610255610c65565b34801561035f57600080fd5b50610242610d18565b34801561037457600080fd5b5061016354610389906001600160a01b031681565b6040516001600160a01b0390911681526020016101e9565b3480156103ad57600080fd5b506102556103bc36600461201b565b6001600160a01b0316600090815260ca602052604090205490565b3480156103e357600080fd5b50610242610d63565b3480156103f857600080fd5b5061025561040736600461201b565b610d75565b34801561041857600080fd5b506097546001600160a01b0316610389565b34801561043657600080fd5b506101dc610d94565b34801561044b57600080fd5b5061021261045a366004611fb5565b610da3565b34801561046b57600080fd5b5061021261047a366004611fb5565b610e29565b34801561048b57600080fd5b5061024261049a36600461210e565b610eb7565b3480156104ab57600080fd5b506102426104ba366004612127565b610eec565b3480156104cb57600080fd5b506102126104da36600461201b565b60c96020526000908152604090205460ff1681565b3480156104fb57600080fd5b5061025561050a36600461219a565b611050565b34801561051b57600080fd5b5061024261052a3660046121cd565b61107b565b34801561053b57600080fd5b5061024261054a36600461201b565b6110e2565b34801561055b57600080fd5b5061024261056a36600461201b565b611179565b606060cd805461057e90612209565b80601f01602080910402602001604051908101604052809291908181526020018280546105aa90612209565b80156105f75780601f106105cc576101008083540402835291602001916105f7565b820191906000526020600020905b8154815290600101906020018083116105da57829003601f168201915b5050505050905090565b60003361060f818585611212565b60019150505b92915050565b600054610100900460ff161580801561063b5750600054600160ff909116105b806106555750303b158015610655575060005460ff166001145b6106bd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156106e0576000805461ff0019166101001790555b6106e8610d18565b6107316040518060400160405280600a81526020016926b0bc34b99021b7b4b760b11b815250604051806040016040528060058152602001644d4158495360d81b815250611336565b610757604051806040016040528060058152602001644d4158495360d81b815250611367565b61016380546001600160a01b0319166001600160a01b03861617905561016482905561079d83601261078a90600a612337565b610798906305f5e100612346565b6113b1565b6001600160a01b03838116600081815261016560205260408082208054600160ff199182168117909255610166805480840182557fa5a4c57b7184ec73d55be4993773cb4eef681bc86a28d0285cd66efb50676a9790810180546001600160a01b03199081169098179055968b1680865293852080549092168317909155805491820181559092529201805490911690911790558015610877576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b33600090815260c9602052604090205460ff166108ac5760405162461bcd60e51b81526004016106b49061235d565b6001600160a01b038116600090815261016560205260408120805460ff191690555b610166548110156109d757816001600160a01b031661016682815481106108f7576108f76123a5565b6000918252602090912001546001600160a01b0316036109c5576101668054610922906001906123bb565b81548110610932576109326123a5565b60009182526020909120015461016680546001600160a01b03909216918390811061095f5761095f6123a5565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555061016680548061099f5761099f6123ce565b600082815260209020810160001990810180546001600160a01b03191690550190555050565b806109cf816123e4565b9150506108ce565b5050565b6000336109e9858285611472565b6001600160a01b0385166000908152610165602052604090205460ff1680610a2a57506001600160a01b0384166000908152610165602052604090205460ff165b15610a3f57610a3a8585856114e6565b610a7c565b6000610a4a84611691565b61016354909150610a669087906001600160a01b0316836114e6565b610a7a8686610a7584886123bb565b6114e6565b505b60019150505b9392505050565b6000610a936116e3565b905090565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610ae05760405162461bcd60e51b81526004016106b4906123fd565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610b2960008051602061266f833981519152546001600160a01b031690565b6001600160a01b031614610b4f5760405162461bcd60e51b81526004016106b490612449565b610b588161175e565b60408051600080825260208201909252610b7491839190611766565b50565b60003361060f818585610b8a8383611050565b610b949190612495565b611212565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610be15760405162461bcd60e51b81526004016106b4906123fd565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610c2a60008051602061266f833981519152546001600160a01b031690565b6001600160a01b031614610c505760405162461bcd60e51b81526004016106b490612449565b610c598261175e565b6109d782826001611766565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d055760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016106b4565b5060008051602061266f83398151915290565b600054610100900460ff16610d3f5760405162461bcd60e51b81526004016106b4906124a8565b33600090815260c960205260409020805460ff19166001179055610d616118d6565b565b610d6b611905565b610d61600061195f565b6001600160a01b03811660009081526101306020526040812054610615565b606060ce805461057e90612209565b60003381610db18286611050565b905083811015610e115760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106b4565b610e1e8286868403611212565b506001949350505050565b336000908152610165602052604081205460ff1680610e6157506001600160a01b0383166000908152610165602052604090205460ff165b15610e7657610e713384846114e6565b610eae565b6000610e8183611691565b61016354909150610e9d9033906001600160a01b0316836114e6565b610eac3385610a7584876123bb565b505b50600192915050565b33600090815260c9602052604090205460ff16610ee65760405162461bcd60e51b81526004016106b49061235d565b61016455565b83421115610f3c5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016106b4565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610f6b8c6119b1565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610fc6826119da565b90506000610fd682878787611a28565b9050896001600160a01b0316816001600160a01b0316146110395760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016106b4565b6110448a8a8a611212565b50505050505050505050565b6001600160a01b03918216600090815260cb6020908152604080832093909416825291909152205490565b611083611905565b6001600160a01b038216600081815260c96020908152604091829020805460ff191685151590811790915591519182527f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf87910160405180910390a25050565b33600090815260c9602052604090205460ff166111115760405162461bcd60e51b81526004016106b49061235d565b6001600160a01b0316600081815261016560205260408120805460ff19166001908117909155610166805491820181559091527fa5a4c57b7184ec73d55be4993773cb4eef681bc86a28d0285cd66efb50676a970180546001600160a01b0319169091179055565b611181611905565b6001600160a01b0381166111e65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106b4565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355610b748161195f565b6001600160a01b0383166112745760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106b4565b6001600160a01b0382166112d55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106b4565b6001600160a01b03838116600081815260cb602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600054610100900460ff1661135d5760405162461bcd60e51b81526004016106b4906124a8565b6109d78282611a50565b600054610100900460ff1661138e5760405162461bcd60e51b81526004016106b4906124a8565b610b7481604051806040016040528060018152602001603160f81b815250611a90565b6001600160a01b0382166114075760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106b4565b8060cc60008282546114199190612495565b90915550506001600160a01b038216600081815260ca60209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600061147e8484611050565b9050600019811461087757818110156114d95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106b4565b6108778484848403611212565b6001600160a01b03831661154a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106b4565b6001600160a01b0382166115ac5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106b4565b6001600160a01b038316600090815260ca6020526040902054818110156116245760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106b4565b6001600160a01b03808516600081815260ca602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906116849086815260200190565b60405180910390a3610877565b6000610164546000036116a657506000919050565b336000908152610165602052604090205460ff16156116c757506000919050565b61271061016454836116d99190612346565b61061591906124f3565b6000610a937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61171260fc5490565b60fd546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b610b74611905565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561179e5761179983611ad1565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156117f8575060408051601f3d908101601f191682019092526117f591810190612515565b60015b61185b5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016106b4565b60008051602061266f83398151915281146118ca5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016106b4565b50611799838383611b6d565b600054610100900460ff166118fd5760405162461bcd60e51b81526004016106b4906124a8565b610d61611b92565b6097546001600160a01b03163314610d615760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106b4565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381166000908152610130602052604090208054600181018255905b50919050565b60006106156119e76116e3565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000611a3987878787611bc2565b91509150611a4681611c86565b5095945050505050565b600054610100900460ff16611a775760405162461bcd60e51b81526004016106b4906124a8565b60cd611a83838261257c565b5060ce611799828261257c565b600054610100900460ff16611ab75760405162461bcd60e51b81526004016106b4906124a8565b81516020928301208151919092012060fc9190915560fd55565b6001600160a01b0381163b611b3e5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016106b4565b60008051602061266f83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b611b7683611dd0565b600082511180611b835750805b15611799576108778383611e10565b600054610100900460ff16611bb95760405162461bcd60e51b81526004016106b4906124a8565b610d613361195f565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611bf95750600090506003611c7d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611c4d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c7657600060019250925050611c7d565b9150600090505b94509492505050565b6000816004811115611c9a57611c9a61263c565b03611ca25750565b6001816004811115611cb657611cb661263c565b03611d035760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106b4565b6002816004811115611d1757611d1761263c565b03611d645760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016106b4565b6003816004811115611d7857611d7861263c565b03610b745760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016106b4565b611dd981611ad1565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b611e785760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016106b4565b600080846001600160a01b031684604051611e939190612652565b600060405180830381855af49150503d8060008114611ece576040519150601f19603f3d011682016040523d82523d6000602084013e611ed3565b606091505b5091509150611efb828260405180606001604052806027815260200161268f60279139611f04565b95945050505050565b60608315611f13575081610a82565b610a828383815115611f285781518083602001fd5b8060405162461bcd60e51b81526004016106b49190611f66565b60005b83811015611f5d578181015183820152602001611f45565b50506000910152565b6020815260008251806020840152611f85816040850160208701611f42565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114611fb057600080fd5b919050565b60008060408385031215611fc857600080fd5b611fd183611f99565b946020939093013593505050565b600080600060608486031215611ff457600080fd5b611ffd84611f99565b925061200b60208501611f99565b9150604084013590509250925092565b60006020828403121561202d57600080fd5b610a8282611f99565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561205f57600080fd5b61206883611f99565b9150602083013567ffffffffffffffff8082111561208557600080fd5b818501915085601f83011261209957600080fd5b8135818111156120ab576120ab612036565b604051601f8201601f19908116603f011681019083821181831017156120d3576120d3612036565b816040528281528860208487010111156120ec57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60006020828403121561212057600080fd5b5035919050565b600080600080600080600060e0888a03121561214257600080fd5b61214b88611f99565b965061215960208901611f99565b95506040880135945060608801359350608088013560ff8116811461217d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156121ad57600080fd5b6121b683611f99565b91506121c460208401611f99565b90509250929050565b600080604083850312156121e057600080fd5b6121e983611f99565b9150602083013580151581146121fe57600080fd5b809150509250929050565b600181811c9082168061221d57607f821691505b6020821081036119d457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561228e5781600019048211156122745761227461223d565b8085161561228157918102915b93841c9390800290612258565b509250929050565b6000826122a557506001610615565b816122b257506000610615565b81600181146122c857600281146122d2576122ee565b6001915050610615565b60ff8411156122e3576122e361223d565b50506001821b610615565b5060208310610133831016604e8410600b8410161715612311575081810a610615565b61231b8383612253565b806000190482111561232f5761232f61223d565b029392505050565b6000610a8260ff841683612296565b80820281158282048414176106155761061561223d565b60208082526028908201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604082015267373a3937b63632b960c11b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b818103818111156106155761061561223d565b634e487b7160e01b600052603160045260246000fd5b6000600182016123f6576123f661223d565b5060010190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b808201808211156106155761061561223d565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008261251057634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561252757600080fd5b5051919050565b601f82111561179957600081815260208120601f850160051c810160208610156125555750805b601f850160051c820191505b8181101561257457828155600101612561565b505050505050565b815167ffffffffffffffff81111561259657612596612036565b6125aa816125a48454612209565b8461252e565b602080601f8311600181146125df57600084156125c75750858301515b600019600386901b1c1916600185901b178555612574565b600085815260208120601f198616915b8281101561260e578886015182559484019460019091019084016125ef565b508582101561262c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052602160045260246000fd5b60008251612664818460208701611f42565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207ea933bd7c7e2f6928e2f603a78e76f4e0c90d2d8e97267cc0938b0504db961564736f6c63430008120033";

type ProxiedMaxisCoinConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxiedMaxisCoinConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxiedMaxisCoin__factory extends ContractFactory {
  constructor(...args: ProxiedMaxisCoinConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxiedMaxisCoin> {
    return super.deploy(overrides || {}) as Promise<ProxiedMaxisCoin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxiedMaxisCoin {
    return super.attach(address) as ProxiedMaxisCoin;
  }
  override connect(signer: Signer): ProxiedMaxisCoin__factory {
    return super.connect(signer) as ProxiedMaxisCoin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxiedMaxisCoinInterface {
    return new utils.Interface(_abi) as ProxiedMaxisCoinInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxiedMaxisCoin {
    return new Contract(address, _abi, signerOrProvider) as ProxiedMaxisCoin;
  }
}