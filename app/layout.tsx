import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from '@/app/components/AnimatedBackground'
import { LanguageProvider } from './contexts/LanguageContext'
import { ClientLanguageWrapper } from './components/ClientLanguageWrapper'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WrestlinGo - Wrestling Quiz Games",
  description: "Test your wrestling knowledge with various quiz games!",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-black min-h-screen flex flex-col`}>
        <LanguageProvider>
          <AnimatedBackground />
          <ClientLanguageWrapper>
            {children}
          </ClientLanguageWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
