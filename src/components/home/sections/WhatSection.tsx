'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// 定义关键特点
const keyFeatures = [
  {
    title: 'Tech & Podcasting Fusion',
    description:
      'Explore AI-driven narrative tools, spatial audio experiments, and decentralized content platforms.',
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
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
  },
  {
    title: 'Creative Innovation',
    description:
      'A catalyst for networking, learning, and igniting passion for technological advancement across the globe.',
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
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </svg>
    ),
  },
  {
    title: 'Community Collaboration',
    description:
      'Hackathons meet storytelling labs, powered by a community obsessed with what&apos;s next in audio technology.',
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export const WhatSection = () => {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: false, margin: '-100px 0px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="relative py-10 sm:py-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-b from-blue-500/5 to-cyan-500/5 blur-3xl" />
      </div>

      {/* 标题部分 */}
      <div ref={titleRef} className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="inline-block rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 px-4 py-1.5"
        >
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Tech PodFest
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-blue-100 dark:to-indigo-200 sm:text-5xl md:text-6xl"
        >
          What&apos;s Tech PodFest?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300"
        >
          An annual gathering for pioneers blending cutting-edge technology with
          podcasting&apos;s creative frontier.
        </motion.p>
      </div>

      {/* 主要内容 */}
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* 左侧内容 - 卡片列表 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-slate-50 p-6 shadow-md transition-all hover:shadow-lg dark:from-slate-800 dark:to-slate-900/90"
              >
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-900/20 dark:to-indigo-900/20"
            >
              <p className="text-xl font-medium leading-relaxed text-slate-900 dark:text-white">
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
                {', '}
                <span className="italic">
                  but the people making them seldom cross paths.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* 右侧内容 - 图片展示 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative hidden lg:block"
          >
            <div className="h-full space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <Image
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80"
                  alt="Tech conference with people networking"
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                  <Image
                    src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=500&q=80"
                    alt="Podcast recording setup"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                  <Image
                    src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=500&q=80"
                    alt="Microphone close-up"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl" />
          </motion.div>
        </div>

        {/* 底部内容 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <p className="mb-6 text-center text-xl font-medium leading-relaxed text-slate-900 dark:text-white">
            We gather everyone under one roof to{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text font-bold text-transparent">
              celebrate all that we have achieved
            </span>{' '}
            in the world of tech podcasting.
          </p>

          <div className="rounded-xl bg-white/50 p-6 shadow-lg backdrop-blur-sm dark:bg-slate-800/50">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              Explore AI-driven narrative tools, spatial audio experiments,
              decentralized content platforms, and the ethics of synthetic
              voices. Think hackathons meet storytelling labs, powered by a
              community obsessed with what&apos;s next. Tech PodFest serves as a
              catalyst for networking, learning, and igniting the passion for
              technological advancement across the globe.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
