'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'

const communities = [
  {
    name: 'freeCodeCamp',
    contribution: '6 个背包',
  },
  {
    name: 'OpenTEKr',
    contribution: '原创拉风手袋 5 个、夜光手环一打（12 个）',
  },
  {
    name: 'KubeSphere',
    contribution: '马克杯、黑色 T 恤、白色 T 恤、鼠标垫各 5 个，贴纸若干',
  },
  {
    name: '思否',
    contribution: '思否猫 10 个、思否定制 T 恤 20 件',
  },
  {
    name: 'StreamNative',
    contribution: 'StreamNative 周边礼盒 5 件',
  },
  {
    name: '极狐(GitLab)',
    contribution: '极狐手办、钥匙扣各 10 件',
  },
  {
    name: 'Nebula Graph',
    contribution: '杯子、帆布袋、鼠标垫套装 T 恤各五件',
  },
  {
    name: 'OpenMLDB',
    contribution: 'T恤 5 个、鸭舌帽 5 个、公仔 10个',
  },
  {
    name: 'ALC Beijing',
    contribution: '纪念币 10 枚、便签纸 10 份',
  },
  {
    name: 'JuiceFS',
    contribution: '搪瓷杯每款 6 个（共两款）',
  },
  {
    name: '开源社',
    contribution: '开源年会周边 T 恤 10 件',
  },
  {
    name: '小宇宙',
    contribution: '10份小宇宙播客T恤',
  },
  {
    name: '少数派',
    contribution: '麦金獭 35W 氮化镓充电器 2 个、少数派会员 3 个',
  },
  {
    name: 'RTC开发者社区',
    contribution: '体恤 10件',
  },
]

export function CommunitiesSection() {
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
            感谢合作社区
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {communities.map((community, index) => (
              <motion.div
                key={community.name}
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
                    {community.name}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300">
                    ：{community.contribution}
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
