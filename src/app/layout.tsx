import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { cn } from "@/src/lib/utils";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable : "--font-inter",
  subsets : ["latin"],
})


export const metadata: Metadata = {
  title: "Receitas",
  description: "Site de receitas simples e saborosas",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
