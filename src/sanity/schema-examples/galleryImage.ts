/**
 * This is an example schema for a gallery image in Sanity.
 * You would add this to your Sanity Studio schema folder.
 */

export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
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
      name: 'orderRank',
      title: 'Order Rank',
      type: 'number',
      description: 'Order in which to display images (lower numbers appear first)'
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};