'use client'

import { Hero25 } from '@/components/tpf25/Hero25'
import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { Contact } from '@/components/tpf25/Contact'

export default function TPF25() {
  return (
    <div className="relative min-h-screen bg-zinc-50 text-slate-950 dark:bg-zinc-900">
      <AuroraBackground>
        <main className="flex-1 space-y-32">
          <Hero25 />
          <div className="py-32">
            <Contact />
          </div>
        </main>
      </AuroraBackground>
    </div>
  )
}
