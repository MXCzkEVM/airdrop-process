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
} from "../../common";

export interface IMEP801Interface extends utils.Interface {
  functions: {
    "changeOwner(address)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "changeOwner"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;

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

export interface IMEP801 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMEP801Interface;

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
    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  changeOwner(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
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
    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeOwner(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
