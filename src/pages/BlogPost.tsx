import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import { getBlogPostBySlug } from '../lib/sanityClient';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  body: any; // This would be Portable Text content from Sanity
  publishedAt: string;
  categories: string[];
  author: {
    name: string;
    image?: {
      asset: {
        _id: string;
        url: string;
      };
    };
    bio?: string;
  };
}

// Placeholder data in case Sanity is not set up
const placeholderPost: BlogPost = {
  _id: '1',
  title: 'Introduction to React Hooks',
  slug: { current: 'introduction-to-react-hooks' },
  mainImage: {
    asset: {
      _id: 'image-1',
      url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  },
  body: `
    <h2>What are React Hooks?</h2>
    <p>React Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 as a way to use state and other React features without writing a class.</p>
    
    <h2>Why Use Hooks?</h2>
    <p>Hooks solve a variety of problems in React:</p>
    <ul>
      <li>It's hard to reuse stateful logic between components</li>
      <li>Complex components become hard to understand</li>
      <li>Classes confuse both people and machines</li>
    </ul>
    
    <h2>Basic Hooks</h2>
    <p>Here are the most commonly used hooks:</p>
    
    <h3>1. useState</h3>
    <p>The useState hook lets you add state to functional components:</p>
    <pre><code>
    import React, { useState } from 'react';
    
    function Counter() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    </code></pre>
    
    <h3>2. useEffect</h3>
    <p>The useEffect hook lets you perform side effects in function components:</p>
    <pre><code>
    import React, { useState, useEffect } from 'react';
    
    function Example() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        document.title = \`You clicked \${count} times\`;
      });
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    </code></pre>
    
    <h2>Conclusion</h2>
    <p>Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They also offer a new powerful way to combine them.</p>
  `,
  publishedAt: '2023-04-15',
  categories: ['React', 'JavaScript', 'Web Development'],
  author: {
    name: 'Syed Ali Naqi Hasni',
    image: {
      asset: {
        _id: 'author-image',
        url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    bio: 'Software developer with expertise in React, Node.js, and modern JavaScript.'
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (slug) {
          const data = await getBlogPostBySlug(slug);
          setPost(data);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        // Use placeholder for demonstration purposes
        setPost(placeholderPost);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button to="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Estimate reading time (roughly 200 words per minute)
  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime < 1 ? 1 : readingTime;
  };

  // Use placeholder if post is still loading
  const displayPost = post || placeholderPost;

  // Get reading time from body content
  const readingTime = post ? getReadingTime(post.body) : 5;

  return (
    <>
      <Seo 
        title={`${displayPost.title} | Syed Ali Naqi Hasni`} 
        description={`Read about ${displayPost.title} by Syed Ali Naqi Hasni`} 
        image={displayPost.mainImage.asset.url}
        article={true}
        pathname={`/blog/${displayPost.slug.current}`}
      />
      
      {/* Article Header */}
      <section className="relative py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to all posts
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              {displayPost.categories.map((category, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-white/10 text-white rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{displayPost.title}</h1>
            <div className="flex flex-wrap items-center text-white/80 space-y-2 md:space-y-0">
              <div className="flex items-center mr-6">
                <Calendar size={16} className="mr-2" />
                {formatDate(displayPost.publishedAt)}
              </div>
              <div className="flex items-center mr-6">
                <User size={16} className="mr-2" />
                {displayPost.author.name}
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                {readingTime} min read
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white dark:bg-neutral-900 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={displayPost.mainImage.asset.url} 
                alt={displayPost.title}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: displayPost.body }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <div className="flex items-center">
                {displayPost.author.image && (
                  <img 
                    src={displayPost.author.image.asset.url} 
                    alt={displayPost.author.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">About the author</h3>
                  <p className="text-neutral-900 dark:text-white">{displayPost.author.name}</p>
                </div>
              </div>
              {displayPost.author.bio && (
                <p className="mt-4 text-neutral-700 dark:text-neutral-300">{displayPost.author.bio}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;