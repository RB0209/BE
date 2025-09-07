import React from 'react'

export default function About() {
  return (
    <main className="min-h-screen text-white pt-28">
      <div className="container-max">
        <h1 className="text-3xl font-bold">About us</h1>
        <p className="mt-4 text-white/80 max-w-2xl">Dummy about copy. Replace with your company's story, vision and team introductions. Content is intentionally simple to make future editing straightforward.</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl"> <h3 className="font-semibold">Our Mission</h3> <p className="mt-2 text-white/80">Helping clients scale with data & design.</p></div>
          <div className="glass p-6 rounded-2xl"> <h3 className="font-semibold">Our Values</h3> <p className="mt-2 text-white/80">Transparent, collaborative, results-driven.</p></div>
          <div className="glass p-6 rounded-2xl"> <h3 className="font-semibold">Our Team</h3> <p className="mt-2 text-white/80">Lean, cross-functional specialists.</p></div>
        </section>
      </div>
    </main>
  )
}
