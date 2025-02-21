'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const LightBulbIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  )
}

const HomeContent = () => {
  const howSteps = [
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
    <Container className="py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-32"
      >
        {/* What's Tech PodFest Section */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl"
          >
            What&apos;s Tech PodFest
          </motion.h2>

          <div className="mt-12 space-y-8">
            {/* 主要介绍 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-orange-50/80 p-8 dark:bg-slate-800/50"
            >
              <div className="absolute left-8 top-8">
                <LightBulbIcon className="h-6 w-6 text-amber-500" />
              </div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-2xl font-medium leading-relaxed text-slate-900 dark:text-slate-100">
                  Tech PodFest is home to more podcasts than ever,
                  <br />
                  but the people making them seldom cross paths.
                </p>
                <p className="mt-4 text-2xl font-medium leading-relaxed text-slate-900 dark:text-slate-100">
                  We gather everyone under one roof
                  <br />
                  to celebrate all that we have achieved.
                </p>
              </div>
            </motion.div>

            {/* 技术特点 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="prose prose-lg dark:prose-invert mx-auto text-slate-700 dark:text-slate-300"
            >
              <p className="text-xl">
                An annual gathering for pioneers blending cutting-edge
                technology with podcasting&apos;s creative frontier. Explore
                AI-driven narrative tools, spatial audio experiments,
                decentralized content platforms, and the ethics of synthetic
                voices. Think hackathons meet storytelling labs, powered by a
                community obsessed with what&apos;s <em>next</em>. Tech PodFest
                serves as a{' '}
                <span className="underline decoration-cyan-500 decoration-2">
                  catalyst
                </span>{' '}
                for networking, learning, and igniting the passion for
                technological advancement across the globe.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why Section */}
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
            <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Why Tech PodFest
            </h2>

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
                    addresses this need by providing accessible opportunities
                    for individuals to:
                  </p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    {[
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
                    ].map((item) => (
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

                  <p className="mt-8 text-center text-lg font-medium text-slate-600 dark:text-slate-400">
                    By bringing together a diverse community, Tech PodFest
                    accelerates personal growth and contributes to the broader
                    advancement of the tech industry.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Who Section */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl"
          >
            Who
          </motion.h2>

          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {[
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
                  description:
                    'Those looking to launch, grow, or scale their businesses.',
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
              ].map((item, index) => (
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
                If you&apos;re driven by curiosity and the desire to make an
                impact in the world of tech and entrepreneurship,{' '}
                <span className="font-bold text-cyan-600 dark:text-cyan-400">
                  Tech PodFest is your community
                </span>
                .
              </p>
            </motion.div>
          </div>
        </div>

        {/* How Section */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl"
          >
            How
          </motion.h2>

          <div className="mt-12 space-y-16">
            {/* 主要步骤 */}
            <div className="space-y-6">
              {howSteps.map((item) => (
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

            {/* Get Involved Today Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 p-0.5 shadow-lg dark:from-slate-800 dark:via-slate-900 dark:to-slate-800"
            >
              {/* 装饰性背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:via-blue-500/20 dark:to-purple-500/20" />

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
                      network, or contribute, there&apos;s a place for you at
                      Tech PodFest.
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

        {/* Contact Section */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl"
          >
            Follow us
          </motion.h2>

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
      </motion.section>
    </Container>
  )
}

export default HomeContent
