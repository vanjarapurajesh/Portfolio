import { useEffect, useState } from 'react';
import { Terminal, Shield, Cpu, RefreshCw } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const logs = [
    'Initializing RajeshOS Environment v2.0.26...',
    'Loading Python compilers & bytecode engines...',
    'Spinning up serverless AWS Lambda instances...',
    'Synthesizing quantum communication buffers (BB84)...',
    'Applying sleek glassmorphism styles...',
    'Compilation successful. Launching portfolio suite!'
  ];

  useEffect(() => {
    const totalDuration = 1800; // 1.8 seconds loading experience
    const intervalTime = 30;
    const increment = 100 / (totalDuration / intervalTime);

    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Sequence through the logs
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, totalDuration / logs.length);

    // End state transition
    const endTimeout = setTimeout(() => {
      setIsExiting(true);
      const exitTimeout = setTimeout(() => {
        onComplete();
      }, 600); // 600ms exit fade transition
      return () => clearTimeout(exitTimeout);
    }, totalDuration + 200);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
      clearTimeout(endTimeout);
    };
  }, [onComplete]);

  return (
    <div
      id="loading-screen"
      className={`fixed inset-0 bg-[#0F172A] z-[9999] flex flex-col justify-center items-center px-4 transition-all duration-700 ease-out ${
        isExiting ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-md relative flex flex-col items-center">
        {/* Glowing floating graphics */}
        <div className="absolute -top-24 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delayed" />

        {/* Central Spinning Logo Structure */}
        <div className="relative mb-8 w-20 h-20 flex justify-center items-center">
          <div className="absolute inset-0 rounded-2xl border border-dashed border-cyan-400/40 animate-spin" style={{ animationDuration: '6s' }} />
          <div className="absolute inset-2 rounded-xl border border-blue-500/30 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex justify-center items-center shadow-lg shadow-blue-500/20 text-cyan-400">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h2 className="font-display text-xl font-semibold tracking-wider text-white mb-2 font-bold select-none text-center">
          VANJARAPU RAJESH
        </h2>
        <p className="text-xs text-blue-400 font-mono tracking-widest uppercase mb-8 select-none">
          Software Engineer Portfolio
        </p>

        {/* Console / Log area */}
        <div className="w-full h-12 bg-slate-950/60 border border-slate-800/80 rounded-lg px-3 py-2 text-left mb-6 flex items-center shadow-inner">
          <Terminal className="text-cyan-400 w-4 h-4 mr-2.5 shrink-0" />
          <span className="text-xs text-slate-300 font-mono transition-all duration-300">
            {logs[logIndex]}
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900 border border-slate-800/60 rounded-full h-1.5 overflow-hidden p-0.5 shadow-sm">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-100 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Progress counter */}
        <div className="w-full flex justify-between items-center mt-2 px-1">
          <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">
            SECURE LINK AGENT ACTIVE
          </span>
          <span className="text-xs text-cyan-400 font-mono font-semibold">
            {Math.round(percent)}%
          </span>
        </div>
      </div>
    </div>
  );
}
