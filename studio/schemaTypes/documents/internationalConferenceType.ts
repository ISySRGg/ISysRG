import {defineField, defineType} from 'sanity'
import {HashIcon} from '@sanity/icons'

export const internationalConferenceType = defineType({
  name: 'internationalConference',
  title: 'International Conference',
  icon: HashIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isIncludedInTeleotiva',
      title: 'This conference is included in the TeleOTIVA website',
      type: 'boolean',
    }),
    defineField({
      name: 'publicationDate',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'conference',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'abstract',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'conference',
      media: 'image',
    },
  },
})
