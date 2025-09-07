import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

function ContentHome() {
  return (
    <div className="pt-28 container-max">
      <h2 className="text-xl font-semibold">Content Development — Overview</h2>
      <p className="mt-2 text-white/80">Dummy overview. Replace with your real service descriptions.</p>
    </div>
  )
}

function Strategy() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Content Strategy (dummy).</div> }
function Creative() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Creative Content (dummy).</div> }
function Writing() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Content Writing (blogs, e-books, emails) (dummy).</div> }
function Marketing() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Content Marketing (dummy).</div> }
function Linkedin() { return <div className="mt-4 glass p-4 rounded-2xl container-max">LinkedIn Content (dummy).</div> }

export default function ContentLayout() {
  return (
    <main className="min-h-screen text-white pt-28">
      <div className="container-max">
        <nav className="flex gap-3 flex-wrap">
          <NavLink to="/content" end className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Overview</NavLink>
          <NavLink to="/content/strategy" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Content Strategy</NavLink>
          <NavLink to="/content/creative" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Creative Content</NavLink>
          <NavLink to="/content/writing" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Content Writing</NavLink>
          <NavLink to="/content/marketing" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Content Marketing</NavLink>
          <NavLink to="/content/linkedin" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>LinkedIn Content</NavLink>
        </nav>

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<ContentHome />} />
            <Route path="strategy" element={<Strategy />} />
            <Route path="creative" element={<Creative />} />
            <Route path="writing" element={<Writing />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="linkedin" element={<Linkedin />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}
