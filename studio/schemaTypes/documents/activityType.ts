import {defineField, defineType} from 'sanity'
import {ActivityIcon} from '@sanity/icons'

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
        {type: 'image'},
        {
          name: 'video',
          type: 'file',
          options: {
            accept: 'video/mp4',
          },
        },
        {
          name: 'file',
          type: 'file',
          fields: [
            {
              name: 'name',
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
