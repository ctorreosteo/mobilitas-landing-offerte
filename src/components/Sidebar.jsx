import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { X, ChevronRight, ChevronDown } from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({})

  const menuItems = [
    {
      name: 'Home',
      href: '/',
      subItems: [
        { name: 'Mission', href: '/mission' },
        { name: 'Servizi', href: '/servizi' },
        { name: 'Contatti', href: '/contatti' },
        { name: 'Dove siamo', href: '/dove-siamo' }
      ]
    },
    {
      name: 'Mobilitas Fitness',
      subItems: [
        { name: 'Walking Club', href: '/walking-club' },
        { name: 'Running Club', href: '/running-club' }
      ]
    },
    {
      name: 'Mobilitas Card',
      href: '/carta-fedelta'
    },
    {
      name: 'Partnership',
      subItems: [
        { name: 'Abylsen', href: '/partnership/abylsen' },
        { name: 'Stampa Subalpina', href: '/partnership/stampa-subalpina' },
        { name: 'Robogest', href: '/partnership/robogest' },
        { name: 'Edenred', href: '/partnership/edenred' },
        { name: 'Allianz', href: '/partnership/allianz' }
      ]
    },
    {
      name: 'Testimonianze',
      href: '/testimonianze'
    },
    {
      name: 'La nostra storia',
      href: '/la-nostra-storia'
    },
    {
      name: 'Influencer',
      href: '/influencer'
    },
    {
      name: 'Lavora con noi',
      href: '/lavora-con-noi'
    },
    {
      name: 'Newsletter',
      href: '/newsletter'
    },
    {
      name: 'Magazine',
      href: '/magazine'
    },
    {
      name: 'Domande frequenti',
      href: '/faq'
    },
    {
      name: 'Blog',
      href: '/blog'
    },
    {
      name: 'Risorse',
      href: '/risorse'
    }
  ]

  const toggleExpanded = (itemName) => {
    setExpandedItems(prev => {
      // Se l'item è già espanso, lo chiudiamo
      if (prev[itemName]) {
        return { ...prev, [itemName]: false }
      }
      // Altrimenti chiudiamo tutti gli altri e apriamo solo questo
      return { [itemName]: true }
    })
  }

  const handleItemClick = (item) => {
    if (item.subItems) {
      toggleExpanded(item.name)
    } else {
      onClose()
    }
  }

  const handleSubItemClick = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-72 bg-blue-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-green">
          <h2 className="text-cream font-bold text-xl font-montserrat">Menu</h2>
          <button
            onClick={onClose}
            className="text-cream hover:text-green transition-colors bg-transparent border-none outline-none cursor-pointer"
            aria-label="Chiudi menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4 sidebar-scroll">
          <div className="px-4 space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {/* Main Item */}
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    item.subItems 
                      ? 'hover:bg-green/10' 
                      : 'hover:bg-green/10 hover:text-green'
                  }`}
                  onClick={() => handleItemClick(item)}
                >
                  <div className="flex items-center">
                    {item.href ? (
                      <Link 
                        to={item.href} 
                        className="text-cream font-medium font-montserrat no-underline"
                        onClick={handleSubItemClick}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-cream font-medium font-montserrat">
                        {item.name}
                      </span>
                    )}
                  </div>
                  
                  {item.subItems && (
                    <div className="text-green">
                      {expandedItems[item.name] ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </div>
                  )}
                </div>

                {/* Sub Items */}
                {item.subItems && expandedItems[item.name] && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-cream hover:text-green hover:bg-green/10 rounded-lg transition-colors font-montserrat italic no-underline"
                        onClick={handleSubItemClick}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
