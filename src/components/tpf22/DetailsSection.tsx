'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function DetailsSection() {
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
            className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
          >
            活动细节
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-6 w-6 items-center justify-center text-purple-500 dark:text-purple-400">
                ■
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-slate-900 dark:text-white">
                  时间：
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  2022 年7月4日 - 7月15日
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="flex h-6 w-6 items-center justify-center text-purple-500 dark:text-purple-400">
                ■
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-slate-900 dark:text-white">
                  直播平台：
                </span>
                <span className="text-slate-700 dark:text-slate-300">
                  活动行、思否、CSDN + 参与播客各自视频号及b站
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                <Image
                  src="/images/tpf22/detail-social.png"
                  alt="社交平台"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}
