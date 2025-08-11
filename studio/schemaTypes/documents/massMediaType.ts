import {defineField, defineType} from 'sanity'
import {HashIcon} from '@sanity/icons'

export const massMediaType = defineType({
  name: 'massMedia',
  title: 'Mass Media',
  icon: HashIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isIncludedInTeleotiva',
      title: 'This book is included in the TeleOTIVA website',
      type: 'boolean',
    }),
    defineField({
      name: 'mediaName',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publisher',
      media: 'image',
    },
  },
})
