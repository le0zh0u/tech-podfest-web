'use client'

import { HomeHero } from '@/components/home/HomeHero'
import { Container } from '@/components/Container'
import { motion, useScroll, useTransform } from 'framer-motion'
import { WhatSection } from '@/components/home/sections/WhatSection'
import { WhySection } from '@/components/home/sections/WhySection'
import { WhoSection } from '@/components/home/sections/WhoSection'
import { HowSection } from '@/components/home/sections/HowSection'
import { ContactSection } from '@/components/home/sections/ContactSection'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 背景装饰 */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-purple-500/10 to-pink-500/10 blur-[120px]" />
      </div>

      {/* Hero 部分 */}
      <div className="relative h-screen">
        <motion.div style={{ opacity, scale }}>
          <HomeHero />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              Scroll to discover
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce text-slate-400 dark:text-slate-500"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* 内容部分 */}
      <Container>
        <div className="relative z-10 mt-20 space-y-32 pb-20">
          {/* What Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <WhatSection />
          </motion.section>

          {/* Why Section - 使用交错动画 */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <WhySection />
          </motion.section>

          {/* Who Section - 使用淡入动画 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <WhoSection />
          </motion.section>

          {/* How Section - 使用渐变背景 */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-transparent to-blue-50/30 py-16 dark:to-blue-950/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl" />

            <div className="relative px-6">
              <HowSection />
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-3xl bg-white/50 p-10 shadow-lg dark:bg-slate-800/50"
          >
            <ContactSection />
          </motion.section>
        </div>
      </Container>
    </motion.div>
  )
}
