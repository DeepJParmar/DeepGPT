import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEX | Intelligent AI Systems',
  description:
    'NEX builds multi-model AI systems, intelligent automation software, and digital infrastructure for startups.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
