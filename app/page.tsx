"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Download,
  ExternalLink,
  FolderKanban,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Radar,
  ScrollText,
  Server,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Zap
} from "lucide-react";

type GitHubProfile = {
  public_repos: number;
};

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Recognition", href: "#recognition" },
  { label: "Contact", href: "#contact" }
];

const featuredProjects = [
  {
    title: "TrailPulse",
    type: "Modern SaaS / Consumer Product",
    description:
      "A polished hiking planner with Google OAuth, calendar sync, notifications, background jobs, and security-first API patterns.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Tailwind CSS"],
    github: "https://github.com/shreyanshjain1/TrailPulse"
  },
  {
    title: "VitaVault",
    type: "Flagship Health App",
    description:
      "A personal health record companion with dashboards for medications, appointments, lab data, vitals, exports, and document handling.",
    stack: ["Next.js", "TypeScript", "Auth.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/shreyanshjain1/VitaVault"
  },
  {
    title: "OfficeHub",
    type: "Internal Operations Platform",
    description:
      "A secure internal request system for approvals, assignments, attachments, and operational routing built around real office workflows.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "RBAC", "Audit Logs"],
    github: "https://github.com/shreyanshjain1/OfficeHub"
  },
  {
    title: "BaitBuster",
    type: "Security Tooling",
    description:
      "A phishing-defense-focused desktop security tool using policy logic, DNS filtering, suspicious link scoring, and reporting workflows.",
    stack: ["Python", "Security Controls", "DNS Filtering", "Reporting"],
    github: "https://github.com/shreyanshjain1/BaitBuster"
  },
  {
    title: "OCR-Scanner-Cheques",
    type: "Automation & Back-Office Processing",
    description:
      "A modernized cheque scanning and OCR review system with secure uploads, admin workflows, auditability, and export-oriented processing.",
    stack: ["PHP", "MySQL", "AJAX", "OCR", "Audit Trails"],
    github: "https://github.com/shreyanshjain1/OCR-Scanner-Cheques"
  },
  {
    title: "Employee Task Management Software",
    type: "Workflow Management",
    description:
      "A role-aware task and reporting platform supporting employee operations, management workflows, file handling, and structured updates.",
    stack: ["PHP", "MySQL", "Workflow Logic", "Reporting", "Role-based Views"],
    github: "https://github.com/shreyanshjain1/Employee-Task-Management-Software"
  },
  {
    title: "DiagEcommerceRep",
    type: "E-commerce Platform",
    description:
      "An in-house diagnostic e-commerce platform built for actual business operations, catalog handling, and product presentation.",
    stack: ["PHP", "E-commerce", "Catalog Management"],
    github: "https://github.com/shreyanshjain1/DiagEcommerceRep"
  },
  {
    title: "Medicine Sales Reports",
    type: "Business Reporting System",
    description:
      "A web-based reporting system with separate user and manager views for submission, analysis, and report visibility.",
    stack: ["PHP", "HTML", "Reporting", "Manager Dashboard"],
    github: "https://github.com/shreyanshjain1/Medicine_sales_reports"
  },
  {
    title: "First E-commerce Website",
    type: "Foundational Full-Stack Build",
    description:
      "An early from-scratch e-commerce system with product management, admin workflows, and customer-facing pages built on PHP and MySQL.",
    stack: ["PHP", "JavaScript", "MySQL", "Admin Panel"],
    github: "https://github.com/shreyanshjain1/First-Ecommerce-Website"
  },
  {
    title: "Client Quotation Generator",
    type: "Pricing & Operations Tool",
    description:
      "A quotation calculator built to compute pricing, tax, and cost breakdowns using practical business inputs.",
    stack: ["PHP", "HTML", "Pricing Logic"],
    github: "https://github.com/shreyanshjain1/Client-Quotation-Generator"
  },
  {
    title: "Medicine Inventory Software",
    type: "Inventory Management",
    description:
      "A medicine inventory software project built with PHP and MySQL to track stock and support internal pharmacy-style operations.",
    stack: ["PHP", "MySQL", "Inventory"],
    github: "https://github.com/shreyanshjain1/Medicine-Inventory-Software"
  },
  {
    title: "Skin Disease Detection YOLOv5 Project",
    type: "AI / Computer Vision",
    description:
      "A machine learning project using YOLOv5 for skin disease detection based on sample datasets from the Philippines.",
    stack: ["Python", "YOLOv5", "Jupyter Notebook", "Computer Vision"],
    github: "https://github.com/shreyanshjain1/Skin-Disease-Detection-Python-YoloV5-Project"
  },
  {
    title: "SenSabong Application Android",
    type: "Research-Linked Mobile App",
    description:
      "The Android application connected to the SenSabong research work, showing your ability to participate in software tied to academic publication.",
    stack: ["Java", "Android"],
    github: "https://github.com/shreyanshjain1/SenSabong-Aplication-Android"
  }
];

