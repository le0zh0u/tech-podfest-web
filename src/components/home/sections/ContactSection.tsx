'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ContactSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px 0px' })

  const socialLinks = [
    {
      name: 'X (Twitter)',
      href: 'https://twitter.com/techpodfest',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: '即刻',
      href: 'https://web.okjike.com/u/techpodfest',
      icon: (
        <Image
          src="/images/okjike.png"
          alt="即刻"
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      ),
    },
    {
      name: 'Email',
      href: 'mailto:contact@techpodfest.com',
      label: 'contact@techpodfest.com',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
    },
  ]

  return (
    <div className="relative py-20" ref={sectionRef}>
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-l from-blue-500/10 to-cyan-500/10 blur-[80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 px-4 py-1.5">
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Get in Touch
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl bg-gradient-to-r from-gray-900 via-purple-800 to-blue-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-purple-100 dark:to-blue-200 sm:text-5xl md:text-6xl">
            Connect With Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Follow us on social media, scan our WeChat QR code, or drop us an
            email. We&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* 左侧: 微信二维码 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative">
                <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-md"></div>
                <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-xl dark:bg-slate-800">
                  <div className="absolute -right-6 -top-6 h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-md"></div>
                  <div className="absolute -bottom-6 -left-6 h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-30 blur-md"></div>

                  <div className="relative">
                    <div className="mb-4 text-center">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        WeChat Official Account
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Scan with WeChat app
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src="/images/wechat-qr.png"
                        alt="WeChat Official Account"
                        width={240}
                        height={240}
                        className="rounded-xl transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右侧: 社交媒体和邮箱 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-6 rounded-2xl bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:bg-slate-800/50">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Follow Our Updates
                </h3>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700/50"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 text-purple-600 group-hover:from-purple-500/20 group-hover:to-blue-500/20 dark:text-purple-400">
                          {link.icon}
                        </div>
                        <div>
                          <div className="font-medium text-slate-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                            {link.name}
                          </div>
                          {link.label && (
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                              {link.label}
                            </div>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 p-6 shadow-md backdrop-blur-sm dark:from-purple-500/10 dark:to-blue-500/10"
              >
                <p className="text-center text-lg text-slate-700 dark:text-slate-300">
                  Want to join our festival or sponsor us?{' '}
                  <span className="mt-2 block font-bold text-purple-600 dark:text-purple-400">
                    We&apos;d love to collaborate!
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
