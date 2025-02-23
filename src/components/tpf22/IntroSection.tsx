'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

export function IntroSection() {
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
        <div className="mt-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-2 text-center"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              技术播客月
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-700 dark:text-slate-300">
              汇聚中国技术播客，探索创新与思考的声音
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-4 flex flex-wrap justify-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-400"
          >
            <div className="prose prose-lg prose-slate dark:prose-invert mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 leading-relaxed"
              >
                自 19
                年新冠肺炎席卷全球以来，绝大部分的技术类活动悉数从线下转战到了线上。与此同时，随着声音硬件的普及，以及播客本身
                <span className="text-purple-500 dark:text-purple-400">
                  相对操作的便捷性，且能与听众之间建立更紧密、持续、真实的联系，进行更有温度的故事表达和传递
                </span>
                ，这种内容形式也吸引更多技术圈的从业者和企业品牌主们加入声音内容生产的阵营。
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="leading-relaxed"
              >
                然而，技术圈的声音播主们仍旧感到受众少、破圈难，甚至很多技术圈的朋友可能还没有听说过播客。在「开源面对面」播客的微信嘉宾群的一次讨论中，大家谈及国内技术类播客节目的现状和困境，一番头脑风暴后，便提议可通过彼此间的联动，来做一次普及推广，于是便有了本次「技术播客月」的共建活动。本次播客月的
                <span className="text-purple-500 dark:text-purple-400">
                  最大特色就是「共建」
                </span>
                ！于本次活动而言，每一位个人、组织（社区、公司等）都是共建者，提供了媒体宣传、直播推流、海报设计、周边礼品等企业/组织。
                <span className="text-purple-500 dark:text-purple-400">
                  让我们以开源共建的名义，一起为这些个人、组织点赞
                </span>
                ！
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}
