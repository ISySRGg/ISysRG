import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homeType = defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{type: 'block', styles: []}],
        },
      ],
    }),
    defineField({
      name: 'productsSection',
      title: 'Products Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block', styles: []}],
        },
        {
          name: 'featuredProducts',
          title: 'Featured Products',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'product'}]}],
          validation: (rule) => rule.unique().max(3),
        },
      ],
    }),
    defineField({
      name: 'activitiesSection',
      title: 'Activities Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block', styles: []}],
        },
      ],
    }),
    defineField({
      name: 'datasetsSection',
      title: 'Datasets Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block', styles: []}],
        },
        {
          name: 'featuredDatasets',
          title: 'Featured Datasets',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'dataset'}]}],
          validation: (rule) => rule.unique().max(3),
        },
      ],
    }),
    defineField({
      name: 'partnersSection',
      title: 'Partners Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{type: 'block', styles: []}],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
