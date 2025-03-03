'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logoImage from '@/images/logos/logo.jpg'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import { useAppStore } from '@/store'
import { useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
  const { isDarkMode, setIsDarkMode, navLinks, updateNavLink } = useAppStore()
  const pathname = usePathname()

  // 根据当前路由更新导航链接的激活状态
  useEffect(() => {
    navLinks.forEach((link) => {
      const isActive =
        link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
      updateNavLink(link.href, isActive)
    })
  }, [pathname, updateNavLink]) // 只依赖 pathname

  // 同步暗色模式到 html 标签
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent backdrop-blur-md">
      <motion.div
        className="absolute inset-0 -z-10 bg-white/10 dark:bg-slate-900/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <nav>
        <Container className="flex justify-between py-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" aria-label="Home">
              <Image
                src={logoImage}
                className="size-16"
                width={1000}
                height={1000}
                alt="Tech Podfest Logo"
              />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-8 pr-4"
          >
            {navLinks.map(({ label, href, isActive }) => (
              <Link
                key={href}
                href={href}
                className={`group relative text-lg font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-500 dark:text-cyan-400'
                    : 'text-slate-500/90 hover:text-cyan-500 dark:text-slate-300/90 dark:hover:text-cyan-400'
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* 添加暗色模式切换按钮 */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </motion.div>
        </Container>
      </nav>
    </header>
  )
}
