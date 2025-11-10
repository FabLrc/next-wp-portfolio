import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { QueryProvider } from "@/contexts/query-provider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio personnel d'un développeur",
  authors: [{ name: "Fabien LAURENCE" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
