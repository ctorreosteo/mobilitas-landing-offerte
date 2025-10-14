import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, User } from 'lucide-react'
import Sidebar from './Sidebar'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <header className="bg-blue-dark shadow-lg border-b border-green/20 sticky top-0 z-40 w-full max-w-full">
        <div className="container mx-auto px-4 w-full max-w-full">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Menu Hamburger - Sinistra */}
            <button
              onClick={toggleSidebar}
              className="text-cream hover:text-green transition-colors bg-transparent border-none outline-none cursor-pointer"
              aria-label="Apri menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo - Centro */}
            <Link to="/" className="flex items-center">
              <img 
                src="/logo_verde.png" 
                alt="Mobilitas Logo" 
                className="h-6 sm:h-7.5 w-auto"
              />
            </Link>

            {/* Icona Utente - Destra */}
            <button
              className="text-cream hover:text-green transition-colors bg-transparent border-none outline-none cursor-pointer"
              aria-label="Accedi al tuo account"
            >
              <User size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={closeSidebar}
      />
    </>
  )
}

export default Header
