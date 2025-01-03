import {defineField, defineType} from 'sanity'
import {HashIcon} from '@sanity/icons'

export const internationalJournalType = defineType({
  name: 'internationalJournal',
  title: 'International Journal',
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
      title: 'This article is included in the TeleOTIVA website',
      type: 'boolean',
    }),
    defineField({
      name: 'publicationDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'journal',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'abstract',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'journal',
      media: 'image',
    },
  },
})
