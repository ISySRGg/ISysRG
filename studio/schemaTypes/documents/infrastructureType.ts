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
      type: 'string',
      description:
        '[1] Means (sarana): benda bergerak seperti PC; [2] Infrastructure (prasarana): benda tidak bergerak seperti ruangan.',
      options: {
        list: [
          {title: 'Means', value: 'Means'},
          {title: 'Infrastructure', value: 'Infrastructure'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
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
      description:
        'Disarankan gambar dengan rasio 1:1 untuk sarana dan rasio 16:9 untuk prasarana.',
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
