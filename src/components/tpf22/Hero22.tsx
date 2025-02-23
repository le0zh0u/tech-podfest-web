'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function Hero22() {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative aspect-[16/9] w-full"
      >
        <Image
          src="/images/tpf22/hero.png"
          alt="技术播客月"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" /> */}
      </motion.div>
    </div>
  )
}
