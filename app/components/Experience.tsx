import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Briefcase, 
  Cpu, 
  Zap, 
  Terminal, 
  Activity,
} from 'lucide-react';

export interface ExperienceMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  archFocus: string;
  metrics: ExperienceMetric[];
  description: string[];
  techStack: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "e1",
    role: "Senior Backend & Systems Engineer",
    company: "Trilogy",
    type: "Contract",
    duration: "Apr 2025 - Jun 2026 · 1 yr 3 mos",
    location: "United States · Remote",
    archFocus: "Multi-Tenant Enterprise Architecture & Distributed System Modernization",
    metrics: [
      { label: "Portfolio Scale", value: "100+ Apps", subtext: "Enterprise SaaS" },
      { label: "Processing Speed", value: "+30%", subtext: "Workflow Efficiency" },
      { label: "Production Downtime", value: "-45%", subtext: "Incident Reduction" }
    ],
    description: [
      "Architected & refactored distributed backend microservices across a portfolio of 100+ enterprise SaaS products, eliminating critical bottlenecks and legacy technical debt.",
      "Engineered high-throughput asynchronous job processing queues (Redis Pub/Sub & RabbitMQ), accelerating core transaction processing workflows by 30%+.",
      "Implemented comprehensive distributed tracing, telemetry (OpenTelemetry/Prometheus), and fault-tolerant fallback mechanisms, cutting critical production incidents by 45%.",
      "Standardized containerized orchestration (Docker/GCP) and automated CI/CD deployment pipelines to ensure zero-downtime multi-region deployments."
    ],
    techStack: ["TypeScript", "Node.js", "Python", "Django REST", "PostgreSQL", "GCP", "Docker", "Redis", "OpenTelemetry", "RabbitMQ"]
  },
  {
    id: "e2",
    role: "Senior Backend Engineer (Fintech & Payments)",
    company: "Paystack (A Stripe Company)",
    type: "Full-time",
    duration: "Jan 2023 - Mar 2025 · 2 yrs 3 mos",
    location: "Remote",
    archFocus: "High-Throughput Payment Gateways & PCI-DSS Compliant Infrastructure",
    metrics: [
      { label: "API Latency", value: "-35%", subtext: "Response Reduction" },
      { label: "System SLA", value: "99.99%", subtext: "Production Uptime" },
      { label: "Peak Capacity", value: "+40%", subtext: "Throughput Scale" }
    ],
    description: [
      "Engineered core payment settlement and API processing infrastructure handling millions in daily transaction volume across thousands of merchants with guaranteed 99.99% uptime.",
      "Optimized PostgreSQL relational schemas, execution query plans, and Redis caching strategies, slashing checkout API response latency by 35% under peak traffic.",
      "Built PCI-DSS compliant cryptographic tokenization vaults and HMAC request verification middleware, eliminating security vulnerabilities and reducing transaction fraud risks.",
      "Implemented automated retry logic, circuit breakers, and fault-tolerant bank provider fallback mechanisms to boost overall merchant checkout success rates."
    ],
    techStack: ["TypeScript", "Node.js", "Python", "Django REST", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "PCI-DSS", "HMAC"]
  },
  {
    id: "e3",
    role: "Systems Architect & Backend Engineer",
    company: "Airtel",
    type: "Full-time",
    duration: "Jan 2020 - Dec 2022 · 3 yrs",
    location: "Nigeria",
    archFocus: "Telecom Subscriber Infrastructure & Scalable Data Pipelines",
    metrics: [
      { label: "Subscriber Scale", value: "5× Growth", subtext: "5K → 25K Active Users" },
      { label: "Query Overhead", value: "-35%", subtext: "Database Latency" },
      { label: "Service Reliability", value: "+30%", subtext: "System Uptime" }
    ],
    description: [
      "Architected and deployed distributed backend services powering internal telecom platforms (My Airtel App, KYC Agile, and DealCode) across regional operations.",
      "Designed high-performance database indexing and partitioning strategies across PostgreSQL and DynamoDB, reducing database query overhead by 35%.",
      "Engineered scalable RESTful API endpoints and real-time streaming pipelines, enabling seamless 5× user base expansion (5,000 to 25,000 active subscribers) without degradation.",
      "Streamlined internal operational workflows through automated API integrations, significantly reducing manual provisioning overhead for regional teams."
    ],
    techStack: ["TypeScript", "JavaScript", "Node.js", "Express.js", "Python", "Django", "PostgreSQL", "DynamoDB", "AWS", "Docker"]
  }
];

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-6">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
      <Activity className="w-3.5 h-3.5" /> Track Record of Impact
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-4">
      {title}
      <span className="text-amber-500">.</span>
    </h2>
    {subtitle && <p className="text-slate-400 text-base md:text-md max-w-6xl leading-relaxed">{subtitle}</p>}
  </div>
);

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'danger' | 'amber' }) => {
  const variants = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/80",
    success: "bg-emerald-950/40 text-emerald-400 border-emerald-800/60",
    danger: "bg-red-950/40 text-red-400 border-red-800/60",
    amber: "bg-amber-950/40 text-amber-400 border-amber-800/60"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border shadow-inner ${variants[variant]}`}>
      {children}
    </span>
  );
};

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="min-h-screen pt-24 pb-20 px-4 md:px-12 max-w-7xl mx-auto"
  >
    {children}
  </motion.div>
);

export const Experience = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  return (
    <PageTransition>
      <SectionHeading 
        title="My Work Experience & Impact" 
        subtitle="I have experience working across multiple domains on enterprise-grade systems, including Airtel, a leading telecom provider operating in 60+ countries; Paystack, a Stripe-backed fintech company and one of the largest in Africa; and Trilogy, a global software company managing 100+ enterprise products across diverse industries.
         " 
      />

      {/* Aggregate KPI Header Banner */}
      <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
              <Terminal className="w-4 h-4 text-amber-400" /> Enterprise Summary & Metrics
            </div>
            <h3 className="text-md font-bold text-white tracking-tight">Proven Results Across Distributed Workloads</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto font-mono">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-xl font-bold text-amber-400">100+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">SaaS Systems</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-xl font-bold text-emerald-400">99.99%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">System SLA</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-xl font-bold text-blue-400">-35%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">API Latency</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <div className="text-xl font-bold text-purple-400">5×</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">Scale Factor</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Experience Timeline Container */}
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500/40 via-slate-800 before:to-slate-900">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            {/* Timeline Center Node Badge */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110">
              <Briefcase className="w-4.5 h-4.5" />
            </div>

            {/* Experience Card */}
            <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/90 ml-14 md:ml-0 hover:border-amber-500/40 transition-all duration-300 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Subtle top subtle glowing line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

              {/* Card Header & Title */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-bold text-md md:text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-amber-400 font-mono font-semibold text-base mt-0.5 flex items-center gap-2">
                    {exp.company}
                  </div>
                </div>
                <Badge variant={exp.type === 'Full-time' ? 'amber' : 'default'}>{exp.type}</Badge>
              </div>

              {/* Sub-Header Metadata */}
              <div className="text-xs font-mono text-slate-400 mb-6 flex flex-wrap items-center gap-2 border-b border-slate-800/80 pb-4">
                <span>{exp.duration}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">{exp.location}</span>
              </div>

              {/* Architecture Focus Highlight Box */}
              <div className="mb-6 p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-start gap-3 shadow-inner">
                <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs font-mono">
                  <span className="text-amber-400 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Architecture Core Focus</span>
                  <span className="text-slate-200 font-medium leading-relaxed">{exp.archFocus}</span>
                </div>
              </div>

              {/* Quantified Business KPI Grid */}
              <div className="grid grid-cols-3 gap-2 mb-6 p-3.5 rounded-xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 text-center">
                {exp.metrics.map((metric, idx) => (
                  <div key={idx} className={`${idx !== exp.metrics.length - 1 ? 'border-r border-slate-800/80' : ''} px-1`}>
                    <div className="text-sm md:text-base font-bold text-emerald-400 font-mono">{metric.value}</div>
                    <div className="text-[10px] font-mono text-slate-300 font-medium uppercase tracking-tight mt-0.5">{metric.label}</div>
                    {metric.subtext && <div className="text-[9px] font-mono text-slate-500 hidden sm:block mt-0.5">{metric.subtext}</div>}
                  </div>
                ))}
              </div>

              {/* High-Impact Engineering Deliverables */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Key Engineering Deliverables & Impact
                </div>
                <ul className="space-y-2.5 text-slate-300">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5 group/item">
                      <ChevronRight className="w-4 h-4 shrink-0 text-amber-400/70 group-hover/item:text-amber-400 transition-colors mt-0.5" />
                      <span className="text-xs md:text-sm leading-relaxed text-slate-300 group-hover/item:text-slate-100 transition-colors">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack Tags */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Infrastructure & Tech Stack</span>
                  <span className="text-slate-600">{exp.techStack.length} Technologies</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map(tech => (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md border transition-all duration-200 ${
                        selectedTech === tech
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-lg'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </PageTransition>
  );
};

export default Experience;

