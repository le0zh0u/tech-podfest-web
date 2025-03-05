'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '../ui/SectionTitle'
import { scrollToContact } from '@/utils/scroll'

export const WhoSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px 0px' })

  const attendees = [
    {
      title: 'Tech Enthusiasts:',
      description:
        'Anyone passionate about technology, from beginners to experts.',
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
          <rect width="20" height="14" x="2" y="3" rx="2"></rect>
          <line x1="8" x2="16" y1="21" y2="21"></line>
          <line x1="12" x2="12" y1="17" y2="21"></line>
        </svg>
      ),
    },
    {
      title: 'Innovators and Creatives:',
      description:
        'Individuals eager to explore new ideas and creative solutions.',
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
          <path d="M12 2v1"></path>
          <path d="M12 21v1"></path>
          <path d="M4.22 4.22l.77.77"></path>
          <path d="M19.01 19.01l.77.77"></path>
          <path d="M2 12h1"></path>
          <path d="M21 12h1"></path>
          <path d="M4.22 19.78l.77-.77"></path>
          <path d="M19.01 4.99l.77-.77"></path>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      ),
    },
    {
      title: 'Entrepreneurs and Startups:',
      description: 'Those looking to launch, grow, or scale their businesses.',
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
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ),
    },
    {
      title: 'Professionals and Industry Leaders:',
      description:
        'Experts aiming to share insights and discover fresh perspectives.',
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
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: 'Students and Educators:',
      description:
        'Learners and teachers seeking to expand their knowledge and networks.',
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
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
  ]

  return (
    <div className="relative py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-l from-cyan-500/10 to-blue-500/10 blur-[80px]" />
      </div>

      <div ref={sectionRef} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-block rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 px-4 py-1.5">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Our Community
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-blue-100 dark:to-purple-200 sm:text-5xl md:text-6xl">
            Who Attends Tech PodFest?
          </h2>
        </motion.div>

        <div className="mt-16">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {attendees.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white/50 p-6 shadow-md backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800/50 dark:shadow-slate-800/10"
              >
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 p-8 shadow-lg backdrop-blur-sm dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <p className="text-center text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                If you&apos;re driven by curiosity and the desire to make an
                impact in the world of tech and entrepreneurship,{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  Tech PodFest is your community
                </span>
                .
              </p>
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40"
              >
                Connect with us
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20"
        >
          <p className="text-center text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
            If you&apos;re driven by curiosity and the desire to make an impact
            in the world of tech and entrepreneurship,{' '}
            <span className="font-bold text-cyan-600 dark:text-cyan-400">
              Tech PodFest is your community
            </span>
            .
          </p>
        </motion.div>
      </div>
    </div>
  )
}
