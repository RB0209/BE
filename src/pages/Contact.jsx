import React from 'react'

export default function Contact() {
  return (
    <main className="min-h-screen text-white pt-28">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-white/80">Drop a message and we'll get back in 1 business day (dummy text).</p>

        <form className="mt-6 grid gap-4">
          <input className="p-3 rounded-lg bg-white/5 outline-none" placeholder="Your name" />
          <input className="p-3 rounded-lg bg-white/5 outline-none" placeholder="Email" />
          <textarea className="p-3 rounded-lg bg-white/5 outline-none" rows={6} placeholder="Tell us about your project" />
          <button className="px-5 py-3 rounded-2xl bg-accent font-semibold text-black">Send message</button>
        </form>
      </div>
    </main>
  )
}
