
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] text-white'>
      <div className='bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-lg'>
        <div className='flex items-center justify-between h-8 md:h-15'>
          {/* Logo */}
          <div className='md:text-3xl'>
            <Link to="/">
              <h3>Junaids.</h3>
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-6'>
            <Link to="/" className=' hover:text-amber-300'>Home</Link>
            <Link to="/About" className=' hover:text-amber-300'>About</Link>
            <Link to="/Services" className=' hover:text-amber-300'>Services</Link>
            <Link to="/Contact" className=' hover:bg-amber-500 border border-amber-500 py-3 px-10 rounded-full transition-all duration-200'>contact</Link>


          </div>

          <button className='md:hidden' onClick={() => setIsOpen(prev => !prev)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className='text-sm md:hidden mt-3 bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-lg'>
          <Link to="/" className='block p-4 text-center' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/About" className='block p-4 text-center' onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/Service" className='block p-4 text-center' onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/Contact" className='block p-4 text-center' onClick={() => setIsOpen(false)}>contact</Link>
      
        </div>
      )}

    </nav>
  )
}

export default Navbar
