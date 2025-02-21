import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { useAppStore } from '@/store'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Tech PodFest',
    default: 'Tech PodFest - Global Tech Podcast Festival',
  },
  description:
    'Tech PodFest is a global tech podcast festival, bringing together the best tech podcasts from around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 从系统获取初始暗色模式偏好
  if (typeof window !== 'undefined') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    useAppStore.getState().setIsDarkMode(isDarkMode)
  }

  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white font-mono antialiased',
        inter.variable,
        dmSans.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
      <GoogleTagManager gtmId="G-5D7QBL0Q9M" />
    </html>
  )
}