const experience = [
  {
    company: "Pharmastar International Trading Corporation",
    role: "IT & E-Commerce Business Lead",
    period: "Oct 2024 – Present",
    points: [
      "Owns the design, deployment, and protection of business-critical systems spanning software, infrastructure, and online retail platforms.",
      "Builds PHP/MySQL internal tools for task management, inventory, invoicing, permissions, audit logs, and reporting.",
      "Manages Linux/Windows servers, DNS/SSL, backups, DR routines, patching, and least-privilege security practices.",
      "Supports secure data workflows, e-commerce growth, and AI-assisted app delivery while keeping architectural and permission control in place."
    ]
  },
  {
    company: "SmartByte Solutions",
    role: "SDE (Backend Developer)",
    period: "Nov 2023 – Sep 2024",
    points: [
      "Led delivery of a client web platform while handling backend engineering and project coordination.",
      "Built OAuth-based integrations with TikTok and Meta Ads APIs, including token exchange, refresh handling, and structured ingestion.",
      "Customized websites in Wix Studio (Velo) with JavaScript logic, dynamic collections, conditional rendering, and API functionality.",
      "Managed hosting setup, database integrity, system performance, and technical communication with non-technical stakeholders."
    ]
  },
  {
    company: "Hexaroot Solutions",
    role: "SDE L1 Engineer",
    period: "Apr 2023 – Oct 2023",
    points: [
      "Handled technical project execution, on-site audits, hardware testing, maintenance, and support coordination.",
      "Balanced field troubleshooting with stakeholder management and delivery follow-through."
    ]
  },
  {
    company: "Isidro, Redoble & Associates",
    role: "IT Associate Support",
    period: "May 2023 – Dec 2023",
    points: [
      "Supported internal and client-facing technology initiatives, including surveys, prototypes, QA, documentation, and process improvement.",
      "Contributed to software ideation, troubleshooting, and operational support across multiple projects."
    ]
  },
  {
    company: "DFI Retail Group",
    role: "Information Security Intern",
    period: "Mar 2022 – Oct 2022",
    points: [
      "Worked on security tickets, reporting, vulnerability scans, endpoint protection support, backups, disaster recovery support, and remediation visibility.",
      "Collaborated with vendors and internal teams to help maintain the confidentiality, integrity, and availability of enterprise systems."
    ]
  }
];

