'use client'

import { Container } from '@/components/Container'
import { HomeHeroSlider } from '@/components/ui/home-hero-slider'

export function HomeHero() {
  return (
    <Container className="relative pt-20">
      <HomeHeroSlider />
    </Container>
  )
}
