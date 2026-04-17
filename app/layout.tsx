import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Piyush Raj | Portfolio',
    template: 'Piyush Raj | %s',
  },

  description:
    'Piyush Raj is a full stack developer specializing in React, Node.js, MongoDB, and modern web applications.',

  keywords: [
    'piyush raj',
    'piyush',
    'full stack developer',
    'mern stack developer',
    'react developer',
    'node js developer',
    'web developer portfolio',
    'piyush raj portfolio',
    'software developer student',
  ],

  openGraph: {
    title: "Piyush Raj's Portfolio",

    description:
      'Full-stack developer building modern web applications using React and Node.js.',

    images: ['https://imgur.com/4zi5KkQ.png'],

    url: 'https://your-portfolio.vercel.app',
  },

  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}