import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DeepRise Solution | Web Development & Digital Growth",
  description: "DeepRise Solution empowers businesses with modern web development, app solutions, and digital strategies. Building scalable, creative, and future-ready technology for your success.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="bg-black text-white">
        <Header />
        <Toaster/>
          {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
