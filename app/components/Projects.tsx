import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Code, 
  Cpu, 
  Terminal, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Database, 
  Layers, 
  Server, 
  Play, 
  Filter, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Radio, 
  BarChart3, 
  Lock,
  Layers3,
  Globe,
  Maximize2,
  RefreshCw
} from 'lucide-react';

export interface ArchitectureDetail {
  title: string;
  description: string;
  impact: string;
}

export interface MetricSpec {
  label: string;
  value: string;
  subtext?: string;
  status?: 'positive' | 'neutral' | 'negative';
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  videoLink: string;
  description: string;
  architectureCategory: 'SaaS Platform' | 'Analytics & AI Engine' | 'Distributed RTC Platform';
  archFocus: string;
  systemBottlenecksSolved: string[];
  architectureDetails: ArchitectureDetail[];
  metrics: MetricSpec[];
  techStack: string[];
  liveDemo: string;
  githubFrontend: string;
  githubBackend: string;
  users: string;
  revenue: string;
  profits: string;
  status: 'Active' | 'Shut down';
  p99Latency: string;
  concurrentCapacity: string;
}

const projectsData: Project[] = [
  {
    id: "p2",
    name: "InfoBeatLive Analytics",
    tagline: "Autonomous Business Intelligence & AI Insights Telemetry Platform",
    videoLink: "https://www.youtube.com/embed/SXT5wp6P060",
    description: "Engineered an AI-driven enterprise analytics engine converting raw transactional telemetry (ARR, Churn, CAC, LTV, Runway) into dynamic, context-aware business trajectory recommendations using LLM pipelines.",
    architectureCategory: "Analytics & AI Engine",
    archFocus: "LLM Pipeline Streaming, Dynamic Aggregations & High-Throughput Ingestion",
    systemBottlenecksSolved: [
      "Built cached vector embeddings to drastically minimize LLM inference cost per user session.",
      "Optimized analytical time-series query aggregations across millions of raw events using PostgreSQL Materialized Views.",
      "Implemented rate-limited backoff retry queues for external LLM API gateway resiliency."
    ],
    architectureDetails: [
      {
        title: "LLM Orchestration Layer",
        description: "Custom orchestration pipeline utilizing Gemini & OpenAI APIs with fallback routing and response caching.",
        impact: "Cut average API token expenditure by 40% while preserving context depth."
      },
      {
        title: "Time-Series Aggregation",
        description: "Engineered automated continuous aggregate views in PostgreSQL for rapid multi-dimensional metric rollup.",
        impact: "Slashing metric dashboard rendering times from 3.8s down to 180ms."
      },
      {
        title: "Resilient Webhook Gateways",
        description: "AWS SQS + Lambda serverless ingestion pipeline for reliable payment event webhook consumption.",
        impact: "Zero event loss across 6,000+ subscriber state sync notifications."
      }
    ],
    metrics: [
      { label: "Registered Users", value: "6,000+", subtext: "Founders & Analysts", status: "neutral" },
      { label: "Gross Revenue", value: "$12,570+", subtext: "Historical ARR", status: "positive" },
      { label: "Net P/L", value: "$-5,530", subtext: "R&D Infra Investment", status: "negative" },
      { label: "LLM Response", value: "1.2s", subtext: "Streamed Response", status: "positive" }
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis", "Node.js", "Express", "AWS", "Lemon Squeezy", "Docker", "Gemini API", "OpenAI API"],
    liveDemo: "https://analytics.infobeatlive.site",
    githubFrontend: "https://github.com/abdurrahman9955/infobeatlive-frontend",
    githubBackend: "https://github.com/abdurrahman9955/infobeatlive-backend",
    users: "6,000+",
    revenue: "$12,570+",
    profits: "$-5,530",
    status: "Shut down",
    p99Latency: "180ms",
    concurrentCapacity: "2.5K Requests/sec"
  },
  {
    id: "p1",
    name: "InfoBeatLive Schools",
    tagline: "Multi-Tenant Enterprise Portal for K-12 Institutional Management",
    videoLink: "https://www.youtube.com/embed/84a5_RjbIbw",
    description: "Architected a multi-tenant SaaS ecosystem serving 57+ educational institutions in West Africa. Built for high-density transactional loads, automated report card compilation, automated billing gateways, and real-time attendance streaming.",
    architectureCategory: "SaaS Platform",
    archFocus: "Isolated Multi-Tenancy, Automated Billing Gateways & Async PDF Generation",
    systemBottlenecksSolved: [
      "Eliminated 4.2s batch PDF report sheet compilation locks using Redis queue-backed worker threads.",
      "Engineered tenant schema isolation in PostgreSQL to guarantee zero cross-tenant data leaks.",
      "Optimized query response times down to <45ms for concurrent exam grade submission bursts."
    ],
    architectureDetails: [
      {
        title: "Multi-Tenant Data Isolation",
        description: "Implemented row-level security (RLS) & schema-based isolation patterns in PostgreSQL via Prisma ORM middleware.",
        impact: "Zero cross-tenant data exposure across 57 active enterprise clients."
      },
      {
        title: "Asynchronous Document Pipeline",
        description: "Offloaded report sheet generation to Dockerized worker queues using Node.js child processes and Redis Pub/Sub.",
        impact: "Reduced peak HTTP connection hold time by 82% under heavy exam periods."
      },
      {
        title: "Real-time Notification Mesh",
        description: "Socket.io cluster integrated with GCP Cloud Pub/Sub for instant parent-teacher alerts and automated attendance logging.",
        impact: "Sustained 10,000+ concurrent WebSocket connections with <15ms latency."
      }
    ],
    metrics: [
      { label: "Active Institutions", value: "57+", subtext: "Enterprise Clients", status: "positive" },
      { label: "Gross Revenue", value: "$17,100+", subtext: "Setup & Subscriptions", status: "positive" },
      { label: "Net Margins", value: "$15,000+", subtext: "87.7% Efficiency", status: "positive" },
      { label: "API SLA", value: "99.95%", subtext: "Uptime Guaranteed", status: "positive" }
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis", "Node.js", "Express", "Socket.io", "GCP", "Lemon Squeezy", "Docker"],
    liveDemo: "https://school.infobeatlive.site",
    githubFrontend: "https://github.com/abdurrahman9955/AdvertConnectPro/tree/main/advertFrontend",
    githubBackend: "https://github.com/abdurrahman9955/AdvertConnectPro/tree/main/advertBackend",
    users: "57 active schools",
    revenue: "$17,100+",
    profits: "$15,000+",
    status: "Active",
    p99Latency: "42ms",
    concurrentCapacity: "10K WebSockets"
  },
  {
    id: "p3",
    name: "InfoBeatLive Learn",
    tagline: "Scalable Interactive E-Learning & Distributed WebRTC Video Infrastructure",
    videoLink: "https://www.youtube.com/embed/fnLgw1rHDVc",
    description: "Designed a multi-tiered online classroom engine supporting WebRTC peer mesh video streaming, automated PDF certificate signing, dynamic course progression, and low-latency interactive chat channels.",
    architectureCategory: "Distributed RTC Platform",
    archFocus: "Self-Hosted WebRTC Mesh, SFU Video Pipelines & Real-time Synchronization",
    systemBottlenecksSolved: [
      "Optimized WebRTC peer discovery signaling using Socket.io Redis adapters across multiple Node nodes.",
      "Prevented media server bandwidth bottlenecks through dynamic adaptive bit-rate SFU routing.",
      "Implemented cryptographically signed SHA-256 certificate verification endpoints."
    ],
    architectureDetails: [
      {
        title: "WebRTC Video SFU Cluster",
        description: "Integrated self-hosted Jitsi Meet SFU servers with dynamic load balancing on AWS EC2 auto-scaling groups.",
        impact: "Supported interactive video lectures with up to 100 simultaneous video streams per room."
      },
      {
        title: "Distributed Socket Signaling",
        description: "Node.js + Redis Pub/Sub backplane driving multi-room state synchronization and participant handshakes.",
        impact: "Achieved sub-50ms peer-to-peer connection setup times globally."
      },
      {
        title: "Cryptographic Certificate Engine",
        description: "Automated cryptographic certificate generation with embedded verification QR payload.",
        impact: "Processed 12,300+ course completion verifications with zero forgery risk."
      }
    ],
    metrics: [
      { label: "Platform Students", value: "12,300+", subtext: "Enrolled Users", status: "positive" },
      { label: "Total Revenue", value: "$7,600+", subtext: "Course Sales", status: "positive" },
      { label: "Net P/L", value: "$-2,476", subtext: "Infrastructure Cost", status: "negative" },
      { label: "Video Latency", value: "<150ms", subtext: "Global WebRTC RTC", status: "positive" }
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind", "Prisma", "PostgreSQL", "Redis", "Node.js", "Socket.io", "WebRTC", "Jitsi Meet", "AWS", "Lemon Squeezy", "Docker"],
    liveDemo: "#",
    githubFrontend: "https://github.com/abdurrahman9955/infobeatliveFrontend",
    githubBackend: "https://github.com/abdurrahman9955/infobeatliveBackend",
    users: "12,300+",
    revenue: "$7,600+",
    profits: "$-2,476",
    status: "Shut down",
    p99Latency: "65ms",
    concurrentCapacity: "100 WebRTC Streams/Room"
  }
];

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
      <Terminal className="w-3.5 h-3.5" /> Architectural Portfolio & Systems Showcase
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight mb-4">
      {title}
      <span className="text-amber-500">.</span>
    </h2>
    {subtitle && <p className="text-slate-400 text-base md:text-md max-w-6xl leading-relaxed">{subtitle}</p>}
  </div>
);

const StatusBadge = ({ status }: { status: 'Active' | 'Shut down' }) => {
  const isOk = status === 'Active';
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
      isOk 
        ? "bg-emerald-950/60 text-emerald-400 border-emerald-800/80 shadow-[0_0_12px_rgba(16,185,129,0.2)]" 
        : "bg-slate-900/90 text-slate-400 border-slate-700/80"
    }`}>
      <span className={`w-2 h-2 rounded-full ${isOk ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
      {status === 'Active' ? 'PRODUCTION ACTIVE' : 'ARCHIVED / DEPRECATED'}
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

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeTabMap, setActiveTabMap] = useState<Record<string, 'video' | 'specs' | 'bottlenecks'>>({
    p1: 'video',
    p2: 'video',
    p3: 'video'
  });

  const setProjectTab = (id: string, tab: 'video' | 'specs' | 'bottlenecks') => {
    setActiveTabMap(prev => ({ ...prev, [id]: tab }));
  };

  const categories = ['ALL', 'SaaS Platform', 'Analytics & AI Engine', 'Distributed RTC Platform'];

  const filteredProjects = selectedCategory === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.architectureCategory === selectedCategory);

  return (
    <PageTransition>
      <SectionHeading 
        title="Founder Of InfoBeatLive Platforms" 
        subtitle="As a founder, I have built and launched over 11 software startups across different domains. While many did not succeed—8 generated no revenue (with 3 gaining no users and 5 acquiring users without monetization)—these experiences strengthened my product, growth, and execution skills. Notably, 3 ventures generated several thousand dollars in revenue, and one became profitable, achieving over $17,100 in total revenue and $15,000+ in profit from approximately 57 paying customers.
        "
      />

      {/* Aggregate System KPI Top Banner */}
      <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/90 shadow-2xl relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
              <Activity className="w-4 h-4 text-amber-400" /> Platform Engineering Summary
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">InfoBeatLive Plartforms Portfolio</h3>
            <p className="text-xs text-slate-400 font-mono">
              Engineered with multi-tenant isolation, automated event queues, and low-latency API architecture.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto font-mono text-center">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-lg font-bold text-amber-400">18,300+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">Total Users</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-lg font-bold text-emerald-400">$37,270+</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">Gross Revenue</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-lg font-bold text-blue-400">&lt;50ms</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">Avg P99 Latency</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="text-lg font-bold text-purple-400">99.95%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-tight">Platform SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Category Filter Bar */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5 text-amber-400" /> Filter Domain:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all shrink-0 border ${
              selectedCategory === cat
                ? "bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg"
                : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {}
      <div className="space-y-6 md:space-y-6">
        {filteredProjects.map((project, idx) => {
          const currentTab = activeTabMap[project.id] || 'video';

          return (
            <div 
              key={project.id} 
              className="p-6 md:p-10 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Top gradient glow stroke */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

              {/* CARD HEADER */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <StatusBadge status={project.status} />
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-semibold">
                      {project.architectureCategory}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" /> P99: <strong className="text-slate-200">{project.p99Latency}</strong>
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base font-medium mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                  {project.liveDemo !== "#" && (
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-md"
                    >
                      Live Demo <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a 
                    href={project.githubFrontend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-mono transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-amber-400" /> Frontend
                  </a>
                  <a 
                    href={project.githubBackend} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-mono transition-all flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5 text-blue-400" /> Backend
                  </a>
                </div>
              </div>

              {/* CARD MAIN CONTENT GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT / MEDIA & VIDEO IFRAME SECTION (7 COLS) */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {/* View Switcher Controls for Media Box */}
                  <div className="flex items-center justify-between gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setProjectTab(project.id, 'video')}
                        className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                          currentTab === 'video'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Play className="w-3 h-3" /> Video Demo
                      </button>
                      <button
                        onClick={() => setProjectTab(project.id, 'specs')}
                        className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                          currentTab === 'specs'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <Cpu className="w-3 h-3" /> System Specs
                      </button>
                      <button
                        onClick={() => setProjectTab(project.id, 'bottlenecks')}
                        className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                          currentTab === 'bottlenecks'
                            ? 'bg-amber-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <ShieldCheck className="w-3 h-3" /> Bottlenecks Solved
                      </button>
                    </div>
                    <span className="text-[10px] text-slate-500 hidden sm:inline-block pr-2">
                      {project.concurrentCapacity}
                    </span>
                  </div>

                  {/* DISPLAY CONTAINER */}
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group/media">
                    {currentTab === 'video' && (
                      <div className="w-full h-full relative bg-slate-950">
                        {}
                        <iframe
                          src={project.videoLink}
                          title={`${project.name} Video Demonstration`}
                          className="w-full h-full border-0 rounded-2xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                    )}

                    {currentTab === 'specs' && (
                      <div className="w-full h-full p-6 bg-slate-950 overflow-y-auto space-y-4 font-mono text-xs">
                        <div className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                          <Layers className="w-4 h-4" /> Deep Architecture Blueprint & Highlights
                        </div>
                        <div className="space-y-3">
                          {project.architectureDetails.map((detail, idx) => (
                            <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                              <div className="text-white font-bold text-sm mb-1">{detail.title}</div>
                              <p className="text-slate-400 text-xs leading-relaxed mb-2">{detail.description}</p>
                              <div className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> {detail.impact}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentTab === 'bottlenecks' && (
                      <div className="w-full h-full p-6 bg-slate-950 overflow-y-auto space-y-4 font-mono text-xs">
                        <div className="text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                          <Zap className="w-4 h-4 text-amber-400" /> Engineering Bottlenecks Solved
                        </div>
                        <div className="space-y-3">
                          {project.systemBottlenecksSolved.map((bottleneck, i) => (
                            <div key={i} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800/80 flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
                                {i + 1}
                              </span>
                              <p className="text-slate-300 leading-relaxed text-xs">{bottleneck}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Architecture Core Focus Pill */}
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs font-mono">
                      <span className="text-amber-400 font-bold uppercase tracking-wider block text-[10px] mb-0.5">Architecture Core Focus</span>
                      <span className="text-slate-300 font-medium leading-relaxed">{project.archFocus}</span>
                    </div>
                  </div>

                </div>

                {/* RIGHT / METRICS & TECH STACK SECTION (5 COLS) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* System Description */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Operational Telemetry Grid */}
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-bold">
                      <BarChart3 className="w-3.5 h-3.5 text-amber-400" /> Verified System Metrics & Performance
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 font-mono">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/90">
                          <div className={`text-base md:text-lg font-bold ${
                            m.status === 'positive' ? 'text-emerald-400' :
                            m.status === 'negative' ? 'text-red-400' : 'text-slate-200'
                          }`}>
                            {m.value}
                          </div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">{m.label}</div>
                          {m.subtext && <div className="text-[9px] text-slate-500">{m.subtext}</div>}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                      <span>Infrastructure & Stack</span>
                      <span className="text-slate-500">{project.techStack.length} Modules</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono hover:border-slate-700 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>
    </PageTransition>
  );
};

export default Projects;


