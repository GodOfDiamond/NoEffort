import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "No Effort — minder wrijving, meer intentie",
  description: "No Effort verwijdert de frictie tussen jouw geld, gewoonten en groei.",
  openGraph: {
    title: "No Effort — minder wrijving, meer intentie",
    description: "No Effort verwijdert de frictie tussen jouw geld, gewoonten en groei.",
    url: "https://noeffort.life",
    siteName: "No Effort",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="font-sans" style={{ backgroundColor: "#0a1a0f", color: "#f0fdf4" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
