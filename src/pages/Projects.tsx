import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import { getProjects } from '../lib/sanityClient';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

// Placeholder data in case Sanity is not set up
const placeholderProjects: Project[] = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    slug: { current: 'e-commerce-platform' },
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, shopping cart, and payment processing.',
    mainImage: {
      asset: {
        _id: 'image-1',
        url: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    link: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    _id: '2',
    title: 'Portfolio Website',
    slug: { current: 'portfolio-website' },
    description: 'A responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and a contact form.',
    mainImage: {
      asset: {
        _id: 'image-2',
        url: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    link: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    _id: '3',
    title: 'Task Management App',
    slug: { current: 'task-management-app' },
    description: 'A task management application with drag-and-drop functionality. Allows users to create, edit, and organize tasks across different categories.',
    mainImage: {
      asset: {
        _id: 'image-3',
        url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['React', 'Redux', 'Firebase', 'Drag and Drop'],
    link: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    _id: '4',
    title: 'Weather Dashboard',
    slug: { current: 'weather-dashboard' },
    description: 'A weather dashboard that shows current weather and forecasts for multiple locations. Uses the OpenWeatherMap API for data.',
    mainImage: {
      asset: {
        _id: 'image-4',
        url: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['React', 'API Integration', 'Charts', 'Geolocation'],
    link: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    _id: '5',
    title: 'Recipe Sharing Platform',
    slug: { current: 'recipe-sharing-platform' },
    description: 'A platform for sharing and discovering recipes. Features user authentication, recipe creation, searching, and favoriting.',
    mainImage: {
      asset: {
        _id: 'image-5',
        url: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['React', 'Node.js', 'PostgreSQL', 'Authentication'],
    link: 'https://example.com',
    githubLink: 'https://github.com'
  },
  {
    _id: '6',
    title: 'Fitness Tracker',
    slug: { current: 'fitness-tracker' },
    description: 'A mobile-first fitness tracking application that allows users to log workouts, track progress, and set goals.',
    mainImage: {
      asset: {
        _id: 'image-6',
        url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    },
    tags: ['React Native', 'Firebase', 'Charts', 'Mobile App'],
    link: 'https://example.com',
    githubLink: 'https://github.com'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(placeholderProjects);
        setFilteredProjects(placeholderProjects);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Extract all unique tags from projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];

  // Filter projects when active tag changes
  useEffect(() => {
    if (!activeTag) {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.tags.includes(activeTag)));
    }
  }, [activeTag, projects]);

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
      <Seo title="Projects | Syed Ali Naqi Hasni" description="Explore the portfolio of projects developed by Syed Ali Naqi Hasni." />
      
      {/* Hero Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-primary-100">Explore my work and the technologies I've used.</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                id={project.slug.current}
                variants={itemVariants}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.mainImage.asset.url} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{project.title}</h3>
                  <p className="text-neutral-700 dark:text-neutral-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4">
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors flex items-center"
                          aria-label="View GitHub repository"
                        >
                          <Github size={20} className="mr-1" />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors flex items-center"
                          aria-label="View live project"
                        >
                          <ExternalLink size={20} className="mr-1" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;