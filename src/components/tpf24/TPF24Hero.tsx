'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'

export function TPF24Hero() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.2 })

  return (
    <section ref={heroRef} className="pb-20 pt-32 sm:pt-36 md:pt-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          {/* 海报图片背景 */}
          <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
            {/* 背景图片 */}
            <Image
              src="/images/tpf24/full-poster.png"
              alt="Tech PodFest 2024 × VisionOS 海报"
              fill
              className="object-cover"
              priority
            />

            {/* 半透明渐变叠加层，确保文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 via-purple-500/50 to-indigo-500/60"></div>

            {/* 装饰元素 - 在大屏幕上更明显 */}
            <div className="absolute -left-20 top-1/3 h-32 w-32 rounded-full bg-white/10 blur-xl sm:h-40 sm:w-40"></div>
            <div className="absolute -right-20 bottom-1/3 h-32 w-32 rounded-full bg-white/10 blur-xl sm:h-40 sm:w-40"></div>

            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center p-6 text-center text-white">
              {/* 标题 - 与Banner保持一致 */}
              <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
                Tech PodFest 2024 X Let&apos;s VisionOS 创作者大会
              </h1>

              {/* 描述文本 - 与Banner保持一致 */}
              <div className="mt-4 max-w-2xl text-white/90">
                <p className="text-base">
                  2024年，Tech PodFest 与全球首届 visionOS
                  创作者大会深度合作，携手一众技术播客伙伴，共同推出 XR
                  专题系列音频内容，一同为大家带来 visionOS 背后的灵感之旅。
                </p>
                <p className="mt-2">
                  无论你是开发者、创业者、设计师还是产品经理，都将收获对
                  visionOS 产品、设计、开发的理解和经验，探索 visionOS
                  功能定义、交互设计、体验交付的实践可能。
                </p>
              </div>
            </div>
          </div>

          {/* 底部信息栏 - 仅保留左侧内容并居中 */}
          <div className="flex justify-center bg-white p-4 dark:bg-slate-800">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-blue-600 dark:text-blue-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Tech PodFest × visionOS 合作专场
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
