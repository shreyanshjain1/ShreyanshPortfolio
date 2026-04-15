"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Download,
  ExternalLink,
  Eye,
  FolderKanban,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Radar,
  ScrollText,
  Search,
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

const flagshipProject = {
  title: "Vertex-POS",
  subtitle: "Flagship Retail Operations Platform",
  description:
    "A production-minded retail system that goes far beyond checkout. It covers sales, inventory, purchasing, stock counts, cash sessions, receivables, supplier workflows, reporting, permissions, and multi-branch operations.",
  highlights: [
    "Deep workflow coverage across checkout, inventory, purchasing, cash handling, and reporting",
    "Strong backend and domain modeling using Prisma and PostgreSQL",
    "Role-aware actions, audit-friendly operations, and business-oriented reporting depth"
  ],
  stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Retail Workflows", "Reporting", "RBAC"],
  github: "https://github.com/shreyanshjain1/Vertex-POS"
};

const featuredProjects = [
  {
    title: "VitaVault",
    type: "Health-Tech Product",
    description:
      "A personal health record platform designed around secure records, care workflows, alerts, documents, dashboards, and future-ready health product architecture.",
    impact:
      "Demonstrates product strategy, secure data handling, domain thinking, and roadmap discipline.",
    stack: ["Next.js", "TypeScript", "Auth.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/shreyanshjain1/VitaVault"
  },
  {
    title: "TrailPulse",
    type: "Modern SaaS Product",
    description:
      "A polished hike-planning platform with Google OAuth, calendar sync, notifications, background jobs, and security-first full-stack architecture.",
    impact:
      "Shows SaaS instincts, async workflows, integration work, and cleaner consumer-facing product execution.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Google APIs"],
    github: "https://github.com/shreyanshjain1/TrailPulse"
  },
  {
    title: "CrickInPhSEO",
    type: "Search-Focused Web Build",
    description:
      "A cricket platform tailored for the Philippines, built around keyword targeting, page structure, content architecture, metadata tuning, internal linking, and discoverability.",
    impact:
      "Proves that I can build for traffic, intent, and business visibility rather than just aesthetics.",
    stack: ["Next.js", "TypeScript", "Technical SEO", "Content Strategy", "Metadata", "Search Visibility"],
    github: "https://github.com/shreyanshjain1/CrickInPhSEO"
  },
  {
    title: "OfficeHub",
    type: "Internal Operations Platform",
    description:
      "A request and workflow system for approvals, assignments, attachments, and operational routing built around real office processes and admin control.",
    impact:
      "Demonstrates practical business software thinking, access control, and internal systems ownership.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "RBAC", "Audit Logs"],
    github: "https://github.com/shreyanshjain1/OfficeHub"
  },
  {
    title: "Medicine Sales Reports",
    type: "Business Reporting System",
    description:
      "A reporting platform built for employee submissions, manager review, visibility, exports, and analytics in a role-aware operational workflow.",
    impact:
      "Shows business workflow depth, reporting structure, and delivery for a real internal use case.",
    stack: ["PHP", "MySQL", "Reporting", "Approvals", "Dashboards"],
    github: "https://github.com/shreyanshjain1/Medicine_sales_reports"
  },
  {
    title: "OCR-Scanner-Cheques",
    type: "Automation & Back-Office Processing",
    description:
      "Cheque scanning and OCR review system with secure uploads, admin workflows, auditability, and export-oriented processing.",
    impact:
      "Adds stronger evidence of workflow software, document handling, admin flows, and internal processing systems.",
    stack: ["PHP", "MySQL", "AJAX", "OCR", "Audit Trails"],
    github: "https://github.com/shreyanshjain1/OCR-Scanner-Cheques"
  }
];

