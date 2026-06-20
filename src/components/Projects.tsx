import { useState } from 'react';
import { Github, ExternalLink, Cpu, Sliders, Info, Zap, ArrowLeft, Layers } from 'lucide-react';
import { projectsList } from '../data';
import { MovieMagicSimulator, QuantumSecureChatSimulator } from './InteractiveSimulators';

interface ProjectScreenState {
  [projectId: string]: 'details' | 'demo';
}

export default function Projects() {
  const [projectScreens, setProjectScreens] = useState<ProjectScreenState>({
    moviemagic: 'details',
    quantumsecurechat: 'details'
  });

  const toggleScreen = (projectId: string, screen: 'details' | 'demo') => {
    setProjectScreens((prev) => ({
      ...prev,
      [projectId]: screen
    }));
  };

  const getTechBadgeColor = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('python') || t.includes('flask')) return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
    if (t.includes('aws') || t.includes('dynamodb') || t.includes('sns')) return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20';
    if (t.includes('java') || t.includes('aes') || t.includes('quantum')) return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
    if (t.includes('javascript') || t.includes('html') || t.includes('css')) return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
    return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
  };

  return (
    <section id="projects" className="py-20 relative bg-[#0F172A]">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Each project is built to answer real architecture metrics: responsive client engineering, post-quantum safety measures, and AWS distributed resource mapping.
          </p>
        </div>

        {/* Projects Layout with Inline Simulators */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsList.map((project) => {
            const currentView = projectScreens[project.id] || 'details';

            return (
              <div
                key={project.id}
                className="glass rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between h-full hover:border-slate-700/60 transition-colors shadow-2xl relative"
              >
                
                {/* Visual Header Graphic */}
                <div className="min-h-[11rem] py-8 sm:py-0 sm:h-44 px-4 pb-16 sm:pb-0 bg-slate-950/40 relative flex items-center justify-center border-b border-slate-800/40 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  
                  {/* Glowing background circles */}
                  <div className={`absolute w-32 h-32 rounded-full blur-2xl opacity-15 ${project.id === 'moviemagic' ? 'bg-cyan-500' : 'bg-emerald-500'}`} />

                  {/* Icon representations */}
                  <div className="relative text-center">
                    <div className="inline-flex p-3 rounded-2xl bg-slate-900 border border-slate-800 mb-2">
                      {project.id === 'moviemagic' ? (
                        <Zap className="w-8 h-8 text-cyan-400" />
                      ) : (
                        <Cpu className="w-8 h-8 text-emerald-400" />
                      )}
                    </div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-white px-4">
                      {project.title}
                    </h3>
                  </div>

                  {/* Quick toggle bar inside card header */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:right-4 flex items-center space-x-1 p-1 bg-slate-950/80 border border-slate-850 rounded-lg">
                    <button
                      onClick={() => toggleScreen(project.id, 'details')}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono leading-none tracking-wider uppercase transition-colors ${
                        currentView === 'details'
                          ? 'bg-blue-600/90 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => toggleScreen(project.id, 'demo')}
                      className={`px-2.5 py-1 rounded text-[10px] font-mono leading-none tracking-wider uppercase transition-colors ${
                        currentView === 'demo'
                          ? 'bg-blue-600/90 text-white font-bold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Live Sandbox
                    </button>
                  </div>
                </div>

                {/* Main Dynamic View Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  {currentView === 'details' ? (
                    <div className="space-y-6">
                      
                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                        {project.description}
                      </p>

                      {/* Bullet Features */}
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
                          Core Integration Features
                        </span>
                        <ul className="space-y-2.5">
                          {project.features.map((feat, index) => (
                            <li key={index} className="flex items-start text-xs text-slate-300">
                              <span className="text-cyan-400 mr-2 mt-1 select-none">•</span>
                              <span className="leading-relaxed">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Chips */}
                      <div>
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-3">
                          Engineering Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-1 rounded-md text-[10px] font-mono border ${getTechBadgeColor(tech)}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  ) : (
                    <div className="space-y-4">
                      {project.id === 'moviemagic' ? <MovieMagicSimulator /> : <QuantumSecureChatSimulator />}
                    </div>
                  )}

                  {/* Lower Controls & Action Links */}
                  <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4">
                    {/* View specifications Backlink when playing in sandbox */}
                    {currentView === 'demo' ? (
                      <button
                        onClick={() => toggleScreen(project.id, 'details')}
                        className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-white transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Show Specifications</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleScreen(project.id, 'demo')}
                        className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-white group transition-colors cursor-pointer"
                      >
                        <Sliders className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
                        <span>Launch Interactive Sandbox</span>
                      </button>
                    )}

                    {/* Standard GitHub & Direct link buttons */}
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-slate-400 hover:text-white text-xs border border-slate-800 px-3 py-1.5 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>

                      {project.id === 'moviemagic' && (
                        <button
                          onClick={() => toggleScreen('moviemagic', 'demo')}
                          className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-white text-xs border border-cyan-800/30 px-3 py-1.5 rounded-lg bg-cyan-950/20 hover:bg-cyan-950/40 transition-colors"
                          title="Simulate Booking Web App"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Simulated Live</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
