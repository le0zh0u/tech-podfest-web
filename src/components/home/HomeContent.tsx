'use client'

import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import { WhatSection } from './sections/WhatSection'
import { WhySection } from './sections/WhySection'
import { WhoSection } from './sections/WhoSection'
import { HowSection } from './sections/HowSection'
import { ContactSection } from './sections/ContactSection'

const HomeContent = () => {
  return (
    <Container className="py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-32"
      >
        <WhatSection />
        <WhySection />
        <WhoSection />
        <HowSection />
        <ContactSection />
      </motion.section>
    </Container>
  )
}

export default HomeContent
