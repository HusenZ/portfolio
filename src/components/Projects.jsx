import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const filters = ['All', 'Flutter', 'Freelance', 'Hackathon', 'Full-Stack'];

const projects = [
  {
    title: 'WeMotions',
    tags: ['Flutter', 'BLoC', 'Firebase', 'HLS', 'WebSocket'],
    description:
      'Production-grade short-form social video app with a novel 4D feed - vertical posts + horizontal replies with gesture controls.',
    links: [
      { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.wemotions.app', type: 'external' },
      { label: 'GitHub', url: 'https://github.com/HusenZ', type: 'github' }
    ],
    badge: 'Live on Play Store 🚀',
    techSummary: 'Flutter media pipeline with BLoC-driven feed orchestration.',
    categories: ['Flutter']
  },
  {
    title: 'Finance Manager',
    tags: ['Flutter', 'Firebase', 'Hive', 'BLoC'],
    description:
      'Offline-first personal finance app with budgeting, recurring transaction detection, and analytics dashboard.',
    links: [{ label: 'GitHub', url: 'https://github.com/HusenZ', type: 'github' }],
    techSummary: 'Offline-first data layer using Hive and Firebase sync workflows.',
    categories: ['Flutter']
  },
  {
    title: 'Garage Connect',
    tags: ['Flutter', 'FastAPI', 'MongoDB', 'Socket.IO'],
    description:
      'Full-stack garage management platform with real-time booking, JWT auth, Google OAuth, sub-200ms response times.',
    links: [{ label: 'GitHub', url: 'https://github.com/HusenZ/garage-connect', type: 'github' }],
    techSummary: 'Flutter client with FastAPI + MongoDB real-time backend.',
    categories: ['Flutter', 'Full-Stack']
  },
  {
    title: 'XSafety',
    tags: ['Flutter', 'Location', 'SOS'],
    description:
      'Emergency response app built in 24-hour ACM Hackathon. Secured top 3 position.',
    links: [{ label: 'GitHub', url: 'https://github.com/HusenZ/xsafety', type: 'github' }],
    badge: '🏆 Hackathon Top 3',
    techSummary: 'Rapid Flutter prototyping with SOS and location-first flows.',
    categories: ['Flutter', 'Hackathon']
  },
  {
    title: 'The Lab Casuals (Freelance)',
    tags: ['Web', 'E-commerce'],
    description:
      'Full e-commerce web app for a clothing brand with cart, payments, and real-time inventory.',
    links: [{ label: 'Live Site', url: '#', type: 'external' }],
    badge: 'Freelance',
    techSummary: 'Commerce stack focused on inventory sync and checkout UX.',
    categories: ['Freelance', 'Full-Stack']
  },
  {
    title: 'Fatawa App (Freelance)',
    tags: ['Flutter', 'Firebase'],
    description:
      'Islamic Q&A platform with 1000+ active users on Play Store. Built for Wafasoft.',
    links: [{ label: 'Play Store', url: '#', type: 'external' }],
    badge: '1000+ Users',
    techSummary: 'Flutter + Firebase delivery tuned for scalable user engagement.',
    categories: ['Flutter', 'Freelance']
  }
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section border-t border-white/10">
      <h2 className="section-title">Projects</h2>

      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`glow-hover rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                active
                  ? 'border-accent bg-accent/20 text-accent'
                  : 'border-white/15 bg-white/5 text-slate-300 hover:border-accent/50 hover:text-accent'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.09, ease: 'easeOut' }}
            className="project-card glow-hover rounded-xl border border-white/10 bg-[#111111] p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              {project.badge && (
                <span className="shrink-0 rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[11px] font-medium text-accent">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-slate-300">{project.description}</p>
            <p className="mt-3 text-sm text-slate-400">{project.techSummary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((item) => (
                <li
                  key={`${project.title}-${item}`}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {project.links.map((link) => (
                <a
                  key={`${project.title}-${link.label}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow glow-hover inline-flex items-center gap-2 rounded-lg border border-accent/35 bg-accent/10 px-4 py-2 text-slate-100"
                >
                  {link.type === 'github' ? <FaGithub /> : <FaExternalLinkAlt />}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
