import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, href) => {
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    setOpen(false);

    const offset = 84;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/10 bg-base/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#hero"
          onClick={(event) => handleNavClick(event, '#hero')}
          className="text-sm font-bold tracking-[0.2em] text-accent md:text-base"
        >
          FLUTTER.DEV
        </a>

        <button
          className="text-2xl text-slate-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`nav-link relative px-1 py-1.5 text-sm ${
                  activeSection === link.href.slice(1) ? 'active text-accent' : 'text-slate-300'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-black/70 px-5 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link block rounded-md px-3 py-2 text-sm ${
                  activeSection === link.href.slice(1) ? 'active text-accent' : 'text-slate-300'
                }`}
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
