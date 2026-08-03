import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 border-4 border-primary-300 border-t-primary-600 rounded-full animate-spin mb-4"></div>
        <p className="text-neutral-700 dark:text-neutral-300 text-lg">Loading...</p>
      </motion.div>
    </div>
  );
};

export default Loading;