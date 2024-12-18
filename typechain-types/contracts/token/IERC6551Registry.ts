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

export interface IERC6551RegistryInterface extends utils.Interface {
  functions: {
    "account(address,uint256,address,uint256,uint256)": FunctionFragment;
    "createAccount(address,uint256,address,uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "account" | "createAccount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "account",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "account", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;

  events: {
    "AccountCreated(address,address,uint256,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
}

export interface AccountCreatedEventObject {
  account: string;
  implementation: string;
  chainId: BigNumber;
  tokenContract: string;
  tokenId: BigNumber;
  salt: BigNumber;
}
export type AccountCreatedEvent = TypedEvent<
  [string, string, BigNumber, string, BigNumber, BigNumber],
  AccountCreatedEventObject
>;

export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;

export interface IERC6551Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC6551RegistryInterface;

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
    account(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createAccount(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      seed: PromiseOrValue<BigNumberish>,
      initData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  account(
    implementation: PromiseOrValue<string>,
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    salt: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  createAccount(
    implementation: PromiseOrValue<string>,
    chainId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    seed: PromiseOrValue<BigNumberish>,
    initData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    account(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    createAccount(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      seed: PromiseOrValue<BigNumberish>,
      initData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "AccountCreated(address,address,uint256,address,uint256,uint256)"(
      account?: null,
      implementation?: null,
      chainId?: null,
      tokenContract?: null,
      tokenId?: null,
      salt?: null
    ): AccountCreatedEventFilter;
    AccountCreated(
      account?: null,
      implementation?: null,
      chainId?: null,
      tokenContract?: null,
      tokenId?: null,
      salt?: null
    ): AccountCreatedEventFilter;
  };

  estimateGas: {
    account(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createAccount(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      seed: PromiseOrValue<BigNumberish>,
      initData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    account(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      implementation: PromiseOrValue<string>,
      chainId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      seed: PromiseOrValue<BigNumberish>,
      initData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
