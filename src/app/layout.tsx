import type { Metadata } from 'next';
import { Anybody, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { GrainOverlay } from '@/components/ui/GrainOverlay';

const anybody = Anybody({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['wdth'],
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Using JetBrains Mono as a fallback for Departure Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cortex Hub — AI & Data Science',
  description: 'The knowledge marketplace for AI and Data Science professionals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anybody.variable} ${archivo.variable} ${jetbrainsMono.variable} bg-void text-bone font-body min-h-screen antialiased`}
      >
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
