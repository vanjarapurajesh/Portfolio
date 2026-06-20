import { useEffect, useState } from 'react';
import { Github, GitFork, Star, BookOpen, Users, Terminal, ExternalLink } from 'lucide-react';

interface GithubProfile {
  name: string;
  login: string;
  public_repos: number;
  followers: number;
  bio: string;
  avatar_url: string;
}

export default function GithubStats() {
  const username = 'vanjarapurajesh';
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limit or Error');
        return res.json();
      })
      .then((data) => {
        setProfile({
          name: data.name || 'Vanjarapu Rajesh',
          login: data.login,
          public_repos: data.public_repos || 14,
          followers: data.followers || 4,
          bio: data.bio || 'Python Developer | Aspiring Software Engineer',
          avatar_url: data.avatar_url || ''
        });
        setLoading(false);
      })
      .catch((err) => {
        // High fidelity backup stat state if GitHub API is rate-limited (CORS or offline)
        setProfile({
          name: 'Vanjarapu Rajesh',
          login: username,
          public_repos: 12,
          followers: 6,
          bio: 'B.Tech CSE Graduate | Passionate about Python Backend & AWS Serverless Architectures.',
          avatar_url: 'https://github.com/vanjarapurajesh.png'
        });
        setLoading(false);
      });
  }, []);

  const mockRepos = [
    { name: 'MovieMagic', desc: 'Online Ticket Booking Web App in Python, Flask & DynamoDB', lang: 'Python', stars: 2, forks: 1 },
    { name: 'QuantumSecureChat', desc: 'Secure Messaging System with BB84 Quantum Key simulation', lang: 'Java', stars: 1, forks: 0 },
    { name: 'aws-cloud-deployment', desc: 'Repository representing Lambda handlers and S3 bucket sync scripts', lang: 'Python', stars: 1, forks: 0 }
  ];

  const languages = [
    { name: 'Python', level: 75, color: 'bg-amber-400' },
    { name: 'Java', level: 15, color: 'bg-red-500' },
    { name: 'HTML/CSS/JS', level: 10, color: 'bg-blue-500' }
  ];

  return (
    <section id="github" className="py-20 relative bg-[#0F172A]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            GitHub <span className="text-blue-400">Contribution</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            I believe in active building and keeping an open-source footprint. Here is a status check of my repository counts and code indexes.
          </p>
        </div>

        {/* GitHub Bento Slate */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main User Card (Left - 7 cols) */}
          <div className="md:col-span-7 glass rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition-colors">
            
            {/* Header profile */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-full bg-slate-950 border border-slate-800 p-0 overflow-hidden shrink-0 shadow-inner flex items-center justify-center">
                <img
                  src="https://github.com/vanjarapurajesh.png"
                  alt={username}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-white text-base">
                  {profile?.name || 'Vanjarapu Rajesh'}
                </h3>
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-white transition-colors"
                >
                  <span>@{profile?.login || username}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bio info */}
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed my-5">
              {profile?.bio}
            </p>

            {/* Stats count pills row */}
            <div className="grid grid-cols-3 gap-3 my-2 pt-4 border-t border-white/5 text-center">
              <div className="bg-slate-950/40 border border-white/5 p-3 rounded-xl">
                <span className="block font-mono font-bold text-lg text-white">
                  {profile?.public_repos || 12}
                </span>
                <span className="block text-[9px] uppercase font-mono tracking-wider text-slate-500 mt-1">
                  Public Repos
                </span>
              </div>
              <div className="bg-slate-950/40 border border-white/5 p-3 rounded-xl">
                <span className="block font-mono font-bold text-lg text-white">
                  {profile?.followers || 6}
                </span>
                <span className="block text-[9px] uppercase font-mono tracking-wider text-slate-500 mt-1">
                  Followers
                </span>
              </div>
              <div className="bg-slate-950/40 border border-white/5 p-3 rounded-xl">
                <span className="block font-mono font-bold text-lg text-white">
                  340+
                </span>
                <span className="block text-[9px] uppercase font-mono tracking-wider text-slate-500 mt-1">
                  Contributions
                </span>
              </div>
            </div>

            {/* Link out button */}
            <div className="mt-5">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-10 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 flex justify-center items-center space-x-1.5 transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Visit GitHub Profile Portfolio</span>
              </a>
            </div>

          </div>

          {/* Languages & Repo highlights (Right - 5 cols) */}
          <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Top languages bar card */}
            <div className="glass p-5 rounded-2xl border border-white/10">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold mb-4">
                Languages Distribution
              </h4>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                      <span className="text-slate-300 font-medium">{lang.name}</span>
                      <span className="text-slate-500">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-slate-950/60 border border-slate-900/85 h-1.5 rounded-full overflow-hidden p-0.5">
                      <div className={`h-full rounded-full ${lang.color}`} style={{ width: `${lang.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight projects list */}
            <div className="glass p-5 rounded-2xl border border-white/10 flex-1 flex flex-col justify-between">
              <h4 className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold mb-3">
                Repository Highlights
              </h4>
              <div className="space-y-3.5">
                {mockRepos.map((repo) => (
                  <div key={repo.name} className="flex items-center justify-between">
                    <div>
                      <a
                        href={`https://github.com/${username}/${repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-bold text-white hover:text-cyan-400 transition-colors"
                      >
                        {repo.name}
                      </a>
                      <span className="block text-[10px] text-slate-500 font-light truncate max-w-[180px] sm:max-w-xs md:max-w-[180px]">
                        {repo.desc}
                      </span>
                    </div>

                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[9px] font-mono font-medium text-slate-400">
                      {repo.lang}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
