import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

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
      className={`${inter.variable}  antialiased`}
    >
      <Header/>
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer/>
    </html>
  );
}
