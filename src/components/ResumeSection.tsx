import { Phone, Mail, Linkedin, Github, MapPin, FileText, Award, Star, BookOpen, Briefcase, Zap, Heart } from 'lucide-react';
import { personalInfo, educationList, experienceList, certificationsList, achievementsList, softSkills, languagesList, interestsList } from '../data';

export default function ResumeSection() {
  return (
    <section id="resume-sheet" className="py-20 relative bg-[#0F172A]">
      {/* Ambient background decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Curriculum <span className="text-blue-400">Vitae</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Below is the high-fidelity render of your professional resume.
          </p>
        </div>

        {/* HIGH FIDELITY RENDER OF THE RESUME SHEET */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-12 md:p-14 shadow-2xl text-slate-100 relative max-w-4xl mx-auto font-sans leading-normal">
          
          {/* Top aesthetic border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-t-2xl" />

          {/* CV HEADER */}
          <div className="text-center pb-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide uppercase font-serif">
              {personalInfo.name}
            </h3>
            
            <p className="text-[11px] sm:text-[13px] font-mono font-bold tracking-[0.25em] text-cyan-400 mt-2 uppercase">
              {personalInfo.title}
            </p>

            {/* Contact row exactly mimicking page header layout */}
            <div className="mt-4 flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-[11px] sm:text-[12px] text-slate-300 font-mono font-medium">
              <a href={`tel:${personalInfo.phone}`} className="flex items-center hover:text-cyan-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                <span>{personalInfo.phone}</span>
              </a>
              
              <span className="text-slate-700 hidden sm:inline">|</span>
              
              <a href={`mailto:${personalInfo.email}`} className="flex items-center hover:text-cyan-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                <span>{personalInfo.email}</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">|</span>

              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                <span>linkedin.com/in/vanjarapurajesh</span>
              </a>

              <span className="text-slate-700 hidden md:inline">|</span>

              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-cyan-400 transition-colors">
                <Github className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                <span>github.com/vanjarapurajesh</span>
              </a>

              <span className="text-slate-700 hidden sm:inline">|</span>

              <div className="flex items-center">
                <MapPin className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Thin dividing horizontal rule from original template */}
            <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-slate-700 to-transparent mt-4" />
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2.5">
              Professional Summary
            </h4>
            <p className="text-[11.5px] sm:text-[12.5px] text-slate-300 leading-relaxed text-justify font-sans">
              {personalInfo.introduction}
            </p>
          </div>

          {/* TWO COLUMN GRID: EDUCATION & TECHNICAL SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-6">
            
            {/* EDUCATION */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-3">
                Education
              </h4>
              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="relative pl-3 border-l-2 border-blue-500/30 text-[11.5px] sm:text-[12.5px]">
                    <div className="flex justify-between items-start font-bold text-white">
                      <span>{edu.degree}</span>
                      <span className="font-mono text-[10px] sm:text-[11px] font-normal text-slate-400 shrink-0">{edu.duration}</span>
                    </div>
                    <p className="text-slate-300 font-semibold text-[11px] sm:text-[12px] mt-0.5">{edu.institution}</p>
                    <p className="text-slate-400 text-[10.5px] sm:text-[11px] mt-0.5">{edu.university}</p>
                    <p className="text-cyan-400 font-mono font-bold text-[11px] mt-1">
                      {String(edu.cgpa).includes('Percentage') || String(edu.cgpa).includes('CGPA') ? edu.cgpa : `CGPA: ${edu.cgpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-3">
                Technical Skills
              </h4>
              <div className="space-y-2 text-[11.5px] sm:text-[12.5px]">
                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Programming Languages</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">Python, Java (Basics), C</span>
                </div>
                
                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Frontend Technologies</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">HTML5, CSS3, JavaScript</span>
                </div>

                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Backend & Frameworks</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">Flask</span>
                </div>

                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Databases</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">MySQL, AWS DynamoDB</span>
                </div>

                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Cloud & DevOps</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">AWS EC2, S3, Lambda, SNS, IAM, CloudWatch</span>
                </div>

                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Tools & Platforms</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">Git, GitHub, MS Word, MS Excel, MS PowerPoint</span>
                </div>

                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Operating Systems</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">Windows, Linux</span>
                </div>

                <div className="flex items-start">
                  <span className="font-semibold text-slate-200 w-40 shrink-0 font-mono text-[11px] sm:text-[12px]">Concepts</span>
                  <span className="text-slate-500 mr-2">:</span>
                  <span className="text-slate-300">OOP, REST APIs, Data Structures</span>
                </div>
              </div>
            </div>

          </div>

          {/* INTERNSHIP EXPERIENCE */}
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-3">
              Internship Experience
            </h4>
            <div className="relative pl-3 border-l-2 border-blue-500/30 text-[11.5px] sm:text-[12.5px]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 font-bold text-white">
                <span>AWS Cloud Intern | SmartBridge Educational Services (Remote)</span>
                <span className="font-mono text-[10px] sm:text-[11px] font-normal text-slate-400 shrink-0">May 2025 – Aug 2025</span>
              </div>
              <ul className="space-y-1.5 text-slate-300">
                {experienceList[0]?.responsibilities.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mb-6">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-3">
              Projects
            </h4>
            <div className="space-y-5 text-[11.5px] sm:text-[12.5px]">
              
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-start font-bold text-white">
                  <span>1. MovieMagic – Online Movie Ticket Booking Web Application</span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-normal text-slate-400 shrink-0">2025</span>
                </div>
                <p className="text-[10.5px] sm:text-[11.5px] text-blue-400 font-mono mt-0.5 mb-2 font-semibold uppercase">
                  Technologies: Python, Flask, HTML, CSS, AWS DynamoDB, AWS SNS
                </p>
                <ul className="space-y-1 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Developed a full-stack movie ticket booking application focused on Telugu cinema.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Implemented real-time seat booking and availability tracking using AWS DynamoDB.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Integrated SMS and email notifications using AWS SNS.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Designed a responsive and user-friendly interface.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Implemented secure authentication and booking management features.</span>
                  </li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-start font-bold text-white">
                  <span>2. QuantumSecureChat – Secure Messaging System</span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-normal text-slate-400 shrink-0">2025</span>
                </div>
                <p className="text-[10.5px] sm:text-[11.5px] text-blue-400 font-mono mt-0.5 mb-2 font-semibold uppercase">
                  Technologies: Java, AES Encryption, BB84 QKD Simulation
                </p>
                <ul className="space-y-1 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Developed a secure messaging framework using AES encryption techniques.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Implemented BB84 Quantum Key Distribution simulation for secure key generation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Enabled secure transfer of text and multimedia files.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Designed a user-friendly desktop interface for encrypted communication.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 shrink-0 select-none">•</span>
                    <span>Demonstrated concepts of post-quantum secure communication.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* TWO COLUMNS: CERTIFICATIONS & ACHIEVEMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 mb-6">
            
            {/* CERTIFICATIONS */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2.5">
                Certifications
              </h4>
              <ul className="space-y-2 text-[11.5px] sm:text-[12.5px] text-slate-300">
                {certificationsList.map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <Award className="w-4 h-4 text-cyan-400 shrink-0 mr-2 mt-0.5" />
                    <span>
                      <strong className="text-white font-semibold">{cert.title}</strong>
                      {cert.issuer ? ` – ${cert.issuer}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACHIEVEMENTS */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2.5">
                Achievements & Activities
              </h4>
              <ul className="space-y-2 text-[11.5px] sm:text-[12.5px] text-slate-300">
                {achievementsList.map((ach, idx) => (
                  <li key={idx} className="flex items-start">
                    <Star className="w-4 h-4 text-cyan-400 shrink-0 mr-2 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* THREE COLUMN PILLS: SOFT SKILLS vs LANGUAGES vs INTERESTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 border-t border-white/10 text-xs mt-6">
            
            {/* Soft Skills */}
            <div>
              <h5 className="font-bold uppercase text-slate-400 tracking-wider mb-2 text-[11px]">
                Soft Skills
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {softSkills.map((sk) => (
                  <span key={sk} className="px-2 py-0.5 rounded bg-slate-950/60 border border-white/5 text-[10px] text-slate-300 font-mono font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h5 className="font-bold uppercase text-slate-400 tracking-wider mb-2 text-[11px]">
                Languages
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {languagesList.map((lg) => (
                  <span key={lg} className="px-2 py-0.5 rounded bg-slate-950/60 border border-white/5 text-[10px] text-slate-300 font-mono font-medium">
                    {lg}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h5 className="font-bold uppercase text-slate-400 tracking-wider mb-2 text-[11px]">
                Interests
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {interestsList.map((item) => (
                  <span key={item} className="px-2 py-0.5 rounded bg-slate-950/60 border border-white/5 text-[10px] text-slate-300 font-mono font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
