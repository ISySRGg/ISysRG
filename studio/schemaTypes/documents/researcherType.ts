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
          {title: 'Head', value: 'Head'},
          {title: 'Secretary', value: 'Secretary'},
          {title: 'Research Assistant', value: 'Research Assistant'},
          {title: 'Member', value: 'Member'},
          {title: 'Student', value: 'Student'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'degree',
      type: 'string',
      options: {
        list: [
          {title: 'Bachelor', value: 'Bachelor'},
          {title: 'Master', value: 'Master'},
          {title: 'Doctoral', value: 'Doctoral'},
        ],
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value == undefined && context.document?.role == 'Student') {
            return 'Degree is required for role student'
          }

          return true
        }),
      hidden: ({document}) => document?.role != 'Student',
    }),
    defineField({
      name: 'batch',
      type: 'number',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value == undefined && context.document?.degree == 'Bachelor') {
            return 'Batch is required for role Bachelor'
          }

          return true
        }),
      hidden: ({document}) => document?.degree != 'Bachelor',
    }),
    defineField({
      name: 'division',
      type: 'string',
      options: {
        list: [
          {title: 'Imaging', value: 'Imaging'},
          {title: 'Signal', value: 'Signal'},
          {title: 'Tabular', value: 'Tabular'},
        ],
      },
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value == undefined && context.document?.role == 'Student') {
            return 'Division is required for role student'
          }

          return true
        }),
      hidden: ({document}) => document?.role != 'Student',
    }),
    defineField({
      name: 'thesisTitle',
      type: 'string',
      validation: (rule) =>
        rule.custom((value, context) => {
          if (value == undefined && context.document?.role == 'Student') {
            return 'Thesis Title is required for role student'
          }

          return true
        }),
      hidden: ({document}) => document?.role != 'Student',
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
