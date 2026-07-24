
import { motion } from 'framer-motion';
import {  Server, Shield, Cloud, Smartphone, Database, LayoutTemplate } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  videoLink: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  githubFrontend: string;
  githubBackend: string;
  users: string;
  revenue: string;
  profits: string;
  status: 'Active' | 'Shut down';
};

const servicesData = [
  { title: "Backend Development", icon: Server, desc: "Architecting and building robust, scalable APIs and microservices handling high-volume transactions." },
  { title: "Full Stack Development", icon: LayoutTemplate, desc: "End-to-end application development using modern frameworks like Next.js and React." },
  { title: "DevOps & Cloud", icon: Cloud, desc: "Automating deployments, configuring CI/CD pipelines, and managing infrastructure on AWS & GCP." },
  { title: "System Architecture", icon: Database, desc: "Designing scalable, fault-tolerant distributed systems for enterprise environments." },
  { title: "Web Security", icon: Shield, desc: "Implementing industry-standard security practices to protect data and prevent vulnerabilities." },
  { title: "Mobile App APIs", icon: Smartphone, desc: "Developing reliable backend infrastructure to power responsive mobile applications." },
];

// --- SHARED UI COMPONENTS (Simulating /components/ui) ---

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className=" mb-6">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-4">
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
    className="min-h-auto -my-12 px-6 md:px-12 max-w-7xl mx-auto"
  >
    {children}
  </motion.div>
);

export const Services = () => (
  <PageTransition>
    <SectionHeading title="Services & Expertise" subtitle="Technical capabilities I bring to teams and projects." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service, idx) => (
        <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:bg-slate-800/50 transition-all duration-300 group">
          <service.icon className="w-12 h-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-slate-400 leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </PageTransition>
);
