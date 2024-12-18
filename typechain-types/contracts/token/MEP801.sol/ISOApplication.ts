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
} from "../../../common";

export interface ISOApplicationInterface extends utils.Interface {
  functions: {
    "applicationName()": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "owner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "applicationName" | "changeOwner" | "owner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "applicationName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "applicationName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;

  events: {
    "ISOApplicationDeployed(address,string,address)": EventFragment;
    "OwnerChanged(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ISOApplicationDeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
}

export interface ISOApplicationDeployedEventObject {
  appContractAddress: string;
  applicationName: string;
  businessOwnerAddress: string;
}
export type ISOApplicationDeployedEvent = TypedEvent<
  [string, string, string],
  ISOApplicationDeployedEventObject
>;

export type ISOApplicationDeployedEventFilter =
  TypedEventFilter<ISOApplicationDeployedEvent>;

export interface OwnerChangedEventObject {
  _newOwner: string;
  _time: BigNumber;
}
export type OwnerChangedEvent = TypedEvent<
  [string, BigNumber],
  OwnerChangedEventObject
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface ISOApplication extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISOApplicationInterface;

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
    applicationName(overrides?: CallOverrides): Promise<[string]>;

    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;
  };

  applicationName(overrides?: CallOverrides): Promise<string>;

  changeOwner(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    applicationName(overrides?: CallOverrides): Promise<string>;

    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ISOApplicationDeployed(address,string,address)"(
      appContractAddress?: PromiseOrValue<string> | null,
      applicationName?: PromiseOrValue<string> | null,
      businessOwnerAddress?: PromiseOrValue<string> | null
    ): ISOApplicationDeployedEventFilter;
    ISOApplicationDeployed(
      appContractAddress?: PromiseOrValue<string> | null,
      applicationName?: PromiseOrValue<string> | null,
      businessOwnerAddress?: PromiseOrValue<string> | null
    ): ISOApplicationDeployedEventFilter;

    "OwnerChanged(address,uint256)"(
      _newOwner?: PromiseOrValue<string> | null,
      _time?: PromiseOrValue<BigNumberish> | null
    ): OwnerChangedEventFilter;
    OwnerChanged(
      _newOwner?: PromiseOrValue<string> | null,
      _time?: PromiseOrValue<BigNumberish> | null
    ): OwnerChangedEventFilter;
  };

  estimateGas: {
    applicationName(overrides?: CallOverrides): Promise<BigNumber>;

    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    applicationName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
