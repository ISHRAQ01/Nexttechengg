import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Next Tech Engineering | Precision Manufacturers Since 2013",
    template: "%s | Next Tech Engineering",
  },
  description: "Custom Fixtures, Moulding Dies, Plastic Injection Moulds, EDM Drill Job Work, Sheet Metal Parts in Ghaziabad, India. 10+ years of manufacturing excellence.",
  keywords: ["manufacturing", "fixtures", "moulding dies", "plastic injection moulds", "EDM", "sheet metal", "Ghaziabad", "industrial jigs", "precision manufacturing"],
  authors: [{ name: "Next Tech Engineering" }],
  creator: "Next Tech Engineering",
  publisher: "Next Tech Engineering",
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
    locale: "en_IN",
    url: "https://nexttech-engineering.vercel.app",
    siteName: "Next Tech Engineering",
    title: "Next Tech Engineering | Precision Manufacturers Since 2013",
    description: "Custom Fixtures, Moulding Dies, Plastic Injection Moulds, EDM Drill Job Work in Ghaziabad, India.",
    images: [
      {
        url: "/back.jpeg",
        width: 1200,
        height: 630,
        alt: "Next Tech Engineering Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Tech Engineering",
    description: "Precision Manufacturing Excellence Since 2013",
    images: ["/back.jpeg"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}