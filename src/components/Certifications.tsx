import { Award, BookOpen, ChevronRight, FileText, Globe, CheckCircle2, TrendingUp } from 'lucide-react';
import { certificationsList, achievementsList } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative bg-[#0F172A]/50">
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Credentials & <span className="text-cyan-400">Accomplishments</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Verified proof of engineering capabilities, including global cloud credentials, academic internet-of-things certifications, and peer-reviewed research publications.
          </p>
        </div>

        {/* Two Column Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Certifications Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-extrabold text-lg text-white flex items-center mb-6">
              <Award className="w-5 h-5 text-cyan-400 mr-2 shrink-0 animate-pulse" />
              Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsList.map((cert) => (
                <div
                  key={cert.title}
                  className="glass p-5 rounded-2xl flex items-start space-x-3.5 hover:border-slate-700/60 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800/80 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-500/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.title}
                    </h4>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase mt-1.5 tracking-wider leading-none">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Paper Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-extrabold text-lg text-white flex items-center mb-6">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2 shrink-0" />
              Key Achievements
            </h3>

            {/* IRJMETS Research Paper Spotlight Panel */}
            <div className="glass p-6 sm:p-7 rounded-3xl border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-lg shadow-blue-950/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[9px] font-mono font-bold text-cyan-300">
                  <FileText className="w-3 h-3" />
                  <span>Research Spotlight</span>
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">2025 Publication</span>
              </div>

              <div>
                <h4 className="font-display font-black text-sm text-white leading-normal">
                  "Comparative Analysis of LLM Performance: ChatGPT vs. DeepSeek"
                </h4>
                <p className="text-[11px] font-mono text-slate-500 mt-1">
                  Published in peer-reviewed journal: IRJMETS
                </p>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed font-light">
                Co-authored and published structural research on conversational context metrics, raw reasoning synthesis accuracy, and processing feedback latency comparisons between modern model families.
              </p>

              <div className="pt-2 border-t border-slate-900/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">Indexed Paper</span>
                <span className="text-xs text-blue-400 hover:text-cyan-300 font-medium flex items-center space-x-1 select-none">
                  <span>Peer Reviewed (IRJMETS)</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Other structured accomplishments */}
            <div className="space-y-3.5">
              {achievementsList.slice(1).map((ach, idx) => (
                <div
                  key={idx}
                  className="glass p-4 rounded-xl flex items-start space-x-3 text-xs leading-relaxed text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                  <p className="font-light">{ach}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
