'use client'
import { Container } from '@/components/Container'
import logoImage from '@/images/logos/logo.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Link href="/" aria-label="Home">
            <Image
              src={logoImage}
              className="size-32"
              width={1000}
              height={1000}
              alt="Tech Podfest Logo"
            />
          </Link>
        </motion.div>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} TechPodFest All rights
          reserved.
        </p>
      </Container>
    </footer>
  )
}
