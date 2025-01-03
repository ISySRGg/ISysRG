import {defineField, defineType} from 'sanity'
import {HashIcon} from '@sanity/icons'

export const bookType = defineType({
  name: 'book',
  title: 'Book',
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
      title: 'This book is included in the TeleOTIVA website',
      type: 'boolean',
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
      name: 'publisher',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isbnNumber',
      title: 'ISBN Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
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
