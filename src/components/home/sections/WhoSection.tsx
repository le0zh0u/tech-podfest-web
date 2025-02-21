'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'

export const WhoSection = () => {
  const attendees = [
    {
      title: 'Tech Enthusiasts:',
      description:
        'Anyone passionate about technology, from beginners to experts.',
    },
    {
      title: 'Innovators and Creatives:',
      description:
        'Individuals eager to explore new ideas and creative solutions.',
    },
    {
      title: 'Entrepreneurs and Startups:',
      description: 'Those looking to launch, grow, or scale their businesses.',
    },
    {
      title: 'Professionals and Industry Leaders:',
      description:
        'Experts aiming to share insights and discover fresh perspectives.',
    },
    {
      title: 'Students and Educators:',
      description:
        'Learners and teachers seeking to expand their knowledge and networks.',
    },
  ]

  return (
    <div className="relative">
      <SectionTitle>Who</SectionTitle>

      <div className="mt-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {attendees.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative space-y-4 pl-6"
            >
              {/* 长条标记 */}
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-blue-500/20">
                <div className="h-8 w-full rounded-full bg-blue-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
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