const supportingProjects = [
  {
    title: "Employee Task Management Software",
    description:
      "Role-aware task and update system supporting employee operations, file handling, tracking, and structured management workflows.",
    stack: ["PHP", "MySQL", "Workflow Logic", "Reporting"],
    github: "https://github.com/shreyanshjain1/Employee-Task-Management-Software"
  },
  {
    title: "DiagEcommerceRep",
    description:
      "In-house diagnostic e-commerce platform built around catalog presentation, product structure, and real business operations.",
    stack: ["PHP", "E-commerce", "Catalog Management"],
    github: "https://github.com/shreyanshjain1/DiagEcommerceRep"
  },
  {
    title: "Client Quotation Generator",
    description:
      "Quotation and pricing tool for business-ready cost breakdowns, tax handling, and calculation support.",
    stack: ["PHP", "Pricing Logic", "Business Tools"],
    github: "https://github.com/shreyanshjain1/Client-Quotation-Generator"
  }
];

const experience = [
  {
    company: "Pharmastar International Trading Corporation",
    role: "IT & E-Commerce Business Lead",
    period: "Oct 2024 – Present",
    points: [
      "Own the design, deployment, maintenance, and protection of business-critical systems spanning software, infrastructure, digital operations, and online retail platforms.",
      "Build internal PHP/MySQL tools for inventory, quotations, permissions, audit logs, reporting, task workflows, and operational visibility.",
      "Lead website improvements, SEO-oriented pages, marketplace optimization, and digital visibility work tied to actual business growth.",
      "Manage Linux/Windows servers, DNS/SSL, backups, DR routines, patching, and least-privilege security practices."
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
      "REST APIs",
      "OAuth integrations",
      "Git"
    ]
  },
  {
    title: "SEO, Search & Web Growth",
    icon: Search,
    items: [
      "Technical SEO",
      "On-page optimization",
      "Content architecture",
      "Metadata optimization",
      "Internal linking",
      "Keyword targeting",
      "Search visibility",
      "SEO-led landing pages"
    ]
  },
  {
    title: "Infrastructure & Delivery",
    icon: Server,
    items: [
      "Linux / Windows Server",
      "cPanel / XAMPP",
      "IIS / Apache",
      "DNS / SSL",
      "Hosting setup",
      "Backup & disaster recovery",
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
      "Risk mitigation",
      "Least-privilege controls",
      "Secure system design"
    ]
  },
  {
    title: "Business Systems & Operations",
    icon: Briefcase,
    items: [
      "Shopify",
      "Shopee / Lazada / TikTok Shop",
      "Facebook Ads",
      "Automated reporting",
      "CSV / PDF exports",
      "Vendor coordination",
      "SOP creation",
      "Operational workflow design"
    ]
  },
  {
    title: "Delivery Signal",
    icon: FolderKanban,
    items: [
      "Flagship product thinking",
      "Business-facing software",
      "Workflow modeling",
      "Reporting systems",
      "Integration ownership",
      "Deployment responsibility",
      "Operational problem-solving",
      "Real-world implementation"
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
  { label: "Portfolio Repo", href: "https://github.com/shreyanshjain1/ShreyanshPortfolio", icon: Globe },
  { label: "Email", href: "mailto:shreyanshmanishjain@gmail.com", icon: Mail }
];

const valuePillars = [
  {
    title: "Business systems, not toy apps",
    text: "I build software around real workflows, approvals, reporting, permissions, and operational ownership."
  },
  {
    title: "Search-aware delivery",
    text: "I can design and improve websites for discoverability, buyer intent, and search-driven business impact."
  },
  {
    title: "Product + infrastructure range",
    text: "From app logic and APIs to hosting, SSL, backups, and deployment discipline, I work across the stack."
  }
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

function MotionCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
  const [repoCount, setRepoCount] = useState<number>(12);

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubProfile() {
      try {
        const response = await fetch("https://api.github.com/users/shreyanshjain1", {
          headers: {
            Accept: "application/vnd.github+json"
          }
        });

        if (!response.ok) return;

        const data = (await response.json()) as GitHubProfile;
        if (isMounted && typeof data.public_repos === "number") {
          setRepoCount(data.public_repos);
        }
      } catch {
        //
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
      { value: "1", label: "Flagship retail operations platform" },
      { value: "Full-Stack + SEO", label: "Primary positioning" },
      { value: "1", label: "ACM-indexed publication" }
    ],
    [repoCount]
  );

  const marqueeItems = [
    "Next.js",
    "TypeScript",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Technical SEO",
    "Cybersecurity",
    "Infrastructure",
    "RBAC",
    "Audit Logs",
    "API Integrations",
    "E-commerce Systems",
    "Operational Software"
  ];

  return (
    <main className="relative overflow-hidden bg-mesh">
      <div className="hero-orb animate-pulseGlow" />
      <div className="hero-orb-two animate-floaty" />
      <div className="grid-overlay absolute inset-0 -z-10 opacity-30" />
      <div className="noise-overlay absolute inset-0 -z-10" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-4">
          <a href="#home" className="text-sm font-bold uppercase tracking-[0.28em] text-slate-100">
            SJ / Portfolio
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/shreyanshjain1"
              target="_blank"
              rel="noreferrer"
              className="button-secondary !rounded-full !px-4 !py-2 text-sm"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shreyansh-jain-6b6813233/"
              target="_blank"
              rel="noreferrer"
              className="button-secondary !rounded-full !px-4 !py-2 text-sm"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <section id="home" className="container-shell pt-16 pb-14 sm:pt-24 sm:pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="kicker">
              <Radar className="h-4 w-4" />
              IT & Systems Lead · Full-Stack Developer · SEO Specialist
            </div>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl xl:text-7xl">
              I build <span className="gradient-title animate-shine">real business systems</span>, flagship software,
              and search-aware web experiences.
            </h1>

            <p className="lead-text mt-6 max-w-3xl text-lg leading-8 sm:text-xl">
              My work spans full-stack development, business software, infrastructure, SEO-focused delivery,
              security-aware implementation, and real-world system ownership. This portfolio is curated to show signal,
              not filler.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="button-primary animate-shine">
                View flagship work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume/Shreyansh-M-Jain-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                <Download className="h-4 w-4" />
                Open resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Metro Manila, Philippines
              </span>
              <a
                href="mailto:shreyanshmanishjain@gmail.com"
                className="inline-flex items-center gap-2 hover:text-cyan-300"
              >
                <Mail className="h-4 w-4" />
                shreyanshmanishjain@gmail.com
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {valuePillars.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/8 bg-slate-950/45 p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <div>
                      <h3 className="font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="panel-soft rounded-[30px] p-6 sm:p-8 lg:mt-20"
          >
            <div className="mb-5">
              <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                Why this portfolio works
              </span>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <FolderKanban className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Positioning</p>
                <p className="text-lg font-bold text-white">Builder with product, systems, and search depth</p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                I am strongest when the work sits at the intersection of engineering, operations, visibility, and real
                business outcomes.
              </p>
              <p>
                The portfolio is intentionally weighted toward projects that prove architecture, workflow depth,
                reporting, security thinking, and production-minded delivery instead of generic toy builds.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="tech-tag">Flagship Product Work</span>
              <span className="tech-tag">Business Systems</span>
              <span className="tech-tag">Technical SEO</span>
              <span className="tech-tag">Infrastructure</span>
              <span className="tech-tag">Security-aware Builds</span>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Best fit roles</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Full-Stack Developer, Backend Engineer, Systems / IT Lead, Internal Tools Engineer, SEO-Focused Web
                  Developer, Technical Product Builder
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Core proof</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Vertex-POS, VitaVault, TrailPulse, CrickInPhSEO, and internal business systems together show both
                  range and depth.
                </p>
              </div>
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
          eyebrow="Flagship work"
          title="The strongest signal in this portfolio starts with a real product."
          text="Instead of presenting every project with equal weight, this section now leads with the platform that best represents my depth in architecture, workflows, business logic, and serious full-stack execution."
        />

        <MotionCard className="mt-10 panel-soft rounded-[32px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                Featured flagship
              </div>
              <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {flagshipProject.title}
              </h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                {flagshipProject.subtitle}
              </p>
              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                {flagshipProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {flagshipProject.stack.map((item) => (
                  <span key={item} className="tech-tag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={flagshipProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button-primary"
                >
                  <Github className="h-4 w-4" />
                  Open repo
                </a>
                <a href="#contact" className="button-secondary">
                  <Mail className="h-4 w-4" />
                  Ask me about this build
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {flagshipProject.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Why it leads</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  This project best reflects how I think about systems: workflow depth, operational realism, role-aware
                  behavior, reporting, data modeling, and serious full-stack implementation.
                </p>
              </div>
            </div>
          </div>
        </MotionCard>

        <div className="mt-14">
          <SectionHeader
            eyebrow="More featured projects"
            title="Supporting flagship work with product, SaaS, SEO, and internal systems depth."
            text="These projects reinforce the breadth of the portfolio while still keeping the overall signal clean and intentional."
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <MotionCard
              key={project.title}
              className="panel rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-cyan-300">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-white"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/45 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Why it matters</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.impact}</p>
              </div>

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

        <div className="mt-12">
          <h3 className="text-xl font-bold text-white">Supporting projects</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
            Additional work that reinforces business tooling, workflow software, reporting, and operational
            implementation.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {supportingProjects.map((project) => (
              <MotionCard key={project.title} className="panel rounded-[24px] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-300 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="container-shell py-14 sm:py-20">
        <SectionHeader
          eyebrow="Professional experience"
          title="Engineering, systems ownership, digital execution, and delivery accountability."
          text="My experience is not limited to writing code. It includes building systems, improving operations, managing infrastructure, supporting growth initiatives, and keeping business-critical tech moving."
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
          eyebrow="Skills"
          title="A mix of engineering depth, technical SEO, infrastructure, and business-oriented software delivery."
          text="The goal here is clarity: I am not limited to one lane. I can build, integrate, deploy, optimize, and support systems that matter in real operating environments."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          eyebrow="Recognition"
          title="Additional proof through credentials, academic recognition, and published work."
          text="These signals support the portfolio without distracting from the strongest part of the story, which is still the quality and depth of the projects."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <MotionCard className="panel rounded-[30px] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-violet-400/10 p-3 text-violet-300">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Certificates & Test Scores</h3>
                <p className="text-sm text-slate-400">Publicly visible proof points</p>
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
              <p>
                <span className="text-slate-400">Publisher:</span> {publication.publisher}
              </p>
              <p>
                <span className="text-slate-400">Venue:</span> {publication.venue}
              </p>
              <p>
                <span className="text-slate-400">Published:</span> {publication.date}
              </p>
              <p>
                <span className="text-slate-400">Pages:</span> {publication.pages}
              </p>
              <p>
                <span className="text-slate-400">DOI:</span> {publication.doi}
              </p>
              <p>
                <span className="text-slate-400">Authors:</span> {publication.authors.join(", ")}
              </p>
            </div>

            <a href={publication.href} target="_blank" rel="noreferrer" className="button-secondary mt-6 inline-flex">
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
            title="Open to full-stack, backend, systems, SEO-focused, and security-aware opportunities."
            text="I am especially suited for roles where engineering, operations, product thinking, and implementation ownership overlap."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5">
              <div className="flex items-start gap-3">
                <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div>
                  <h3 className="font-semibold text-white">Strongest fit</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Full-stack, backend, internal systems, SEO-focused web delivery, and technical product roles.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5">
              <div className="flex items-start gap-3">
                <Eye className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div>
                  <h3 className="font-semibold text-white">What I want reviewed</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Start with Vertex-POS, then VitaVault, TrailPulse, and CrickInPhSEO for the clearest picture.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/45 p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                <div>
                  <h3 className="font-semibold text-white">Direct contact</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Available for interviews, technical discussions, and roles that need both engineering and delivery ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="button-secondary">
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
