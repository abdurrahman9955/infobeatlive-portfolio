'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight,  Briefcase, Server,  Mail,  Terminal, 
Activity, Cpu, Zap, ArrowUpRight, Layers, TrendingUp, Sparkles } from 'lucide-react';

// --- MOCK DATA (Simulating /data or /services directory) ---
const developerData = {
  name: "Abdurrahman Sale",
  role: "Senior Software Developer",
  email: "abdurrahman.sale@infobeatlive.com",
  location: "Nigeria",
  shortBio: "Building scalable, high-performance systems that solve real business problems across telecom, fintech, and enterprise software.",
};

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

export const Home = () => {
  const [viewMode, setViewMode] = useState<'visual' | 'terminal'>('visual');
  const [activeTab, setActiveTab] = useState<'fintech' | 'telecom' | 'saas'>('fintech');
  
  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ cmd?: string; output: React.ReactNode; type: 'cmd' | 'res' | 'sys' }>>([
    { type: 'sys', output: 'System initialized. Abdurrahman Sale OS v4.2.0-Production (x86_64-linux-gnu)' },
    { type: 'sys', output: 'Type "help" to list available commands or "projects" to view live applications.' },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { cmd: terminalInput, output: '', type: 'cmd' as const }];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'res',
          output: (
            <div className="space-y-1 text-slate-300">
              <p className="text-amber-400 font-bold">Available Commands:</p>
              <p><span className="text-amber-300 font-mono">whoami</span> - Developer bio and background overview</p>
              <p><span className="text-amber-300 font-mono">skills</span> - Core technical stack & architecture capabilities</p>
              <p><span className="text-amber-300 font-mono">projects</span> - Production applications and telemetry</p>
              <p><span className="text-amber-300 font-mono">metrics</span> - Real-world system performance & ROI impact</p>
              <p><span className="text-amber-300 font-mono">architecture</span> - Distributed system design stack</p>
              <p><span className="text-amber-300 font-mono">contact</span> - Direct channels & communication options</p>
              <p><span className="text-amber-300 font-mono">clear</span> - Clear terminal history</p>
            </div>
          )
        });
        break;

      case 'whoami':
        newLogs.push({
          type: 'res',
          output: (
            <p className="text-slate-300">
              <span className="text-amber-400 font-semibold">Abdurrahman Sale</span> — Senior Backend & Systems Developer based in Nigeria. 
              6+ years engineering enterprise-grade platforms across Telecom (Airtel), Fintech (Paystack / Stripe), and US Enterprise SaaS portfolios (Trilogy).
            </p>
          )
        });
        break;

      case 'skills':
        newLogs.push({
          type: 'res',
          output: (
            <div className="text-slate-300 space-y-1">
              <p><strong className="text-amber-400">Languages:</strong> TypeScript, JavaScript, Python, SQL, HTML/CSS</p>
              <p><strong className="text-amber-400">Backend & Runtime:</strong> Node.js, Express, Django REST Framework, Flask, FastAPIs</p>
              <p><strong className="text-amber-400">Databases & Cache:</strong> PostgreSQL, MongoDB, Redis, DynamoDB</p>
              <p><strong className="text-amber-400">Cloud & Infra:</strong> AWS (EC2, S3), GCP, Docker, CI/CD, Microservices</p>
            </div>
          )
        });
        break;

      case 'projects':
        newLogs.push({
          type: 'res',
          output: (
            <div className="space-y-2 text-slate-300">
              <p className="text-amber-400 font-bold">Deployed Enterprise & SaaS Platforms:</p>
              <p>1. <span className="text-white font-medium">InfoBeatLive Schools</span> - School management portal serving 57 active clients ($17.1k+ revenue).</p>
              <p>2. <span className="text-white font-medium">InfoBeatLive Analytics</span> - AI-driven SaaS metric telemetry engine (6,000+ registered users).</p>
              <p>3. <span className="text-white font-medium">InfoBeatLive Learn</span> - Online learning & live WebRTC lecture platform (12.3k+ users).</p>
              
              <a href='#projects'>
              <button 
              className="mt-2 text-xs bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded">
                Execute: Open Projects Gallery →
              </button></a>
            </div>
          )
        });
        break;

      case 'metrics':
        newLogs.push({
          type: 'res',
          output: (
            <div className="grid grid-cols-2 gap-2 text-slate-300 font-mono text-xs my-1">
              <div className="p-2 bg-slate-900 border border-slate-800 rounded">Uptime: <span className="text-emerald-400">99.99%</span></div>
              <div className="p-2 bg-slate-900 border border-slate-800 rounded">Latency Cut: <span className="text-emerald-400">35-40%</span></div>
              <div className="p-2 bg-slate-900 border border-slate-800 rounded">Subscribers Scaled: <span className="text-emerald-400">5k → 25k</span></div>
              <div className="p-2 bg-slate-900 border border-slate-800 rounded">Enterprise Apps Refactored: <span className="text-emerald-400">100+</span></div>
            </div>
          )
        });
        break;

      case 'architecture':
        newLogs.push({
          type: 'res',
          output: (
            <p className="text-slate-300">
              Pattern: Event-driven Microservices & Distributed Caching. Stack: Node.js/TypeScript + PostgreSQL + Redis PubSub + AWS ECS/GCP + Docker + API Gateways + WebSockets.
            </p>
          )
        });
        break;

      case 'contact':
        newLogs.push({
          type: 'res',
          output: (
            <div>
              <p className="text-slate-300">Email: <span className="text-amber-400">{developerData.email}</span></p>
              <a href='https://www.linkedin.com/in/abdurrahman-sale-7b301726a/' 
                target="_blank" rel="noopener noreferrer">
              <button 
              className="mt-2 text-xs bg-amber-500 text-slate-950 font-bold px-3 py-1 rounded">
                 Contact With Me →
              </button></a>
            </div>
          )
        });
        break;

      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;

      default:
        newLogs.push({
          type: 'res',
          output: <p className="text-red-400">Command not recognized: "{cmd}". Type "help" for a list of valid commands.</p>
        });
        break;
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const architectureNodes = {
    fintech: {
      title: "Fintech Payment Engine (Paystack / Stripe Ecosystem)",
      metrics: { latency: "35ms", load: "12,400 req/sec", uptime: "99.99%" },
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "PCI-DSS", "AWS"],
      description: "Optimized payment routing pipelines and checkout workflows. Reduced end-to-end API latency by 35% while increasing successful transaction completion rates across thousands of active merchants."
    },
    telecom: {
      title: "Telecom Regional Platform (Airtel)",
      metrics: { latency: "22ms", load: "45,000 req/sec", uptime: "99.95%" },
      tech: ["Node.js", "Django REST Framework", "Python", "MongoDB", "Express", "Docker"],
      description: "Scaled backend core infrastructure driving My Airtel App, KYC Agile, and DealCode. Supported a 5x regional subscriber growth from 5,000 to 25,000 while maintaining tight data consistency."
    },
    saas: {
      title: "Enterprise Portfolio Modernization (Trilogy US)",
      metrics: { latency: "18ms", load: "100+ Systems", uptime: "99.99%" },
      tech: ["TypeScript", "PostgreSQL", "Node.js", "GCP", "Python", "Docker", "Microservices"],
      description: "Architected legacy refactoring for over 100 enterprise SaaS products. Reduced system bottlenecks, eradicated critical debt, and accelerated continuous deployment across distributed global teams."
    }
  };

  return (
    <PageTransition>
      {/*  */}
      {/* Top Telemetry Ticker & Mode Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 mb-0 rounded-xl 
      bg-slate-900/80 border border-slate-800 text-xs backdrop-blur-md">
        
        <div className="flex items-center gap-3">
          <span className="text-slate-200 font-mono text-xs font-medium">SYSTEM OPERATIONAL:</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-mono">100% Services Online</span>
        </div>

        <div className="flex items-center gap-3">
          <span className=" text-slate-600">|</span>
          <span className=" text-slate-400 font-mono">Latency: 14ms</span>
        </div>

        <div className="flex items-center gap-3">
          <span className=" text-slate-600">|</span>
          <span className=" text-slate-400 font-mono">Global Distributed (AWS/GCP)</span>
        </div>

        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button 
            onClick={() => setViewMode('visual')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all ${
              viewMode === 'visual' 
                ? 'bg-amber-500 text-slate-950 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Dashboard
          </button>
          <button 
            onClick={() => setViewMode('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-semibold transition-all ${
              viewMode === 'terminal' 
                ? 'bg-amber-500 text-slate-950 shadow-sm' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" /> Terminal (CLI)
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'terminal' ? (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="rounded-2xl bg-slate-950 border mt-6 border-slate-800 shadow-2xl overflow-hidden font-mono mb-16"
          >
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="text-xs text-slate-400 ml-2">bash — abd-shell@production:~</span>
              </div>
              <div className="text-xs text-slate-500">Interactive CLI Session</div>
            </div>

            <div className="p-6 text-sm space-y-4 min-h-[420px] max-h-[500px] overflow-y-auto">
              {terminalLogs.map((log, index) => (
                <div key={index} className="space-y-1">
                  {log.cmd && (
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400 font-bold">abd@server:~$</span>
                      <span className="text-white font-semibold">{log.cmd}</span>
                    </div>
                  )}
                  <div className="pl-4 border-l-2 border-slate-800 py-1">{log.output}</div>
                </div>
              ))}

              <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
                <span className="text-emerald-400 font-bold">abd@server:~$</span>
                <input 
                  type="text" 
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help', 'skills', 'projects', 'metrics'..."
                  className="flex-1 bg-transparent border-none outline-none text-amber-400 placeholder-slate-600 font-mono text-sm focus:ring-0"
                  autoFocus
                />
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="visual"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-20"
          >
            {/* Main Hero Banner */}
            <div className="relative pt-6 pb-12 flex flex-col lg:flex-row items-center gap-12 justify-between">
              <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute top-40 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

              <div className="max-w-3xl z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>Senior Systems & Backend Software Engineer</span>
                </div>

{/* Engineering High-Throughput Systems & APIs. */}

                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
                  A Senior Backend And <span className="text-transparent bg-clip-text bg-gradient-to-r 
                  from-amber-400 via-amber-300 to-amber-600"> Full-Stack</span> Software Engineer.
                </h1>

                <p className="text-md md:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
                  {/* {developerData.shortBio} Specialized in architecting resilient backend microservices, 
                  eliminating system bottlenecks, and scaling payments and telecom platforms. */}

                  I’m Abdurrahman Sale, a backend and full-stack engineer, Over the past 6+ years, 
                  I’ve worked across telecom, fintech, and enterprise software—delivering production-grade 
                  systems used by millions of users and thousands of businesses.

                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">

                <a href='#projects' >
                  <Button primary icon={ChevronRight}>
                    Explore Projects
                  </Button></a>

                <a href='#about' >
                  <Button icon={''}>
                    More About Me
                  </Button></a>

                 <a href='#experience'>
                  <button  
                    className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-semibold px-4 py-3 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <Briefcase className="w-4 h-4 text-amber-500" /> 6+ Yrs Enterprise Experience
                  </button></a>

                </div>

                {/* Company Proof Bar */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
                  <span className="text-slate-300 uppercase tracking-wider text-[10px] font-bold"> Proven Track Record:</span>
                  <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <strong className="text-slate-200">Trilogy</strong> (US Enterprise Software)
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <strong className="text-slate-200">Paystack</strong> (A Stripe Company)
                  </div>
                  <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-md border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <strong className="text-slate-200">Airtel</strong> (Telecom Infrastructure)
                  </div>
                </div>
              </div>


              {/* Code Optimization Visualizer Card */}
              <div className="w-full lg:w-[480px] shrink-0 z-10">
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl space-y-5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-400" />
                      <span className="font-bold text-white text-sm">Optimization Benchmark</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
                      -35% Latency
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="bg-slate-950 p-3 rounded.lg border border-slate-800/80 space-y-1">
                      <div className="text-slate-500 text-[10px] uppercase font-bold flex justify-between">
                        <span>Query Execution Before</span>
                        <span className="text-red-400">142ms</span>
                      </div>
                      <code className="text-slate-400 block truncate">SELECT * FROM transactions WHERE merchant_id = $1</code>
                    </div>

                    <div className="bg-slate-950 p-3 rounded-lg border border-amber-500/30 space-y-1">
                      <div className="text-amber-400 text-[10px] uppercase font-bold flex justify-between">
                        <span >Optimized Index & Redis Cache</span>
                        <span className="text-emerald-400">12ms (11.8x faster)</span>
                      </div>
                      <code className="text-amber-200 block truncate">redis.getOrSet(`m:${123}:tx`, () =&gt; fetchIndexed())</code>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="text-slate-500 text-[10px] font-semibold">THROUGHPUT</div>
                      <div className="text-lg font-extrabold text-white font-mono">45k req/s</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="text-slate-500 text-[10px] font-semibold">SYSTEM UPTIME</div>
                      <div className="text-lg font-extrabold text-emerald-400 font-mono">99.99%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="grid grid-cols-1 -mt-24 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Activity className="w-8 h-8 text-amber-500" />
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">High Availability</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1 font-mono">99.99%</div>
                <div className="text-sm font-semibold text-slate-200 mb-2">Service Reliability</div>
                <p className="text-xs text-slate-400 leading-relaxed">Maintained bulletproof payment uptime across high-volume merchant networks.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Server className="w-8 h-8 text-amber-500" />
                  <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Legacy & Cloud</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1 font-mono">100+</div>
                <div className="text-sm font-semibold text-slate-200 mb-2">Enterprise Software Refactored</div>
                <p className="text-xs text-slate-400 leading-relaxed">Modernized legacy systems across Trilogy's global enterprise software portfolio.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-amber-500" />
                  <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">5x Growth</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1 font-mono">5K → 25K</div>
                <div className="text-sm font-semibold text-slate-200 mb-2">Subscribers Scaled</div>
                <p className="text-xs text-slate-400 leading-relaxed">Scaled core telecom platforms at Airtel driving 5x user growth without bottlenecks.</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-8 h-8 text-amber-500" />
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">Efficiency</span>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1 font-mono">-35%</div>
                <div className="text-sm font-semibold text-slate-200 mb-2">Transaction Latency</div>
                <p className="text-xs text-slate-400 leading-relaxed">Optimized SQL query performance and 
                  backend execution speed at Paystack/Stripe.</p>
              </div>
            </div>

            {}
            <div className="p-8 rounded-3xl -mt-12 bg-slate-900/80 border border-slate-800 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-6 h-6 text-amber-500" /> My work experince across multiple domains
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">Select a domain to inspect architectural 
                    performance & tech stack design.</p>
                </div>

                <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                  {(['fintech', 'telecom', 'saas'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all ${
                        activeTab === key
                          ? 'bg-amber-500 text-slate-950 shadow'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {key} 
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1  lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <h4 className="text-xl font-bold text-white">{architectureNodes[activeTab].title}</h4>
                  <p className="text-slate-300 leading-relaxed text-base">
                    {architectureNodes[activeTab].description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Tech Stack Implemented:</div>
                    <div className="flex flex-wrap gap-2">
                      {architectureNodes[activeTab].tech.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-md bg-slate-950 
                        text-amber-300 text-xs font-mono font-medium border border-slate-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-bold 
                  border-b border-slate-800 pb-2 flex justify-between">
                    <span>Live Telemetry Monitor</span>
                    <span className="text-emerald-400">ACTIVE</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-slate-900">
                      <span className="text-slate-400">Avg API Latency:</span>
                      <span className="text-amber-400 font-bold">{architectureNodes[activeTab].metrics.latency}</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-900">
                      <span className="text-slate-400">Peak Load Capacity:</span>
                      <span className="text-emerald-400 font-bold">{architectureNodes[activeTab].metrics.load}</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Uptime SLA:</span>
                      <span className="text-blue-400 font-bold">{architectureNodes[activeTab].metrics.uptime}</span>
                    </div>
                  </div>

                <a href='#experience'>
                  <button 
                    className="w-full mt-2 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    View Career Timeline Breakdown <ArrowUpRight className="w-3.5 h-3.5" />
                  </button></a>
                </div>
              </div>
            </div>

            {}
            <div className="p-10 -mt-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Need a Senior Developer to scale your system?
                </h3>
                <p className="text-slate-300 text-base">
                  Available for technical consultations, backend architectural reviews, and senior engineering positions.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a href='https://www.linkedin.com/in/abdurrahman-sale-7b301726a/' 
                target="_blank" rel="noopener noreferrer">
                <Button primary icon={Mail}>
                  Start Conversation
                </Button></a>
                {/* <a 
                  href={`mailto:${developerData.email}`} 
                  className="px-5 py-3 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 font-medium text-sm border border-slate-800 transition-colors"
                >
                  Direct Email
                </a> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
