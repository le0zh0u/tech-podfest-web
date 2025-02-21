'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export const WhySection = () => {
  const whyPoints = [
    {
      title: 'Stay Informed',
      description:
        'Keep up with the latest trends, technologies, and industry insights.',
    },
    {
      title: 'Network Globally',
      description:
        'Connect with peers, mentors, and leaders from around the world.',
    },
    {
      title: 'Foster Innovation',
      description:
        'Collaborate on ideas that can lead to the next big breakthrough.',
    },
    {
      title: 'Promote Entrepreneurship',
      description:
        'Equip aspiring entrepreneurs with the knowledge and resources to turn ideas into successful ventures.',
    },
  ]

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-l from-purple-500/20 to-blue-500/20 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto"
      >
        <SectionTitle>Why Tech PodFest</SectionTitle>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-white/50 p-8 shadow-xl dark:bg-slate-800/50 dark:shadow-slate-800/20"
          >
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-xl text-slate-700 dark:text-slate-300">
                In today&apos;s rapidly evolving digital landscape, staying
                ahead means continuously learning and adapting. Tech PodFest
                addresses this need by providing accessible opportunities for
                individuals to:
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {whyPoints.map((item) => (
                  <div
                    key={item.title}
                    className="relative rounded-xl bg-white/50 p-6 dark:bg-slate-700/50"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-cyan-600 dark:text-cyan-400">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-16 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20"
              >
                <p className="text-center text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
                  If you&apos;re driven by curiosity and the desire to make an
                  impact in the world of tech and entrepreneurship,{' '}
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">
                    Tech PodFest is your community
                  </span>
                  .
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
