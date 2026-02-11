import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Omkar Kumbhar - Full Stack Developer | React, Next.js, Node.js Expert",
  description:
    "Omkar Kumbhar is a skilled Full Stack Developer from Kolhapur, Maharashtra, India. Expert in React, Next.js, Node.js, TypeScript, and modern web technologies. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Omkar Kumbhar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Kolhapur",
    "Frontend Developer India",
    "Backend Developer",
    "MERN Stack Developer",
    "Redux Developer",
    // "TanStack Query",
    "MongoDB Developer",
    "PostgreSQL Developer",
    "Software Engineer",
    "Web Development Services",
    "Freelance Developer India",
    "Kolhapur Developer",
    "Maharashtra Developer",
    // "React Native Developer",
    "Express.js Developer",
    // "Docker Developer",
    "Git Expert",
    "Responsive Web Design",
    "Modern Web Applications",
    "Scalable Applications",
    "Team Leader",
    "Problem Solver",
  ],
  authors: [{ name: "Omkar Kumbhar" }],
  creator: "Omkar Kumbhar",
  publisher: "Omkar Kumbhar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omkarkumbhar.vercel.app",
    siteName: "Omkar Kumbhar - Full Stack Developer",
    title:
      "Omkar Kumbhar - Full Stack Developer | React, Next.js, Node.js Expert",
    description:
      "Omkar Kumbhar is a skilled Full Stack Developer from Kolhapur, Maharashtra, India. Expert in React, Next.js, Node.js, TypeScript, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omkar Kumbhar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Omkar Kumbhar - Full Stack Developer | React, Next.js, Node.js Expert",
    description:
      "Omkar Kumbhar is a skilled Full Stack Developer from Kolhapur, Maharashtra, India. Expert in React, Next.js, Node.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@omkarkumbhar",
  },
  alternates: {
    canonical: "https://omkarkumbhar.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Omkar Kumbhar",
              jobTitle: "Full Stack Developer",
              description:
                "Skilled Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
              url: "https://omkarkumbhar.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/omkar-kumbhar-291168259/",
                "https://github.com/Omkarkumbhar47",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolhapur",
                addressRegion: "Maharashtra",
                addressCountry: "India",
              },
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "KIT's IMER",
                  description: "Master of Computer Applications (MCA)",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "The New College, Kolhapur",
                  description: "Bachelor of Computer Science",
                },
              ],
              worksFor: [
                {
                  "@type": "Organization",
                  name: "RaMee Systems Pvt Ltd",
                  description: "Software Engineer",
                },
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "PostgreSQL",
                "Express.js",
                "Redux",
                "TanStack Query",
                "Docker",
                "Full Stack Development",
                "Web Development",
                "Software Engineering",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
