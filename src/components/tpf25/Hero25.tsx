'use client'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero25() {
  return (
    <Container className="relative pt-20">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pb-4"
        >
          <h1 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text font-display text-3xl font-bold leading-8 tracking-tight text-transparent sm:text-5xl">
            Tech PodFest 2025 is coming.
          </h1>
        </motion.div>
        <div className="relative mt-8 space-y-6 font-display text-2xl tracking-normal text-slate-700/90 dark:text-slate-300/90">
          <div className="absolute -left-6 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" />
          <p className="pl-2">
            Please look forward to it, and feel free to{' '}
            <Link
              href="mailto:chunjie@techpodfest.com"
              className="group inline-flex items-center gap-1 font-semibold text-cyan-600 transition-all hover:text-cyan-400 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              <Mail className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              contact us
              <span className="ml-0.5 inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>{' '}
            for any related collaborations.
          </p>
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-20 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
          {[
            ['Speakers', '20+'],
            ['Venue', 'pending'],
            ['Location', 'Shanghai'],
          ].map(([name, value]) => (
            <motion.div
              key={name}
              className="group relative font-display"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-2 top-0 h-full w-[1px] origin-bottom scale-y-0 bg-gradient-to-b from-cyan-500 to-blue-600 transition-transform duration-300 group-hover:scale-y-100" />
              <dt className="text-sm font-medium uppercase tracking-wider text-cyan-600/70 dark:text-cyan-400/70">
                {name}
              </dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200">
                {value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </motion.div>
    </Container>
  )
}
