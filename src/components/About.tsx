import { GraduationCap, Code2, CloudSnow, Globe, Settings, Cpu, LineChart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      title: 'B.Tech CSE Graduate',
      description: 'Acquired strong foundational standards in Computer Science & Engineering throughout core academic studies.'
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Python Programmer',
      description: 'Enthusiastic developer focusing heavily on backend design, scripting automation, and API crafting.'
    },
    {
      icon: <CloudSnow className="w-5 h-5 text-blue-400" />,
      title: 'Cloud Enthusiast',
      description: 'Hands-on training deploying serverless Lambda triggers, S3 stores, and configuring resilient EC2 architectures.'
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-400" />,
      title: 'Practical Builder',
      description: 'Passionate about turning specifications into production ready code, fully tested and optimized.'
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      title: 'Continuous Learner',
      description: 'Frequently exploring emerging cloud advancements, post-quantum cryptography, and AI structures.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: 'Scalable System Designer',
      description: 'Aiming to construct clean, modular software products utilizing proven industry standard practices.'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#0F172A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            I am a Software Engineer and Python Developer focused on translating abstract ideas into powerful, robust cloud-backed applications. Here is what defines my engineering journey.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass glass-hover p-6 rounded-2xl flex flex-col justify-between group h-full"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex justify-center items-center mb-5 group-hover:border-blue-500/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-base text-white tracking-wide mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              <div className="w-fit h-[2px] bg-slate-800 group-hover:bg-cyan-500/50 mt-6 transition-all group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-12 glass p-8 rounded-2xl border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display font-semibold text-lg text-white mb-2">
              Interested in collaborating in tech squads?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm font-light">
              I am actively looking for junior Software Engineer, Python Developer, or Cloud Associate positions.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-xl bg-orange-600/10 hover:bg-orange-600/20 text-orange-400 text-xs font-semibold border border-orange-500/30 transition-all cursor-pointer whitespace-nowrap"
          >
            Schedule a Chat
          </button>
        </div>

      </div>
    </section>
  );
}
