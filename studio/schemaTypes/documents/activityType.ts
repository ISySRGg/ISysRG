import {defineField, defineType} from 'sanity'
import {ActivityIcon, DocumentIcon, DocumentVideoIcon, ImageIcon} from '@sanity/icons'

export const activityType = defineType({
  name: 'activity',
  title: 'Activity',
  icon: ActivityIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Max 200 characters',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isIncludedInTeleotiva',
      title: 'This activity is included in the TeleOTIVA website',
      type: 'boolean',
    }),
    defineField({
      name: 'date',
      type: 'date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
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
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
  },
})
