import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'metadata', title: 'Metadata'},
    {name: 'information', title: 'Information'},
    {name: 'socialMedia', title: 'Social Media'},
  ],
  fields: [
    // Metadata
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'metadata',
    }),
    defineField({
      name: 'description',
      description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      group: 'metadata',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          description: 'Important for accessibility and SEO.',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        }),
        defineField({
          name: 'metadataBase',
          type: 'url',
        }),
      ],
      group: 'metadata',
    }),

    // Information
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'information',
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'information',
    }),
    defineField({
      name: 'openingHour',
      title: 'Opening Hour',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'information',
    }),

    // Social Media
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'linkedIn',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'youTube',
          title: 'YouTube',
          type: 'url',
        },
        {
          name: 'linktree',
          title: 'Linktree',
          type: 'url',
        },
      ],
      group: 'socialMedia',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
