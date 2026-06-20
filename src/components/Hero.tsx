import { useEffect, useState } from 'react';
import { Github, Linkedin, ArrowRight, FileText, Terminal, Sparkles, Cloud, Shield } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const roles = [
    'Python Developer',
    'Software Engineer',
    'Cloud Enthusiast',
    'Lifelong Learner'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToResume = () => {
    const el = document.getElementById('resume-sheet');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Left */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass border-slate-800/80 w-fit mx-auto lg:mx-0 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-slate-300 font-mono tracking-widest uppercase">
              Class of 2026 • Seeking Roles
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">{personalInfo.name}</span>
          </h1>

          {/* Typing Area */}
          <div className="h-10 sm:h-12 mt-4 flex items-center justify-center lg:justify-start">
            <span className="font-mono text-lg sm:text-2xl text-cyan-400 font-semibold tracking-wide">
              {currentText}
            </span>
            <span id="cursor-blink" className="w-[3px] h-7 bg-cyan-400 ml-1 select-none animate-ping" />
          </div>

          <p className="mt-6 text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans font-light">
            {personalInfo.introduction}
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 group transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToResume}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 text-sm font-semibold text-slate-200 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Social Icons Links */}
          <div className="mt-10 flex items-center justify-center lg:justify-start space-x-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:-translate-y-1 transition-all shadow-md group"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 hover:-translate-y-1 transition-all shadow-md group"
              title="LinkedIn Connection"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-105 transition-transform" />
            </a>
          </div>
        </div>

        {/* Profile/Image Graphic Right */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 relative">
          
          {/* Animated floating tech bubbles around profile */}
          <div className="absolute top-4 left-6 z-20 animate-float bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-blue-500/30 flex items-center space-x-1.5 shadow-lg select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="font-mono text-xs font-semibold text-blue-200">Python</span>
          </div>

          <div className="absolute bottom-12 left-2 z-20 animate-float-delayed bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-cyan-500/30 flex items-center space-x-1.5 shadow-lg select-none">
            <Cloud className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono text-xs font-semibold text-cyan-200">AWS</span>
          </div>

          <div className="absolute top-1/2 right-0 z-20 animate-float bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-blue-500/30 flex items-center space-x-1.5 shadow-lg select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-slate-200">Flask</span>
          </div>

          <div className="absolute top-12 right-12 z-20 animate-float-delayed bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-slate-700/80 flex items-center space-x-1.5 shadow-lg select-none">
            <Github className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-mono text-xs font-semibold text-slate-300">GitHub</span>
          </div>

          {/* Profile Circle Frame */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex justify-center items-center">
            {/* Pulsing Back Glow grids */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 opacity-20 blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />

            {/* Glowing Border Circle */}
            <div className="absolute inset-0 rounded-full border-2 profile-glow">
              {/* Radial gradient backing overlay */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <img
                  src="/programmer_avatar_1781713336528.jpg"
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none scale-[1.35] hover:scale-[1.45] transition-transform duration-500 origin-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
