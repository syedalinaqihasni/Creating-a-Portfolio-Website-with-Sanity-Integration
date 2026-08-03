import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import { getCertificates } from '../lib/sanityClient';
import { Certificate } from '../types';
import { ExternalLink, Calendar } from 'lucide-react';

// Placeholder data in case Sanity is not set up
const placeholderCertificates: Certificate[] = [
  {
    _id: '1',
    title: 'Advanced React Development',
    issuer: 'React Training Academy',
    date: '2023-05-10',
    image: {
      asset: {
        _id: 'image-1',
        url: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    link: 'https://example.com/cert1',
    description: 'Comprehensive training in advanced React concepts including hooks, context API, and performance optimization.'
  },
  {
    _id: '2',
    title: 'Full-Stack Web Development',
    issuer: 'Coding Institute',
    date: '2022-11-15',
    image: {
      asset: {
        _id: 'image-2',
        url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    link: 'https://example.com/cert2',
    description: 'Intensive program covering frontend and backend development technologies including React, Node.js, and MongoDB.'
  },
  {
    _id: '3',
    title: 'UI/UX Design Principles',
    issuer: 'Design Academy',
    date: '2022-08-20',
    image: {
      asset: {
        _id: 'image-3',
        url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    link: 'https://example.com/cert3',
    description: 'Comprehensive course on user interface and user experience design principles, usability testing, and prototyping.'
  },
  {
    _id: '4',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2022-05-05',
    image: {
      asset: {
        _id: 'image-4',
        url: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    link: 'https://example.com/cert4',
    description: 'Foundational certification demonstrating knowledge of AWS cloud services, security, architecture, and pricing.'
  },
  {
    _id: '5',
    title: 'TypeScript Fundamentals',
    issuer: 'TypeScript Academy',
    date: '2021-12-10',
    image: {
      asset: {
        _id: 'image-5',
        url: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    link: 'https://example.com/cert5',
    description: 'In-depth course on TypeScript concepts including type systems, interfaces, generics, and integration with JavaScript frameworks.'
  }
];

const Certificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificates();
        setCertificates(data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
        setCertificates(placeholderCertificates);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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
      <Seo title="Certificates | Syed Ali Naqi Hasni" description="Professional certifications and achievements of Syed Ali Naqi Hasni." />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Certificates & Badges</h1>
            <p className="text-xl text-primary-100">A collection of my professional certifications and achievements.</p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {certificates.map((certificate) => (
              <motion.div
                key={certificate._id}
                variants={itemVariants}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
                  <img 
                    src={certificate.image.asset.url} 
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(certificate.date)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{certificate.title}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">{certificate.issuer}</p>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">{certificate.description}</p>
                  {certificate.link && (
                    <Button 
                      href={certificate.link} 
                      variant="outline" 
                      size="sm"
                      icon={<ExternalLink size={16} />}
                      iconPosition="right"
                    >
                      View Certificate
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Certificates;