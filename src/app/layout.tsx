import type { Metadata } from "next";
import localFont from "next/font/local";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Brend font za naslove: preuzet sa postojeceg sajta.
// Licenca jos nije potvrdjena od klijenta (vidi OVERVIEW.md klijenta).
const ngetic = localFont({
  src: "../fonts/Ngetic-Modern-Regular.woff2",
  variable: "--font-ngetic",
  display: "swap",
});

// Telo teksta: isti font kao na postojecem sajtu, Google verzija radi vise tezina (OFL licenca).
const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thevibedesign.com"),
  keywords: ["medspa marketing", "medical spa marketing agency", "medspa ads", "medspa growth"],
  title: {
    default: "The Vibe Design | Medspa Marketing Agency",
    template: "%s | The Vibe Design",
  },
  description:
    "Marketing agency for medspas: ads that attract qualified clients, smart budget management and a 24/7 AI lead follow-up agent. Led by Maya Sterling.",
  openGraph: {
    siteName: "The Vibe Design",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ngetic.variable} ${josefin.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
