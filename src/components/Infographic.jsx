import React from 'react'
import { motion } from 'framer-motion'

export default function Infographic() {
  const bars = [
    {label: 'SEO', value: 90},
    {label: 'Content', value: 78},
    {label: 'SMM', value: 66},
  ]

  return (
    <div className="glass p-6 rounded-2xl">
      <h4 className="text-white font-semibold">Capabilities</h4>
      <div className="mt-4 space-y-3">
        {bars.map(b => (
          <div key={b.label}>
            <div className="flex justify-between text-xs text-white/80"><span>{b.label}</span><span>{b.value}%</span></div>
            <div className="w-full bg-white/6 h-2 rounded mt-2">
              <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.value}%` }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="h-2 rounded bg-accent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
