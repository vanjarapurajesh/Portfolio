import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    showToast(`${type === 'email' ? 'Email address' : 'Phone number'} copied to clipboard!`);
    setTimeout(() => setCopiedType(null), 3000);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      showToast('Please fill out all required fields.');
      return;
    }

    setFormState('loading');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rajeshvanjarapu5@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          _subject: `Portfolio Contact: ${subject}`,
          message
        })
      });

      if (response.ok) {
        setFormState('success');
        showToast('Message delivered successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error('Delivery failed');
      }
    } catch (err) {
      setFormState('error');
      showToast('Could not complete submission. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-[#0F172A]">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 through-cyan-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            Got an opening, a freelance proposal, or a general engineering query? Drop a message directly below, and I will get back to you!
          </p>
        </div>

        {/* 2 Column Form + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Details Column (Left - 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-lg text-white mb-6">
              Get In Touch
            </h3>

            {/* Glass contacts details list */}
            <div className="space-y-4">
              
              {/* Email list node */}
              <div className="glass p-5 rounded-2xl flex items-center justify-between group border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 leading-none">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors mt-1 block font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone list node */}
              <div className="glass p-5 rounded-2xl flex items-center justify-between group border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 leading-none">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition-colors mt-1 block font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location list node */}
              <div className="glass p-5 rounded-2xl flex items-center space-x-4 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 leading-none">
                    Office Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column (Right - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              <h3 className="font-display font-bold text-lg text-white mb-6">
                Send a Message
              </h3>

              {formState === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h4 className="font-display font-extrabold text-white text-base mb-2">
                    Message Delivered!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-light max-w-sm mx-auto mb-6">
                    Thank you. Your message has been sent directly to rajeshvanjarapu5@gmail.com. Rajesh will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-5 py-2.5 rounded-xl border border-slate-800 text-xs text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5 font-bold">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full text-xs sm:text-sm bg-slate-950/60 border border-white/10 rounded-xl p-3 text-white focus:border-cyan-400 focus:ring-0"
                      />
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5 font-bold">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full text-xs sm:text-sm bg-slate-950/60 border border-white/10 rounded-xl p-3 text-white focus:border-cyan-400 focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5 font-bold">
                      subject <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Opportunity / Project Collaboration"
                      className="w-full text-xs sm:text-sm bg-slate-950/60 border border-white/10 rounded-xl p-3 text-white focus:border-cyan-400 focus:ring-0"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1.5 font-bold">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      className="w-full text-xs sm:text-sm bg-slate-950/60 border border-white/10 rounded-xl p-3 text-white focus:border-cyan-400 focus:ring-0"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formState === 'loading'}
                      className="w-full h-11 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-500 hover:to-cyan-400 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 group transition-all"
                    >
                      {formState === 'loading' ? (
                        <>
                          <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin mr-1.5" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {formState === 'error' && (
                    <div className="flex items-center space-x-2 text-rose-400 bg-rose-950/25 border border-rose-950 rounded-lg p-2.5 mt-4 text-xs font-mono">
                      <AlertCircle className="w-4 h-4" />
                      <span>Delivery failure. Please try using local links directly.</span>
                    </div>
                  )}
                </form>
              )}

            </div>
          </div>

        </div>

      </div>

      {/* Persistent Clipboard Notification Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] border border-cyan-500/40 px-4 py-3 rounded-xl flex items-center space-x-2.5 shadow-2.5D shadow-black animate-slide-up">
          <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <Check className="w-3 h-3" />
          </div>
          <span className="text-xs font-mono font-medium text-slate-200">
            {toastMessage}
          </span>
        </div>
      )}
    </section>
  );
}
