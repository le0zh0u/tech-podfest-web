'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

const partners = [
  {
    name: '津津乐道播客网络',
    contribution:
      '在旗下所有节目中为本次活动进行口播，活动结束后制作为音频合辑并推送到相关渠道，提供专业的活动策划建议',
  },
  {
    name: 'PROPELLER',
    contribution: '活动策划、渠道打通及活动的落地执行',
  },
  {
    name: '小宇宙',
    contribution: '「技术播客月」活动站内外推广',
  },
  {
    name: '活动行',
    contribution: '活动行「技术播客月」活动专题 Banner 展示',
  },
  {
    name: 'CSDN',
    contribution: '直播支持及频道推荐',
  },
  {
    name: '思否',
    contribution: '专业海报设计、首页 Banner 活动推广、直播渠道',
  },
  {
    name: '开源中国',
    contribution: '站内活动版块的 Banner 推广',
  },
]

export function PartnersSection() {
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
            感谢合作伙伴
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-4"
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-purple-500 dark:text-purple-400">
                  ■
                </div>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {partner.name}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    ：{partner.contribution}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}
