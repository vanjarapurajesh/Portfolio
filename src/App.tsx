import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import ResumeSection from './components/ResumeSection';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import { personalInfo } from './data';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen text-slate-200 selection:bg-blue-500/30 selection:text-white antialiased font-sans">
      
      {/* Background Interactive Particles */}
      <ParticleBackground />

      {/* Lagging Glowing Custom Cursor (desktop only) */}
      <CustomCursor />

      {/* Floating Header & Progress indicator */}
      <Navbar />

      {/* Sections Layout */}
      <main id="app-main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <GithubStats />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer Element */}
      <footer className="relative bg-slate-950 border-t border-slate-900/80 z-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-8 border-b border-slate-900/60">
            {/* Slogan column */}
            <div className="text-center md:text-left space-y-2">
              <span className="font-display font-black text-white text-lg">
                Vanjarapu Rajesh
              </span>
              <p className="text-xs text-slate-500 font-mono tracking-wide">
                Python Developer | Aspiring Software Engineer
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400 font-medium whitespace-nowrap">
              <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors cursor-pointer">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors cursor-pointer">About</button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors cursor-pointer">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-400 transition-colors cursor-pointer">Experience</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-cyan-400 transition-colors cursor-pointer">Projects</button>
              <button onClick={() => scrollToSection('resume-sheet')} className="hover:text-cyan-400 transition-colors cursor-pointer">Resume</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</button>
            </div>

            {/* Social icons Column */}
            <div className="flex justify-center md:justify-end items-center space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/30 border border-slate-900 text-slate-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/30 border border-slate-900 text-slate-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-slate-900/30 border border-slate-900 text-slate-400 hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Copyright line */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
            <span>© 2026 {personalInfo.name}. All Rights Reserved.</span>
            <span className="flex items-center">
              Crafted with <Heart className="w-3 h-3 text-rose-500 mx-1 fill-rose-500 animate-pulse" /> using React, Cloud and Python.
            </span>
          </div>

        </div>
      </footer>

      {/* Floating Back To Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-all duration-300 transform cursor-pointer border border-blue-500 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
        title="Scroll back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
