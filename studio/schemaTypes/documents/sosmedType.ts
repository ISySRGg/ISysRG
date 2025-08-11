import {defineField, defineType} from 'sanity'
import {VideoIcon} from '@sanity/icons'

export const sosmedType = defineType({
  name: 'sosmed',
  title: 'Social Media',
  icon: VideoIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Max 200 characters',
      validation: (rule) => rule.required().max(200),
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
      name: 'link',
      type: 'url',
      validation: (rule) => rule.required(),
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
