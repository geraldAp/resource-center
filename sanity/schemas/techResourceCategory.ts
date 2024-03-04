import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'techCategory',
  title: 'Tech Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
