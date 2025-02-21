'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function Contact() {
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
        className="mx-auto max-w-5xl pb-16"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
              Get in Touch
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-slate-700/90 dark:text-slate-300/90">
              Stay tuned for stealth drops and early-access teasers as we
              finalize our lineup. Want a front-row seat? Get in touch for a
              chance to shape the event&apos;s direction. 🔒✨ 2025 can&apos;t
              come soon enough.
            </p>
          </div>

          {/* Right Column - QR Code */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-80">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-20 blur-lg" />
              <div className="relative overflow-hidden rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
                <Image
                  src="/images/mingai-qr.png"
                  alt="WeChat QR Code"
                  width={240}
                  height={240}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Container>
  )
}
