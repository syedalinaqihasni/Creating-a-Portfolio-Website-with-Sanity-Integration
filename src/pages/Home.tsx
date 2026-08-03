import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import { getProjects } from '../lib/sanityClient';

// Define types for our data
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  tags: string[];
  link?: string;
  githubLink?: string;
}

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getProjects();
        setFeaturedProjects(projects.slice(0, 3)); // Get first 3 projects
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data in case of error
        setFeaturedProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

  // In case Sanity is not set up yet, use placeholder data
  const placeholderProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      slug: { current: 'e-commerce-platform' },
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB.',
      mainImage: {
        asset: {
          _id: 'image-1',
          url: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      _id: '2',
      title: 'Portfolio Website',
      slug: { current: 'portfolio-website' },
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      mainImage: {
        asset: {
          _id: 'image-2',
          url: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://example.com',
      githubLink: 'https://github.com'
    },
    {
      _id: '3',
      title: 'Task Management App',
      slug: { current: 'task-management-app' },
      description: 'A task management application with drag-and-drop functionality.',
      mainImage: {
        asset: {
          _id: 'image-3',
          url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
      },
      tags: ['React', 'Redux', 'Firebase'],
      link: 'https://example.com',
      githubLink: 'https://github.com'
    }
  ];

  const displayProjects = featuredProjects.length > 0 ? featuredProjects : placeholderProjects;

  return (
    <>
      <Seo />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8348457/pexels-photo-8348457.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-accent-500">Syed Ali Naqi Hasni</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-neutral-100">
              Software Developer | Designer | Technology Enthusiast
            </p>
            <p className="text-lg mb-8 text-neutral-200 max-w-2xl">
              I create beautiful, functional, and user-friendly applications that solve real-world problems. 
              With expertise in modern web technologies, I bring ideas to life through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/projects" size="lg" variant="secondary" icon={<ArrowRight size={20} />} iconPosition="right">
                View My Work
              </Button>
              <Button to="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white/10 active:bg-white/20">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">About Me</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
              I'm a passionate software developer with over 5 years of experience in creating innovative digital solutions. 
              My expertise spans across full-stack development, UI/UX design, and cloud architecture. 
              I believe in crafting clean, efficient code that delivers exceptional user experiences.
            </p>
            <Button to="/about" variant="primary">
              Learn More About Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white"
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
            >
              Here are some of my recent works. Each project reflects my passion for creating elegant, user-focused solutions.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayProjects.map((project) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.mainImage.asset.url} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{project.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
                          aria-label="View live project"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                    <Button to={`/projects#${project.slug.current}`} variant="text" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Button to="/projects" variant="primary" icon={<ArrowRight size={20} />} iconPosition="right">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">My Skills</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              I've honed my skills across various technologies and domains, allowing me to tackle complex problems with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'MongoDB', 'SQL', 'AWS', 'Docker', 'UI/UX Design', 'RESTful APIs', 'GraphQL'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <span className="block text-lg font-medium text-neutral-900 dark:text-white">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-primary-100">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Button to="/contact" size="lg" variant="secondary">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;