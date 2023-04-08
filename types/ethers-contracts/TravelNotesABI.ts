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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
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

export declare namespace IRMRKNestableEventsAndStruct {
  export type ChildStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    contractAddress: PromiseOrValue<string>;
  };

  export type ChildStructOutput = [BigNumber, string] & {
    tokenId: BigNumber;
    contractAddress: string;
  };
}

export declare namespace ILightmEquippableEventsAndStruct {
  export type SlotEquipmentStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>;
    slotId: PromiseOrValue<BigNumberish>;
    childCatalogRelatedAssetId: PromiseOrValue<BigNumberish>;
    child: IRMRKNestableEventsAndStruct.ChildStruct;
  };

  export type SlotEquipmentStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    IRMRKNestableEventsAndStruct.ChildStructOutput
  ] & {
    tokenId: BigNumber;
    catalogRelatedAssetId: BigNumber;
    slotId: BigNumber;
    childCatalogRelatedAssetId: BigNumber;
    child: IRMRKNestableEventsAndStruct.ChildStructOutput;
  };
}

export interface TravelNotesABIInterface extends utils.Interface {
  functions: {
    "WHITELIST_MANAGER_ROLE()": FunctionFragment;
    "addChild(uint256,uint256,bytes)": FunctionFragment;
    "claimNewAsset(uint256,uint64)": FunctionFragment;
    "mint()": FunctionFragment;
    "setWhitelist(address,bool)": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WHITELIST_MANAGER_ROLE"
      | "addChild"
      | "claimNewAsset"
      | "mint"
      | "setWhitelist"
      | "totalSupply"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "WHITELIST_MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addChild",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimNewAsset",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "WHITELIST_MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addChild", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimNewAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {
    "AllChildrenRejected(uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "ApprovalForAll(address,address,bool)": EventFragment;
    "ApprovalForAllForAssets(address,address,bool)": EventFragment;
    "ApprovalForAssets(address,address,uint256)": EventFragment;
    "AssetAccepted(uint256,uint64,uint64)": EventFragment;
    "AssetAddedToToken(uint256,uint64,uint64)": EventFragment;
    "AssetPrioritySet(uint256)": EventFragment;
    "AssetRejected(uint256,uint64)": EventFragment;
    "AssetSet(uint64)": EventFragment;
    "CatalogRelatedAssetAdd(uint64)": EventFragment;
    "ChildAccepted(uint256,uint256,address,uint256)": EventFragment;
    "ChildProposed(uint256,uint256,address,uint256)": EventFragment;
    "ChildTransferred(uint256,uint256,address,uint256,bool)": EventFragment;
    "LightmMultiAssetFallbackURISet(string)": EventFragment;
    "NestTransfer(address,address,uint256,uint256,uint256)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "SlotEquipmentsAdd(uint256,uint64,tuple[])": EventFragment;
    "SlotEquipmentsRemove(uint256,uint64,uint64[])": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllChildrenRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAllForAssets"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApprovalForAssets"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetAddedToToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetPrioritySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetRejected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AssetSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CatalogRelatedAssetAdd"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChildAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChildProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChildTransferred"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LightmMultiAssetFallbackURISet"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NestTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SlotEquipmentsAdd"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SlotEquipmentsRemove"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface AllChildrenRejectedEventObject {
  tokenId: BigNumber;
}
export type AllChildrenRejectedEvent = TypedEvent<
  [BigNumber],
  AllChildrenRejectedEventObject
>;

export type AllChildrenRejectedEventFilter =
  TypedEventFilter<AllChildrenRejectedEvent>;

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface ApprovalForAllForAssetsEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllForAssetsEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllForAssetsEventObject
>;

export type ApprovalForAllForAssetsEventFilter =
  TypedEventFilter<ApprovalForAllForAssetsEvent>;

export interface ApprovalForAssetsEventObject {
  owner: string;
  approved: string;
  tokenId: BigNumber;
}
export type ApprovalForAssetsEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalForAssetsEventObject
>;

export type ApprovalForAssetsEventFilter =
  TypedEventFilter<ApprovalForAssetsEvent>;

export interface AssetAcceptedEventObject {
  tokenId: BigNumber;
  assetId: BigNumber;
  replacedId: BigNumber;
}
export type AssetAcceptedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AssetAcceptedEventObject
>;

export type AssetAcceptedEventFilter = TypedEventFilter<AssetAcceptedEvent>;

export interface AssetAddedToTokenEventObject {
  tokenId: BigNumber;
  assetId: BigNumber;
  replacedId: BigNumber;
}
export type AssetAddedToTokenEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  AssetAddedToTokenEventObject
>;

export type AssetAddedToTokenEventFilter =
  TypedEventFilter<AssetAddedToTokenEvent>;

export interface AssetPrioritySetEventObject {
  tokenId: BigNumber;
}
export type AssetPrioritySetEvent = TypedEvent<
  [BigNumber],
  AssetPrioritySetEventObject
>;

export type AssetPrioritySetEventFilter =
  TypedEventFilter<AssetPrioritySetEvent>;

export interface AssetRejectedEventObject {
  tokenId: BigNumber;
  assetId: BigNumber;
}
export type AssetRejectedEvent = TypedEvent<
  [BigNumber, BigNumber],
  AssetRejectedEventObject
>;

export type AssetRejectedEventFilter = TypedEventFilter<AssetRejectedEvent>;

export interface AssetSetEventObject {
  assetId: BigNumber;
}
export type AssetSetEvent = TypedEvent<[BigNumber], AssetSetEventObject>;

export type AssetSetEventFilter = TypedEventFilter<AssetSetEvent>;

export interface CatalogRelatedAssetAddEventObject {
  id: BigNumber;
}
export type CatalogRelatedAssetAddEvent = TypedEvent<
  [BigNumber],
  CatalogRelatedAssetAddEventObject
>;

export type CatalogRelatedAssetAddEventFilter =
  TypedEventFilter<CatalogRelatedAssetAddEvent>;

export interface ChildAcceptedEventObject {
  tokenId: BigNumber;
  childIndex: BigNumber;
  childAddress: string;
  childId: BigNumber;
}
export type ChildAcceptedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  ChildAcceptedEventObject
>;

export type ChildAcceptedEventFilter = TypedEventFilter<ChildAcceptedEvent>;

export interface ChildProposedEventObject {
  tokenId: BigNumber;
  childIndex: BigNumber;
  childAddress: string;
  childId: BigNumber;
}
export type ChildProposedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber],
  ChildProposedEventObject
