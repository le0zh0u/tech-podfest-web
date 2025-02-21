'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '../ui/SectionTitle'

export const ContactSection = () => {
  return (
    <div className="space-y-8">
      <SectionTitle>Follow us</SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center space-y-6"
      >
        <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-800">
          <Image
            src="/images/wechat-qr.png"
            alt="WeChat Official Account"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://twitter.com/techpodfest"
            className="text-lg text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            X (Twitter)
          </Link>
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <Link
            href="https://web.okjike.com/u/techpodfest"
            className="text-lg text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            即刻
          </Link>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-400">
          📮 Contact us:{' '}
          <a
            href="mailto:contact@techpodfest.com"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            contact@techpodfest.com
          </a>
        </p>
      </motion.div>
    </div>
  )
}
