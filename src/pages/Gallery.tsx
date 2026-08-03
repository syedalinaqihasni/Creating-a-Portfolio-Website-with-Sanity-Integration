import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import { getGalleryImages } from '../lib/sanityClient';
import { GalleryImage } from '../types';
import { X } from 'lucide-react';

// Placeholder data in case Sanity is not set up
const placeholderGallery: GalleryImage[] = [
  {
    _id: '1',
    title: 'Web Application Dashboard',
    description: 'A modern dashboard interface for a web application',
    image: {
      asset: {
        _id: 'image-1',
        url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['UI/UX', 'Dashboard', 'Web Design']
  },
  {
    _id: '2',
    title: 'Mobile App Development',
    description: 'Creating a responsive mobile application',
    image: {
      asset: {
        _id: 'image-2',
        url: 'https://images.pexels.com/photos/193003/pexels-photo-193003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['Mobile', 'React Native', 'iOS']
  },
  {
    _id: '3',
    title: 'E-commerce Website',
    description: 'A full-featured online store with shopping cart functionality',
    image: {
      asset: {
        _id: 'image-3',
        url: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['E-commerce', 'Web Development', 'UX Design']
  },
  {
    _id: '4',
    title: 'API Integration',
    description: 'Connecting third-party services through API integration',
    image: {
      asset: {
        _id: 'image-4',
        url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['API', 'Backend', 'Integration']
  },
  {
    _id: '5',
    title: 'Database Architecture',
    description: 'Designing efficient database schemas for scalable applications',
    image: {
      asset: {
        _id: 'image-5',
        url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['Database', 'Architecture', 'NoSQL']
  },
  {
    _id: '6',
    title: 'UI Component Library',
    description: 'A collection of reusable UI components for rapid development',
    image: {
      asset: {
        _id: 'image-6',
        url: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['UI', 'Components', 'Design System']
  }
];

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const data = await getGalleryImages();
        setImages(data);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
        setImages(placeholderGallery);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Get all unique tags from images
  const allTags = [...new Set(
    images.flatMap(image => image.tags || [])
  )];

  // Filter images by selected tag
  const filteredImages = activeTag 
    ? images.filter(image => image.tags?.includes(activeTag)) 
    : images;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      <Seo title="Gallery | Syed Ali Naqi Hasni" description="A gallery showcasing Syed Ali Naqi Hasni's project visuals and work." />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-primary-100">A visual showcase of my work and projects.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          {/* Tag Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTag === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image._id}
                variants={itemVariants}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.image.asset.url} 
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-neutral-800">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{image.title}</h3>
                  {image.description && (
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm">{image.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-5xl w-full">
                <button
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/80 transition-colors z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
                <img 
                  src={selectedImage.image.asset.url} 
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="mt-4 bg-white dark:bg-neutral-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{selectedImage.title}</h3>
                  {selectedImage.description && (
                    <p className="text-neutral-700 dark:text-neutral-300">{selectedImage.description}</p>
                  )}
                  {selectedImage.tags && selectedImage.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {selectedImage.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;