import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About us' },
  { to: '/seo', label: 'SEO' },
  { to: '/content', label: 'Content' },
  { to: '/smm', label: 'Social media' },
  { to: '/gifts', label: 'Gifts' },
  { to: '/landing', label: 'Landing pages' },
  { to: '/ads', label: 'Google ads' },
]

export default function Nav() {
  return (
    <header className="w-full py-4 fixed top-4 left-0 right-0 z-40">
      <div className="container-max flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Be Eternal" className="w-12 h-12 object-contain rounded-md" />
          <div className="text-white font-semibold tracking-wider">Be Eternal</div>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          {links.map(link => (
            <NavLink
              to={link.to}
              key={link.to}
              className={({isActive}) => `px-3 py-2 rounded-lg transition ${isActive ? 'bg-accent/20 text-accent' : 'text-white/80 hover:bg-white/5'}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden text-white/80">
          <button className="px-3 py-2 bg-white/5 rounded-lg">Menu</button>
        </div>
      </div>
    </header>
  )
}
