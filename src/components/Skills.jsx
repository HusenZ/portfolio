import { motion } from 'framer-motion';
import { FaGitAlt } from 'react-icons/fa';
import { SiDart, SiFirebase, SiFlutter, SiRedux, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Dart', icon: SiDart },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Redux / BLoC', icon: SiRedux },
  { name: 'REST APIs', icon: SiPostman }
];

function Skills() {
  return (
    <section id="skills" className="section border-t border-white/10">
      <h2 className="section-title">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="skill-card glow-hover rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <Icon className="mb-3 text-2xl text-accent" />
              <p className="text-sm font-medium text-slate-100">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
