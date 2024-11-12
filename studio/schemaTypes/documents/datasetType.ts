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
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'shortDescription',
      type: 'string',
      validation: (rule) => rule.max(60),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      shortDescription: 'shortDescription',
      description: 'description',
      images: 'images',
    },
    prepare(value) {
      return {
        title: value.title,
        subtitle: value.shortDescription || value.description,
        media: value.images ? value.images[0] : DatabaseIcon,
      }
    },
  },
})
