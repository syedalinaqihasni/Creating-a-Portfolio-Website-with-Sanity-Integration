/**
 * This is an example schema for an about page in Sanity.
 * You would add this to your Sanity Studio schema folder.
 */

export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'string',
      description: 'A short introduction that appears below the title',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'biography',
      title: 'Biography',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'experience',
      title: 'Work Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Job Title',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'company',
              title: 'Company',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'degree',
              title: 'Degree',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'institution',
              title: 'Institution',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              validation: Rule => Rule.required()
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
};