import {activityType} from './documents/activityType'
import {datasetType} from './documents/datasetType'
import {postType} from './documents/postType'
import {productType} from './documents/productType'
import {settingsType} from './singletons/settingsType'

export const schemaTypes = [
  // Documents
  activityType,
  datasetType,
  postType,
  productType,

  // Singletons
  settingsType,
]
