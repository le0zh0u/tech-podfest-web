'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '../ui/SectionTitle'

export const WhySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px 0px' })

  const whyPoints = [
    {
      title: 'Stay Informed',
      description:
        'Keep up with the latest trends, technologies, and industry insights.',
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
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
    {
      title: 'Network Globally',
      description:
        'Connect with peers, mentors, and leaders from around the world.',
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
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
    },
    {
      title: 'Foster Innovation',
      description:
        'Collaborate on ideas that can lead to the next big breakthrough.',
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
          <path d="M9.663 17h4.673M12 12v5m-3-8c0-3 3-4 3-4s3 1 3 4c0 1.5-.5 2-1 3-1 1-1 2-1 2h-4s0-1-1-2c-.5-1-1-1.5-1-3z"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      ),
    },
    {
      title: 'Promote Entrepreneurship',
      description:
        'Equip aspiring entrepreneurs with the knowledge and resources to turn ideas into successful ventures.',
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
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
          <path d="M7 21h10"></path>
          <path d="M12 3v18"></path>
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
        </svg>
      ),
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

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

  return (
    <div className="relative py-16">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-l from-purple-500/10 to-blue-500/10 blur-[100px]" />
      </div>

      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 px-4 py-1.5">
            <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
              Our Purpose
            </span>
          </div>

          <h2 className="mx-auto mt-4 max-w-3xl bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-cyan-100 dark:to-blue-200 sm:text-5xl md:text-6xl">
            Why Tech PodFest?
          </h2>
        </motion.div>

        <div className="mt-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* 左侧内容 - Diverse Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: '-50px' }}
              className="flex flex-col justify-between space-y-8"
            >
              <div className="rounded-2xl bg-white/50 p-8 shadow-xl backdrop-blur-sm dark:bg-slate-800/50 dark:shadow-slate-800/20">
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                  A Diverse Community
                </h3>
                <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                  In today&apos;s rapidly evolving digital landscape, staying
                  ahead means continuously learning and adapting. Tech PodFest
                  addresses this need by providing accessible opportunities for
                  individuals.
                </p>
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 p-6 dark:from-cyan-900/20 dark:to-blue-900/20">
                  <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                    By bringing together a diverse community, Tech PodFest
                    accelerates personal growth and contributes to the broader
                    advancement of the tech industry.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg dark:from-blue-900/20 dark:to-purple-900/20">
                <blockquote className="relative">
                  <div className="relative z-10">
                    <p className="text-xl italic leading-relaxed text-slate-700 dark:text-slate-300">
                      &ldquo;If you&apos;re driven by curiosity and the desire
                      to make an impact in the world of tech and podcasting,
                      Tech PodFest is your community.&rdquo;
                    </p>
                  </div>
                  <div className="absolute -left-2 -top-2 h-10 w-10 text-4xl text-cyan-300 dark:text-cyan-700">
                    &ldquo;
                  </div>
                </blockquote>
              </div>

              <div className="flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-medium text-white shadow-lg shadow-cyan-500/25 transition-shadow hover:shadow-cyan-500/40"
                >
                  Join Our Community
                </motion.button>
              </div>
            </motion.div>

            {/* 右侧内容 - 4个重点 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {whyPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative overflow-hidden rounded-xl bg-white/70 p-6 shadow-md transition-all hover:shadow-lg dark:bg-slate-800/50"
                >
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full" />

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
