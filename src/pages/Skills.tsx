import { motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import { useState } from 'react';
import { Code2, Palette, Database, Cloud, Terminal, Layout } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  icon: JSX.Element;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      name: 'React',
      level: 90,
      category: 'Frontend',
      description: 'Building modern web applications with React and its ecosystem',
      icon: <Code2 size={24} />
    },
    {
      name: 'Node.js',
      level: 85,
      category: 'Backend',
      description: 'Server-side development with Express and Node.js',
      icon: <Terminal size={24} />
    },
    {
      name: 'UI/UX Design',
      level: 80,
      category: 'Design',
      description: 'Creating intuitive and beautiful user interfaces',
      icon: <Palette size={24} />
    },
    {
      name: 'PostgreSQL',
      level: 85,
      category: 'Database',
      description: 'Database design and optimization',
      icon: <Database size={24} />
    },
    {
      name: 'AWS',
      level: 75,
      category: 'DevOps',
      description: 'Cloud infrastructure and deployment',
      icon: <Cloud size={24} />
    },
    {
      name: 'TypeScript',
      level: 88,
      category: 'Frontend',
      description: 'Type-safe JavaScript development',
      icon: <Code2 size={24} />
    },
    {
      name: 'Responsive Design',
      level: 90,
      category: 'Design',
      description: 'Creating layouts that work across all devices',
      icon: <Layout size={24} />
    },
    // Add more skills as needed
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const filteredSkills = activeCategory
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

  return (
    <>
      <Seo 
        title="Skills & Technologies | Syed Ali Naqi Hasni" 
        description="Explore Syed Ali Naqi Hasni's technical skills and expertise in software development."
      />

      {/* Hero Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Skills & Technologies</h1>
            <p className="text-xl text-primary-100">
              A comprehensive overview of my technical expertise and professional capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
              }`}
            >
              All Skills
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-300 mr-4">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{skill.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{skill.category}</p>
                  </div>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-4">{skill.description}</p>
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Proficiency</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{skill.level}%</div>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded bg-neutral-200 dark:bg-neutral-700">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="py-16 bg-neutral-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
              Continuous Learning
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies.
              Currently exploring machine learning and blockchain development.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;