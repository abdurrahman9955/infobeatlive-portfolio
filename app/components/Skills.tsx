import { motion } from 'framer-motion';
import {
  Server,
  Database,
  Cloud,
  Shield,
  Code2,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';

const skillsData = [
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Python", category: "language" },
  { name: "Django", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "SQL", category: "database" },
  { name: "NoSQL", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "GCP", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "System design", category: "architecture" },
  { name: "DSA", category: "architecture" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "Cloud Computing", category: "cloud" },
  { name: "Backend Development", category: "backend" },
  { name: "Full Stack Development", category: "architecture" },
  { name: "Web Security", category: "security" },
  { name: "Scalability", category: "architecture" }
];

const categoryConfig = {
  language: { icon: Code2, color: "text-blue-400" },
  backend: { icon: Server, color: "text-emerald-400" },
  database: { icon: Database, color: "text-purple-400" },
  cloud: { icon: Cloud, color: "text-sky-400" },
  frontend: { icon: Globe, color: "text-pink-400" },
  architecture: { icon: Layers, color: "text-amber-400" },
  security: { icon: Shield, color: "text-red-400" }
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-6 -mt-36">
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
    className="min-h-screen pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
  >
    {children}
  </motion.div>
);

export const Skills = () => (
  <PageTransition>
    <SectionHeading
      title="Technical Arsenal"
      subtitle="A deep, production-grade stack spanning backend systems, distributed architecture, and cloud-native engineering."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillsData.map((skill, idx) => {
        const config = categoryConfig[skill.category as keyof typeof categoryConfig];
        const Icon = config.icon;

        return (
          <motion.div
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl hover:border-slate-600 transition-all overflow-hidden"
          >
            {/* Top Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-70" />

            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <Icon className={`w-5 h-5 ${config.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-white tracking-wide">
                {skill.name}
              </h3>
            </div>

            <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">
              {skill.category}
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {skill.category === "backend" && "Building scalable APIs, services, and high-performance systems."}
              {skill.category === "frontend" && "Creating modern, performant, and user-centric interfaces."}
              {skill.category === "database" && "Designing efficient data models and optimizing queries at scale."}
              {skill.category === "cloud" && "Deploying and managing distributed systems in cloud environments."}
              {skill.category === "architecture" && "Designing systems for scalability, reliability, and performance."}
              {skill.category === "security" && "Implementing secure systems with strong data protection practices."}
              {skill.category === "language" && "Core programming languages used for building production systems."}
            </p>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
          </motion.div>
        );
      })}
    </div>
  </PageTransition>
);


