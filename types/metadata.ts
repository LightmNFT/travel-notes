/**
 * The metadata interface follow RMRK-Spec
 * https://github.com/rmrk-team/rmrk-spec/blob/master/standards/abstract/entities/metadata.md
 */
export interface IMetadata {
  name: string
  description?: string
  type?: string
  locale?: string
  license?: string
  licenseUri?: string
  mediaUri?: string
  thumbnailUri?: string
  externalUri?: string
  properties?: {
    [k: string]: {
      type: string
      value: any
    }
  }
  image?: string // Deprecated
  external_url?: string // Deprecated
}
