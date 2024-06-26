/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface LPWANMockInterface extends utils.Interface {
  functions: {
    "createMEP802(string,string,uint256,uint256,address)": FunctionFragment;
    "createMEP804(address,address,address,address[],string,string,string,uint256,bytes32,uint256)": FunctionFragment;
    "mep802Id()": FunctionFragment;
    "mep804Id()": FunctionFragment;
    "owner()": FunctionFragment;
    "recoverToken(address,address,uint256)": FunctionFragment;
    "rewardContractAddresses(uint256)": FunctionFragment;
    "sensorNFTContractAddresses(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createMEP802"
      | "createMEP804"
      | "mep802Id"
      | "mep804Id"
      | "owner"
      | "recoverToken"
      | "rewardContractAddresses"
      | "sensorNFTContractAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createMEP802",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createMEP804",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "mep802Id", values?: undefined): string;
  encodeFunctionData(functionFragment: "mep804Id", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardContractAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sensorNFTContractAddresses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createMEP802",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createMEP804",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mep802Id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mep804Id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardContractAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sensorNFTContractAddresses",
    data: BytesLike
  ): Result;

  events: {
    "MEP802Created(address,uint256)": EventFragment;
    "MEP804Created(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MEP802Created"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MEP804Created"): EventFragment;
}

export interface MEP802CreatedEventObject {
  _contractAddress: string;
  _id: BigNumber;
}
export type MEP802CreatedEvent = TypedEvent<
  [string, BigNumber],
  MEP802CreatedEventObject
>;

export type MEP802CreatedEventFilter = TypedEventFilter<MEP802CreatedEvent>;

export interface MEP804CreatedEventObject {
  _contractAddress: string;
  _id: BigNumber;
}
export type MEP804CreatedEvent = TypedEvent<
  [string, BigNumber],
  MEP804CreatedEventObject
>;

export type MEP804CreatedEventFilter = TypedEventFilter<MEP804CreatedEvent>;

export interface LPWANMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LPWANMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createMEP802(
      _tokenName: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _yearFee: PromiseOrValue<BigNumberish>,
      _noOfBlock: PromiseOrValue<BigNumberish>,
      _applicationContractAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createMEP804(
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
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mep802Id(overrides?: CallOverrides): Promise<[BigNumber]>;

    mep804Id(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    recoverToken(
      _to: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewardContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    sensorNFTContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createMEP802(
    _tokenName: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _yearFee: PromiseOrValue<BigNumberish>,
    _noOfBlock: PromiseOrValue<BigNumberish>,
    _applicationContractAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createMEP804(
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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mep802Id(overrides?: CallOverrides): Promise<BigNumber>;

  mep804Id(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  recoverToken(
    _to: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _amt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewardContractAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  sensorNFTContractAddresses(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createMEP802(
      _tokenName: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _yearFee: PromiseOrValue<BigNumberish>,
      _noOfBlock: PromiseOrValue<BigNumberish>,
      _applicationContractAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createMEP804(
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
      overrides?: CallOverrides
    ): Promise<void>;

    mep802Id(overrides?: CallOverrides): Promise<BigNumber>;

    mep804Id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    recoverToken(
      _to: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rewardContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    sensorNFTContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "MEP802Created(address,uint256)"(
      _contractAddress?: PromiseOrValue<string> | null,
      _id?: PromiseOrValue<BigNumberish> | null
    ): MEP802CreatedEventFilter;
    MEP802Created(
      _contractAddress?: PromiseOrValue<string> | null,
      _id?: PromiseOrValue<BigNumberish> | null
    ): MEP802CreatedEventFilter;

    "MEP804Created(address,uint256)"(
      _contractAddress?: PromiseOrValue<string> | null,
      _id?: PromiseOrValue<BigNumberish> | null
    ): MEP804CreatedEventFilter;
    MEP804Created(
      _contractAddress?: PromiseOrValue<string> | null,
      _id?: PromiseOrValue<BigNumberish> | null
    ): MEP804CreatedEventFilter;
  };

  estimateGas: {
    createMEP802(
      _tokenName: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _yearFee: PromiseOrValue<BigNumberish>,
      _noOfBlock: PromiseOrValue<BigNumberish>,
      _applicationContractAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createMEP804(
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
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mep802Id(overrides?: CallOverrides): Promise<BigNumber>;

    mep804Id(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    recoverToken(
      _to: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewardContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sensorNFTContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createMEP802(
      _tokenName: PromiseOrValue<string>,
      _symbol: PromiseOrValue<string>,
      _yearFee: PromiseOrValue<BigNumberish>,
      _noOfBlock: PromiseOrValue<BigNumberish>,
      _applicationContractAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createMEP804(
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
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mep802Id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mep804Id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverToken(
      _to: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewardContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sensorNFTContractAddresses(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
