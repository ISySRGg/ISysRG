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
      name: 'image',
      type: 'image',
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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
  },
})
