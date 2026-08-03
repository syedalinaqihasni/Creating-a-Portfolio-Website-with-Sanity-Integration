/**
 * This is an example schema for a project in Sanity.
 * You would add this to your Sanity Studio schema folder.
 */

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'link',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project'
    },
    {
      name: 'githubLink',
      title: 'GitHub URL',
      type: 'url',
      description: 'Link to the GitHub repository'
    },
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'number',
      description: 'Order in which to display projects (lower numbers appear first)'
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    }
  }
};