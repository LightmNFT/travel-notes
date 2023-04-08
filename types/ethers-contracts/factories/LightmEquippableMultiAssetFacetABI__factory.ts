/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  LightmEquippableMultiAssetFacetABI,
  LightmEquippableMultiAssetFacetABIInterface,
} from "../LightmEquippableMultiAssetFacetABI";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC721AddressZeroIsNotAValidOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721ApprovalToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721ApproveCallerIsNotOwnerNorApprovedForAll",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721ApproveToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721InvalidTokenId",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721NotApprovedOrOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721TransferFromIncorrectOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721TransferToNonReceiverImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC721TransferToTheZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "LightmMustRemoveSlotEquipmentFirst",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKApprovalForAssetsToCurrentOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKApproveForAssetsCallerIsNotOwnerNorApprovedForAll",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKApproveForAssetsToCaller",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKBadPriorityListLength",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKIndexOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKIsNotContract",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKIsNotNestableImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKMintToNonRMRKImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKNestableTooDeep",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKNestableTransferToDescendant",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKNestableTransferToNonRMRKNestableImplementer",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKNestableTransferToSelf",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKNoAssetMatchingId",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKNotApprovedForAssetsOrOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKTokenDoesNotHaveAsset",
    type: "error",
  },
  {
    inputs: [],
    name: "RMRKUnexpectedNumberOfAssets",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AllChildrenRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAllForAssets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ApprovalForAssets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "replacedId",
        type: "uint64",
      },
    ],
    name: "AssetAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "replacedId",
        type: "uint64",
      },
    ],
    name: "AssetAddedToToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "AssetPrioritySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "AssetRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "AssetSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "id",
        type: "uint64",
      },
    ],
    name: "CatalogRelatedAssetAdd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "childIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "childId",
        type: "uint256",
      },
    ],
    name: "ChildAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "childIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "childId",
        type: "uint256",
      },
    ],
    name: "ChildProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "childIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "childAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "childId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "fromPending",
        type: "bool",
      },
    ],
    name: "ChildTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toTokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NestTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "catalogRelatedAssetId",
        type: "uint64",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "uint64",
            name: "catalogRelatedAssetId",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "slotId",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "childCatalogRelatedAssetId",
            type: "uint64",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "contractAddress",
                type: "address",
              },
            ],
            internalType: "struct IRMRKNestableEventsAndStruct.Child",
            name: "child",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct ILightmEquippableEventsAndStruct.SlotEquipment[]",
        name: "slotEquipments",
        type: "tuple[]",
      },
    ],
    name: "SlotEquipmentsAdd",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "catalogRelatedAssetId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "indexes",
        type: "uint64[]",
      },
    ],
    name: "SlotEquipmentsRemove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "acceptAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "acceptAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approveForAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getActiveAssetPriorities",
    outputs: [
      {
        internalType: "uint16[]",
        name: "",
        type: "uint16[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getActiveAssets",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApprovedForAssets",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "getAssetMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "getAssetMetadata",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "getAssetReplacements",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getFullAssets",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "id",
            type: "uint64",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
        ],
        internalType: "struct ILightmMultiAssetEventsAndStruct.Asset[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getFullPendingAssets",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "id",
            type: "uint64",
          },
          {
            internalType: "string",
            name: "metadataURI",
            type: "string",
          },
        ],
        internalType: "struct ILightmMultiAssetEventsAndStruct.Asset[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getPendingAssets",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAllForAssets",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxRejections",
        type: "uint256",
      },
    ],
    name: "rejectAllAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "rejectAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
    ],
    name: "rejectAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAllForAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint16[]",
        name: "priorities",
        type: "uint16[]",
      },
    ],
    name: "setPriority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class LightmEquippableMultiAssetFacetABI__factory {
  static readonly abi = _abi;
  static createInterface(): LightmEquippableMultiAssetFacetABIInterface {
    return new utils.Interface(
      _abi
    ) as LightmEquippableMultiAssetFacetABIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LightmEquippableMultiAssetFacetABI {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LightmEquippableMultiAssetFacetABI;
  }
}
