import React from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, short }) {
  return (
    <motion.div
      className="card-tilt glass p-6 rounded-2xl"
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(8,12,30,0.25)' }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{short}</p>
      <div className="mt-4 inline-block text-sm font-medium text-accent">Learn more →</div>
    </motion.div>
  )
}
