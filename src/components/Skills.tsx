import { useState } from 'react';
import { skillsList } from '../data';
import { Code, Server, Cloud, HeartCrack, Layers, Laptop, PenTool, GitBranch } from 'lucide-react';
import { Skill } from '../types';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'backend-db' | 'cloud' | 'tools-concepts'>('all');

  const tabs = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'backend-db', label: 'Backend & DBs' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'tools-concepts', label: 'Tools & Concepts' }
  ];

  const getFilteredSkills = () => {
    switch (activeTab) {
      case 'languages':
        return skillsList.filter((s) => s.category === 'languages');
      case 'backend-db':
        return skillsList.filter((s) => s.category === 'backend' || s.category === 'databases');
      case 'cloud':
        return skillsList.filter((s) => s.category === 'cloud');
      case 'tools-concepts':
        return skillsList.filter((s) => s.category === 'tools' || s.category === 'concepts' || s.category === 'os');
      default:
        return skillsList;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'languages':
        return <Code className="w-4 h-4 text-blue-400" />;
      case 'backend':
      case 'databases':
        return <Server className="w-4 h-4 text-cyan-400" />;
      case 'cloud':
        return <Cloud className="w-4 h-4 text-teal-400" />;
      default:
        return <GitBranch className="w-4 h-4 text-pink-400" />;
    }
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 relative bg-[#0F172A]/50">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            I believe in developing deep competency. Here is a granular view of my dynamic programming index, database configuration skills, cloud metrics, and modern software development concepts.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 border border-blue-500'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-5 rounded-2xl flex items-center group transition-all duration-300 hover:border-slate-700/60"
            >
              <div className="flex items-center space-x-3 w-full">
                <div className="w-8 h-8 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-center justify-center shrink-0">
                  {getCategoryIcon(skill.category)}
                </div>
                <span className="font-sans font-semibold text-sm text-white tracking-wide">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary Panel */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass p-5 rounded-xl border border-slate-800/50 text-center">
            <span className="block font-display font-extrabold text-2xl text-cyan-400 mb-1">Flask</span>
            <span className="block text-[10px] font-mono uppercase text-slate-500 tracking-wider">Backend Framework</span>
          </div>
          <div className="glass p-5 rounded-xl border border-slate-800/50 text-center">
            <span className="block font-display font-extrabold text-2xl text-blue-500 mb-1">6+ Services</span>
            <span className="block text-[10px] font-mono uppercase text-slate-500 tracking-wider">AWS Cloud Deployment</span>
          </div>
          <div className="glass p-5 rounded-xl border border-slate-800/50 text-center">
            <span className="block font-display font-extrabold text-2xl text-cyan-400 mb-1">MySQL</span>
            <span className="block text-[10px] font-mono uppercase text-slate-500 tracking-wider">Database Engine</span>
          </div>
          <div className="glass p-5 rounded-xl border border-slate-800/50 text-center">
            <span className="block font-display font-extrabold text-2xl text-blue-500 mb-1">REST APIs</span>
            <span className="block text-[10px] font-mono uppercase text-slate-500 tracking-wider">System Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
}
