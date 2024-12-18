/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  RewardContract,
  RewardContractInterface,
} from "../../../../contracts/token/MEP804.sol/RewardContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_applicationContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_businessOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpwanAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_sensorProfileAddresses",
        type: "address[]",
      },
      {
        internalType: "string",
        name: "_xToEarnFormulaJSON",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalRewardAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AMOUNT_MUST_BE_GREATER_THAN_ZERO",
    type: "error",
  },
  {
    inputs: [],
    name: "ARRAY_MUST_HAVE_EQUAL_LENGTH",
    type: "error",
  },
  {
    inputs: [],
    name: "CLAIMED_ALREADY",
    type: "error",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_TOKEN_BALANCE",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "WRONG_APPLICATION_ADDRESS",
    type: "error",
  },
  {
    inputs: [],
    name: "WRONG_CYCLE",
    type: "error",
  },
  {
    inputs: [],
    name: "WRONG_ROOT",
    type: "error",
  },
  {
    inputs: [],
    name: "YOU_ARE_NOT_ELIGIBLE",
    type: "error",
  },
  {
    inputs: [],
    name: "ZERO_REWARD_AMOUNT",
    type: "error",
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
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "CycleCountSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "HealthToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "MerkleRootUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "MoreRewardTokenMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_appContractAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
    ],
    name: "RewardClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "rewardContractAddress",
        type: "address",
      },
    ],
    name: "RewardContractDeployed",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allTimeRewardEarned",
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
    inputs: [],
    name: "applicationContractAddress",
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
    inputs: [],
    name: "businessOwner",
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
        name: "_nftAccountAddress",
        type: "address",
      },
    ],
    name: "calculateFuelHealth",
    outputs: [
      {
        internalType: "uint256",
        name: "fuelHealth_",
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
        name: "_appContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_sensorProfileAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftAccountAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "value",
            type: "bytes",
          },
          {
            internalType: "int8",
            name: "side",
            type: "int8",
          },
        ],
        internalType: "struct MerkleVerifierLibrary.ProofValue[]",
        name: "_merkleProof",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "_leaf",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cycle",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cycleCount",
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
    inputs: [],
    name: "healthStatus",
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
    inputs: [],
    name: "lpwanAddress",
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
    name: "merkleRoot",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintMoreRewardToken",
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
        name: "",
        type: "address",
      },
    ],
    name: "reward",
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
    name: "rewardTokenBalance",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardTokenClaimed",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "sensorProfileAddresses",
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
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "setCycleCount",
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
    name: "toggleHealth",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "uint256ToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
    ],
    name: "updateMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "value",
            type: "bytes",
          },
          {
            internalType: "int8",
            name: "side",
            type: "int8",
          },
        ],
        internalType: "struct MerkleVerifierLibrary.ProofValue[]",
        name: "proof",
        type: "tuple[]",
      },
    ],
    name: "verifyProof",
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
    name: "xToEarnFormulaJSON",
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
  "0x6080604052604051620021f1380380620021f18339810160408190526200002691620005ad565b848460036200003683826200074c565b5060046200004582826200074c565b505060016005555060068054336001600160a01b0319918216179091556007805482166001600160a01b038c8116919091179091556008805483168d831617905560098054909216908a161790558651620000a890600a9060208a0190620003a8565b50600c620000b787826200074c565b50600b829055600d819055620000ce308462000153565b30600090815260208190526040812054606490620000ee90600a6200082e565b620000fa91906200084e565b600954909150620001179030906001600160a01b03168362000209565b60405130907f31724ca1e2e71c51130d0f9e7326559bac12ab87c3e55f60d7431816a387915490600090a2505050505050505050505062000887565b6001600160a01b038216620001af5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b8060026000828254620001c3919062000871565b90915550506001600160a01b03821660008181526020818152604080832080548601905551848152600080516020620021d1833981519152910160405180910390a35050565b6001600160a01b0383166200026f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401620001a6565b6001600160a01b038216620002d35760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401620001a6565b6001600160a01b038316600090815260208190526040902054818110156200034d5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401620001a6565b6001600160a01b0384811660008181526020818152604080832087870390559387168083529184902080548701905592518581529092600080516020620021d1833981519152910160405180910390a350505050565b505050565b82805482825590600052602060002090810192821562000400579160200282015b828111156200040057825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620003c9565b506200040e92915062000412565b5090565b5b808211156200040e576000815560010162000413565b80516001600160a01b03811681146200044157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000487576200048762000446565b604052919050565b600082601f830112620004a157600080fd5b815160206001600160401b03821115620004bf57620004bf62000446565b8160051b620004d08282016200045c565b9283528481018201928281019087851115620004eb57600080fd5b83870192505b848310156200051557620005058362000429565b82529183019190830190620004f1565b979650505050505050565b600082601f8301126200053257600080fd5b81516001600160401b038111156200054e576200054e62000446565b602062000564601f8301601f191682016200045c565b82815285828487010111156200057957600080fd5b60005b83811015620005995785810183015182820184015282016200057c565b506000928101909101919091529392505050565b6000806000806000806000806000806101408b8d031215620005ce57600080fd5b620005d98b62000429565b9950620005e960208c0162000429565b9850620005f960408c0162000429565b60608c01519098506001600160401b03808211156200061757600080fd5b620006258e838f016200048f565b985060808d01519150808211156200063c57600080fd5b6200064a8e838f0162000520565b975060a08d01519150808211156200066157600080fd5b6200066f8e838f0162000520565b965060c08d01519150808211156200068657600080fd5b50620006958d828e0162000520565b94505060e08b015192506101008b015191506101208b015190509295989b9194979a5092959850565b600181811c90821680620006d357607f821691505b602082108103620006f457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003a357600081815260208120601f850160051c81016020861015620007235750805b601f850160051c820191505b8181101562000744578281556001016200072f565b505050505050565b81516001600160401b0381111562000768576200076862000446565b6200078081620007798454620006be565b84620006fa565b602080601f831160018114620007b857600084156200079f5750858301515b600019600386901b1c1916600185901b17855562000744565b600085815260208120601f198616915b82811015620007e957888601518255948401946001909101908401620007c8565b5085821015620008085787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141762000848576200084862000818565b92915050565b6000826200086c57634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111562000848576200084862000818565b61193a80620008976000396000f3fe6080604052600436106101e35760003560e01c80636479b7831161010257806395d89b4111610095578063bd9833b311610064578063bd9833b3146105aa578063ce7e51e3146105bd578063d6c6f9af146105dd578063dd62ed3e146105fd57600080fd5b806395d89b4114610535578063a457c2d71461054a578063a73ebd711461056a578063a9059cbb1461058a57600080fd5b806375824f23116100d157806375824f23146104b35780637c31fe20146104d55780638c83556d146104f55780638da5cb5b1461051557600080fd5b80636479b7831461043357806367a17227146104535780636d8151ee1461046857806370a082311461047d57600080fd5b8063316fda0f1161017a5780634783f0ef116101495780634783f0ef146103ac5780634be611dd146103cc57806351e82a08146103e65780636353586b1461040657600080fd5b8063316fda0f14610327578063395093511461033d5780633b6c1b8f1461035d5780633d97431a1461038a57600080fd5b80631ec60d2e116101b65780631ec60d2e1461029d57806323b872dd146102d55780632eb4a7ab146102f5578063313ce5671461030b57600080fd5b806306fdde03146101e8578063095ea7b31461021357806318160ddd146102435780631982860f14610262575b600080fd5b3480156101f457600080fd5b506101fd61061d565b60405161020a9190611362565b60405180910390f35b34801561021f57600080fd5b5061023361022e3660046113b1565b6106af565b604051901515815260200161020a565b34801561024f57600080fd5b506002545b60405190815260200161020a565b34801561026e57600080fd5b5061023361027d3660046113db565b601160209081526000928352604080842090915290825290205460ff1681565b3480156102a957600080fd5b506008546102bd906001600160a01b031681565b6040516001600160a01b03909116815260200161020a565b3480156102e157600080fd5b506102336102f0366004611407565b6106c9565b34801561030157600080fd5b50610254600b5481565b34801561031757600080fd5b506040516012815260200161020a565b34801561033357600080fd5b50610254600d5481565b34801561034957600080fd5b506102336103583660046113b1565b6106ed565b34801561036957600080fd5b50610254610378366004611443565b60106020526000908152604090205481565b34801561039657600080fd5b506103aa6103a5366004611465565b61070f565b005b3480156103b857600080fd5b506103aa6103c7366004611465565b6107da565b3480156103d857600080fd5b50600e546102339060ff1681565b3480156103f257600080fd5b506009546102bd906001600160a01b031681565b34801561041257600080fd5b50610254610421366004611443565b600f6020526000908152604090205481565b34801561043f57600080fd5b506102bd61044e366004611465565b610838565b34801561045f57600080fd5b506101fd610862565b34801561047457600080fd5b506103aa6108f0565b34801561048957600080fd5b50610254610498366004611443565b6001600160a01b031660009081526020819052604090205490565b3480156104bf57600080fd5b5030600090815260208190526040902054610254565b3480156104e157600080fd5b506102336104f03660046114ca565b610952565b34801561050157600080fd5b50610254610510366004611443565b610974565b34801561052157600080fd5b506006546102bd906001600160a01b031681565b34801561054157600080fd5b506101fd610a4c565b34801561055657600080fd5b506102336105653660046113b1565b610a5b565b34801561057657600080fd5b506007546102bd906001600160a01b031681565b34801561059657600080fd5b506102336105a53660046113b1565b610adb565b6103aa6105b8366004611516565b610ae9565b3480156105c957600080fd5b506101fd6105d8366004611465565b610c5c565b3480156105e957600080fd5b506103aa6105f8366004611465565b610d5e565b34801561060957600080fd5b506102546106183660046115b7565b610dbc565b60606003805461062c906115e1565b80601f0160208091040260200160405190810160405280929190818152602001828054610658906115e1565b80156106a55780601f1061067a576101008083540402835291602001916106a5565b820191906000526020600020905b81548152906001019060200180831161068857829003601f168201915b5050505050905090565b6000336106bd818585610de7565b60019150505b92915050565b6000336106d7858285610f0b565b6106e2858585610f85565b506001949350505050565b6000336106bd8185856107008383610dbc565b61070a9190611631565b610de7565b610717611129565b6006546001600160a01b031633146107425760405163d238ed5960e01b815260040160405180910390fd5b80600003610763576040516346f415bf60e01b815260040160405180910390fd5b61076d3082611182565b6000606461077c83600a611644565b6107869190611671565b6009549091506107a19030906001600160a01b031683610f85565b60405182907f2730123aa0a7127bf019665eb68d2a60fa5aeddd37317d1ea5a0d03fa582fb1e90600090a2506107d76001600555565b50565b6006546001600160a01b031633146108055760405163d238ed5960e01b815260040160405180910390fd5b600b81905560405181907f90004c04698bc3322499a575ed3752dd4abf33e0a7294c06a787a0fe01bea94190600090a250565b600a818154811061084857600080fd5b6000918252602090912001546001600160a01b0316905081565b600c805461086f906115e1565b80601f016020809104026020016040519081016040528092919081815260200182805461089b906115e1565b80156108e85780601f106108bd576101008083540402835291602001916108e8565b820191906000526020600020905b8154815290600101906020018083116108cb57829003601f168201915b505050505081565b600e5460ff16151560010361090e57600e805460ff1916905561091c565b600e805460ff191660011790555b600e5460405160ff9091161515907f211dc7bd8059cdbda32268cd0d12c88ba41f4c4692aed06c09417bc11c8e720a90600090a2565b600061096c846109628486611707565b600b549190611241565b949350505050565b6040516370a0823160e01b81526001600160a01b0382166004820152600090819030906370a0823190602401602060405180830381865afa1580156109bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e1919061181a565b6001600160a01b03841660009081526010602052604081205491925090610a0d836402540be400611644565b610a179190611671565b6001600160a01b03851660009081526010602052604081205491925003610a415760019250610a45565b8092505b5050919050565b60606004805461062c906115e1565b60003381610a698286610dbc565b905083811015610ace5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6106e28286868403610de7565b6000336106bd818585610f85565b610af1611129565b6008546001600160a01b038b8116911614610b1f57604051632de6e3c560e11b815260040160405180910390fd5b600d548114610b4157604051634622ff8f60e11b815260040160405180910390fd5b600b548714610b635760405163ab8134ab60e01b815260040160405180910390fd5b6000610b70858888610952565b905080610b9057604051635c83c04160e01b815260040160405180910390fd5b6000610ba485670de0b6b3a7640000611644565b6001600160a01b038b16600090815260106020526040812080549293508392909190610bd1908490611631565b909155505060008381526011602090815260408083206001600160a01b038e1684529091529020805460ff19166001179055610c0e308b83610f85565b60405133906001600160a01b038e16907fda71d66f7d6458815341057f19159e8dea719ad40dc75f124a3d7aefe7dbb9d490600090a35050610c506001600555565b50505050505050505050565b606081600003610c835750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610cad5780610c9781611833565b9150610ca69050600a83611671565b9150610c87565b60008167ffffffffffffffff811115610cc857610cc8611685565b6040519080825280601f01601f191660200182016040528015610cf2576020820181803683370190505b5090505b841561096c5781610d068161184c565b9250610d159050600a86611863565b610d20906030611631565b60f81b818381518110610d3557610d35611877565b60200101906001600160f81b031916908160001a905350610d57600a86611671565b9450610cf6565b6006546001600160a01b03163314610d895760405163d238ed5960e01b815260040160405180910390fd5b600d81905560405181907faabd765c8e47d66c2ac36706c24aa047fd0befe3a1d42c6ce72dfc1f7324016790600090a250565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b038316610e495760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610ac5565b6001600160a01b038216610eaa5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610ac5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610f178484610dbc565b90506000198114610f7f5781811015610f725760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610ac5565b610f7f8484848403610de7565b50505050565b6001600160a01b038316610fe95760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610ac5565b6001600160a01b03821661104b5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610ac5565b6001600160a01b038316600090815260208190526040902054818110156110c35760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610ac5565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610f7f565b60026005540361117b5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610ac5565b6002600555565b6001600160a01b0382166111d85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610ac5565b80600260008282546111ea9190611631565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600082815b835181101561130057600084828151811061126357611263611877565b602002602001015160000151905084828151811061128357611283611877565b60200260200101516020015160000b6001036112d4576112cd83826040516020016112af92919061188d565b60408051601f1981840301815260208301909152600082529061130b565b92506112ed565b6112ea81846040516020016112af9291906118b3565b92505b50806112f881611833565b915050611246565b509093149392505050565b600082826040516020016113209291906118d5565b60405160208183030381529060405280519060200120905092915050565b60005b83811015611359578181015183820152602001611341565b50506000910152565b602081526000825180602084015261138181604085016020870161133e565b601f01601f19169190910160400192915050565b80356001600160a01b03811681146113ac57600080fd5b919050565b600080604083850312156113c457600080fd5b6113cd83611395565b946020939093013593505050565b600080604083850312156113ee57600080fd5b823591506113fe60208401611395565b90509250929050565b60008060006060848603121561141c57600080fd5b61142584611395565b925061143360208501611395565b9150604084013590509250925092565b60006020828403121561145557600080fd5b61145e82611395565b9392505050565b60006020828403121561147757600080fd5b5035919050565b60008083601f84011261149057600080fd5b50813567ffffffffffffffff8111156114a857600080fd5b6020830191508360208260051b85010111156114c357600080fd5b9250929050565b6000806000604084860312156114df57600080fd5b83359250602084013567ffffffffffffffff8111156114fd57600080fd5b6115098682870161147e565b9497909650939450505050565b6000806000806000806000806000806101208b8d03121561153657600080fd5b61153f8b611395565b995061154d60208c01611395565b985061155b60408c01611395565b975060608b0135965060808b013567ffffffffffffffff81111561157e57600080fd5b61158a8d828e0161147e565b9b9e9a9d50989b979a989960a08901359860c0810135985060e08101359750610100013595509350505050565b600080604083850312156115ca57600080fd5b6115d383611395565b91506113fe60208401611395565b600181811c908216806115f557607f821691505b60208210810361161557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156106c3576106c361161b565b80820281158282048414176106c3576106c361161b565b634e487b7160e01b600052601260045260246000fd5b6000826116805761168061165b565b500490565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156116be576116be611685565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156116ed576116ed611685565b604052919050565b8035600081900b81146113ac57600080fd5b600067ffffffffffffffff8084111561172257611722611685565b8360051b60206117338183016116c4565b86815291850191818101903684111561174b57600080fd5b865b8481101561180e578035868111156117655760008081fd5b880160403682900312156117795760008081fd5b61178161169b565b8135888111156117915760008081fd5b8201601f36818301126117a45760008081fd5b81358a8111156117b6576117b6611685565b6117c7818301601f19168a016116c4565b915080825236898285010111156117de5760008081fd5b808984018a84013760009082018901528252506117fc8287016116f5565b8187015284525091830191830161174d565b50979650505050505050565b60006020828403121561182c57600080fd5b5051919050565b6000600182016118455761184561161b565b5060010190565b60008161185b5761185b61161b565b506000190190565b6000826118725761187261165b565b500690565b634e487b7160e01b600052603260045260246000fd5b828152600082516118a581602085016020870161133e565b919091016020019392505050565b600083516118c581846020880161133e565b9190910191825250602001919050565b600083516118e781846020880161133e565b8351908301906118fb81836020880161133e565b0194935050505056fea264697066735822122001d7c6789b1ae1de2a95a5d446482e472e750362deb4422491d62db80f23071c64736f6c63430008120033ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";

type RewardContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RewardContract__factory extends ContractFactory {
  constructor(...args: RewardContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _applicationContractAddress: PromiseOrValue<string>,
    _businessOwner: PromiseOrValue<string>,
    _lpwanAddress: PromiseOrValue<string>,
    _sensorProfileAddresses: PromiseOrValue<string>[],
    _xToEarnFormulaJSON: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _totalRewardAmount: PromiseOrValue<BigNumberish>,
    _merkleRoot: PromiseOrValue<BytesLike>,
    _count: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<RewardContract> {
    return super.deploy(
      _applicationContractAddress,
      _businessOwner,
      _lpwanAddress,
      _sensorProfileAddresses,
      _xToEarnFormulaJSON,
      _name,
      _symbol,
      _totalRewardAmount,
      _merkleRoot,
      _count,
      overrides || {}
    ) as Promise<RewardContract>;
  }
  override getDeployTransaction(
    _applicationContractAddress: PromiseOrValue<string>,
    _businessOwner: PromiseOrValue<string>,
    _lpwanAddress: PromiseOrValue<string>,
    _sensorProfileAddresses: PromiseOrValue<string>[],
    _xToEarnFormulaJSON: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _totalRewardAmount: PromiseOrValue<BigNumberish>,
    _merkleRoot: PromiseOrValue<BytesLike>,
    _count: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _applicationContractAddress,
      _businessOwner,
      _lpwanAddress,
      _sensorProfileAddresses,
      _xToEarnFormulaJSON,
      _name,
      _symbol,
      _totalRewardAmount,
      _merkleRoot,
      _count,
      overrides || {}
    );
  }
  override attach(address: string): RewardContract {
    return super.attach(address) as RewardContract;
  }
  override connect(signer: Signer): RewardContract__factory {
    return super.connect(signer) as RewardContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardContractInterface {
    return new utils.Interface(_abi) as RewardContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardContract {
    return new Contract(address, _abi, signerOrProvider) as RewardContract;
  }
}
