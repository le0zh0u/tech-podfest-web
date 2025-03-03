'use client'

import { Container } from '@/components/Container'
import { HomeHeroSlider } from '@/components/ui/home-hero-slider'
import { motion } from 'framer-motion'

export function HomeHero() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 md:pt-24">
      <Container className="relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* 左侧内容 */}
            <motion.div
              className="space-y-6 text-center md:col-span-5 md:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-5xl lg:text-6xl">
                Tech PodFest: Where Innovation Hits Play.
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300">
                Join the premier festival for tech podcasting and innovation.
                Connect, learn, and grow with industry leaders.
              </p>

              <div className="flex justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/40"
                >
                  <span className="relative z-10">Join Now</span>
                  <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </motion.button>
              </div>
            </motion.div>

            {/* 右侧滑块 */}
            <motion.div
              className="h-[30rem] overflow-hidden rounded-3xl shadow-2xl md:col-span-7 md:h-[35rem]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HomeHeroSlider />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* 装饰性元素 */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
  )
}
