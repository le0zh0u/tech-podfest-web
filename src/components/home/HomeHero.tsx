'use client'

import { Container } from '@/components/Container'
import { HomeHeroSlider } from '@/components/ui/home-hero-slider'
import { motion } from 'framer-motion'

export function HomeHero() {
  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden pt-6 sm:min-h-[calc(100vh-10rem)] sm:pt-8 md:min-h-[calc(100vh-12rem)] md:pt-12">
      <Container className="relative z-10">
        <div className="grid items-center gap-8 md:grid-cols-12">
          {/* 左侧内容 */}
          <motion.div
            className="space-y-4 text-center sm:space-y-6 md:col-span-5 md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
              Tech PodFest: Where Innovation Hits Play.
            </h1>

            <p className="text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              Join the premier festival for tech podcasting and innovation.
              Connect, learn, and grow with industry leaders.
            </p>

            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/40 sm:px-8 sm:py-4"
              >
                <span className="relative z-10">Join Now</span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </motion.button>
            </div>
          </motion.div>

          {/* 右侧滑块 */}
          <motion.div
            className="h-[20rem] overflow-hidden rounded-3xl shadow-2xl sm:h-[25rem] md:col-span-7 md:h-[30rem] lg:h-[35rem]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HomeHeroSlider />
          </motion.div>
        </div>
      </Container>

      {/* 装饰性元素 */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
    </div>
  )
}
