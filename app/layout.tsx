import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://codewithty.dev/images/logo.png"
          sizes="any"
        />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Adedamola's Development Portfolio",
    template: "%s - Adedamola",
  },
  description:
    "Professional portfolio for Adedamola - showcasing expertise in web development and mobile apps.",
  keywords: [
    "web development",
    "cybersecurity",
    "blockchain development",
    "mobile app development",
    "tech consulting",
    "developer portfolio",
    "Next.js portfolio",
    "React portfolio",
  ],
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
  applicationName: "CodeWithTy Portfolio Template",
  generator: "Next.js",
  referrer: "origin",
  creator: "Damoblinkz",
  publisher: "Damoblinkz",
  category: "technology",

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

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  manifest: "/manifest.json",
};
