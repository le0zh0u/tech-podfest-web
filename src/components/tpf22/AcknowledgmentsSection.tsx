'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

export function AcknowledgmentsSection() {
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
            特别感谢共建个体
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300"
          >
            <p className="mb-6">
              本次活动的顺利发起，得益于以下朋友的精彩创意，感谢每一位极参与会议讨论的朋友：
            </p>
            <p className="text-purple-500 dark:text-purple-400">
              Mikey、姜宁、顾钧、Miya、苏锐、小马哥、Rick
              、庄表伟、MINGAI、Kang、Kevin、Tison、姬辛宝、杨文、Leozhou、dunyuSong、Hera、古思为、cici、huaming、朱峰、李小明、白宦成、Bobo、老桔、姝琦、ianX、小雅、赵法威、椿杰、刘冉、杨照雨、Cabbage、止戈等。
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}
