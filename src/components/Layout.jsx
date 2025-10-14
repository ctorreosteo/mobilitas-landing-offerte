import React from 'react'
import Header from './Header'
import Footer from './Footer'
import WhatsAppButtonSito from './WhatsAppButtonSito'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white w-full max-w-full overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Button */}
      <WhatsAppButtonSito />
    </div>
  )
}

export default Layout
