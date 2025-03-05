'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Hero22() {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.2 })

  return (
    <section ref={heroRef} className="py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          <div className="relative bg-slate-100 dark:bg-slate-800">
            <div className="flex justify-center">
              <Image
                src="/images/tpf22/hero.png"
                alt="技术播客月"
                width={1200}
                height={675}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