const skillGroups = [
  {
    title: "Full-Stack & Product Engineering",
    icon: Zap,
    items: [
      "Next.js",
      "TypeScript",
      "PHP (procedural)",
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "HTML/CSS/JavaScript",
      "OAuth integrations",
      "REST APIs",
      "Git"
    ]
  },
  {
    title: "Infrastructure & Delivery",
    icon: Server,
    items: [
      "Linux/Windows Server",
      "cPanel / XAMPP",
      "IIS / Apache",
      "DNS / SSL",
      "Hosting setup",
      "Backup and disaster recovery",
      "SFTP / API ingestion",
      "Troubleshooting"
    ]
  },
  {
    title: "Security & Governance",
    icon: Shield,
    items: [
      "RBAC",
      "Audit logging",
      "Encryption at rest and in transit",
      "Endpoint security",
      "Vulnerability scanning",
      "Data de-identification",
      "Risk mitigation",
      "Least-privilege controls"
    ]
  },
  {
    title: "Business Systems & Operations",
    icon: Briefcase,
    items: [
      "Shopify",
      "Shopee / Lazada / TikTok Shop",
      "SEO",
      "Facebook Ads",
      "Automated reporting",
      "CSV / PDF exports",
      "Vendor coordination",
      "SOP creation"
    ]
  }
];

const linkedInCredentials = [
  {
    title: "TOEIC Listening and Reading",
    issuer: "LinkedIn test score entry",
    date: "December 2021",
    detail: "Score: 970 (C1)"
  },
  {
    title: "TOEIC Speaking and Reading",
    issuer: "LinkedIn test score entry",
    date: "December 2021",
    detail: "Score: 380 (B2)"
  }
];

const publication = {
  title: "SenSabong: A sensor-based Application for the aid of training Cocks for CockFighting",
  publisher: "Association for Computing Machinery (ACM)",
  venue: "ICCDE '24: Proceedings of the 2024 10th International Conference on Computing and Data Engineering",
  date: "April 11, 2024",
  pages: "133–140",
  doi: "10.1145/3641181.3641198",
  authors: [
    "William P. Rey",
    "Shreyansh M. Jain",
    "Juan Carlos S. Lambino",
    "Zachary Josh T. Raymundo"
  ],
  href: "https://dl.acm.org/doi/10.1145/3641181.3641198"
};

const academicRecognition = [
  {
    title: "B.S. Information Technology, Major in Cybersecurity",
    meta: "Mapúa University · 2023",
    description: "Dean’s List and President’s List Awardee."
  },
  {
    title: "HNICEM 2021 Nominee",
    meta: "Academic recognition",
    description:
      "Recognized as a nominee for the International Conference on Humanoid, Nanotechnology, Information Technology, Communication and Control, Environment, and Management."
  },
  {
    title: "Best ICT Project",
    meta: "San Beda College Alabang",
    description: "Awarded during Senior High School STEM studies."
  }
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/shreyanshjain1", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shreyansh-jain-6b6813233/", icon: Linkedin },
  { label: "Email", href: "mailto:shreyanshmanishjain@gmail.com", icon: Mail }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeader({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <div className="kicker">
        <Sparkles className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="section-title mt-5">{title}</h2>
      <p className="lead-text mt-5 text-base leading-8 sm:text-lg">{text}</p>
    </motion.div>
  );
}

function MotionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const [repoCount, setRepoCount] = useState<number>(13);

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubProfile() {
      try {
        const response = await fetch("https://api.github.com/users/shreyanshjain1", {
          headers: {
            Accept: "application/vnd.github+json"
          },
          next: { revalidate: 3600 }
        });

        if (!response.ok) return;

        const data = (await response.json()) as GitHubProfile;
        if (isMounted && typeof data.public_repos === "number") {
          setRepoCount(data.public_repos);
        }
      } catch {
        // Keep fallback count.
      }
    }

    loadGitHubProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  const stats = useMemo(
    () => [
      { value: `${repoCount}+`, label: "Public repositories on GitHub" },
      { value: `${featuredProjects.length}`, label: "Projects showcased here" },
      { value: `${linkedInCredentials.length}`, label: "Verified LinkedIn credential entries" },
      { value: "1", label: "ACM-indexed publication" }
    ],
    [repoCount]
  );

  const marqueeItems = [
    "Next.js",
    "TypeScript",
    "PHP",
    "MySQL",
    "Cybersecurity",
    "Infrastructure",
    "Vercel",
    "OAuth",
    "Internal Tools",
    "E-commerce Systems",
    "API Integrations",
    "Audit Logs"
  ];

  return (
    <main className="relative overflow-hidden bg-mesh">
      <div className="hero-orb animate-pulseGlow" />
      <div className="hero-orb-two animate-floaty" />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-30" />
      <div className="noise-overlay absolute inset-0 -z-10" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/65 backdrop-blur-xl">
        <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-4">
          <a href="#home" className="text-sm font-bold uppercase tracking-[0.28em] text-slate-100">
            SJ / Portfolio
          </a>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/shreyanshjain1"
              target="_blank"
              className="button-secondary !rounded-full !px-4 !py-2 text-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shreyansh-jain-6b6813233/"
              target="_blank"
              className="button-secondary !rounded-full !px-4 !py-2 text-sm"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="container-shell pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="kicker">
              <Radar className="h-4 w-4" />
              IT & Systems Lead · Full-Stack Developer · Security-Minded Engineer
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl xl:text-7xl">
              Building <span className="gradient-title animate-shine">tech-forward systems</span> for real business operations,
              secure workflows, and modern product experiences.
            </h1>
            <p className="lead-text mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
              I work across internal business platforms, backend engineering, infrastructure, e-commerce operations,
              security controls, and flagship web apps. My portfolio is built to show depth, ownership, and ship-ready execution.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 lg:hidden">
              <a
                href="https://github.com/shreyanshjain1"
                target="_blank"
                className="button-secondary !rounded-full !px-4 !py-2 text-sm"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shreyansh-jain-6b6813233/"
                target="_blank"
                className="button-secondary !rounded-full !px-4 !py-2 text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="button-primary animate-shine">
                View flagship work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/resume/Shreyansh-M-Jain-2026.pdf" target="_blank" className="button-secondary">
                <Download className="h-4 w-4" />
                Open resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Metro Manila, Philippines
              </span>
              <a href="mailto:shreyanshmanishjain@gmail.com" className="inline-flex items-center gap-2 hover:text-cyan-300">
                <Mail className="h-4 w-4" />
                shreyanshmanishjain@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="panel-soft relative rounded-[30px] p-6 sm:p-8"
          >
            <div className="absolute -top-3 right-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Portfolio focus
            </div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <FolderKanban className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Positioning</p>
                <p className="text-lg font-bold text-white">Systems builder with delivery depth</p>
              </div>
            </div>
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                This site presents more than app screens. It highlights architecture, operations, delivery, security posture,
                and the kind of real-world constraints that matter inside companies.
              </p>
              <p>
                The strongest signal here is range with ownership: from PHP/MySQL business systems to modern TypeScript builds,
                from hosting and integrations to reporting, automation, and defensive controls.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="tech-tag">Business Systems</span>
              <span className="tech-tag">Modern Web Apps</span>
              <span className="tech-tag">Security-aware Builds</span>
              <span className="tech-tag">Infrastructure</span>
              <span className="tech-tag">E-commerce Ops</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/5 bg-slate-950/50 p-3">
          <div className="marquee-track animate-marqueeX">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="tech-tag whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <MotionCard key={stat.label} className="panel rounded-[26px] p-6">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-sm leading-6 text-slate-400">{stat.label}</div>
            </MotionCard>
          ))}
        </div>
      </section>

      <section id="projects" className="container-shell py-14 sm:py-20">
        <SectionHeader
          eyebrow="Projects"
          title="A broader GitHub showcase that reflects both flagship work and practical business builds."
          text="This section now covers more of your public GitHub footprint so visitors can see both your polished standout apps and the systems that prove your day-to-day engineering range."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <MotionCard key={project.title} className="panel rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-cyan-300">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </section>

      <section id="experience" className="container-shell py-14 sm:py-20">
        <SectionHeader
          eyebrow="Professional experience"
          title="Work that spans engineering, implementation, operations, and secure system ownership."
          text="My career path combines backend delivery, internal tooling, infrastructure responsibility, and security-related execution. That combination is what I bring into both company systems and portfolio projects."
        />

        <div className="mt-10 space-y-6">
          {experience.map((job) => (
            <MotionCard key={`${job.company}-${job.role}`} className="panel rounded-[30px] p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.role}</h3>
                  <p className="mt-1 text-base text-cyan-300">{job.company}</p>
                </div>
                <div className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">{job.period}</div>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </section>

      <section id="skills" className="container-shell py-14 sm:py-20">
        <SectionHeader
          eyebrow="Skills and operating range"
          title="A profile built around what I actually do in the field, not just what looks good on a list."
          text="The strongest part of my skill set is the ability to move across code, servers, workflows, security, integrations, and operations while keeping systems usable and maintainable."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <MotionCard key={group.title} className="panel rounded-[28px] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </MotionCard>
            );
          })}
        </div>
      </section>

      <section id="recognition" className="container-shell py-14 sm:py-20">
        <SectionHeader
          eyebrow="Recognition, credentials, and publication"
          title="Verified profile signals from education, LinkedIn-visible credentials, and published work."
          text="This area combines academic recognition, public credential entries, and your ACM publication so the portfolio feels stronger and more complete without relying on filler content."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <MotionCard className="panel rounded-[30px] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-400/10 p-3 text-violet-300">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Certificates & Test Scores</h3>
                <p className="text-sm text-slate-400">LinkedIn-visible entries</p>
              </div>
            </div>
            <div className="space-y-4">
              {linkedInCredentials.map((credential) => (
                <div key={credential.title} className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-white">{credential.title}</h4>
                      <p className="text-sm text-slate-400">{credential.issuer}</p>
                    </div>
                    <span className="text-sm text-cyan-300">{credential.date}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{credential.detail}</p>
                </div>
              ))}
            </div>
          </MotionCard>

          <MotionCard className="panel rounded-[30px] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Publication</h3>
                <p className="text-sm text-slate-400">ACM-indexed paper</p>
              </div>
            </div>
            <h4 className="text-lg font-semibold leading-8 text-white">{publication.title}</h4>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
              <p><span className="text-slate-400">Publisher:</span> {publication.publisher}</p>
              <p><span className="text-slate-400">Venue:</span> {publication.venue}</p>
              <p><span className="text-slate-400">Published:</span> {publication.date}</p>
              <p><span className="text-slate-400">Pages:</span> {publication.pages}</p>
              <p><span className="text-slate-400">DOI:</span> {publication.doi}</p>
              <p><span className="text-slate-400">Authors:</span> {publication.authors.join(", ")}</p>
            </div>
            <a href={publication.href} target="_blank" className="button-secondary mt-6 inline-flex">
              <ScrollText className="h-4 w-4" />
              View publication
            </a>
          </MotionCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {academicRecognition.map((item) => (
            <MotionCard key={item.title} className="panel rounded-[28px] p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-violet-400/10 p-3 text-violet-300">
                  {item.title.includes("Cybersecurity") ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : item.title.includes("ICT") ? (
                    <Trophy className="h-5 w-5" />
                  ) : (
                    <Star className="h-5 w-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.meta}</p>
                </div>
              </div>
              <p className="text-sm leading-7 text-slate-300">{item.description}</p>
            </MotionCard>
          ))}
        </div>
      </section>

      <section id="contact" className="container-shell pt-14 pb-24 sm:pt-20 sm:pb-28">
        <MotionCard className="panel rounded-[32px] p-8 sm:p-10">
          <SectionHeader
            eyebrow="Contact"
            title="Open to strong engineering, systems, backend, and security-aware opportunities."
            text="Whether the role is full-stack, internal systems, backend engineering, business technology, or security-focused product development, this portfolio is designed to show how I build and deliver in real operating environments."
          />

          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="button-secondary"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </MotionCard>
      </section>
    </main>
  );
}
