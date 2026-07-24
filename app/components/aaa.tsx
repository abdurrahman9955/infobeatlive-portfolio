import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Github, ExternalLink, Briefcase, 
  GraduationCap, Award, Code, Server, Shield, Cloud, 
  Smartphone, Database, LayoutTemplate, PlayCircle, 
  MessageSquare, Mail, MapPin, ChevronDown, CheckCircle
} from 'lucide-react';

// --- TYPES & INTERFACES (Simulating /types directory) ---
type Route = 'home' | 'about' | 'services' | 'process' | 'education' | 'causes' | 'skills' | 'projects' | 'experience' | 'testimonials' | 'faq' | 'blog' | 'contact';

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
}

interface Experience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
  techStack: string[];
}

interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  skills: string;
  type: 'degree' | 'certification';
  issuer?: string;
  credentialId?: string;
}

// --- MOCK DATA (Simulating /data or /services directory) ---
const developerData = {
  name: "Abdurrahman Sale",
  role: "Senior Software Developer",
  email: "abdurrahman.sale@infobeatlive.com",
  location: "Nigeria",
  shortBio: "Building scalable, high-performance systems that solve real business problems across telecom, fintech, and enterprise software.",
};

const projectsData: Project[] = [
  {
    id: "p1",
    name: "InfoBeatLive Schools",
    videoLink: "https://www.youtube.com/embed/84a5_RjbIbw",
    description: "A comprehensive, done-for-you portal for high schools and primary schools in Nigeria and Africa. Enables tracking of students, report sheet generation, attendance, exams, assignments, and school activities. We charge $300+ setup fees plus maintenance. Currently serving 57 active clients.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis", "Node.js", "Express", "Socket.io", "GCP", "Lemon Squeezy", "Docker"],
    liveDemo: "#",
    githubFrontend: "#",
    githubBackend: "#",
    users: "57 active schools",
    revenue: "$17,100+",
    profits: "$15,000+",
    status: "Active"
  },
  {
    id: "p2",
    name: "InfoBeatLive Analytics",
    videoLink: "https://www.youtube.com/embed/SXT5wp6P060",
    description: "An analytics platform turning raw performance data (Users, Revenue, Churn, Runway, etc.) into clear, actionable directions. Users submit daily metrics, and AI tools provide insights on what to fix and how to scale.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Redis", "Node.js", "Express", "AWS", "Lemon Squeezy", "Docker", "Gemini API", "OpenAI API"],
    liveDemo: "#",
    githubFrontend: "#",
    githubBackend: "#",
    users: "6,000+",
    revenue: "$12,570+",
    profits: "$-5,530",
    status: "Shut down"
  },
  {
    id: "p3",
    name: "InfoBeatLive Learn",
    videoLink: "https://www.youtube.com/embed/fnLgw1rHDVc",
    description: "A platform for professionals to create engaging online classes. Features tier-based pricing (beginner, intermediate, advanced), student enrollment, payment collection, certificate generation, and live self-hosted WebRTC lectures.",
    techStack: ["TypeScript", "Next.js", "Tailwind", "Prisma", "PostgreSQL", "Redis", "Node.js", "Socket.io", "WebRTC", "Jitsi Meet", "AWS", "Lemon Squeezy", "Docker"],
    liveDemo: "#",
    githubFrontend: "#",
    githubBackend: "#",
    users: "12,300+",
    revenue: "$7,600+",
    profits: "$-2,476",
    status: "Shut down"
  }
];

