/**
 * This is an example schema for a certificate in Sanity.
 * You would add this to your Sanity Studio schema folder.
 */

export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'issuer',
      title: 'Issuer',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'link',
      title: 'Certificate URL',
      type: 'url',
      description: 'Link to view the certificate'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
      media: 'image'
    }
  }
};