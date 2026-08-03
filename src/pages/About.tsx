import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import Button from '../components/common/Button';
import { getAboutPage } from '../lib/sanityClient';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

interface AboutData {
  title: string;
  introduction: string;
  biography: string;
  skills: string[];
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    duration: string;
    description: string;
  }>;
  image: {
    asset: {
      url: string;
    };
  };
}

// Placeholder data in case Sanity is not set up
const placeholderData: AboutData = {
  title: "About Me",
  introduction: "Software Developer & Technology Enthusiast",
  biography: "I am a passionate software developer with over 5 years of experience creating innovative solutions. I specialize in building high-performance web applications, intuitive user interfaces, and scalable backend systems. My approach combines technical expertise with creative problem-solving to deliver outstanding results for my clients and users.",
  skills: [
    "JavaScript/TypeScript", "React.js", "Node.js", "Python", 
    "MongoDB", "PostgreSQL", "AWS", "Docker", 
    "RESTful APIs", "GraphQL", "UI/UX Design", "Mobile Development"
  ],
  experience: [
    {
      title: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      duration: "2020 - Present",
      description: "Lead developer for multiple client projects, specializing in React-based web applications. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Group",
      duration: "2018 - 2020",
      description: "Developed and maintained e-commerce platforms and content management systems for various clients using Node.js, React, and MongoDB."
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Agency",
      duration: "2016 - 2018",
      description: "Created responsive and accessible user interfaces for web applications. Collaborated with designers to implement pixel-perfect designs."
    }
  ],
  education: [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      duration: "2014 - 2016",
      description: "Specialized in software engineering with a focus on distributed systems."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "National University",
      duration: "2010 - 2014",
      description: "Graduated with honors. Participated in multiple hackathons and coding competitions."
    }
  ],
  image: {
    asset: {
      url: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  }
};

const About = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'biography' | 'experience' | 'education'>('biography');

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutPage();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
        setAboutData(placeholderData);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  const data = aboutData || placeholderData;

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
      <Seo title="About Me | Syed Ali Naqi Hasni" description="Learn about Syed Ali Naqi Hasni's background, skills, and professional experience." />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.title}</h1>
              <p className="text-xl text-primary-100 mb-6">{data.introduction}</p>
              <Button 
                href="/resume.pdf" 
                variant="secondary" 
                icon={<Download size={18} />}
                iconPosition="left"
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-500/20 rounded-lg blur-lg"></div>
                <img 
                  src={data.image.asset.url} 
                  alt="Syed Ali Naqi Hasni" 
                  className="w-full h-auto rounded-lg relative z-10 object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="border-b border-neutral-200 dark:border-neutral-700 inline-flex">
              <button 
                onClick={() => setActiveTab('biography')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${
                  activeTab === 'biography' 
                    ? 'border-primary-600 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Biography
              </button>
              <button 
                onClick={() => setActiveTab('experience')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${
                  activeTab === 'experience' 
                    ? 'border-primary-600 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Experience
              </button>
              <button 
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 text-lg font-medium border-b-2 ${
                  activeTab === 'education' 
                    ? 'border-primary-600 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Biography Content */}
            {activeTab === 'biography' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl text-neutral-700 dark:text-neutral-300 mb-6">{data.biography}</p>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">My Skills</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {data.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 text-center"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Experience Content */}
            {activeTab === 'experience' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Professional Experience</h3>
                {data.experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full"></div>
                    <div className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">{exp.duration}</div>
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">{exp.title}</h4>
                    <div className="mb-3 text-primary-600 dark:text-primary-400 flex items-center">
                      <Briefcase size={16} className="mr-2" />
                      {exp.company}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300">{exp.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education Content */}
            {activeTab === 'education' && (
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-white">Education</h3>
                {data.education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-neutral-200 dark:border-neutral-700"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent-500 rounded-full"></div>
                    <div className="mb-1 text-sm text-neutral-500 dark:text-neutral-400">{edu.duration}</div>
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white">{edu.degree}</h4>
                    <div className="mb-3 text-primary-600 dark:text-primary-400 flex items-center">
                      <GraduationCap size={16} className="mr-2" />
                      {edu.institution}
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">Interested in working together?</h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;