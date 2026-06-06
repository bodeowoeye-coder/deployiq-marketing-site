import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
