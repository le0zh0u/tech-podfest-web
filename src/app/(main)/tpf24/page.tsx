'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { TPF24Hero } from '@/components/tpf24/TPF24Hero'
import { TPF24Banner } from '@/components/tpf24/TPF24Banner'
import { TPF24Sections } from '@/components/tpf24/TPF24Sections'

export default function TPF24Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      {/* 背景装饰 */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-purple-500/10 to-pink-500/10 blur-[120px]" />
      </div>

      {/* 第一部分：Hero 介绍文案 */}
      <TPF24Hero />

      {/* 第二部分：长图展示 */}
      <TPF24Banner />

      {/* 第三部分：5个活动相关小节 */}
      <TPF24Sections />
    </div>
  )
}
