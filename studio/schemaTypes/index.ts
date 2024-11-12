import {activityType} from './documents/activityType'
import {bookType} from './documents/bookType'
import {datasetType} from './documents/datasetType'
import {infrastructureType} from './documents/infrastructureType'
import {intellectualPropertyRightsType} from './documents/intellectualPropertyRights'
import {internationalConferenceType} from './documents/internationalConferenceType'
import {internationalJournalType} from './documents/internationalJournalTypes'
import {postType} from './documents/postType'
import {productType} from './documents/productType'
import {researcherType} from './documents/researcherType'
import {homeType} from './singletons/homeType'
import {settingsType} from './singletons/settingsType'

export const schemaTypes = [
  // Documents
  activityType,
  datasetType,
  infrastructureType,
  postType,
  productType,
  researcherType,

  internationalJournalType,
  internationalConferenceType,
  intellectualPropertyRightsType,
  bookType,

  // Singletons
  settingsType,
  homeType,
]
