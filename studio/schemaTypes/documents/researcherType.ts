import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const researcherType = defineType({
  name: 'researcher',
  title: 'Researcher',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      options: {
        list: [
          {title: 'Head', value: 'head'},
          {title: 'Secretary', value: 'secretary'},
          {title: 'Research Assistant', value: 'researchAssistant'},
          {title: 'Member', value: 'member'},
          {title: 'Student', value: 'student'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
