import { motion } from 'framer-motion'

type SectionTitleProps = {
  children: React.ReactNode
}

export const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl"
    >
      {children}
    </motion.h2>
  )
}
