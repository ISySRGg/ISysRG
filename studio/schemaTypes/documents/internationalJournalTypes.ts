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
      name: 'year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
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
