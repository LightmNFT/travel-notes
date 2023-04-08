/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace RMRKMultiAssetRenderUtils {
  export type ActiveAssetStruct = {
    id: PromiseOrValue<BigNumberish>;
    priority: PromiseOrValue<BigNumberish>;
    metadataURI: PromiseOrValue<string>;
  };

  export type ActiveAssetStructOutput = [BigNumber, number, string] & {
    id: BigNumber;
    priority: number;
    metadataURI: string;
  };

  export type PendingAssetStruct = {
    id: PromiseOrValue<BigNumberish>;
    toBeReplacedId: PromiseOrValue<BigNumberish>;
    metadataURI: PromiseOrValue<string>;
  };

  export type PendingAssetStructOutput = [BigNumber, BigNumber, string] & {
    id: BigNumber;
    toBeReplacedId: BigNumber;
    metadataURI: string;
  };
}

export interface RMRKMultiAssetRenderUtilsABIInterface extends utils.Interface {
  functions: {
    "getActiveAssets(address,uint256)": FunctionFragment;
    "getAssetsById(address,uint256,uint64[])": FunctionFragment;
    "getPendingAssets(address,uint256)": FunctionFragment;
    "getTopAssetMetaForToken(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getActiveAssets"
      | "getAssetsById"
      | "getPendingAssets"
      | "getTopAssetMetaForToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getActiveAssets",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetsById",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingAssets",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTopAssetMetaForToken",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getActiveAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetsById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTopAssetMetaForToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RMRKMultiAssetRenderUtilsABI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RMRKMultiAssetRenderUtilsABIInterface;

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
    getActiveAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[RMRKMultiAssetRenderUtils.ActiveAssetStructOutput[]]>;

    getAssetsById(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      assetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getPendingAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[RMRKMultiAssetRenderUtils.PendingAssetStructOutput[]]>;

    getTopAssetMetaForToken(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getActiveAssets(
    target: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<RMRKMultiAssetRenderUtils.ActiveAssetStructOutput[]>;

  getAssetsById(
    target: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    assetIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<string[]>;

  getPendingAssets(
    target: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<RMRKMultiAssetRenderUtils.PendingAssetStructOutput[]>;

  getTopAssetMetaForToken(
    target: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getActiveAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<RMRKMultiAssetRenderUtils.ActiveAssetStructOutput[]>;

    getAssetsById(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      assetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    getPendingAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<RMRKMultiAssetRenderUtils.PendingAssetStructOutput[]>;

    getTopAssetMetaForToken(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getActiveAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssetsById(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      assetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTopAssetMetaForToken(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getActiveAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssetsById(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      assetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTopAssetMetaForToken(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
