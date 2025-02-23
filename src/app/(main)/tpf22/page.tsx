'use client'

import { Hero22 } from '@/components/tpf22/Hero22'
import { IntroSection } from '@/components/tpf22/IntroSection'
import { DetailsSection } from '@/components/tpf22/DetailsSection'
import { PosterSection } from '@/components/tpf22/PosterSection'
import { AcknowledgmentsSection } from '@/components/tpf22/AcknowledgmentsSection'
import { PartnersSection } from '@/components/tpf22/PartnersSection'
import { CommunitiesSection } from '@/components/tpf22/CommunitiesSection'
import { CollectionSection } from '@/components/tpf22/CollectionSection'
import React from 'react'

export default function TPF22() {
  return (
    <div className="relative min-h-screen">
      <Hero22 />
      <div className="relative bg-zinc-50 text-slate-950 dark:bg-zinc-900">
        <div className="bg-grid-slate-200/20 dark:bg-grid-slate-700/20 absolute inset-0 bg-[size:40px_40px]" />
        <main className="relative space-y-16 py-16">
          <IntroSection />
          <DetailsSection />
          <PosterSection />
          <AcknowledgmentsSection />
          <PartnersSection />
          <CommunitiesSection />
          <CollectionSection />
        </main>
      </div>
    </div>
  )
}
