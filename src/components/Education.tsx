import { GraduationCap, Calendar } from 'lucide-react';
import { educationList } from '../data';

export default function Education() {
  const getNumericGrade = (cgpaStr: string | number) => {
    const str = String(cgpaStr);
    const match = str.match(/([0-9.]+)/);
    if (match) {
      return parseFloat(match[1]);
    }
    return 0;
  };

  return (
    <section id="education" className="py-20 relative bg-[#0F172A]">
      <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Academic <span className="text-cyan-400">Education</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Strong academic base in core computer sciences, algorithmic thinking, and modern software lifecycle structures.
          </p>
        </div>

        {/* Education Timeline Block */}
        <div className="space-y-8 relative">
          {educationList.map((edu, index) => {
            const isPercent = String(edu.cgpa).includes('%') || String(edu.cgpa).toLowerCase().includes('percentage');
            const numericValue = getNumericGrade(edu.cgpa);
            const percentage = isPercent ? numericValue : (numericValue / 10) * 100;

            return (
              <div key={index} className="relative group pl-8 sm:pl-12">
                {/* Vertical timeline vertical connector */}
                {index < educationList.length - 1 && (
                  <div className="absolute left-[19px] sm:left-[21px] top-10 bottom-0 w-[2px] bg-slate-800 pointer-events-none group-hover:bg-blue-500/20 transition-colors" />
                )}

                {/* Central Icon Node */}
                <div className="absolute top-0 left-0 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:border-cyan-400/40 transition-colors z-20">
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* Main Card */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative transition-all duration-300 hover:border-blue-500/35 hover:translate-y-[-2px]">
                  
                  {/* Duration Label & Degree Title */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {edu.degree}
                    </h3>
                    
                    <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-800/30 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold self-start sm:self-center">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <span className="block text-sm font-semibold text-slate-300 mb-4 h-auto">
                    {edu.institution}
                  </span>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-400">
                    <p className="flex items-start">
                      <span className="text-cyan-400 mr-2 shrink-0 font-bold">•</span>
                      <span>Affiliated University / Board: {edu.university}</span>
                    </p>
                  </div>

                  {/* Circular Grade Gauge widget */}
                  <div className="mt-6 pt-5 border-t border-slate-900/60 flex items-center space-x-4">
                    <div className="relative w-11 h-11 flex justify-center items-center shrink-0">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="22"
                          cy="22"
                          r="18"
                          className="stroke-slate-800"
                          strokeWidth="3.5"
                          fill="transparent"
                        />
                        <circle
                          cx="22"
                          cy="22"
                          r="18"
                          className="stroke-cyan-500 transition-all duration-1000 ease-out"
                          strokeWidth="3.5"
                          fill="transparent"
                          strokeDasharray="113"
                          strokeDashoffset={113 - (113 * percentage) / 100}
                        />
                      </svg>
                      <span className="absolute font-mono text-[9px] font-bold text-white">
                        {isPercent ? `${Math.round(numericValue)}%` : edu.cgpa}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold leading-none">
                        Graduation Grade
                      </span>
                      <span className="block text-xs sm:text-sm text-slate-200 font-semibold mt-1.5">
                        {isPercent ? `Percentage: ${numericValue}%` : `CGPA: ${edu.cgpa} / 10.0`}
                      </span>
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
