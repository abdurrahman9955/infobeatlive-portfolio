
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

// --- MOCK DATA (Simulating /data or /services directory) ---
const developerData = {
  name: "Abdurrahman Sale",
  role: "Senior Software Developer",
  email: "abdurrahman.sale@infobeatlive.com",
  location: "Nigeria",
  shortBio: "Building scalable, high-performance systems that solve real business problems across telecom, fintech, and enterprise software.",
};


const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16 md:mb-24">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-4">
      {title}
      <span className="text-amber-500">.</span>
    </h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);


const Button = ({ children, onClick, primary = false, className = "", icon: Icon }: any) => (
  <button 
    onClick={onClick}
    className={`
      flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
      ${primary 
        ? "bg-amber-500 hover:bg-amber-400 text-slate-950" 
        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"}
      ${className}
    `}
  >
    {children}
    {Icon && <Icon className="w-4 h-4" />}
  </button>
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


export const Contact = () => (
  <PageTransition>
    <SectionHeading title="Let's Connect" subtitle="Open to architectural discussions, backend roles, and ambitious projects." />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
        <div className="space-y-6 text-slate-300">
          <a href={`mailto:${developerData.email}`} className="flex items-center gap-4 hover:text-amber-500 transition-colors p-4 rounded-xl bg-slate-900 border border-slate-800">
            <Mail className="w-6 h-6 text-amber-500" />
            <div>
              <div className="text-sm text-slate-500 font-medium">Email</div>
              <div>{developerData.email}</div>
            </div>
          </a>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800">
            <MapPin className="w-6 h-6 text-amber-500" />
            <div>
              <div className="text-sm text-slate-500 font-medium">Location</div>
              <div>{developerData.location} (Remote)</div>
            </div>
          </div>
        </div>
      </div>

      <form className="space-y-4 bg-slate-900 p-8 rounded-2xl border border-slate-800" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
          <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
          <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
          <textarea rows={5} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Tell me about your project..."></textarea>
        </div>
        <Button primary className="w-full justify-center mt-4">Send Message</Button>
      </form>
    </div>
  </PageTransition>
);
