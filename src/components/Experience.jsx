import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Flutter Developer',
    company: 'Persist Ventures',
    period: 'Oct 2025 - Feb 2026',
    location: 'Remote',
    highlights: [
      'Built a 4D navigation system.',
      'Implemented BLoC-based authentication flow.',
      'Optimized video preloading performance.',
      'Delivered production-grade architecture.'
    ]
  },
  {
    role: 'Flutter Instructor',
    company: 'TuteDude',
    period: 'Jul 2025 - Sep 2025',
    location: 'Remote',
    highlights: [
      'Trained 20+ students in Flutter fundamentals.',
      'Improved learning outcomes by 40%.',
      'Mentored students through Play Store deployment.'
    ]
  },
  {
    role: 'Flutter Project Manager Intern',
    company: 'Dynish',
    period: 'Dec 2023 - Feb 2024',
    location: 'Remote',
    highlights: [
      'Led a team of 5 Flutter developers.',
      'Guided BLoC architecture implementation.',
      'Managed Agile sprint planning and execution.',
      'Promoted reusable widget libraries.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section border-t border-white/10">
      <h2 className="section-title">Experience</h2>
      <div className="relative pl-10">
        <div className="absolute left-3 top-2 h-[calc(100%-12px)] w-px bg-white/20" aria-hidden="true" />

        <div className="space-y-8">
          {experiences.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              className="experience-card glow-hover relative rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <motion.div
                initial={{ x: -36 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              >
                <motion.span
                  className="absolute -left-[34px] top-6 h-3 w-3 rounded-full bg-accent ring-4 ring-accent/20"
                  initial={{ scale: 0.7, opacity: 0.6 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 + 0.2 }}
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.role} - {item.company}
                  </h3>
                  <p className="text-sm text-accent">
                    {item.period}, {item.location}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={`${item.company}-${highlight}`} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
