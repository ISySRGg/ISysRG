import {defineField, defineType} from 'sanity'
import {CubeIcon} from '@sanity/icons'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  icon: CubeIcon,
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
      name: 'youtube',
      title: 'YouTube',
      type: 'url',
    }),
    defineField({
      name: 'image',
      type: 'image',
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
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      shortDescription: 'shortDescription',
      description: 'description',
      image: 'image',
    },
    prepare(value) {
      return {
        title: value.title,
        subtitle: value.shortDescription || value.description,
        media: value.image,
      }
    },
  },
})
