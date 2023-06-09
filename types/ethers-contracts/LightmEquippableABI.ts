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

  export type CatalogRelatedAssetStruct = {
    id: PromiseOrValue<BigNumberish>;
    catalogAddress: PromiseOrValue<string>;
    targetSlotId: PromiseOrValue<BigNumberish>;
    targetCatalogAddress: PromiseOrValue<string>;
    partIds: PromiseOrValue<BigNumberish>[];
    metadataURI: PromiseOrValue<string>;
  };

  export type CatalogRelatedAssetStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber[],
    string
  ] & {
    id: BigNumber;
    catalogAddress: string;
    targetSlotId: BigNumber;
    targetCatalogAddress: string;
    partIds: BigNumber[];
    metadataURI: string;
  };
}

export interface LightmEquippableABIInterface extends utils.Interface {
  functions: {
    "addSlotEquipments(uint256,uint64,(uint256,uint64,uint64,uint64,(uint256,address))[],bool)": FunctionFragment;
    "getActiveCatalogRelatedAssets(uint256)": FunctionFragment;
    "getAllCatalogRelatedAssetIds()": FunctionFragment;
    "getAllSlotEquipments()": FunctionFragment;
    "getCatalogRelatedAsset(uint64)": FunctionFragment;
    "getCatalogRelatedAssets(uint64[])": FunctionFragment;
    "getSlotEquipment(address,uint256,uint64)": FunctionFragment;
    "getSlotEquipment(uint256,uint64,uint64)": FunctionFragment;
    "getSlotEquipmentByIndex(uint256)": FunctionFragment;
    "getSlotEquipments(uint256,uint64)": FunctionFragment;
    "getSlotEquipments(address,uint256)": FunctionFragment;
    "removeSlotEquipments(address,uint256,uint64[])": FunctionFragment;
    "removeSlotEquipments(uint256,uint64,uint64[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addSlotEquipments"
      | "getActiveCatalogRelatedAssets"
      | "getAllCatalogRelatedAssetIds"
      | "getAllSlotEquipments"
      | "getCatalogRelatedAsset"
      | "getCatalogRelatedAssets"
      | "getSlotEquipment(address,uint256,uint64)"
      | "getSlotEquipment(uint256,uint64,uint64)"
      | "getSlotEquipmentByIndex"
      | "getSlotEquipments(uint256,uint64)"
      | "getSlotEquipments(address,uint256)"
      | "removeSlotEquipments(address,uint256,uint64[])"
      | "removeSlotEquipments(uint256,uint64,uint64[])"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addSlotEquipments",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      ILightmEquippableEventsAndStruct.SlotEquipmentStruct[],
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getActiveCatalogRelatedAssets",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllCatalogRelatedAssetIds",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllSlotEquipments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCatalogRelatedAsset",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCatalogRelatedAssets",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getSlotEquipment(address,uint256,uint64)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSlotEquipment(uint256,uint64,uint64)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSlotEquipmentByIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSlotEquipments(uint256,uint64)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSlotEquipments(address,uint256)",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSlotEquipments(address,uint256,uint64[])",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSlotEquipments(uint256,uint64,uint64[])",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addSlotEquipments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActiveCatalogRelatedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllCatalogRelatedAssetIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllSlotEquipments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCatalogRelatedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCatalogRelatedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSlotEquipment(address,uint256,uint64)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSlotEquipment(uint256,uint64,uint64)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSlotEquipmentByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSlotEquipments(uint256,uint64)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSlotEquipments(address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSlotEquipments(address,uint256,uint64[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSlotEquipments(uint256,uint64,uint64[])",
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
    "NestTransfer(address,address,uint256,uint256,uint256)": EventFragment;
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
  getEvent(nameOrSignatureOrTopic: "NestTransfer"): EventFragment;
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

export interface LightmEquippableABI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LightmEquippableABIInterface;

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
    addSlotEquipments(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStruct[],
      doMoreCheck: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getActiveCatalogRelatedAssets(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getAllCatalogRelatedAssetIds(
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { allCatalogRelatedAssetIds: BigNumber[] }>;

    getAllSlotEquipments(
      overrides?: CallOverrides
    ): Promise<
      [ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]] & {
        slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[];
      }
    >;

    getCatalogRelatedAsset(
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput] & {
        catalogRelatedAsset: ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput;
      }
    >;

    getCatalogRelatedAssets(
      catalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      [ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput[]]
    >;

    "getSlotEquipment(address,uint256,uint64)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput] & {
        slotEquipment: ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput;
      }
    >;

    "getSlotEquipment(uint256,uint64,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput] & {
        slotEquipment: ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput;
      }
    >;

    getSlotEquipmentByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput] & {
        slotEquipment: ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput;
      }
    >;

    "getSlotEquipments(uint256,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]]>;

    "getSlotEquipments(address,uint256)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]]>;

    "removeSlotEquipments(address,uint256,uint64[])"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "removeSlotEquipments(uint256,uint64,uint64[])"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addSlotEquipments(
    tokenId: PromiseOrValue<BigNumberish>,
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStruct[],
    doMoreCheck: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getActiveCatalogRelatedAssets(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getAllCatalogRelatedAssetIds(overrides?: CallOverrides): Promise<BigNumber[]>;

  getAllSlotEquipments(
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]>;

  getCatalogRelatedAsset(
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput>;

  getCatalogRelatedAssets(
    catalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<
    ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput[]
  >;

  "getSlotEquipment(address,uint256,uint64)"(
    childContract: PromiseOrValue<string>,
    childTokenId: PromiseOrValue<BigNumberish>,
    childCatalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput>;

  "getSlotEquipment(uint256,uint64,uint64)"(
    tokenId: PromiseOrValue<BigNumberish>,
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    slotId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput>;

  getSlotEquipmentByIndex(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput>;

  "getSlotEquipments(uint256,uint64)"(
    tokenId: PromiseOrValue<BigNumberish>,
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]>;

  "getSlotEquipments(address,uint256)"(
    childContract: PromiseOrValue<string>,
    childTokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]>;

  "removeSlotEquipments(address,uint256,uint64[])"(
    childContract: PromiseOrValue<string>,
    childTokenId: PromiseOrValue<BigNumberish>,
    childCatalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "removeSlotEquipments(uint256,uint64,uint64[])"(
    tokenId: PromiseOrValue<BigNumberish>,
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    slotIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addSlotEquipments(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStruct[],
      doMoreCheck: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    getActiveCatalogRelatedAssets(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAllCatalogRelatedAssetIds(
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getAllSlotEquipments(
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]>;

    getCatalogRelatedAsset(
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput>;

    getCatalogRelatedAssets(
      catalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<
      ILightmEquippableEventsAndStruct.CatalogRelatedAssetStructOutput[]
    >;

    "getSlotEquipment(address,uint256,uint64)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput>;

    "getSlotEquipment(uint256,uint64,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput>;

    getSlotEquipmentByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput>;

    "getSlotEquipments(uint256,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]>;

    "getSlotEquipments(address,uint256)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ILightmEquippableEventsAndStruct.SlotEquipmentStructOutput[]>;

    "removeSlotEquipments(address,uint256,uint64[])"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    "removeSlotEquipments(uint256,uint64,uint64[])"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
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
    addSlotEquipments(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStruct[],
      doMoreCheck: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getActiveCatalogRelatedAssets(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllCatalogRelatedAssetIds(overrides?: CallOverrides): Promise<BigNumber>;

    getAllSlotEquipments(overrides?: CallOverrides): Promise<BigNumber>;

    getCatalogRelatedAsset(
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCatalogRelatedAssets(
      catalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSlotEquipment(address,uint256,uint64)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSlotEquipment(uint256,uint64,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSlotEquipmentByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSlotEquipments(uint256,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getSlotEquipments(address,uint256)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "removeSlotEquipments(address,uint256,uint64[])"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "removeSlotEquipments(uint256,uint64,uint64[])"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addSlotEquipments(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotEquipments: ILightmEquippableEventsAndStruct.SlotEquipmentStruct[],
      doMoreCheck: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getActiveCatalogRelatedAssets(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllCatalogRelatedAssetIds(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllSlotEquipments(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCatalogRelatedAsset(
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCatalogRelatedAssets(
      catalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSlotEquipment(address,uint256,uint64)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSlotEquipment(uint256,uint64,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSlotEquipmentByIndex(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSlotEquipments(uint256,uint64)"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSlotEquipments(address,uint256)"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "removeSlotEquipments(address,uint256,uint64[])"(
      childContract: PromiseOrValue<string>,
      childTokenId: PromiseOrValue<BigNumberish>,
      childCatalogRelatedAssetIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "removeSlotEquipments(uint256,uint64,uint64[])"(
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      slotIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
