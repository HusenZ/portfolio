import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import profileImage from '../../profile.jpg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
};

function Hero() {
  return (
    <section id="hero" className="section relative flex min-h-[88vh] items-center overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div variants={item} className="order-2 md:order-1">
            <motion.h1
              variants={item}
              className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
            >
              Mohammadhusen Zhare
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-base font-semibold uppercase tracking-[0.2em] text-white sm:text-lg"
            >
              Flutter Developer | Mobile App Engineer
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-3xl text-base text-slate-300 md:text-lg"
            >
              Building production-grade apps with Flutter, BLoC &amp; clean architecture
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-glow glow-hover rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white"
              >
                View Projects
              </a>
              <a
                href="#"
                className="btn-glow glow-hover rounded-lg border border-accent/60 px-5 py-3 text-sm font-semibold text-accent"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4 text-xl text-slate-300">
              <a href="https://github.com/HusenZ" target="_blank" rel="noreferrer" className="glow-hover rounded-full p-2 hover:text-accent">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/husenzhare" target="_blank" rel="noreferrer" className="glow-hover rounded-full p-2 hover:text-accent">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com/@husenzhare" target="_blank" rel="noreferrer" className="glow-hover rounded-full p-2 hover:text-accent">
                <FaYoutube />
              </a>
              <a href="https://x.com/MohammadhusenZ" target="_blank" rel="noreferrer" className="glow-hover rounded-full p-2 hover:text-accent">
                <FaXTwitter />
              </a>
              <a
                href="mailto:mohammadhusenz789@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="glow-hover rounded-full p-2 hover:text-accent"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="order-1 flex justify-center md:order-2 md:justify-end">
            <img
              src={profileImage}
              alt="Mohammadhusen Zhare"
              className="hero-avatar h-[180px] w-[180px] rounded-full object-cover md:h-[280px] md:w-[280px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
