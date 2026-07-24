import { motion } from 'framer-motion';
import {  CheckCircle } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-6 -mt-40">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight ">
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
    className="min-h-auto pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
  >
    {children}
  </motion.div>
);

const causesData = [
  "Algorithms Specialization",
  "Grokking the Coding Interview",
  "Grokking the System Design Interview",
  "Meta Back-End Developer Professional Certificate",
  "Generative AI for Software Developers",
  "Web Security Fundamentals",
  "Microservices with Node.js and React",
  "Docker and Kubernetes: The Complete Guide",
  "Databases and SQL for Data Science",
  "IBM JavaScript Backend Developer Certificate",
  "Full Stack Open - DevOps with Docker & CI/CD",
  "Fundamentals of Backend Engineering by Hussein Nasser"
];

export const Causes = () => (
  <PageTransition>
    <SectionHeading title="Courses Completed" subtitle="Specializations and professional development courses completed." />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {causesData.map((cause, idx) => (
        <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-4">
          <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <span className="text-slate-300 font-medium leading-tight">{cause}</span>
        </div>
      ))}
    </div>
  </PageTransition>
);