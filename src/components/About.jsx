import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="section border-t border-white/10">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-slate-300"
      >
        I am a Flutter developer focused on shipping robust mobile products for iOS
        and Android. My approach blends clean code, reusable architecture, and
        pixel-precise UI implementation. I enjoy turning product requirements into
        reliable, delightful app experiences.
      </motion.p>
    </section>
  );
}

export default About;
