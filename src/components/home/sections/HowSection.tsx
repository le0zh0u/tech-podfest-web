'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SectionTitle } from '../ui/SectionTitle'

export const HowSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px 0px' })

  const mainSteps = [
    {
      title: 'Join Events:',
      description:
        'Attend virtual or in-person sessions, workshops, and keynote speeches.',
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
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
          <line x1="16" x2="16" y1="2" y2="6"></line>
          <line x1="8" x2="8" y1="2" y2="6"></line>
          <line x1="3" x2="21" y1="10" y2="10"></line>
          <path d="M8 14h.01"></path>
          <path d="M12 14h.01"></path>
          <path d="M16 14h.01"></path>
          <path d="M8 18h.01"></path>
          <path d="M12 18h.01"></path>
          <path d="M16 18h.01"></path>
        </svg>
      ),
    },
    {
      title: 'Engage with Peers:',
      description:
        'Connect on our forums and social media platforms to start conversations.',
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
          <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
          <line x1="6" x2="14" y1="15" y2="15"></line>
        </svg>
      ),
    },
    {
      title: 'Collaborate and Share:',
      description:
        'Participate in hackathons, pitch sessions, and collaborative projects.',
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
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
        </svg>
      ),
    },
    {
      title: 'Stay Updated:',
      description:
        'Subscribe to our WeChat official account for the latest news, event schedules, and exclusive content.',
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
          <path d="M5 3a2 2 0 0 0-2 2"></path>
          <path d="M19 3a2 2 0 0 1 2 2"></path>
          <path d="M21 19a2 2 0 0 1-2 2"></path>
          <path d="M5 21a2 2 0 0 1-2-2"></path>
          <path d="M9 3h1"></path>
          <path d="M9 21h1"></path>
          <path d="M14 3h1"></path>
          <path d="M14 21h1"></path>
          <path d="M3 9v1"></path>
          <path d="M21 9v1"></path>
          <path d="M3 14v1"></path>
          <path d="M21 14v1"></path>
          <line x1="7" x2="15" y1="13" y2="13"></line>
          <line x1="7" x2="17" y1="8" y2="8"></line>
          <line x1="7" x2="13" y1="18" y2="18"></line>
        </svg>
      ),
    },
  ]

  const additionalWays = [
    {
      title: 'Become a Creator:',
      description: 'Launch your own tech podcast and join our growing network.',
      note: "If you're a Tech Podcast Host, get in touch!",
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
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" x2="12" y1="19" y2="22"></line>
        </svg>
      ),
    },
    {
      title: 'Listen & Learn:',
      description:
        'Discover and subscribe to podcasts participating in Tech PodFest.',
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
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
    },
    {
      title: 'Join the Conversation:',
      description:
        'Follow us on social media and engage with the #TechPodFest community.',
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
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
  ]

  return (
    <div className="relative py-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-1/4 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-[80px]" />
        <div className="absolute bottom-1/4 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-l from-purple-500/10 to-blue-500/10 blur-[80px]" />
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
              Get Started
            </span>
          </div>
          <h2 className="mx-auto mt-4 max-w-3xl bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:via-cyan-100 dark:to-blue-200 sm:text-5xl md:text-6xl">
            How to Participate
          </h2>
        </motion.div>

        <div className="mt-16 space-y-20">
          {/* 主要步骤 */}
          <div className="relative">
            <div className="absolute left-[28px] top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500/20 via-blue-500/20 to-purple-500/20 md:left-1/2 md:-ml-0.5">
              <div className="h-full w-full rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-20"></div>
            </div>

            <div className="space-y-12">
              {mainSteps.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-center">
                    <div className="absolute left-0 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg dark:bg-slate-800 md:left-1/2 md:-ml-7">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                        {item.icon}
                      </div>
                    </div>

                    <div className="ml-20 md:ml-0 md:w-1/2 md:pr-10 md:text-right">
                      {index % 2 === 0 ? (
                        <div className="rounded-lg bg-white/70 p-6 shadow-md backdrop-blur-sm dark:bg-slate-800/50 md:ml-auto md:mr-8">
                          <h3 className="flex items-center text-xl font-bold text-slate-900 dark:text-white md:justify-end">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="ml-20 md:ml-0 md:w-1/2 md:pl-10 md:text-left">
                      {index % 2 === 1 ? (
                        <div className="rounded-lg bg-white/70 p-6 shadow-md backdrop-blur-sm dark:bg-slate-800/50 md:ml-8 md:mr-auto">
                          <h3 className="flex items-center text-xl font-bold text-slate-900 dark:text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 额外参与方式 */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white"
            >
              Additional Ways to Engage
            </motion.h3>

            <div className="grid gap-8 md:grid-cols-3">
              {additionalWays.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/50 p-6 shadow-md backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800/50"
                >
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full" />

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  {item.note && (
                    <div className="mt-4 flex items-start gap-2 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-3 dark:from-cyan-900/20 dark:to-blue-900/20">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5 flex-none text-cyan-500"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
                      <p className="text-sm text-cyan-700 dark:text-cyan-400">
                        {item.note}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Get Involved Today */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 p-0.5 shadow-lg backdrop-blur-sm dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10"
          >
            <div className="relative rounded-[14px] bg-white/80 px-8 py-10 backdrop-blur-sm dark:bg-slate-900/80">
              <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

              <div className="space-y-8">
                <div className="text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
                  >
                    Get Involved Today!
                  </motion.h3>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto max-w-3xl space-y-6"
                >
                  <p className="text-center text-xl leading-relaxed text-slate-700 dark:text-slate-300">
                    Be a part of Tech PodFest and join a global movement
                    that&apos;s shaping the future of technology and
                    entrepreneurship. Whether you&apos;re looking to learn,
                    network, or contribute, there&apos;s a place for you at Tech
                    PodFest.
                  </p>

                  <div className="flex justify-center">
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-slate-700" />
                  </div>

                  <p className="text-center text-lg font-medium italic text-slate-600 dark:text-slate-400">
                    Embark on a journey of discovery and innovation.{' '}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text font-bold text-transparent">
                      Together, we&apos;re building the future.
                    </span>
                  </p>

                  <div className="mt-8 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-medium text-white shadow-lg shadow-cyan-500/25 transition-shadow hover:shadow-cyan-500/40"
                    >
                      Start Your Journey
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
