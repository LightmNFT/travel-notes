// db.ts
import Dexie, { Table } from "dexie"

import { AssetSetEvent } from "../types/ethers-contracts/LightmEquippableMultiAssetFacetABI"
import { TransferEvent } from "../types/ethers-contracts/LightmEquippableNestableFacetABI"
import { TypedEvent } from "../types/ethers-contracts/common"

type TMinifiedEvent<E extends TypedEvent> = Pick<E, "args" | "blockNumber">

type TMinifiedTransferEvent = TMinifiedEvent<TransferEvent>
type TMinifiedAssetSetEvent = TMinifiedEvent<AssetSetEvent>

export interface ICollectionRecord {
  collectionAddress?: string
  tokens?: { lastBlock: number; events: TMinifiedTransferEvent[] }
  assets?: { lastBlock: number; events: TMinifiedAssetSetEvent[] }
}

class DB extends Dexie {
  collectionRecord!: Table<ICollectionRecord>

  constructor() {
    super("Travel_Notes_DB")
    this.version(1).stores({
      collectionRecord: "collectionAddress",
    })
  }
}

export const TNDB = new DB()
