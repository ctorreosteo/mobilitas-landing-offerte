import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('c.torre@osteotouch.it')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [loginError, setLoginError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Qui andrà la logica di login
    console.log('Login attempt:', { email, password })
    
    // Simula controllo credenziali (per demo)
    // Mostra sempre l'errore per test
    setLoginError(true)
    // Nasconde l'errore dopo 3 secondi
    setTimeout(() => setLoginError(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-dark via-azure-dark to-green flex items-start justify-center pt-20 pb-8 px-4">
      {/* Main Container */}
      <div className="w-full max-w-4xl max-h-[90vh] bg-cream rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex">
          {/* Left Column - Login Form */}
          <div className="flex-1 md:flex-1 p-4">
            <div className="w-full max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-4">
            <img 
              src="/pittogramma.png" 
              alt="Mobilitas Logo" 
              className="w-10 h-10 mx-auto mb-3"
            />
            <h1 className="text-xl font-bold text-blue-dark mb-2">
              {isLogin ? 'Benvenuto in Mobilitas' : 'Registrati a Mobilitas'}
            </h1>
            <p className="text-blue-dark/70 text-sm">
              {isLogin ? 'Accedi al tuo account Mobilitas' : 'Crea il tuo account per iniziare'}
            </p>
          </div>

          {/* Toggle Login/Register */}
          <div className="mb-8">
            <div className="relative bg-gray-50 rounded-2xl p-1 border border-gray-200">
              {/* Active indicator */}
              <div 
                className={`absolute top-1 bottom-1 w-1/2 bg-cream rounded-xl shadow-sm transition-all duration-300 ease-out ${
                  isLogin ? 'left-1' : 'left-1/2'
                }`}
              />
              <div className="relative flex">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-4 px-6 rounded-xl text-sm font-semibold font-montserrat transition-all duration-300 ease-out relative z-10 ${
                    isLogin 
                      ? 'text-blue-dark' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Accedi
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-4 px-6 rounded-xl text-sm font-semibold font-montserrat transition-all duration-300 ease-out relative z-10 ${
                    !isLogin 
                      ? 'text-blue-dark' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Registrati
                </button>
              </div>
            </div>
          </div>

          {/* Login Form */}
          {isLogin ? (
            <form onSubmit={handleSubmit} className="space-y-3">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-blue-dark mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-dark placeholder-blue-dark/50 focus:outline-none focus:ring-2 focus:ring-blue-dark/20 focus:border-blue-dark transition-all"
                placeholder="La tua email"
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-blue-dark">
                  Password
                </label>
                <Link 
                  to="#" 
                  className="text-sm text-blue-dark/70 hover:text-blue-dark hover:underline"
                >
                  Password dimenticata?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl text-blue-dark placeholder-blue-dark/50 focus:outline-none focus:ring-2 focus:ring-blue-dark/20 focus:border-blue-dark transition-all"
                placeholder="La tua password"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group relative w-full py-4 text-green font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-dark/25 active:scale-[0.98]"
              style={{ backgroundColor: '#002552' }}
            >
              <span className="relative flex items-center justify-center gap-2">
                <span>Accedi</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            {/* Error Message */}
            {loginError && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl animate-in slide-in-from-top-2 duration-300">
                <div className="flex items-center gap-2">
                  <svg 
                    className="w-4 h-4 text-red-500 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-600 text-sm font-medium">
                    Credenziali non corrette
                  </span>
                </div>
              </div>
            )}
          </form>
          ) : (
            /* Registration Notice */
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-blue-dark/10 to-azure-dark/10 border border-blue-dark/20 rounded-2xl p-6">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-lg font-semibold text-blue-dark mb-3">
                  Registrazioni Temporaneamente Chiuse
                </h3>
                <p className="text-blue-dark/80 text-sm leading-relaxed">
                  Al momento le registrazioni sono chiuse, ma puoi metterti in lista d'attesa (scrivendoci su WhatsApp)
                  per essere tra i primi a ricevere l'accesso quando riapriremo!
                </p>
              </div>
            </div>
          )}

          {/* Footer */}
          {isLogin && (
            <div className="text-center mt-4">
              <p className="text-xs text-blue-dark/60">
                Cliccando su Accedi, accetti i nostri{' '}
                <Link to="#" className="text-blue-dark hover:underline">Termini di Servizio</Link>
                {' '}e la{' '}
                <Link to="#" className="text-blue-dark hover:underline">Privacy Policy</Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>

          {/* Right Column - Branding */}
          <div className="hidden md:flex flex-1 bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 items-center justify-center p-4">
            <div className="text-center">
              <img 
                src="/pittogramma.png" 
                alt="Mobilitas Logo" 
                className="w-32 h-32 mx-auto mb-6 opacity-80"
              />
              <h2 className="text-2xl font-bold text-blue-dark/80">
                Mobilitas
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
