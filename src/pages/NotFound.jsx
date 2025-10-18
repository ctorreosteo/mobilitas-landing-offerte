import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-dark via-azure-dark to-green flex items-center justify-center text-blue-dark font-montserrat">
      <div className="text-center px-6 max-w-md mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-green mb-4 leading-none">
            404
          </h1>
          <div className="w-24 h-1 bg-green mx-auto rounded-full"></div>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-dark mb-4">
            Oops! Pagina non trovata
          </h2>
          <p className="text-blue-dark/80 text-lg leading-relaxed">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link 
            to="/" 
            className="group inline-flex items-center px-8 py-4 bg-green text-blue-dark font-bold rounded-xl hover:bg-green/90 transition-all duration-300 hover:scale-105 no-underline"
            onClick={() => window.scrollTo(0, 0)}
          >
            <Home size={20} className="mr-3" />
            Torna alla Home
          </Link>
          
          <div className="pt-2">
            <button 
              onClick={() => window.history.back()}
              className="group inline-flex items-center px-6 py-3 text-blue-dark/80 hover:text-blue-dark border border-blue-dark/30 hover:border-blue-dark/60 rounded-xl transition-all duration-300 hover:bg-blue-dark/5"
            >
              <ArrowLeft size={18} className="mr-2" />
              Torna Indietro
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-azure-dark/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>
    </div>
  )
}

export default NotFound
