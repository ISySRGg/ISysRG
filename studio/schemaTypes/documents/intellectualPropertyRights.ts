import {defineField, defineType} from 'sanity'
import {HashIcon} from '@sanity/icons'

export const intellectualPropertyRightsType = defineType({
  name: 'intellectualPropertyRights',
  title: 'Intellectual Property Rights',
  icon: HashIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isIncludedInTeleotiva',
      title: 'This IPR is included in the TeleOTIVA website',
      type: 'boolean',
    }),
    defineField({
      name: 'issuanceDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ipr',
      title: 'IPR',
      type: 'string',
      description: 'Deprecated: field ini akan segera dihapus, gunakan field type yaa',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Copyright', value: 'Copyright'},
          {title: 'Patent', value: 'Patent'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'certificateNumber',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'certificateNumber',
    },
  },
})
