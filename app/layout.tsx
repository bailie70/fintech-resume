import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "FinTech Professional Resume",
  description: "Professional resume website showcasing expertise in Financial Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-gradient-to-b from-background to-background-alt dark:bg-transparent">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
