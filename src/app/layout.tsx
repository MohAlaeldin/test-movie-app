import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlaeldinMovies",
  description: "Created for Remedy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-[300px,1fr]">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
