import React from 'react'
import { mobileNav } from '../contents/navigation'
import { NavLink } from 'react-router-dom'

const MobileNav = () => {
  return (
    <section className='lg:hidden h-16 bg-black backdrop-blur-2xl bg-opacity-70 fixed bottom-0 w-full z-40'>
      <div className='flex items-center justify-between h-full text-neutral-400'>
        {mobileNav.map((nav, index) => (
          <NavLink
            key={nav.label + "mobileNav"}
            to={nav.href}
            className={({ isActive }) =>
              `px-4 py-2 flex h-full items-center flex-col justify-center ${isActive ? "text-neutral-100" : ""}`
            }
          >
            <div className='text-2xl'>
              {nav.icon}
            </div>
            <p>{nav.label}</p>
          </NavLink>
        ))}
      </div>
    </section>
  )
}

export default MobileNav
