import React, { useState } from 'react'
import {navLinks} from '../constants'


const NavList = () => (
    <ul className='nav-ul'>
        {
                    navLinks.map((link) => (
                        <li key={link.id} className='nav-li'>
                            <a href={link.href} className='nav-li_a'>
                                {link.name}
                            </a>
                        </li>
                    ))
                }
    </ul>
)

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!open)
    }
  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto p-6'>
            <div className='flex justify-between items-center mx-auto c-space'>
                <div className='flex items-center gap-2'>
                <img src='/assets/shade.png' alt="" className='w-10 h-10 object-contain hover:text-white'/>
                <a href="#" className='text-neutral-400 font-bold text-xl sm:text-lg  hover:text-white transition-colors'>
                    SHADE !
                </a>
                </div>
                <button onClick={toggleMenu} className='text-neutral-400 hover:text-white transition-colors sm:hidden flex'>
                    <img src={open ?'/assets/close.svg' : "/assets/menu.svg"} alt=""  className='w-6 h-6 object-contain'/>
                </button>
                <nav className='hidden sm:flex'>
                 <NavList/>
                 </nav>
            </div>
            <div className={`nav-sidebar ${open ? 'max-h-screen' : 'max-h-0'}`}>
                <NavList/>
            </div>
        </div>
    </header>
  )
}

export default Navbar
