'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export const HowSection = () => {
  const mainSteps = [
    {
      number: '1.',
      title: 'Join Events:',
      description:
        'Attend virtual or in-person sessions, workshops, and keynote speeches.',
    },
    {
      number: '2.',
      title: 'Engage with Peers:',
      description:
        'Connect on our forums and social media platforms to start conversations.',
    },
    {
      number: '3.',
      title: 'Collaborate and Share:',
      description:
        'Participate in hackathons, pitch sessions, and collaborative projects.',
    },
    {
      number: '4.',
      title: 'Stay Updated:',
      description:
        'Subscribe to our WeChat official account for the latest news, event schedules, and exclusive content.',
    },
  ]

  const additionalWays = [
    {
      title: 'Become a Creator:',
      description: 'Launch your own tech podcast and join our growing network.',
      note: "If you're a Tech Podcast Host, get in touch!",
    },
    {
      title: 'Listen & Learn:',
      description:
        'Discover and subscribe to podcasts participating in Tech PodFest.',
    },
    {
      title: 'Join the Conversation:',
      description:
        'Follow us on social media and engage with the #TechPodFest community.',
    },
  ]

  return (
    <div className="relative">
      <SectionTitle>How</SectionTitle>

      <div className="mt-12 space-y-16">
        {/* 主要步骤 */}
        <div className="space-y-6">
          {mainSteps.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex gap-4"
            >
              <span className="text-xl font-bold text-blue-500">
                {item.number}
              </span>
              <div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </span>{' '}
                <span className="text-lg text-slate-600 dark:text-slate-300">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 额外参与方式 */}
        <div className="grid gap-8 md:grid-cols-3">
          {additionalWays.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              {item.note && (
                <div className="mt-3 flex items-start gap-2 rounded-lg border-l-2 border-blue-500 bg-blue-50/50 px-3 py-2 dark:bg-blue-500/5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 flex-none text-blue-500"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    {item.note}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Get Involved Today */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 p-0.5 shadow-lg dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
        >
          <div className="relative rounded-[14px] bg-white/80 px-8 py-10 backdrop-blur-sm dark:bg-slate-900/80">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