const experienceData: Experience[] = [
  {
    id: "e1",
    role: "Back End Developer",
    company: "Trilogy",
    type: "Contract",
    duration: "Apr 2025 - Jun 2026 · 1 yr 3 mos",
    location: "United States · Remote",
    description: [
      "Engineered and refactored legacy software systems across a portfolio of 100+ enterprise products, transforming them into scalable, production-grade solutions.",
      "Led modernization efforts (architecture, codebase, performance), reducing technical debt and improving system maintainability and stability.",
      "Built high-performance backend services and integrations, improving system efficiency and reducing processing time by 30%+ across key workflows.",
      "Applied enterprise-grade best practices (scalability, fault tolerance, observability), increasing reliability and supporting large-scale user bases.",
      "Diagnosed and resolved complex system issues in distributed environments, significantly reducing production incidents and downtime."
    ],
    techStack: ["TypeScript", "PostgreSQL", "Node.js", "GCP", "Docker", "Python", "Django REST Framework"]
  },
  {
    id: "e2",
    role: "Back End Developer",
    company: "Paystack (A Stripe Company)",
    type: "Full-time",
    duration: "Jan 2023 - Mar 2025 · 2 yrs 3 mos",
    location: "Remote",
    description: [
      "Designed and scaled backend systems powering fintech payment workflows, supporting high-volume transactions across thousands of merchants, ensuring 99.9%+ system uptime.",
      "Built and optimized RESTful APIs for payment processing, reducing transaction latency by 35% and improving checkout success rates.",
      "Implemented secure, compliant payment infrastructure aligned with fintech standards (PCI-DSS practices), strengthening fraud prevention and data protection.",
      "Led performance optimization initiatives across services and databases, reducing system bottlenecks and improving throughput under peak load by 40%.",
      "Collaborated with cross-functional teams (product, compliance, operations) to ship critical features impacting merchant growth and revenue generation."
    ],
    techStack: ["TypeScript", "PostgreSQL", "Node.js", "MongoDB", "AWS", "Python", "Django REST Framework", "Docker"]
  },
  {
    id: "e3",
    role: "Back End Developer",
    company: "Airtel",
    type: "Full-time",
    duration: "Jan 2020 - Dec 2022 · 3 yrs",
    location: "Nigeria",
    description: [
      "Led development of scalable backend services and full-stack features powering internal telecom platforms used across regional operations, improving system reliability and reducing downtime by 30%.",
      "Built and optimized APIs and data pipelines handling thousands of daily transactions, decreasing response latency by 40% and improving overall user experience.",
      "Architected and deployed performance-optimized database solutions (PostgreSQL/MongoDB), reducing query time by 35% and improving data consistency across services.",
      "Collaborated cross-functionally to ship production-grade features under tight deadlines, contributing to 5× growth in regional subscriber base (5K → 25K)."
    ],
    techStack: ["JavaScript", "TypeScript", "PostgreSQL", "AWS", "Node.js", "Django REST Framework", "Express.js", "Python", "DynamoDB", "Docker"]
  }
];

const educationData: Education[] = [
  {
    id: "ed1",
    institution: "Google",
    degree: "Google Cloud Certified Professional Cloud Architect",
    duration: "Issued Apr 2025 · Expires Apr 2028",
    grade: "Credential ID 4b21c6db601b471b8cb3549bc9654b7b",
    skills: "Google Cloud Platform (GCP), Google Distributed Cloud (GDC) and +3 skills",
    type: "certification"
  },
  {
    id: "ed2",
    institution: "Amazon Web Services (AWS)",
    degree: "AWS Certified Solutions Architect",
    duration: "Issued Feb 2025 · Expires Feb 2028",
    grade: "Credential ID TF1QR6VKSE4E193R",
    skills: "Amazon EC2, Amazon S3 and +9 skills",
    type: "certification"
  },
  {
    id: "ed3",
    institution: "Bayero University, Kano",
    degree: "Master's Degree, Computer Science",
    duration: "Jul 2023 – Mar 2025",
    grade: "Grade: 4.6/5.0",
    skills: "Back-End Web Development, Software Development and +8 skills",
    type: "degree"
  },
  {
    id: "ed4",
    institution: "Bayero University, Kano",
    degree: "Bachelor's degree, Computer Science",
    duration: "Feb 2016 – Nov 2020",
    grade: "Grade: 4.8/5.0",
    skills: "Data Structures, Algorithms and +8 skills",
    type: "degree"
  }
];

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

