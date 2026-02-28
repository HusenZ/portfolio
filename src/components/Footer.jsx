import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  { href: 'https://github.com/HusenZ', icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/husenzhare', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://youtube.com/@husenzhare', icon: FaYoutube, label: 'YouTube' },
  { href: 'https://x.com/MohammadhusenZ', icon: FaXTwitter, label: 'X' }
];

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center md:px-8">
        <p className="text-sm text-slate-300">Designed &amp; Built by Mohammadhusen Zhare</p>

        <div className="flex items-center gap-4 text-lg text-slate-400">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="glow-hover rounded-full p-2 transition hover:text-accent"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-slate-500">Copyright 2025</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
