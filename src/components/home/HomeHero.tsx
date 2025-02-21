'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { Carousel } from '@/components/home/Carousel'

export function HomeHero() {
  const heroContent = [
    {
      title: 'Build. Create. Disrupt: Your Voice in the Audio Revolution',
      image: '/path/to/image1.jpg', // 请替换为实际图片路径
    },
    {
      title: '🎧 Tech PodFest: Where Innovation Hits Play. 🎧',
      image: '/path/to/image2.jpg',
    },
    {
      title: 'Code the Soundwaves: A Playground for Podcast Innovators',
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
