'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { ImagesSlider } from '@/components/ui/images-slider'

export function HomeHeroSlider() {
  const images = [
    'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 播客麦克风
    'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 音频录制设备
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 人们讨论（会议）
  ]

  return (
    <ImagesSlider
      className="h-[40rem]"
      images={images}
      overlayClassName="bg-black/30"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        <motion.p className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text py-4 text-center text-xl font-bold text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-6xl">
          Tech PodFest 2024 <br /> Where Innovation Meets Audio
        </motion.p>
        <button className="relative mx-auto mt-4 rounded-full border border-emerald-500/20 bg-emerald-300/10 px-4 py-2 text-center text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-emerald-300/20">
          <span>Join the Festival →</span>
          <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
