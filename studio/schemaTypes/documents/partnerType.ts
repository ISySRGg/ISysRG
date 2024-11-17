import {defineField, defineType} from 'sanity'
import {LemonIcon} from '@sanity/icons'

export const partnerType = defineType({
  name: 'partner',
  title: 'Partner',
  icon: LemonIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
