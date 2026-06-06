import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "DeployIQ™ | Field Deployment Intelligence Platform",
    template: "%s | DeployIQ™"
  },
  description:
    "DeployIQ™ helps brands, agencies, and field teams execute, track, and verify field deployments across Nigeria.",
  metadataBase: new URL("https://deployiq.ng"),
  openGraph: {
    title: "DeployIQ™ | Execute. Track. Verify.",
    description:
      "Public marketing website for DeployIQ™, a Field Deployment Intelligence Platform by Impact Visibility Ltd.",
    url: "https://deployiq.ng",
    siteName: "DeployIQ™",
    locale: "en_NG",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
