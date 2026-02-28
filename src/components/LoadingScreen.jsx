import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0A]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-4xl font-semibold tracking-[0.25em] text-accent"
      >
        Husen
      </motion.h1>
    </motion.div>
  );
}

export default LoadingScreen;
