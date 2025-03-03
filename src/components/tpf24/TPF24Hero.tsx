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
    <section ref={heroRef} className="pb-12 pt-24 sm:pb-20 sm:pt-32 md:pt-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          {/* 海报图片背景 */}
          <div className="relative w-full overflow-hidden">
            {/* 在移动端使用更短的高宽比，在桌面端使用更宽的高宽比 */}
            <div className="aspect-[3/4] sm:aspect-[4/3] md:aspect-[21/9]">
              {/* 背景图片 */}
              <Image
                src="/images/tpf24/full-poster.png"
                alt="Tech PodFest 2024 × VisionOS 海报"
                fill
                className="object-cover object-center"
                priority
              />

              {/* 半透明渐变叠加层，确保文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 via-purple-500/60 to-indigo-500/70"></div>

              {/* 装饰元素 - 在大屏幕上更明显 */}
              <div className="absolute -left-10 top-1/3 h-20 w-20 rounded-full bg-white/10 blur-xl sm:-left-20 sm:h-32 sm:w-32 md:h-40 md:w-40"></div>
              <div className="absolute -right-10 bottom-1/3 h-20 w-20 rounded-full bg-white/10 blur-xl sm:-right-20 sm:h-32 sm:w-32 md:h-40 md:w-40"></div>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center text-white sm:p-6">
              {/* 标题 - 在不同屏幕尺寸上调整大小 */}
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
                Tech PodFest 2024 X<br className="sm:hidden" /> Let&apos;s
                VisionOS 创作者大会
              </h1>

              {/* 描述文本 - 调整间距和字体大小 */}
              <div className="mt-2 max-w-2xl text-white/90 sm:mt-4">
                <p className="text-xs sm:text-sm md:text-base">
                  2024年，Tech PodFest 与全球首届 visionOS
                  创作者大会深度合作，携手一众技术播客伙伴，共同推出 XR
                  专题系列音频内容，一同为大家带来 visionOS 背后的灵感之旅。
                </p>
                <p className="mt-1 text-xs sm:mt-2 sm:text-sm md:text-base">
                  无论你是开发者、创业者、设计师还是产品经理，都将收获对
                  visionOS 产品、设计、开发的理解和经验，探索 visionOS
                  功能定义、交互设计、体验交付的实践可能。
                </p>
              </div>
            </div>
          </div>

          {/* 底部信息栏 - 仅保留左侧内容并居中 */}
          <div className="flex justify-center bg-white p-3 dark:bg-slate-800 sm:p-4">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3 w-3 text-blue-600 dark:text-blue-400 sm:h-4 sm:w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300 sm:text-sm">
                Tech PodFest × visionOS 合作专场
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
