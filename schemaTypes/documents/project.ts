import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'animated',
      title: 'Animated',
      type: 'file',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'project_metadata',
      title: 'Project Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'agency',
          title: 'Agency',
          type: 'string',
        }),
        defineField({
          name: 'client',
          title: 'Client',
          type: 'string',
        }),
        defineField({
          name: 'role',
          title: 'Role',
          type: 'string',
        }),
        defineField({
          name: 'year',
          title: 'Year',
          type: 'number',
          validation: (Rule) => Rule.min(1900).max(new Date().getFullYear() + 1),
        }),
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'project_info',
      title: 'Project info',
      type: 'array',
      of: [{type: 'titledList'}],
    }),
    defineField({
      name: 'article',
      title: 'Article',
      type: 'array',
      of: [{type: 'articleCover'}, {type: 'articleSplit'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
