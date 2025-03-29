import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from './components/Navbar'

const workSans = localFont({
  src: [
    {
      path: '/fonts/WorkSans-Regular.ttf', // Path to the font file
      weight: '400', // Font weight
      style: 'normal', // Font style
    },
    { path: '/fonts/WorkSans-Bold.ttf', weight: '700', style: 'normal' }, // Add more weights and styles as needed
    { path: '/fonts/WorkSans-Light.ttf', weight: '300', style: 'normal' },
    { path: '/fonts/WorkSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '/fonts/WorkSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '/fonts/WorkSans-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '/fonts/WorkSans-Black.ttf', weight: '900', style: 'normal' },
    { path: '/fonts/WorkSans-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '/fonts/WorkSans-Thin.ttf', weight: '100', style: 'normal' },
  ],
  variable: '--font-work-sans',
})

export const metadata: Metadata = {
  title: 'YC Directory',
  description: 'Pitch, Vote and Grow with YC Directory',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
