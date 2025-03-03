'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function TPF24Banner() {
  const bannerRef = useRef(null)
  const isInView = useInView(bannerRef, { once: true, amount: 0.2 })

  return (
    <section ref={bannerRef} className="py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          {/* 海报图片 - 完整显示 */}
          <div className="relative bg-slate-100 dark:bg-slate-800">
            <div className="flex justify-center">
              <Image
                src="/images/tpf24/full-poster.png"
                alt="Tech PodFest 2024 × visionOS 创作者大会海报"
                width={1200}
                height={675}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
