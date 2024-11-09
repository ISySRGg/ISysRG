import {defineField, defineType} from 'sanity'

// export type Product = {
//     name: string
//     image: {
//       src: string
//       alt: string
//     }
//     description: string
//     features: string[]
//     href: string
//   }

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
