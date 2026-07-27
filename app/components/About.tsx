import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Server,  Cloud, Database, Terminal,  Cpu, ArrowUpRight,  ShieldCheck, TrendingUp, 
Sparkles,User, Image as ImageIcon, Flame, Lock } from 'lucide-react';
import Image from 'next/image';

const developerData = {
  name: "Abdurrahman Sale",
  role: "Senior Software Developer",
  email: "abdurrahmansale4455@gmail.com",
  location: "Nigeria",
  shortBio: "Building scalable, high-performance systems that solve real business problems across telecom, fintech, and enterprise software.",
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

export const About = () => {
  const [activeTab, setActiveTab] = useState<'narrative' | 'architecture' | 'impact'>('narrative');

  return (
    <PageTransition>
      <SectionHeading 
        title="About My Experience And Impact" 
        subtitle="Architecting high-throughput distributed systems, optimizing legacy technical debt, and driving measurable enterprise growth." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Visual Placeholders & Technical ID Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Developer / Leader Portrait Visual Placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-2 shadow-2xl group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-blue-500/10 to-amber-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            
            <div className="relative aspect-[4/5] w-full rounded-xl bg-slate-950 overflow-hidden flex flex-col justify-between p-6 border border-slate-800/80">
              
              {/* Image Header Status */}
              <div className="flex justify-between items-center z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-amber-400 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SYSTEM ARCHITECT
                </span>
                <span className="text-slate-500 font-mono text-xs">WAT / GMT+1</span>
              </div>

              {/* High Quality Portrait Placeholder Graphic */}
              <div className="my-auto flex flex-col items-center justify-center text-center space-y-4 py-8 relative">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-amber-500/20 via-slate-800 to-slate-900 border-2 border-amber-500/40 flex items-center justify-center shadow-xl relative group-hover:scale-105 transition-transform duration-300">
                 
                 <Image src='/my-profile1.png' alt="Abdurrahman Sale Portrait" 
                 width={212} height={212} className="rounded-full object-cover" />

                  {/* <User className="w-14 h-14 text-amber-400 opacity-90" />  */}
          
                  <div className="absolute bottom-2 right-2 bg-amber-500 text-slate-950 rounded-full p-1.5 shadow-lg">
                    <ShieldCheck className="w-10 h-10" />
                  </div>

                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Abdurrahman Sale</h3>
                  <p className="text-slate-400 text-xs font-mono mt-1">Senior Systems & Backend Engineer</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-1.5 max-w-xs -pt-2">
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">Node.js / TS</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">Python / Django</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">AWS & GCP</span>
                </div>
              </div>

              {/* Image Footer Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 z-10 font-mono">
                <span>Verified Engineering Lead</span>
                <span className="text-amber-400">6+ Yrs Enterprise</span>
              </div>
            </div>
          </div>

          {/* Secondary Visual Media Grid (Architecture Blueprint & Dev Rig Placeholders) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-colors group">
              <div className="flex items-center justify-between">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-mono text-slate-500">SYSTEM DIAGRAM</span>
              </div>
              <div className="text-center py-2">
                <div className="text-xs font-semibold text-slate-300">Distributed Microservices</div>
                <div className="text-[10px] text-slate-500">Event-Driven Architecture</div>
              </div>
              <div className="text-[10px] text-amber-500 font-mono text-right">View Spec →</div>
            </div>

            <div className="relative aspect-video rounded-xl bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between overflow-hidden hover:border-slate-700 transition-colors group">
              <div className="flex items-center justify-between">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-[10px] font-mono text-slate-500">INFRA RIG</span>
              </div>
              <div className="text-center py-2">
                <div className="text-xs font-semibold text-slate-300">Docker & Kubernetes</div>
                <div className="text-[10px] text-slate-500">Zero-Downtime Pipelines</div>
              </div>
              <div className="text-[10px] text-emerald-400 font-mono text-right">Active Pods →</div>
            </div>
          </div>

          {/* Core Technical Metric Counters */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-center font-mono">
            <div>
              <div className="text-xl font-bold text-amber-400">100+</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">SaaS Systems</div>
            </div>
            <div className="border-x border-slate-800">
              <div className="text-xl font-bold text-emerald-400">99.99%</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Payment SLA</div>
            </div>
            <div>
              <div className="text-xl font-bold text-blue-400">5x</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">User Growth</div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Technical Story & Experience Breakdown */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Navigation Bar for Tabbed Reading */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800">
            <button 
              onClick={() => setActiveTab('narrative')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'narrative' 
                  ? 'bg-amber-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Career Narrative
            </button>
            <button 
              onClick={() => setActiveTab('architecture')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'architecture' 
                  ? 'bg-amber-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Architectural Core
            </button>
            <button 
              onClick={() => setActiveTab('impact')}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'impact' 
                  ? 'bg-amber-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Business ROI & Impact
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'narrative' && (
              <motion.div 
                key="narrative"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6 text-slate-300 leading-relaxed"
              >
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Flame className="w-5 h-5 text-amber-500" /> Executive Overview
                  </h3>
                  <p className="text-base text-slate-200 leading-snug">
                    I am <strong className="text-white font-semibold">Abdurrahman Sale</strong>, a Senior Backend & Systems Developer with 6+ years of experience engineering high-availability payment gateways, telecom platforms, and enterprise software suites.
                  </p>
                  {/* <p className="text-sm text-slate-400">
                    My engineering focus bridges complex distributed backend architectures with modern frontend integrations, ensuring end-to-end system speed, reliability, and security under extreme operational loads.
                  </p> */}
                </div>

                {/* Timeline Story Cards */}
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-amber-400">ENTERPRISE REFACTORING</span>
                      <span className="text-xs text-slate-500 font-mono">Lemon Sqeezy</span>
                    </div>
                    <p className="text-sm text-slate-300">
                       

                        Designed scalable data pipelines and marketplace APIs that enabled faster store creation and 
                        real-time inventory sync, <strong className="text-white">contributing to a 28% improvement
                          </strong> in overall platform throughput,
                        Built high-reliability payment and checkout systems for digital product stores, achieving 99.98% 
                        uptime and cutting transaction failure rates by 41%.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-blue-400">FINTECH PAYMENT INFRASTRUCTURE</span>
                      <span className="text-xs text-slate-500 font-mono">Paystack (A Stripe Company)</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Engineered payment settlement and API integration pipelines processing millions in daily volume. <strong className="text-white">Reduced latency by 35%</strong> while enforcing strict PCI-DSS compliance and maintaining 99.99% system availability.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-red-400">TELECOM SCALING & AGILITY</span>
                      <span className="text-xs text-slate-500 font-mono">Airtel</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Scaled backend services powering My Airtel App, KYC Agile, and DealCode. 
                      Directly contributed to expanding the regional subscriber base 
                      <strong className="text-white">5× from 5,000 to 25,000 active businesses </strong> 
                        without infrastructure degradation.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-emerald-400">ENTREPRENEURIAL EXECUTION</span>
                      <span className="text-xs text-slate-500 font-mono">InfoBeatLive Platforms</span>
                    </div>
                    <p className="text-sm text-slate-300">
                      Founded and built <strong className="text-white">InfoBeatLive Schools & Analytics</strong> from ground up—delivering a full-stack SaaS platform serving 57 active institutional clients with automated report sheet generation, analytics telemetry, and subscription billing.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'architecture' && (
              <motion.div 
                key="architecture"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <Server className="w-6 h-6 text-amber-400" />
                    <h4 className="font-bold text-white text-sm">Distributed Microservices</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Decoupled monolithic bottlenecks using Node.js, Python, gRPC, and RabbitMQ/Redis PubSub queues for high-concurrency event processing.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <Database className="w-6 h-6 text-emerald-400" />
                    <h4 className="font-bold text-white text-sm">Database & Query Tuning</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Expert in PostgreSQL indexing, query plan analysis, partition strategies, and MongoDB document modeling for low-latency lookups.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <Cloud className="w-6 h-6 text-blue-400" />
                    <h4 className="font-bold text-white text-sm">Cloud Native & Containers</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Certified AWS & GCP Solutions Architect. Production deployment experience with Docker, ECS, Kubernetes, and automated CI/CD pipelines.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <Lock className="w-6 h-6 text-purple-400" />
                    <h4 className="font-bold text-white text-sm">Web Security & PCI-DSS</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Rigorous application of OWASP security practices, token-based authentication (JWT/OAuth2), data encryption at rest, and webhook signatures.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-amber-400" /> Full Stack Tech Stack Matrix
                  </h4>
                  <div className="space-y-2 text-xs font-mono">
                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>Backend Engineering (Node.js, Express, Python, Django, APIs)</span>
                        <span className="text-amber-400">95%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-amber-500 h-full w-[95%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>Cloud Architecture & DevOps (AWS, GCP, Docker, Redis, Postgres)</span>
                        <span className="text-emerald-400">90%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-emerald-500 h-full w-[90%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 mb-1">
                        <span>Modern Web Frontend (TypeScript, React, Next.js, Tailwind)</span>
                        <span className="text-blue-400">85%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                        <div className="bg-blue-500 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'impact' && (
              <motion.div 
                key="impact"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-4"
              >
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-emerald-400" /> Measured Business Value Delivered
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Code is only as valuable as the real-world performance and revenue it unlocks.
                     Below are tangible outcomes delivered across key roles:
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">Paystack Checkout Optimization</span>
                      <span className="text-emerald-400 font-bold">-35% Response Latency</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">Airtel Subscriber Scaling</span>
                      <span className="text-amber-400 font-bold">5,000 → 25,000 Active Businesses</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">Lemon Sqeezy Market Place</span>
                      <span className="text-blue-400 font-bold">Contributing to a 28% improvement</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                      <span className="text-slate-400">InfoBeatLive SaaS Portals</span>
                      <span className="text-emerald-400 font-bold">57 Paid Enterprise Clients</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-amber-300 mb-1">Continuous Learning & Certifications</strong>
                    Certified AWS Solutions Architect & GCP Professional Cloud Architect with double Master's/Bachelor's degrees in Computer Science (Grades 4.6 & 4.8 / 5.0).
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Call to Action Footer */}
          {/* <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white">Interested in technical collaboration?</div>
              <div className="text-xs text-slate-400">Open to principal/senior roles, consultations, and high-impact projects.</div>
            </div>
            <a 
              href={`mailto:${developerData.email}`} 
              className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors shrink-0 flex items-center gap-1.5"
            >
              Contact Direct <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div> */}

        </div>

      </div>
    </PageTransition>
  );
};
