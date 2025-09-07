import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'

function SEOHome() {
  return (
    <div className="pt-28 container-max">
      <h2 className="text-xl font-semibold">SEO Services — Overview</h2>
      <p className="mt-2 text-white/80">Dummy overview. Replace with your real service descriptions.</p>
    </div>
  )
}

function OnPage() { return <div className="mt-4 glass p-4 rounded-2xl container-max">On-page SEO — content, meta, schema (dummy).</div> }
function OffPage() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Off-page SEO — link building, outreach (dummy).</div> }
function Technical() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Technical SEO — speed, structured data (dummy).</div> }
function Emerging() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Emerging SEOs — AI, voice, new signals (dummy).</div> }
function GeoAeo() { return <div className="mt-4 glass p-4 rounded-2xl container-max">Geo & Aeo — local and geography specific SEO (dummy).</div> }

export default function SeoLayout() {
  return (
    <main className="min-h-screen text-white pt-28">
      <div className="container-max">
        <nav className="flex gap-3 flex-wrap">
          <NavLink to="/seo" end className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Overview</NavLink>
          <NavLink to="/seo/onpage" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>On page seo</NavLink>
          <NavLink to="/seo/offpage" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Off page seo</NavLink>
          <NavLink to="/seo/technical" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Technical seo</NavLink>
          <NavLink to="/seo/emerging" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Emerging SEOs</NavLink>
          <NavLink to="/seo/geoaeo" className={({isActive})=>isActive? 'font-semibold text-accent' : 'text-white/80'}>Geo & Aeo</NavLink>
        </nav>

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<SEOHome />} />
            <Route path="onpage" element={<OnPage />} />
            <Route path="offpage" element={<OffPage />} />
            <Route path="technical" element={<Technical />} />
            <Route path="emerging" element={<Emerging />} />
            <Route path="geoaeo" element={<GeoAeo />} />
          </Routes>
        </div>
      </div>
    </main>
  )
}