>;

export type ChildProposedEventFilter = TypedEventFilter<ChildProposedEvent>;

export interface ChildTransferredEventObject {
  tokenId: BigNumber;
  childIndex: BigNumber;
  childAddress: string;
  childId: BigNumber;
  fromPending: boolean;
}
export type ChildTransferredEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, boolean],
  ChildTransferredEventObject
>;

export type ChildTransferredEventFilter =
  TypedEventFilter<ChildTransferredEvent>;

export interface LightmMultiAssetFallbackURISetEventObject {
  fallbackURI: string;
}
export type LightmMultiAssetFallbackURISetEvent = TypedEvent<
  [string],
  LightmMultiAssetFallbackURISetEventObject
>;

export type LightmMultiAssetFallbackURISetEventFilter =
  TypedEventFilter<LightmMultiAssetFallbackURISetEvent>;

export interface NestTransferEventObject {
  from: string;
  to: string;
  fromTokenId: BigNumber;
  toTokenId: BigNumber;
  tokenId: BigNumber;
}
export type NestTransferEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber],
  NestTransferEventObject
>;

export type NestTransferEventFilter = TypedEventFilter<NestTransferEvent>;

export interface RoleAdminChangedEventObject {
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string],
  RoleAdminChangedEventObject
>;

export type RoleAdminChangedEventFilter =
  TypedEventFilter<RoleAdminChangedEvent>;

export interface RoleGrantedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleGrantedEvent = TypedEvent<
  [string, string, string],
  RoleGrantedEventObject
>;

export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;

export interface RoleRevokedEventObject {
  role: string;
  account: string;
  sender: string;
}
export type RoleRevokedEvent = TypedEvent<
  [string, string, string],
  RoleRevokedEventObject
>;

export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;

export interface SlotEquipmentsAddEventObject {
  tokenId: BigNumber;
  catalogRelatedAssetId: BigNumber;
  slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[];
}
export type SlotEquipmentsAddEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]
  ],
  SlotEquipmentsAddEventObject