const skillsData = [
  "JavaScript", "TypeScript", "Node.js", "Express.js", "Python", "Django", "Flask", 
  "PostgreSQL", "MongoDB", "SQL", "NoSQL", "AWS", "GCP", "Docker", 
  "System design", "DSA", "React", "Next.js", "React Native", "Cloud Computing", 
  "Backend Development", "Full Stack Development", "Web Security", "Scalability"
];

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
  <div className="mb-16 md:mb-24">
    <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-4">
      {title}
      <span className="text-amber-500">.</span>
    </h2>
    {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
  </div>
);

const Badge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default'|'success'|'danger' }) => {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-slate-700",
    success: "bg-emerald-900/30 text-emerald-400 border-emerald-800",
    danger: "bg-red-900/30 text-red-400 border-red-800"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${variants[variant]}`}>
      {children}
    </span>
  );
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

// --- PAGE COMPONENTS (Simulating /app/[route]/page.tsx) ---

const Home = ({ setRoute }: { setRoute: (r: Route) => void }) => (
  <PageTransition>
    {/* Hero Section */}
    <div className="min-h-[80vh] flex flex-col justify-center py-20 relative">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="max-w-4xl z-10"
      >
        <div className="flex items-center gap-2 text-amber-500 font-medium mb-6">
          <Code className="w-5 h-5" />
          <span>{developerData.role}</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-8">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">systems</span> that scale businesses.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
          {developerData.shortBio}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button primary onClick={() => setRoute('projects')} icon={ChevronRight}>View Projects</Button>
          <Button onClick={() => setRoute('contact')} icon={Mail}>Let's Talk</Button>
        </div>
      </motion.div>
    </div>

    {/* Featured Snapshot */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 border-t border-slate-800/50">
      <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
        <Server className="w-10 h-10 text-amber-500 mb-6" />
        <h3 className="text-xl font-bold text-white mb-3">Enterprise Scale</h3>
        <p className="text-slate-400">Architected systems handling millions of financial transactions with 99.9% uptime.</p>
      </div>
      <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
        <Award className="w-10 h-10 text-amber-500 mb-6" />
        <h3 className="text-xl font-bold text-white mb-3">6+ Years Exp</h3>
        <p className="text-slate-400">Proven track record across Telecom, Fintech (Stripe ecosystem), and global SaaS portfolios.</p>
      </div>
      <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors">
        <Database className="w-10 h-10 text-amber-500 mb-6" />
        <h3 className="text-xl font-bold text-white mb-3">Performance Ops</h3>
        <p className="text-slate-400">Specialized in reducing technical debt, optimizing queries, and improving system efficiency.</p>
      </div>
    </div>
  </PageTransition>
);

const About = () => (
  <PageTransition>
    <SectionHeading title="About Me" subtitle="The journey behind the code." />
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-4 relative">
        <div className="aspect-[3/4] w-full bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-700">
           {/* Placeholder for Developer Image */}
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col">
            <Smartphone className="w-12 h-12 mb-4 opacity-50" />
            <span className="text-sm">Developer Portrait Placeholder</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
      </div>
      
      <div className="lg:col-span-8 prose prose-invert prose-lg max-w-none text-slate-300">
        <p className="text-2xl text-white font-medium mb-8 leading-snug">
          I’m Abdurrahman Sale, a backend and full-stack engineer focused on building scalable, high-performance systems that solve real business problems.
        </p>
        
        <p>
          Over the past 6+ years, I’ve worked across telecom, fintech, and enterprise software—delivering production-grade systems used by thousands of users and businesses. I started my journey at <strong>Airtel</strong>, where I contributed to core platforms like My Airtel App, KYC Agile, and DealCode, helping scale systems and drive regional business subscriber growth from 5K to 25K.
        </p>
        
        <p>
          At <strong>Paystack (a Stripe company)</strong>, I worked on payment infrastructure and backend systems powering high-volume financial transactions, improving system performance, reliability, and security in a fast-paced fintech environment.
        </p>

        <p>
          At <strong>Trilogy</strong>, I engineer and modernize enterprise software across a portfolio of 100+ products—transforming legacy systems into scalable, maintainable, and production-ready solutions while reducing technical debt and improving performance.
        </p>

        <p>
          Beyond my roles, I’m also a founder. I built <strong>InfoBeatLive</strong>, an AI-powered analytics platform designed to help founders track metrics, generate insights, and make better decisions. This experience strengthened my ability to think beyond code—focusing on product, users, and business impact.
        </p>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl mt-10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle className="text-amber-500 w-6 h-6" /> What I Bring
          </h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-3"><span className="text-amber-500">•</span> Strong backend engineering (JavaScript, TypeScript, Python, APIs, Databases)</li>
            <li className="flex gap-3"><span className="text-amber-500">•</span> Scalable system design and performance optimization</li>
            <li className="flex gap-3"><span className="text-amber-500">•</span> Real-world impact across telecom, fintech, and SaaS</li>
            <li className="flex gap-3"><span className="text-amber-500">•</span> Ownership mindset — I build, ship, and improve continuously</li>
          </ul>
        </div>
        
        <p className="mt-8 italic text-slate-400">
          I’m driven by solving complex problems, building meaningful products, and working with teams that aim high. If you’re building something ambitious, let’s connect.
        </p>
      </div>
    </div>
  </PageTransition>
);

const Services = () => (
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


const Experience = () => (
  <PageTransition>
    <SectionHeading title="Work Experience" subtitle="A track record of engineering excellence." />
    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
      {experienceData.map((exp, idx) => (
        <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
          {/* Timeline Node */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-amber-500 text-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2">
            <Briefcase className="w-4 h-4" />
          </div>
          
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-slate-900 border border-slate-800 ml-16 md:ml-0 hover:border-slate-600 transition-colors">
            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
              <h3 className="font-bold text-xl text-white">{exp.role}</h3>
              <Badge>{exp.type}</Badge>
            </div>
            <div className="text-amber-500 font-medium mb-1">{exp.company}</div>
            <div className="text-sm text-slate-400 mb-6 flex flex-wrap gap-3">
              <span>{exp.duration}</span>
              <span>&bull;</span>
              <span>{exp.location}</span>
            </div>
            
            <ul className="space-y-3 mb-6 text-slate-300">
              {exp.description.map((desc, i) => (
                <li key={i} className="flex gap-2">
                  <ChevronRight className="w-5 h-5 shrink-0 text-slate-600" />
                  <span className="text-sm leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {exp.techStack.map(tech => (
                <span key={tech} className="px-2 py-1 bg-slate-950 text-slate-400 text-xs rounded border border-slate-800">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);

const Projects = () => (
  <PageTransition>
    <SectionHeading 
      title="Selected Projects" 
      subtitle="Detailed technical breakdowns of major platforms I've architected. Note: While many experimental projects were built, highlighted here are complex systems demonstrating enterprise capabilities." 
    />
    
    <div className="space-y-24">
      {projectsData.map((project, idx) => (
        <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Media Side */}
          <div className={`w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative group ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
            {/* Simulate iframe load with a cover */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800/80 z-10 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
               <PlayCircle className="w-16 h-16 text-white/50" />
               <p className="absolute bottom-4 text-sm text-slate-400">Hover to reveal video placeholder</p>
            </div>
            {/* Standard iframe placeholder for Sandbox env safety */}
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-500 p-8 text-center">
              <Code className="w-12 h-12 mb-4 opacity-30" />
              <p>YouTube Embed Placeholder</p>
              <p className="text-xs mt-2 truncate w-full">{project.videoLink}</p>
            </div>
          </div>

          {/* Content Side */}
          <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold text-white">{project.name}</h3>
              <Badge variant={project.status === 'Active' ? 'success' : 'danger'}>{project.status}</Badge>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
               <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Users</div>
                  <div className="text-white font-bold">{project.users}</div>
               </div>
               <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Revenue</div>
                  <div className="text-white font-bold">{project.revenue}</div>
               </div>
               <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Profits</div>
                  <div className={`font-bold ${project.profits.includes('-') ? 'text-red-400' : 'text-emerald-400'}`}>
                    {project.profits}
                  </div>
               </div>
            </div>
            
            <div className="mb-8">
              <div className="text-sm text-slate-500 mb-3 font-medium">Tech Stack Utilized:</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
               <a href={project.liveDemo} className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-slate-950 font-medium rounded-lg hover:bg-amber-400 transition-colors text-sm">
                 <ExternalLink className="w-4 h-4" /> Live Demo
               </a>
               <a href={project.githubFrontend} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 border border-slate-700 transition-colors text-sm">
                 <Github className="w-4 h-4" /> Frontend
               </a>
               <a href={project.githubBackend} className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 border border-slate-700 transition-colors text-sm">
                 <Github className="w-4 h-4" /> Backend
               </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);

