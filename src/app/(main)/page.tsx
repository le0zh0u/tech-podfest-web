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

      {/* Hero 部分 - 调整移动端顶部间距和高度 */}
      <div className="relative min-h-[100vh] pt-16 sm:pt-20 md:pt-24">
        <motion.div
          style={{ opacity, scale }}
          className="pb-16 sm:pb-20 md:pb-24"
        >
          <HomeHero />
        </motion.div>
      </div>

      {/* 内容部分 - 确保与Hero部分没有重叠 */}
      <Container>
        <div className="relative z-10 space-y-32 pb-20">
          {/* What Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="pt-4 sm:pt-6 md:pt-8"
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