>;

export type SlotEquipmentsAddEventFilter =
  TypedEventFilter<SlotEquipmentsAddEvent>;

export interface SlotEquipmentsRemoveEventObject {
  tokenId: BigNumber;
  catalogRelatedAssetId: BigNumber;
  indexes: BigNumber[];
}
export type SlotEquipmentsRemoveEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber[]],
  SlotEquipmentsRemoveEventObject
>;

export type SlotEquipmentsRemoveEventFilter =
  TypedEventFilter<SlotEquipmentsRemoveEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface TravelNotesABI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TravelNotesABIInterface;

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
    WHITELIST_MANAGER_ROLE(overrides?: CallOverrides): Promise<[string]>;

    addChild(
      parentTokenId: PromiseOrValue<BigNumberish>,
      childTokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimNewAsset(
      tokenId: PromiseOrValue<BigNumberish>,
      newAssetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mint(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWhitelist(
      poapAddress: PromiseOrValue<string>,
      open: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  WHITELIST_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;

  addChild(
    parentTokenId: PromiseOrValue<BigNumberish>,
    childTokenId: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimNewAsset(
    tokenId: PromiseOrValue<BigNumberish>,
    newAssetId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mint(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWhitelist(
    poapAddress: PromiseOrValue<string>,
    open: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    WHITELIST_MANAGER_ROLE(overrides?: CallOverrides): Promise<string>;

    addChild(
      parentTokenId: PromiseOrValue<BigNumberish>,
      childTokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimNewAsset(
      tokenId: PromiseOrValue<BigNumberish>,
      newAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    mint(overrides?: CallOverrides): Promise<void>;

    setWhitelist(
      poapAddress: PromiseOrValue<string>,
      open: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AllChildrenRejected(uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): AllChildrenRejectedEventFilter;
    AllChildrenRejected(
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): AllChildrenRejectedEventFilter;

    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalEventFilter;

    "ApprovalForAll(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllEventFilter;

    "ApprovalForAllForAssets(address,address,bool)"(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllForAssetsEventFilter;
    ApprovalForAllForAssets(
      owner?: PromiseOrValue<string> | null,
      operator?: PromiseOrValue<string> | null,
      approved?: null
    ): ApprovalForAllForAssetsEventFilter;

    "ApprovalForAssets(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalForAssetsEventFilter;
    ApprovalForAssets(
      owner?: PromiseOrValue<string> | null,
      approved?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): ApprovalForAssetsEventFilter;

    "AssetAccepted(uint256,uint64,uint64)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      replacedId?: PromiseOrValue<BigNumberish> | null
    ): AssetAcceptedEventFilter;
    AssetAccepted(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      replacedId?: PromiseOrValue<BigNumberish> | null
    ): AssetAcceptedEventFilter;

    "AssetAddedToToken(uint256,uint64,uint64)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      replacedId?: PromiseOrValue<BigNumberish> | null
    ): AssetAddedToTokenEventFilter;
    AssetAddedToToken(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null,
      replacedId?: PromiseOrValue<BigNumberish> | null
    ): AssetAddedToTokenEventFilter;

    "AssetPrioritySet(uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): AssetPrioritySetEventFilter;
    AssetPrioritySet(
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): AssetPrioritySetEventFilter;

    "AssetRejected(uint256,uint64)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null
    ): AssetRejectedEventFilter;
    AssetRejected(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      assetId?: PromiseOrValue<BigNumberish> | null
    ): AssetRejectedEventFilter;

    "AssetSet(uint64)"(
      assetId?: PromiseOrValue<BigNumberish> | null
    ): AssetSetEventFilter;
    AssetSet(
      assetId?: PromiseOrValue<BigNumberish> | null
    ): AssetSetEventFilter;

    "CatalogRelatedAssetAdd(uint64)"(
      id?: PromiseOrValue<BigNumberish> | null
    ): CatalogRelatedAssetAddEventFilter;
    CatalogRelatedAssetAdd(
      id?: PromiseOrValue<BigNumberish> | null
    ): CatalogRelatedAssetAddEventFilter;

    "ChildAccepted(uint256,uint256,address,uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      childIndex?: null,
      childAddress?: PromiseOrValue<string> | null,
      childId?: PromiseOrValue<BigNumberish> | null
    ): ChildAcceptedEventFilter;
    ChildAccepted(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      childIndex?: null,
      childAddress?: PromiseOrValue<string> | null,
      childId?: PromiseOrValue<BigNumberish> | null
    ): ChildAcceptedEventFilter;

    "ChildProposed(uint256,uint256,address,uint256)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      childIndex?: null,
      childAddress?: PromiseOrValue<string> | null,
      childId?: PromiseOrValue<BigNumberish> | null
    ): ChildProposedEventFilter;
    ChildProposed(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      childIndex?: null,
      childAddress?: PromiseOrValue<string> | null,
      childId?: PromiseOrValue<BigNumberish> | null
    ): ChildProposedEventFilter;

    "ChildTransferred(uint256,uint256,address,uint256,bool)"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      childIndex?: null,
      childAddress?: PromiseOrValue<string> | null,
      childId?: PromiseOrValue<BigNumberish> | null,
      fromPending?: null
    ): ChildTransferredEventFilter;
    ChildTransferred(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      childIndex?: null,
      childAddress?: PromiseOrValue<string> | null,
      childId?: PromiseOrValue<BigNumberish> | null,
      fromPending?: null
    ): ChildTransferredEventFilter;

    "LightmMultiAssetFallbackURISet(string)"(
      fallbackURI?: null
    ): LightmMultiAssetFallbackURISetEventFilter;
    LightmMultiAssetFallbackURISet(
      fallbackURI?: null
    ): LightmMultiAssetFallbackURISetEventFilter;

    "NestTransfer(address,address,uint256,uint256,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      fromTokenId?: null,
      toTokenId?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): NestTransferEventFilter;
    NestTransfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      fromTokenId?: null,
      toTokenId?: null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): NestTransferEventFilter;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;
    RoleAdminChanged(
      role?: PromiseOrValue<BytesLike> | null,
      previousAdminRole?: PromiseOrValue<BytesLike> | null,
      newAdminRole?: PromiseOrValue<BytesLike> | null
    ): RoleAdminChangedEventFilter;

    "RoleGranted(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;
    RoleGranted(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleGrantedEventFilter;

    "RoleRevoked(bytes32,address,address)"(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;
    RoleRevoked(
      role?: PromiseOrValue<BytesLike> | null,
      account?: PromiseOrValue<string> | null,
      sender?: PromiseOrValue<string> | null
    ): RoleRevokedEventFilter;

    "SlotEquipmentsAdd(uint256,uint64,tuple[])"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      catalogRelatedAssetId?: PromiseOrValue<BigNumberish> | null,
      slotEquipments?: null
    ): SlotEquipmentsAddEventFilter;
    SlotEquipmentsAdd(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      catalogRelatedAssetId?: PromiseOrValue<BigNumberish> | null,
      slotEquipments?: null
    ): SlotEquipmentsAddEventFilter;

    "SlotEquipmentsRemove(uint256,uint64,uint64[])"(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      catalogRelatedAssetId?: PromiseOrValue<BigNumberish> | null,
      indexes?: null
    ): SlotEquipmentsRemoveEventFilter;
    SlotEquipmentsRemove(
      tokenId?: PromiseOrValue<BigNumberish> | null,
      catalogRelatedAssetId?: PromiseOrValue<BigNumberish> | null,
      indexes?: null
    ): SlotEquipmentsRemoveEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      tokenId?: PromiseOrValue<BigNumberish> | null
    ): TransferEventFilter;
  };

  estimateGas: {
    WHITELIST_MANAGER_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    addChild(
      parentTokenId: PromiseOrValue<BigNumberish>,
      childTokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimNewAsset(
      tokenId: PromiseOrValue<BigNumberish>,
      newAssetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mint(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWhitelist(
      poapAddress: PromiseOrValue<string>,
      open: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    WHITELIST_MANAGER_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addChild(
      parentTokenId: PromiseOrValue<BigNumberish>,
      childTokenId: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimNewAsset(
      tokenId: PromiseOrValue<BigNumberish>,
      newAssetId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mint(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      poapAddress: PromiseOrValue<string>,
      open: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
