import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nadimpalli Bhargav | Web Developer',
  description: 'I am a creative web developer who specializes in building custom websites for clients across various industries. I create responsive and SEO-friendly websites that help businesses succeed online.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <body className={inter.className}>
        <div className="w-full section bg-black min-h-screen overflow-x-hidden text-gray-200">
          {children}
        </div>
      </body>
    </html>
  );
}
