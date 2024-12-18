/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface SensorProfileInterface extends utils.Interface {
  functions: {
    "appContractAddress()": FunctionFragment;
    "getTier()": FunctionFragment;
    "owner()": FunctionFragment;
    "profileURIHash()": FunctionFragment;
    "tier()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "appContractAddress"
      | "getTier"
      | "owner"
      | "profileURIHash"
      | "tier"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "appContractAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTier", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "profileURIHash",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tier", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "appContractAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profileURIHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tier", data: BytesLike): Result;

  events: {
    "SensorProfileDeployed(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SensorProfileDeployed"): EventFragment;
}

export interface SensorProfileDeployedEventObject {
  _sensorProfileContractAddress: string;
  _appContractAddress: string;
  _sensorProfileURI: string;
}
export type SensorProfileDeployedEvent = TypedEvent<
  [string, string, string],
  SensorProfileDeployedEventObject
>;

export type SensorProfileDeployedEventFilter =
  TypedEventFilter<SensorProfileDeployedEvent>;

export interface SensorProfile extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SensorProfileInterface;

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
    appContractAddress(overrides?: CallOverrides): Promise<[string]>;

    getTier(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    profileURIHash(overrides?: CallOverrides): Promise<[string]>;

    tier(overrides?: CallOverrides): Promise<[string]>;
  };

  appContractAddress(overrides?: CallOverrides): Promise<string>;

  getTier(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  profileURIHash(overrides?: CallOverrides): Promise<string>;

  tier(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    appContractAddress(overrides?: CallOverrides): Promise<string>;

    getTier(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    profileURIHash(overrides?: CallOverrides): Promise<string>;

    tier(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "SensorProfileDeployed(address,address,string)"(
      _sensorProfileContractAddress?: PromiseOrValue<string> | null,
      _appContractAddress?: PromiseOrValue<string> | null,
      _sensorProfileURI?: PromiseOrValue<string> | null
    ): SensorProfileDeployedEventFilter;
    SensorProfileDeployed(
      _sensorProfileContractAddress?: PromiseOrValue<string> | null,
      _appContractAddress?: PromiseOrValue<string> | null,
      _sensorProfileURI?: PromiseOrValue<string> | null
    ): SensorProfileDeployedEventFilter;
  };

  estimateGas: {
    appContractAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getTier(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    profileURIHash(overrides?: CallOverrides): Promise<BigNumber>;

    tier(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    appContractAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    profileURIHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
