/**
 * This file contains the configuration for your Sanity Studio.
 * You need to create a Sanity project and update the projectId and dataset values below.
 * 
 * For more information on how to set up Sanity Studio, visit:
 * https://www.sanity.io/docs/getting-started
 */

// Configuration for your Sanity project
export const config = {
  // Replace with your actual project ID
  projectId: 'your-project-id',
  
  // Usually 'production', but could be 'development', 'staging', etc.
  dataset: 'production',
  
  // API version to use
  apiVersion: '2023-05-03',
  
  // Whether to use the CDN API (usually true for production)
  useCdn: true,
};

// Instructions for setting up Sanity Studio
export const setupInstructions = `
# Sanity Studio Setup Instructions

1. Create a Sanity account at https://www.sanity.io/

2. Create a new project from the Sanity dashboard

3. Install the Sanity CLI:
   \`\`\`
   npm install -g @sanity/cli
   \`\`\`

4. Initialize Sanity in a separate directory:
   \`\`\`
   sanity init
   \`\`\`

5. Create schemas for the following content types:
   - Blog Post
   - Project
   - Certificate
   - Gallery Image
   - About Page

6. Deploy your Sanity Studio:
   \`\`\`
   sanity deploy
   \`\`\`

7. Update the projectId and dataset in the sanity.config.ts file with your project's values

8. Create a .env file in the root of your portfolio project with:
   \`\`\`
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   VITE_SANITY_API_VERSION=2023-05-03
   \`\`\`

For more detailed instructions, visit the Sanity documentation at:
https://www.sanity.io/docs/getting-started-with-sanity
`;