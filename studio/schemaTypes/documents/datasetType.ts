import {defineField, defineType} from 'sanity'
import {DatabaseIcon} from '@sanity/icons'

export const datasetType = defineType({
  name: 'dataset',
  title: 'Dataset',
  icon: DatabaseIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})