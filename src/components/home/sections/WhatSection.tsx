'use client'

import { motion } from 'framer-motion'
import { LightBulbIcon } from '../ui/LightBulbIcon'

export const WhatSection = () => {
  return (
    <div className="relative">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
      >
        What&apos;s Tech PodFest
      </motion.h2>

      <div className="mt-8 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/90 to-purple-50/90 p-6 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-800/90 sm:rounded-3xl sm:p-12"
        >
          {/* 装饰性背景 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 -z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute left-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl sm:h-64 sm:w-64"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl sm:h-64 sm:w-64"
            />
          </motion.div>

          {/* 图标和内容 */}
          <div className="relative">
            <div className="mb-6 flex justify-center sm:mb-8">
              <div className="rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 p-3 dark:from-blue-500/20 dark:to-indigo-500/20 sm:p-4">
                <LightBulbIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 sm:h-8 sm:w-8" />
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8">
              <div className="space-y-3 text-center sm:space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-2xl font-medium leading-relaxed tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl"
                >
                  Tech PodFest is home to{' '}
                  <span className="relative whitespace-nowrap">
                    <span className="relative">more podcasts than ever</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 418 42"
                      className="absolute left-0 top-full h-[0.4em] w-full fill-blue-400/40 dark:fill-blue-500/40"
                      preserveAspectRatio="none"
                    >
                      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                    </svg>
                  </span>
                  ,
                  <br className="hidden sm:block" />
                  <span className="inline-block sm:mt-2">
                    but the people making them seldom cross paths.
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl font-medium leading-relaxed tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl md:text-4xl"
                >
                  We gather everyone under one roof
                  <br className="hidden sm:block" />
                  <span className="inline-block sm:mt-2">
                    to{' '}
                    <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text font-bold text-transparent">
                      celebrate all that we have achieved
                    </span>
                    .
                  </span>
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
