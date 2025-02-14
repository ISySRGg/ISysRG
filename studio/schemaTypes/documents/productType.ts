import {defineField, defineType} from 'sanity'
import {CubeIcon, DocumentIcon, DocumentVideoIcon, ImageIcon} from '@sanity/icons'

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
      name: 'homePageUrl',
      type: 'url',
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
      hidden: true,
    }),
    defineField({
      name: 'description1',
      type: 'text',
    }),
    defineField({
      name: 'description2',
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
      of: [
        {type: 'block'},
        {type: 'image', icon: ImageIcon},
        {
          name: 'video',
          type: 'file',
          icon: DocumentVideoIcon,
          options: {
            accept: 'video/mp4',
          },
        },
        {
          name: 'file',
          type: 'file',
          icon: DocumentIcon,
          fields: [
            {
              name: 'name',
              type: 'string',
            },
          ],
        },
        {
          name: 'youtube',
          title: 'YouTube',
          icon: DocumentVideoIcon,
          type: 'object',
          fields: [
            {
              name: 'videoId',
              description:
                'Salin video id dari link YouTube (misal: https://www.youtube.com/live/JssRjU1qYxE, maka video id nya adalah JssRjU1qYxE',
              type: 'string',
            },
          ],
        },
      ],
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
