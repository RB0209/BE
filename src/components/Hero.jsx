import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <section className="pt-28 pb-12">
      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.img src={logo} alt="Be Eternal" className="w-20 mb-6" initial={{opacity:0, y:-8}} animate={{opacity:1, y:0}} />
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Elevate Your Digital Presence</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-4 text-white/80 max-w-xl">Unlock the full potential of your online platform with our expert digital services. Dummy copy — replace later.</motion.p>

          <div className="mt-6 flex gap-3">
            <a className="inline-block px-5 py-3 rounded-2xl glass border border-white/8 hover:scale-105 transition font-semibold" href="#services">Explore services</a>
            <a className="inline-block px-5 py-3 rounded-2xl bg-accent text-black font-semibold hover:brightness-95 transition" href="#contact">Get a quote</a>
          </div>
        </div>

        <motion.div initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="glass rounded-2xl p-6">
          <div className="hero-gradient rounded-xl p-6 flex items-center justify-center" style={{minHeight:220}}>
            <div className="text-center">
              <div className="text-6xl font-bold text-white/90">↑</div>
              <div className="mt-2 text-white/80">Growth & analytics</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
