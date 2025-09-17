import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigitalPro - Digital Marketing Agency",
  description: "Professional digital marketing agency offering SEO, PPC, social media marketing, and web development services to help your business grow online.",
  keywords: ["digital marketing", "SEO", "PPC", "social media marketing", "web development", "graphic design", "DigitalPro"],
  authors: [{ name: "DigitalPro Agency" }],
  openGraph: {
    title: "DigitalPro - Digital Marketing Agency",
    description: "Professional digital marketing services to help your business grow online",
    url: "https://digitalpro.com",
    siteName: "DigitalPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalPro - Digital Marketing Agency",
    description: "Professional digital marketing services to help your business grow online",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
