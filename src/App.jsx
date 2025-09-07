import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import SeoLayout from './pages/services/SeoLayout'
import ContentLayout from './pages/services/ContentLayout'
import SocialMedia from './pages/services/SocialMedia'
import Gifts from './pages/Gifts'
import LandingPages from './pages/LandingPages'
import GoogleAds from './pages/GoogleAds'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b2540] text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seo/*" element={<SeoLayout />} />
        <Route path="/content/*" element={<ContentLayout />} />
        <Route path="/smm" element={<SocialMedia />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/landing" element={<LandingPages />} />
        <Route path="/ads" element={<GoogleAds />} />
      </Routes>
    </div>
  )
}
