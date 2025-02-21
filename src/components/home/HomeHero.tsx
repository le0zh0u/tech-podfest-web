'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { Carousel } from '@/components/home/Carousel'

export function HomeHero() {
  const heroContent = [
    {
      title: (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Build. Create. Disrupt
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Your Voice in the Audio Revolution
          </p>
        </div>
      ),
      image: '/path/to/image1.jpg',
    },
    {
      title: (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Tech PodFest
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            Where Innovation Hits Play
          </p>
        </div>
      ),
      image: '/path/to/image2.jpg',
    },
    {
      title: (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Code the Soundwaves
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl">
            A Playground for Podcast Innovators
          </p>
        </div>
      ),
      image: '/path/to/image3.jpg',
    },
  ]

  return (
    <Container className="relative pt-20">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-6xl lg:px-8"
      >
        <Carousel items={heroContent} />
      </motion.div>
    </Container>
  )
}
