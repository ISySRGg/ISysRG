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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})