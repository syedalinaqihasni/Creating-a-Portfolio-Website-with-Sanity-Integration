import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  index: number;
}

const SkillCard = ({ name, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
    >
      <span className="block text-lg font-medium text-neutral-900 dark:text-white">{name}</span>
    </motion.div>
  );
};

export default SkillCard;