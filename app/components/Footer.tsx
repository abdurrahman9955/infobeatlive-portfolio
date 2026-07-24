import { Github, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

type Route =
  | 'home'
  | 'about'
  | 'services'
  | 'process'
  | 'education'
  | 'causes'
  | 'skills'
  | 'projects'
  | 'experience'

const routes: { label: string; key: Route }[] = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Experience', key: 'experience' },
  { label: 'Projects', key: 'projects' },
  { label: 'Skills', key: 'skills' },
  { label: 'Education', key: 'education' },
  { label: 'Services', key: 'services' },
  { label: 'Process', key: 'process' },
];

export const Footer = () => (
  <footer className="relative bg-slate-950 border-t border-slate-800 -mt-12 overflow-hidden">
    {/* Top Gradient Accent */}
    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-80" />

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 grid grid-cols-1 md:grid-cols-3 gap-12">
      
      {/* Brand / Overview */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-black text-sm">
            A
          </div>
          <div>
            <div className="text-white font-bold text-lg">Abdurrahman Sale</div>
            <div className="text-xs text-slate-500">Backend & Systems Engineer</div>
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
          Building scalable, production-grade backend systems and cloud-native architectures.
          Focused on high-performance APIs, distributed systems, and real-world impact at scale.
        </p>

        <div className="flex items-center gap-4">
          {/* <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a> */}
          <a href="https://www.linkedin.com/in/abdurrahman-sale-7b301726a/"
           target="_blank" rel="noopener noreferrer" 
          className="flex flex-row text-indigo-400 gap-2 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />  Follow Me On LinkedIn
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 gap-4">
        {routes.map((r) => (
          <button
            key={r.key}
            className="text-sm text-slate-400 hover:text-amber-500 transition-colors text-left"
          >
           <a href={`#${r.key}`}>{r.label}</a>
          </button>
        ))}
      </div>

      {/* Contact / Info */}
      <div className="space-y-6">
        <div className="text-sm font-semibold text-white tracking-wide">
          Contact
        </div>

        <div className="space-y-4 text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-amber-500" />
            <span>abdurrahman.sale@infobeatlive.site</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-amber-500" />
            <span>+234 70 1111 4377</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Kano, Nigeria</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-500 leading-relaxed">
          Connect with me for software engineering role, system design challenge, and
          building scalable products with high-growth teams.
        </div>
      </div>
    </div>

    {/* Bottom */}
    <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-600">
      © {new Date().getFullYear()} Abdurrahman Sale. Engineered for scale. All rights reserved.
    </div>
  </footer>
);
