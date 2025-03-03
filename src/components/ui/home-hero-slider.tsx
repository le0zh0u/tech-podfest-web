'use client'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { ImagesSlider } from '@/components/ui/images-slider'

export function HomeHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slidesContent = [
    {
      image:
        'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 播客麦克风
      title: 'Tech PodFest',
      subtitle: 'Where Innovation Hits Play',
    },
    {
      image:
        'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 音频录制设备
      title: 'Code the Soundwaves',
      subtitle: 'A Playground for Podcast Innovators',
    },
    {
      image:
        'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // 人们讨论（会议）
      title: 'Build. Create. Disrupt',
      subtitle: 'Your Voice in the Audio Revolution',
    },
  ]

  // 监听ImagesSlider的切换，更新当前索引
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesContent.length)
    }, 5000) // 5秒切换一次，与ImagesSlider的自动播放保持一致

    return () => clearInterval(interval)
  }, [slidesContent.length])

  return (
    <ImagesSlider
      className="h-full w-full"
      images={slidesContent.map((slide) => slide.image)}
      overlayClassName="bg-black/20"
      autoplay={true}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/80 to-transparent p-6"
      >
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <motion.h3
                key={`title-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold text-white drop-shadow-md md:text-2xl"
              >
                {slidesContent[currentIndex].title}
              </motion.h3>
              <motion.p
                key={`subtitle-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm text-white/90 md:text-base"
              >
                {slidesContent[currentIndex].subtitle}
              </motion.p>
            </div>

            <div className="flex space-x-2">
              {slidesContent.map((_, index) => (
                <motion.span
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                  animate={{
                    scale: index === currentIndex ? [1, 1.2, 1] : 1,
                    opacity: index === currentIndex ? 1 : 0.5,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: index === currentIndex ? Infinity : 0,
                    repeatType: 'reverse',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  )
}
