import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import { getBlogPosts } from '../lib/sanityClient';
import { BlogPost } from '../types';
import { Calendar, User, Clock } from 'lucide-react';

// Placeholder data in case Sanity is not set up
const placeholderPosts: BlogPost[] = [
  {
    _id: '1',
    title: 'Introduction to React Hooks',
    slug: { current: 'introduction-to-react-hooks' },
    mainImage: {
      asset: {
        _id: 'image-1',
        url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    publishedAt: '2023-04-15',
    excerpt: 'Learn about React Hooks and how they can simplify your functional components.',
    categories: ['React', 'JavaScript', 'Web Development'],
    authorName: 'Syed Ali Naqi Hasni'
  },
  {
    _id: '2',
    title: 'Building a REST API with Node.js and Express',
    slug: { current: 'building-rest-api-nodejs-express' },
    mainImage: {
      asset: {
        _id: 'image-2',
        url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    publishedAt: '2023-03-22',
    excerpt: 'A step-by-step guide to creating a RESTful API using Node.js and Express.',
    categories: ['Node.js', 'API', 'Backend'],
    authorName: 'Syed Ali Naqi Hasni'
  },
  {
    _id: '3',
    title: 'Styling with Tailwind CSS',
    slug: { current: 'styling-with-tailwind-css' },
    mainImage: {
      asset: {
        _id: 'image-3',
        url: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    publishedAt: '2023-02-10',
    excerpt: 'How to use Tailwind CSS to rapidly build modern websites without leaving your HTML.',
    categories: ['CSS', 'Tailwind', 'Frontend'],
    authorName: 'Syed Ali Naqi Hasni'
  },
  {
    _id: '4',
    title: 'TypeScript for React Developers',
    slug: { current: 'typescript-for-react-developers' },
    mainImage: {
      asset: {
        _id: 'image-4',
        url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    publishedAt: '2023-01-15',
    excerpt: 'Essential TypeScript patterns and practices for React applications.',
    categories: ['TypeScript', 'React', 'JavaScript'],
    authorName: 'Syed Ali Naqi Hasni'
  },
  {
    _id: '5',
    title: 'Introduction to GraphQL',
    slug: { current: 'introduction-to-graphql' },
    mainImage: {
      asset: {
        _id: 'image-5',
        url: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    publishedAt: '2022-12-05',
    excerpt: 'Understanding GraphQL and how it improves upon traditional REST APIs.',
    categories: ['GraphQL', 'API', 'Web Development'],
    authorName: 'Syed Ali Naqi Hasni'
  }
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setPosts(placeholderPosts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Extract all unique categories from posts
  const allCategories = [...new Set(posts.flatMap(post => post.categories))];

  // Filter posts by selected category
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.categories.includes(selectedCategory)) 
    : posts;

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Estimate reading time (roughly 200 words per minute)
  const getReadingTime = (excerpt: string) => {
    const wordsPerMinute = 200;
    const wordCount = excerpt.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime < 1 ? 1 : readingTime;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Seo title="Blog | Syed Ali Naqi Hasni" description="Articles, tutorials, and insights from Syed Ali Naqi Hasni on web development, design, and technology." />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">My Blog</h1>
            <p className="text-xl text-primary-100">Insights, tutorials, and thoughts on technology and development.</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              All
            </button>
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post._id}
                variants={itemVariants}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${post.slug.current}`} className="block h-48 overflow-hidden">
                  <img 
                    src={post.mainImage.asset.url} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.slug.current}`}>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-300 transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center text-sm text-neutral-600 dark:text-neutral-400 space-y-2 md:space-y-0">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      {post.authorName}
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {getReadingTime(post.excerpt)} min read
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;