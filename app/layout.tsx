import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amps.co.za"),
  title: {
    default: "AMPS | Quantity Surveyors & Cost Consultants",
    template: "%s | AMPS",
  },
  description:
    "AMPS is an independent professional quantity surveying and construction cost consultancy practice based in Cape Town, South Africa, delivering reliable cost planning and project advice.",
  keywords: [
    "Quantity Surveyors Cape Town",
    "Construction Cost Consultants",
    "Cost Planning",
    "Construction Cost Management",
    "Project Cost Management South Africa",
    "Quantity Surveying Cape Town",
  ],
  applicationName: "AMPS",
  authors: [{ name: "AMPS" }],
  creator: "AMPS",
  publisher: "AMPS",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "AMPS | Quantity Surveyors & Cost Consultants",
    description:
      "Independent professional quantity surveying and construction cost consultancy support for commercial, residential and public sector projects.",
    url: "https://www.amps.co.za",
    siteName: "AMPS",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMPS | Quantity Surveyors & Cost Consultants",
    description:
      "Independent professional quantity surveying and construction cost consultancy support in Cape Town, South Africa.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
