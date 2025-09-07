import React from 'react'
import Hero from '../components/Hero'
import Infographic from '../components/Infographic'
import ServiceCard from '../components/ServiceCard'
import { SERVICES } from '../data/services'

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />

      <section id="services" className="py-12">
        <div className="container-max">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-white/80 mt-2 max-w-2xl">A quick overview of services — all modular and editable in <code>src/data/services.js</code>.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <ServiceCard key={s.id} title={s.title} short={s.short} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <Infographic />
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Why choose us?</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>Proven processes, clear deliverables.</li>
              <li>Clear communication and sprint-style delivery.</li>
              <li>Data-driven optimizations and reporting.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
