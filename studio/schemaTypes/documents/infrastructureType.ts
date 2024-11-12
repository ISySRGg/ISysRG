import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const infrastructureType = defineType({
  name: 'infrastructure',
  title: 'Infrastructure',
  icon: ComponentIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: ComponentIcon,
          fields: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'values',
              type: 'array',
              of: [{type: 'string'}],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
