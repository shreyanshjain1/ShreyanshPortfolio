import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shreyansh Jain | Portfolio v2",
  description:
    "IT & Systems Lead, full-stack developer, and security-minded engineer building modern business systems, web apps, and operational platforms.",
  keywords: [
    "Shreyansh Jain",
    "Rey Jain",
    "Portfolio",
    "Full Stack Developer",
    "Cybersecurity",
    "IT Systems",
    "Next.js",
    "Vercel",
    "PHP",
    "TypeScript"
  ],
  authors: [{ name: "Shreyansh Jain" }],
  openGraph: {
    title: "Shreyansh Jain | Portfolio v2",
    description:
      "A modern developer portfolio focused on full-stack product work, internal systems, infrastructure, and security-aware implementation.",
    url: "https://shreyansh-portfolio-kappa.vercel.app/",
    siteName: "Shreyansh Jain Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreyansh Jain | Portfolio",
    description:
      "Full-stack developer, IT & Systems Lead, and security-minded builder working across modern apps and real business systems."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
