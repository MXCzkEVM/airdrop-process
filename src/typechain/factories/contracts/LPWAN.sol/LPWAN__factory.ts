/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { LPWAN, LPWANInterface } from "../../../contracts/LPWAN.sol/LPWAN";

const _abi = [
  {
    inputs: [],
    name: "INVALID_REWARD",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_SIGNATURE",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BurnExcessToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimReward",
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
    name: "PERMIT_TYPEHASH",
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
    name: "PERMIT_TYPEHASH2",
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
    name: "__Controllable_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
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
    name: "approveToken",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnExcessToken",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "totalReward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "burn",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "claimSupernodeReward",
    outputs: [],
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
    name: "getMEP1004Addr",
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
        name: "MEP1004Address_",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_SNCode",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_H3Index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_regionID",
        type: "string",
      },
    ],
    name: "mintMEP1004Stations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_H3Index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_SNCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "regionID",
        type: "string",
      },
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "mintMEP1004StationsBySignature",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "MEP1004Address",
        type: "address",
      },
    ],
    name: "setMEP1004Addr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_MEP1002TokenId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_MEP1004TokenIds",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "_item",
        type: "string",
      },
    ],
    name: "submitLocationProofs",
    outputs: [],
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
    name: "withdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016066556118ac806100256000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806390ce65e7116100ad578063da8c229e11610071578063da8c229e1461026a578063e0dba60f1461028d578063e4340081146102a0578063f2fde38b146102b3578063f4a6842a146102c657600080fd5b806390ce65e7146101fd5780639234e6e31461020e578063c4d66de814610221578063cdceeba014610234578063da3e33971461024757600080fd5b80635a6b26ba116100f45780635a6b26ba146101b45780635d79343d146101c9578063715018a6146101d1578063772dc071146101d95780638da5cb5b146101ec57600080fd5b8063157b4378146101265780632b371f351461015657806330adf81f146101865780633644e515146101ac575b600080fd5b6101396101343660046111aa565b6102d9565b6040516001600160a01b0390911681526020015b60405180910390f35b7f8dd9456617caccce5d33090b1c7aa479dcb0d9a117544a09b7565983194f27fe5b60405190815260200161014d565b7f3be6e386cfa60d071d03c39da574d29ace3a05f155c71cbdc1d29d0152b7dac8610178565b610178610334565b6101c76101c23660046111c5565b6103e3565b005b6101c7610429565b6101c7610474565b6101c76101e73660046112a6565b610486565b6033546001600160a01b0316610139565b6067546001600160a01b0316610139565b6101c761021c366004611374565b610523565b6101c761022f3660046111aa565b6106c6565b6101c76102423660046113f5565b6107f2565b61025a6102553660046114c8565b61088c565b604051901515815260200161014d565b61025a6102783660046111aa565b60656020526000908152604090205460ff1681565b6101c761029b366004611504565b610938565b6101c76102ae36600461153b565b61099f565b6101c76102c13660046111aa565b610a1d565b6101c76102d43660046115f5565b610ab9565b3360009081526065602052604081205460ff166103115760405162461bcd60e51b81526004016103089061160e565b60405180910390fd5b50606780546001600160a01b0319166001600160a01b038316179055805b919050565b60006103de604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f2b9b15b8aef2ef8984e92922c277253d63dd067d601c6619104c01cf04ce2754918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b905090565b3360009081526065602052604090205460ff166104125760405162461bcd60e51b81526004016103089061160e565b6104256001600160a01b03831682610b30565b5050565b600054610100900460ff166104505760405162461bcd60e51b815260040161030890611656565b336000908152606560205260409020805460ff19166001179055610472610beb565b565b61047c610c1a565b6104726000610c74565b3360009081526065602052604090205460ff166104b55760405162461bcd60e51b81526004016103089061160e565b6067546040516303dd904360e41b81526001600160a01b0390911690633dd90430906104eb9087908790879087906004016116f1565b600060405180830381600087803b15801561050557600080fd5b505af1158015610519573d6000803e3d6000fd5b5050505050505050565b61052b610cc6565b6001600160a01b03831660009081526065602052604090205460ff1661056457604051631468054760e31b815260040160405180910390fd5b6000610571868533610d1f565b90506105b4848285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dd192505050565b6105d157604051631468054760e31b815260040160405180910390fd5b33600090815260686020526040902054861015610601576040516393e2d7eb60e01b815260040160405180910390fd5b3360009081526068602052604081205461061b9088611738565b3360009081526068602052604090208890559050851561064557610640600082610b4d565b610658565b6106586001600160a01b03891682610b30565b856106635787610666565b60005b6001600160a01b0316336001600160a01b03167f7e77f685b38c861064cb08f2776eb5dfd3c82f652ed9f21221b8c53b75628e51836040516106aa91815260200190565b60405180910390a350506106be6001606655565b505050505050565b600054610100900460ff16158080156106e65750600054600160ff909116105b806107005750303b158015610700575060005460ff166001145b6107635760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610308565b6000805460ff191660011790558015610786576000805461ff0019166101001790555b606780546001600160a01b0319166001600160a01b0384161790556107a9610429565b8015610425576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b3360009081526065602052604090205460ff166108215760405162461bcd60e51b81526004016103089061160e565b6067546040516306fde15160e31b81526001600160a01b03909116906337ef0a88906108559086908690869060040161175f565b600060405180830381600087803b15801561086f57600080fd5b505af1158015610883573d6000803e3d6000fd5b50505050505050565b3360009081526065602052604081205460ff166108bb5760405162461bcd60e51b81526004016103089061160e565b60405163095ea7b360e01b81526001600160a01b0384811660048301526024820184905285169063095ea7b3906044016020604051808303816000875af115801561090a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092e91906117b4565b90505b9392505050565b610940610c1a565b6001600160a01b038216600081815260656020908152604091829020805460ff191685151590811790915591519182527f4c97694570a07277810af7e5669ffd5f6a2d6b74b6e9a274b8b870fd5114cf87910160405180910390a25050565b6109ac8686858585610f13565b6067546040516303dd904360e41b81526001600160a01b0390911690633dd90430906109e2908a9089908b908a906004016116f1565b600060405180830381600087803b1580156109fc57600080fd5b505af1158015610a10573d6000803e3d6000fd5b5050505050505050505050565b610a25610c1a565b6001600160a01b038116610a8a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610308565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355610ab681610c74565b50565b3360009081526065602052604090205460ff16610ae85760405162461bcd60e51b81526004016103089061160e565b610af3600082610b4d565b437f50b7fb3383de2508212f88c1dd0d32ddf0ca63749f5ff5d6c06538f9f872ae4e82604051610b2591815260200190565b60405180910390a250565b801580610b4457506001600160a01b038216155b15610b4d575050565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610b9a576040519150601f19603f3d011682016040523d82523d6000602084013e610b9f565b606091505b5050905080610be65760405162461bcd60e51b8152602060048201526013602482015272115512081d1c985b9cd9995c8819985a5b1959606a1b6044820152606401610308565b505050565b600054610100900460ff16610c125760405162461bcd60e51b815260040161030890611656565b610472610fba565b6033546001600160a01b031633146104725760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610308565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600260665403610d185760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610308565b6002606655565b6000610d29610334565b7f8dd9456617caccce5d33090b1c7aa479dcb0d9a117544a09b7565983194f27fe60408051602081019290925281018690526001600160a01b0380861660608301528416608082015260a00160405160208183030381529060405280519060200120604051602001610db292919061190160f01b81526002810192909252602282015260420190565b6040516020818303038152906040528051906020012090509392505050565b6000806000610de08585610fea565b90925090506000816004811115610df957610df96117d1565b148015610e175750856001600160a01b0316826001600160a01b0316145b15610e2757600192505050610931565b600080876001600160a01b0316631626ba7e60e01b8888604051602401610e4f9291906117e7565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610e8d9190611800565b600060405180830381855afa9150503d8060008114610ec8576040519150601f19603f3d011682016040523d82523d6000602084013e610ecd565b606091505b5091509150818015610ee0575080516020145b8015610f0757508051630b135d3f60e11b90610f05908301602090810190840161181c565b145b98975050505050505050565b6001600160a01b03831660009081526065602052604090205460ff16610f4c57604051631468054760e31b815260040160405180910390fd5b6000610f5a8686863361102f565b9050610f9d848285858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610dd192505050565b6106be57604051631468054760e31b815260040160405180910390fd5b600054610100900460ff16610fe15760405162461bcd60e51b815260040161030890611656565b61047233610c74565b60008082516041036110205760208301516040840151606085015160001a611014878285856110cf565b94509450505050611028565b506000905060025b9250929050565b6000611039610334565b7f3be6e386cfa60d071d03c39da574d29ace3a05f155c71cbdc1d29d0152b7dac886868686604051602001611072959493929190611835565b604051602081830303815290604052805190602001206040516020016110af92919061190160f01b81526002810192909252602282015260420190565b604051602081830303815290604052805190602001209050949350505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611106575060009050600361118a565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561115a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166111835760006001925092505061118a565b9150600090505b94509492505050565b80356001600160a01b038116811461032f57600080fd5b6000602082840312156111bc57600080fd5b61093182611193565b600080604083850312156111d857600080fd5b6111e183611193565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561122e5761122e6111ef565b604052919050565b600082601f83011261124757600080fd5b813567ffffffffffffffff811115611261576112616111ef565b611274601f8201601f1916602001611205565b81815284602083860101111561128957600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156112bc57600080fd5b6112c585611193565b9350602085013567ffffffffffffffff808211156112e257600080fd5b6112ee88838901611236565b945060408701359350606087013591508082111561130b57600080fd5b5061131887828801611236565b91505092959194509250565b8015158114610ab657600080fd5b60008083601f84011261134457600080fd5b50813567ffffffffffffffff81111561135c57600080fd5b60208301915083602082850101111561102857600080fd5b60008060008060008060a0878903121561138d57600080fd5b61139687611193565b95506020870135945060408701356113ad81611324565b93506113bb60608801611193565b9250608087013567ffffffffffffffff8111156113d757600080fd5b6113e389828a01611332565b979a9699509497509295939492505050565b60008060006060848603121561140a57600080fd5b8335925060208085013567ffffffffffffffff8082111561142a57600080fd5b818701915087601f83011261143e57600080fd5b813581811115611450576114506111ef565b8060051b61145f858201611205565b918252838101850191858101908b84111561147957600080fd5b948601945b838610156114975785358252948601949086019061147e565b975050505060408701359250808311156114b057600080fd5b50506114be86828701611236565b9150509250925092565b6000806000606084860312156114dd57600080fd5b6114e684611193565b92506114f460208501611193565b9150604084013590509250925092565b6000806040838503121561151757600080fd5b61152083611193565b9150602083013561153081611324565b809150509250929050565b600080600080600080600060c0888a03121561155657600080fd5b61155f88611193565b965060208801359550604088013567ffffffffffffffff8082111561158357600080fd5b61158f8b838c01611236565b965060608a01359150808211156115a557600080fd5b6115b18b838c01611236565b95506115bf60808b01611193565b945060a08a01359150808211156115d557600080fd5b506115e28a828b01611332565b989b979a50959850939692959293505050565b60006020828403121561160757600080fd5b5035919050565b60208082526028908201527f436f6e74726f6c6c61626c653a2043616c6c6572206973206e6f74206120636f604082015267373a3937b63632b960c11b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b838110156116bc5781810151838201526020016116a4565b50506000910152565b600081518084526116dd8160208601602086016116a1565b601f01601f19169290920160200192915050565b6001600160a01b0385168152608060208201819052600090611715908301866116c5565b846040840152828103606084015261172d81856116c5565b979650505050505050565b8181038181111561175957634e487b7160e01b600052601160045260246000fd5b92915050565b6000606082018583526020606081850152818651808452608086019150828801935060005b818110156117a057845183529383019391830191600101611784565b50508481036040860152610f0781876116c5565b6000602082840312156117c657600080fd5b815161093181611324565b634e487b7160e01b600052602160045260246000fd5b82815260406020820152600061092e60408301846116c5565b600082516118128184602087016116a1565b9190910192915050565b60006020828403121561182e57600080fd5b5051919050565b85815284602082015260a06040820152600061185460a08301866116c5565b6001600160a01b0394851660608401529290931660809091015294935050505056fea264697066735822122067d1318eefb81c7bb55db1d2335244980be733f18afe414bec0f3dbe024e317464736f6c63430008120033";

type LPWANConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LPWANConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LPWAN__factory extends ContractFactory {
  constructor(...args: LPWANConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LPWAN> {
    return super.deploy(overrides || {}) as Promise<LPWAN>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LPWAN {
    return super.attach(address) as LPWAN;
  }
  override connect(signer: Signer): LPWAN__factory {
    return super.connect(signer) as LPWAN__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPWANInterface {
    return new utils.Interface(_abi) as LPWANInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LPWAN {
    return new Contract(address, _abi, signerOrProvider) as LPWAN;
  }
}