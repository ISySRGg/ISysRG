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
      name: 'batch',
      type: 'number',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value == undefined && context.document?.role == 'student') {
            return 'Batch is required for role student'
          }

          return true
        }),
      hidden: ({document}) => document?.role != 'student',
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
