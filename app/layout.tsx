import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { SITE } from "@/lib/site";
import "./globals.css";

/* Self-hosted via next/font — zero layout shift, no render-blocking requests. */
const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jb-mono",
  display: "swap",
});

/** Default metadata — individual pages extend this via the title template. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SmoothCuts | Web Design & Development for Growing Businesses",
    template: "%s | SmoothCuts",
  },
  description:
    "SmoothCuts is a boutique web design agency building high-performance, conversion-focused websites for ambitious small businesses.",
  openGraph: {
    title: "SmoothCuts | Web Design & Development for Growing Businesses",
    description:
      "SmoothCuts is a boutique web design agency building high-performance, conversion-focused websites for ambitious small businesses.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    images: [
      {
        url: "/images/og/cover.jpg",
        width: 1200,
        height: 630,
        alt: "SmoothCuts — We Build Websites That Work As Hard As You Do",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmoothCuts | Web Design & Development for Growing Businesses",
    description:
      "SmoothCuts is a boutique web design agency building high-performance, conversion-focused websites for ambitious small businesses.",
    images: ["/images/og/cover.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {/* Keyboard users can jump straight past the navigation. */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
