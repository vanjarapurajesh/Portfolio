import { Briefcase, Calendar, CheckSquare, Zap } from 'lucide-react';
import { experienceList } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-[#0F172A]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Bringing practical, real-world industry experience designing cloud services and constructing secure software pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10 pl-6 md:pl-12 py-4 space-y-12">
          
          {/* Animated pulsing node indicator */}
          <div className="absolute -left-[11px] top-7 w-5 h-5 rounded-full bg-slate-950 border-2 border-blue-500 flex justify-center items-center shadow-lg shadow-blue-500/25">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute" />
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          {experienceList.map((job) => (
            <div key={job.organization} className="group">
              
              {/* Job Header Meta */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-blue-400 transition-colors">
                    {job.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300">
                    <span className="font-semibold text-sm text-cyan-400">{job.organization}</span>
                    <span className="text-xs text-slate-600 font-bold">•</span>
                    <span className="text-xs text-slate-400 font-mono tracking-wide">Enterprise Internship</span>
                  </div>
                </div>

                {/* Duration Badge */}
                <span className="self-start md:self-center inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-medium text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{job.duration}</span>
                </span>
              </div>

              {/* Glass Details Card */}
              <div className="glass p-6 sm:p-8 rounded-2xl shadow-inner border border-white/10 hover:border-white/20 transition-colors">
                <h4 className="text-xs font-mono font-bold tracking-widest text-[#E2E8F0] uppercase mb-4 flex items-center">
                  <Zap className="w-3.5 h-3.5 text-blue-400 mr-2" />
                  Core Responsibilities & Milestones
                </h4>

                <ul className="space-y-4">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm leading-relaxed text-slate-300">
                      <span className="text-cyan-400 mr-3 mt-1.5 shrink-0 font-bold text-xs select-none">
                        •
                      </span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
