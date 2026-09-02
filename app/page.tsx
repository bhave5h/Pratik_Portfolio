import Image from "next/image";
import Navbar from "../components/navbar";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
import Hero from "../src/Hero";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between"> 
        <Navbar />
        <Hero />
      </main>

  );
}
