'use client'

import { Container } from '@/components/Container'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export function CollectionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <h2 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                扫码，一键领取所有播客
              </h2>
              <p className="text-xl leading-relaxed text-slate-700/90 dark:text-slate-300/90">
                扫描右侧二维码，即可一键收听本次技术播客月的所有精彩内容。让我们一起探索技术的声音，分享创新的思考。
              </p>
            </motion.div>

            {/* Right Column - QR Code */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-80">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-lg" />
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-lg bg-slate-100 p-4 transition-transform hover:scale-105 dark:bg-slate-800"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                    <span className="rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-slate-900">
                      点击放大
                    </span>
                  </div>
                  <Image
                    src="/images/tpf22/xyz-collection.png"
                    alt="一键领取所有播客"
                    width={300}
                    height={300}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modal for zoomed image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white p-4 dark:bg-slate-800"
            >
              <Image
                src="/images/tpf22/xyz-collection.png"
                alt="一键领取所有播客"
                width={600}
                height={600}
                className="h-auto w-full"
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  )
}
