import { motion } from 'framer-motion';
import { Code, } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 md:mb-24">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-4">
      {title}
      <span className="text-amber-500">.</span>
    </h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
  >
    {children}
  </motion.div>
);

export const Blog = () => (
  <PageTransition>
    <SectionHeading title="Engineering Blog" subtitle="Thoughts on system design, backend scaling, and software architecture." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-600 transition-colors cursor-pointer">
          <div className="aspect-video bg-slate-800 relative">
             <div className="absolute inset-0 flex items-center justify-center">
               <Code className="w-10 h-10 text-slate-700" />
             </div>
          </div>
          <div className="p-6">
            <div className="text-amber-500 text-xs font-bold mb-3 uppercase tracking-wider">System Design</div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">Optimizing PostgreSQL Queries in High-Volume Fintech Environments</h3>
            <p className="text-slate-400 text-sm mb-4 line-clamp-2">Exploring indexing strategies and query refactoring techniques to handle millions of transactions without locking issues.</p>
            <div className="text-slate-500 text-xs">July 22, 2026 • 8 min read</div>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);
