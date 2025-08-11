import {activityType} from './documents/activityType'
import {bookType} from './documents/bookType'
import {datasetType} from './documents/datasetType'
import {infrastructureType} from './documents/infrastructureType'
import {intellectualPropertyRightsType} from './documents/intellectualPropertyRights'
import {internationalConferenceType} from './documents/internationalConferenceType'
import {internationalJournalType} from './documents/internationalJournalTypes'
import {partnerType} from './documents/partnerType'
import {productType} from './documents/productType'
import {researcherType} from './documents/researcherType'
import {massMediaType} from './documents/massMediaType'
import {sosmedType} from './documents/sosmedType'
import {researchType} from './documents/researchType'
import {homeType} from './singletons/homeType'
import {settingsType} from './singletons/settingsType'

export const schemaTypes = [
  // Documents
  activityType,
  datasetType,
  infrastructureType,
  partnerType,
  productType,
  researchType,
  researcherType,
  
  internationalJournalType,
  internationalConferenceType,
  intellectualPropertyRightsType,
  bookType,

  massMediaType,
  sosmedType,

  // Singletons
  settingsType,
  homeType,
]
