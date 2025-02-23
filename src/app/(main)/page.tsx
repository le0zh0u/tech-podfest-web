'use client'

import { HomeHero } from '@/components/home/HomeHero'
import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { WhatSection } from '@/components/home/sections/WhatSection'
import { WhySection } from '@/components/home/sections/WhySection'
import { WhoSection } from '@/components/home/sections/WhoSection'
import { HowSection } from '@/components/home/sections/HowSection'
import { ContactSection } from '@/components/home/sections/ContactSection'

export default function Home() {
  return (
    <div className="relative">
      <HomeHero />
      <Container className="mt-64">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-48"
        >
          <WhatSection />
          <WhySection />
          <WhoSection />
          <HowSection />
          <ContactSection />
        </motion.section>
      </Container>
    </div>
  )
}
