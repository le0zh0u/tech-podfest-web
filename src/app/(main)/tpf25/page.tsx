'use client'

import { Hero25 } from '@/components/tpf25/Hero25'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import React from 'react'
import { Header } from '@/components/Header'
import { AuroraBackground } from '@/components/ui/aurora-background'

export default function TPF25() {
  return (
    <AuroraBackground>
      {/* <Header /> */}
      <main>
        <Hero25 />
      </main>
    </AuroraBackground>
  )
}
