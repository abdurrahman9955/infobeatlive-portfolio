import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

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

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full border bg-slate-800 text-slate-300 border-slate-700">
    {children}
  </span>
);

export const Education = () => (
  <PageTransition>
    <SectionHeading
      title="Education & Certifications"
      subtitle="Academic excellence and industry-recognized technical certifications."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {educationData.map((ed) => (
        <motion.div
          key={ed.id}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2 }}
          className="group relative p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl hover:border-slate-600 transition-all overflow-hidden"
        >
          {/* Top Gradient Accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 opacity-80" />

          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                {ed.type === "certification" ? (
                  <Award className="w-6 h-6 text-amber-500" />
                ) : (
                  <GraduationCap className="w-6 h-6 text-amber-500" />
                )}
              </div>

              <div>
                <h3 className="text-sm md:text-md font-semibold text-white leading-snug">
                  {ed.degree}
                </h3>
                <div className="text-sm text-amber-500 font-medium mt-1">
                  {ed.institution}
                </div>
              </div>
            </div>

            <Badge>{ed.type === "certification" ? "Certified" : "Degree"}</Badge>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
            <span>{ed.duration}</span>
            <span className="text-slate-600">•</span>
            <span>{ed.grade}</span>
          </div>

          {/* Skills / Tech Depth */}
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-wider text-slate-500">
              Core Focus
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {ed.skills}
            </p>
          </div>

          {/* Bottom subtle glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" />
        </motion.div>
      ))}
    </div>
  </PageTransition>
);
