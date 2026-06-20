import { useEffect, useState } from 'react';
import { Menu, X, Terminal, FileText } from 'lucide-react';
import { personalInfo } from '../data';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Credentials' },
    { id: 'education', label: 'Education' },
    { id: 'resume-sheet', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Is Scrolled
      setIsScrolled(window.scrollY > 20);

      // 3. Active Section Detection
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F172A]/85 backdrop-blur-md border-b border-slate-800/60 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div
        className="h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 origin-left transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Logo */}
        <div
          role="button"
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex justify-center items-center group-hover:border-cyan-400/60 transition-colors">
            <Terminal className="w-5 h-5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <span className="font-display font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            Rajesh
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                activeSection === section.id
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40'
                  : 'text-slate-400 hover:text-white border border-transparent'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/80 text-slate-400 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[420px] border-b border-slate-800 bg-[#0F172A]' : 'max-h-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1.5">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === section.id
                  ? 'text-cyan-400 bg-cyan-950/40 border-l-2 border-cyan-400 pl-3'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/55'
              }`}
            >
              {section.label}
            </button>
          ))}
          {/* Direct navigation options only */}
        </div>
      </div>
    </header>
  );
}
