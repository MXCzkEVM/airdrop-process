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

export interface IMEP600Interface extends utils.Interface {
  functions: {
    "mintNFCNFT(string,bytes32)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "mintNFCNFT"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "mintNFCNFT",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "mintNFCNFT", data: BytesLike): Result;

  events: {
    "NFCNFTProvisioned(uint256,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NFCNFTProvisioned"): EventFragment;
}

export interface NFCNFTProvisionedEventObject {
  _tokenId: BigNumber;
  _tag: string;
}
export type NFCNFTProvisionedEvent = TypedEvent<
  [BigNumber, string],
  NFCNFTProvisionedEventObject
>;

export type NFCNFTProvisionedEventFilter =
  TypedEventFilter<NFCNFTProvisionedEvent>;

export interface IMEP600 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMEP600Interface;

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
    mintNFCNFT(
      tokenURI: PromiseOrValue<string>,
      _nfcTag: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  mintNFCNFT(
    tokenURI: PromiseOrValue<string>,
    _nfcTag: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    mintNFCNFT(
      tokenURI: PromiseOrValue<string>,
      _nfcTag: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NFCNFTProvisioned(uint256,bytes32)"(
      _tokenId?: PromiseOrValue<BigNumberish> | null,
      _tag?: PromiseOrValue<BytesLike> | null
    ): NFCNFTProvisionedEventFilter;
    NFCNFTProvisioned(
      _tokenId?: PromiseOrValue<BigNumberish> | null,
      _tag?: PromiseOrValue<BytesLike> | null
    ): NFCNFTProvisionedEventFilter;
  };

  estimateGas: {
    mintNFCNFT(
      tokenURI: PromiseOrValue<string>,
      _nfcTag: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mintNFCNFT(
      tokenURI: PromiseOrValue<string>,
      _nfcTag: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
