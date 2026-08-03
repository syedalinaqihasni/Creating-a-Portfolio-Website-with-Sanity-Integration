import { createClient } from '@sanity/client';

// This will need to be configured with your actual Sanity project details
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2023-05-03', // use a UTC date string
});

export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      publishedAt,
      excerpt,
      "categories": categories[]->title,
      "authorName": author->name,
      "authorImage": author->image
    }`
  );
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      body,
      publishedAt,
      "categories": categories[]->title,
      "author": author->{name, image, bio}
    }`,
    { slug }
  );
}

export async function getProjects() {
  return client.fetch(
    `*[_type == "project"] | order(orderRank) {
      _id,
      title,
      slug,
      description,
      mainImage {
        asset->{
          _id,
          url
        }
      },
      tags,
      link,
      githubLink
    }`
  );
}

export async function getCertificates() {
  return client.fetch(
    `*[_type == "certificate"] | order(date desc) {
      _id,
      title,
      issuer,
      date,
      image {
        asset->{
          _id,
          url
        }
      },
      link,
      description
    }`
  );
}

export async function getGalleryImages() {
  return client.fetch(
    `*[_type == "galleryImage"] | order(orderRank) {
      _id,
      title,
      description,
      image {
        asset->{
          _id,
          url
        }
      },
      tags
    }`
  );
}

export async function getAboutPage() {
  return client.fetch(
    `*[_type == "about"][0]{
      title,
      introduction,
      biography,
      skills,
      experience,
      education,
      image {
        asset->{
          _id,
          url
        }
      }
    }`
  );
}