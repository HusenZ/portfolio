import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const contacts = [
  {
    label: 'Email',
    value: 'mohammadhusenz789@gmail.com',
    href: 'mailto:mohammadhusenz789@gmail.com',
    icon: FaEnvelope
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/husenzhare',
    href: 'https://linkedin.com/in/husenzhare',
    icon: FaLinkedin
  },
  {
    label: 'GitHub',
    value: 'github.com/HusenZ',
    href: 'https://github.com/HusenZ',
    icon: FaGithub
  },
  {
    label: 'YouTube',
    value: '@husenzhare',
    href: 'https://youtube.com/@husenzhare',
    icon: FaYoutube
  },
  {
    label: 'X',
    value: 'x.com/MohammadhusenZ',
    href: 'https://x.com/MohammadhusenZ',
    icon: FaXTwitter
  }
];

function Contact() {
  return (
    <section id="contact" className="section border-t border-white/10 pb-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Let&apos;s Build Something Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl text-slate-300"
      >
        Open to Flutter roles, freelance projects, and collaborations
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.2 }}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="contact-card glow-hover group rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <div className="contact-icon mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-slate-300">
                <Icon />
              </div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{contact.label}</p>
              <p className="mt-1 text-sm text-slate-200">{contact.value}</p>
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Contact;
