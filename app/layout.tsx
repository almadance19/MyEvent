import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'My Dance Ticket',
  description: "Save and Post your Event Tickets",
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name="color-scheme" content="light"/>
      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </head>
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
