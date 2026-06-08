import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  applicationName: "DeployIQ™",
  title: {
    default: "DeployIQ™ | Field Deployment Intelligence Platform",
    template: "%s | DeployIQ™"
  },
  description:
    "DeployIQ™ helps brands, agencies, and field teams execute, track, and verify field deployments across Nigeria.",
  metadataBase: new URL("https://deployiq.ng"),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"]
  },
  appleWebApp: {
    capable: true,
    title: "DeployIQ™",
    statusBarStyle: "black-translucent"
  },
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
