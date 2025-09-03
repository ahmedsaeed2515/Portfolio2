import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Saeed | Full-Stack Developer Portfolio",
  description:
    "Professional portfolio of Ahmed Saeed, a passionate full-stack developer specializing in React, Node.js, and modern web technologies. View projects, skills, and get in touch.",
  keywords: [
    "Ahmed Saeed",
    "Full-Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Development",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Frontend",
    "Backend",
  ],
  authors: [{ name: "Ahmed Saeed" }],
  creator: "Ahmed Saeed",
  publisher: "Ahmed Saeed",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ahmed-saeed-portfolio.vercel.app"),
  openGraph: {
    title: "Ahmed Saeed | Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing modern web development projects and skills",
    url: "https://ahmed-saeed-portfolio.vercel.app",
    siteName: "Ahmed Saeed Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "Ahmed Saeed - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Saeed | Full-Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing modern web development projects and skills",
    creator: "@ahmed_saeed",
    images: ["/images/og-image.jpg"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ahmed Saeed",
              url: "https://ahmed-saeed-portfolio.vercel.app",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://linkedin.com/in/ahmed-saeed",
                "https://github.com/ahmed-saeed",
                "https://twitter.com/ahmed_saeed",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Node.js",
                "Next.js",
                "Full-Stack Development",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
