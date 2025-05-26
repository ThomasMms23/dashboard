import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/components/shared/NextAuthProvider"; // Importe le fournisseur

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinted Dashboard",
  description: "Suivez vos ventes Vinted",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Enveloppe tout avec le fournisseur de session */}
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
