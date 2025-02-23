'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function PosterSection() {
  return (
    <Container className="relative">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mx-auto max-w-6xl"
      >
        <div className="rounded-2xl bg-white/50 p-8 dark:bg-slate-800/50 sm:p-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
          >
            具体直播主题及时间安排
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full overflow-hidden rounded-xl">
              <Image
                src="/images/tpf22/poster.png"
                alt="技术播客月节目单"
                width={1200}
                height={900}
                className="w-full"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}