const Education = () => (
  <PageTransition>
    <SectionHeading title="Education & Certifications" subtitle="Academic background and professional validations." />
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {educationData.map(ed => (
        <div key={ed.id} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 flex gap-6">
          <div className="shrink-0 mt-1">
            {ed.type === 'certification' ? (
               <Award className="w-10 h-10 text-amber-500" />
            ) : (
               <GraduationCap className="w-10 h-10 text-amber-500" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{ed.degree}</h3>
            <div className="text-lg text-slate-300 mb-2">{ed.institution}</div>
            <div className="text-sm text-slate-500 mb-4">{ed.duration}</div>
            
            <div className="space-y-2">
              <div className="text-sm bg-slate-950 inline-block px-3 py-1 rounded border border-slate-800 text-slate-400">
                {ed.grade}
              </div>
              <p className="text-sm text-slate-400 mt-3">{ed.skills}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);


const Skills = () => (
  <PageTransition>
    <SectionHeading title="Technical Arsenal" subtitle="Core technologies and frameworks I use to build scalable systems." />
    <div className="flex flex-wrap gap-3">
      {skillsData.map((skill, idx) => (
        <div key={idx} className="px-6 py-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-medium hover:border-amber-500/50 hover:text-amber-500 transition-colors cursor-default">
          {skill}
        </div>
      ))}
    </div>
  </PageTransition>
);

const Causes = () => (
  <PageTransition>
    <SectionHeading title="Continuous Learning" subtitle="Specializations and professional development courses completed." />
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

const Process = () => (
  <PageTransition>
    <SectionHeading title="Engineering Process" subtitle="How I approach building robust software solutions." />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { step: "01", title: "Discovery & System Design", desc: "Analyzing requirements, defining architecture, and selecting the optimal tech stack for scalability." },
        { step: "02", title: "Development & Integration", desc: "Writing clean, tested code. Building APIs, integrating services, and setting up databases." },
        { step: "03", title: "Optimization & Security", desc: "Refactoring for performance, securing endpoints, and ensuring fault tolerance." },
        { step: "04", title: "Deployment & Maintenance", desc: "CI/CD setup, cloud provisioning (AWS/GCP), and establishing observability for production." }
      ].map((item) => (
        <div key={item.step} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
          <div className="text-6xl font-black text-slate-800 absolute -top-4 -right-4 group-hover:text-amber-500/10 transition-colors z-0">
            {item.step}
          </div>
          <div className="relative z-10">
             <h3 className="text-xl font-bold text-white mb-4 mt-8">{item.title}</h3>
             <p className="text-slate-400">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);

const Testimonials = () => (
  <PageTransition>
    <SectionHeading title="Testimonials" subtitle="Feedback from colleagues and clients." />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[1, 2].map(i => (
        <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <MessageSquare className="w-8 h-8 text-slate-700 mb-6" />
          <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">
            "Abdurrahman is a highly skilled backend engineer. His work on our legacy systems was instrumental in reducing downtime. He has a deep understanding of system architecture and performance optimization."
          </p>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-slate-800"></div>
             <div>
               <div className="text-white font-bold">Engineering Manager</div>
               <div className="text-sm text-amber-500">Former Colleague</div>
             </div>
          </div>
        </div>
      ))}
    </div>
  </PageTransition>
);

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "What is your primary tech stack?", a: "My core expertise lies in Backend and Cloud technologies: TypeScript, Node.js, Python, PostgreSQL, AWS, and GCP. I also build full-stack apps with Next.js/React." },
    { q: "Do you take on freelance projects?", a: "Yes, I am open to discussing high-impact freelance projects or consulting roles, specifically around system architecture, backend optimization, or MVP development." },
    { q: "What timezone do you work in?", a: "I am based in Nigeria (WAT/GMT+1), but I have extensive experience working asynchronously with globally distributed teams (US, Europe)." }
  ];

  return (
    <PageTransition>
      <SectionHeading title="Frequently Asked Questions" subtitle="Common inquiries about my work and availability." />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-slate-800 rounded-xl bg-slate-900 overflow-hidden">
            <button 
              className="w-full px-6 py-5 text-left flex justify-between items-center text-white font-medium hover:bg-slate-800/50"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {faq.q}
              <ChevronDown className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180 text-amber-500' : 'text-slate-500'}`} />
            </button>
            <AnimatePresence>
              {openIdx === idx && (
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </PageTransition>
  )
};

const Blog = () => (
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

const Contact = () => (
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


// --- LAYOUT COMPONENTS (Simulating /components/layout & layout.tsx) ---

const Navigation = ({ currentRoute, setRoute }: { currentRoute: Route, setRoute: (r: Route) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: { label: string, route: Route }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Experience', route: 'experience' },
    { label: 'Projects', route: 'projects' },
    { label: 'More', route: 'skills' }, // Acts as a grouping in a real dropdown, mapped to skills for demo
  ];

  const handleNav = (route: Route) => {
    setRoute(route);
    setIsOpen(false);
    window.scrollTo(0,0);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div 
          className="text-xl font-bold text-white cursor-pointer flex items-center gap-2"
          onClick={() => handleNav('home')}
        >
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-slate-950 font-black">A</div>
          <span>Abdurrahman</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button 
              key={item.route}
              onClick={() => handleNav(item.route)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${currentRoute === item.route ? 'text-amber-500 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-800'}`}
            >
              {item.label}
            </button>
          ))}
          <Button primary className="ml-4 text-sm px-5 py-2" onClick={() => handleNav('contact')}>Hire Me</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl py-4 px-6 flex flex-col gap-2"
          >
            {['home', 'about', 'services', 'experience', 'projects', 'education', 'causes', 'skills', 'process', 'testimonials', 'faq', 'blog', 'contact'].map(route => (
              <button 
                key={route}
                onClick={() => handleNav(route as Route)}
                className={`text-left px-4 py-3 rounded-lg capitalize font-medium ${currentRoute === route ? 'bg-amber-500/10 text-amber-500' : 'text-slate-300'}`}
              >
                {route}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setRoute }: { setRoute: (r: Route) => void }) => (
  <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-amber-500 rounded flex items-center justify-center text-slate-950 font-black text-xs">A</div>
        <span className="text-white font-bold">Abdurrahman Sale</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
        <button onClick={() => setRoute('projects')} className="hover:text-amber-500">Portfolio</button>
        <button onClick={() => setRoute('experience')} className="hover:text-amber-500">Experience</button>
        <button onClick={() => setRoute('services')} className="hover:text-amber-500">Services</button>
        <button onClick={() => setRoute('faq')} className="hover:text-amber-500">FAQ</button>
      </div>

      <div className="flex gap-4">
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center text-slate-600 text-xs">
      &copy; {new Date().getFullYear()} Abdurrahman Sale. All rights reserved.
    </div>
  </footer>
);

export default function PortfolioApp() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  // Simulated router map
  const renderPage = () => {
    switch (currentRoute) {
      case 'home': return <Home setRoute={setCurrentRoute} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'process': return <Process />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'education': return <Education />;
      case 'causes': return <Causes />;
      case 'skills': return <Skills />;
      case 'testimonials': return <Testimonials />;
      case 'faq': return <FAQ />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <Home setRoute={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-amber-500/30 selection:text-amber-200">
      <Navigation currentRoute={currentRoute} setRoute={setCurrentRoute} />
      <main>
        <AnimatePresence mode="wait">
          <div key={currentRoute}>
            {renderPage()}
          </div>
        </AnimatePresence>
      </main>
      <Footer setRoute={setCurrentRoute} />
    </div>
  );
}