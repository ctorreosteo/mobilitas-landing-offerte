import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GpadelInfortuniPopup from '../../components/GpadelInfortuniPopup'
import { CheckCircle2 } from 'lucide-react'

export default function LmGPadelInfortuni() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleOpenPopup = () => {
    setIsPopupOpen(true)
  }

  const handleClosePopup = () => {
    setIsPopupOpen(false)
  }
  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* HERO/MAIN SECTION - Styled like Mobilitas Card */}
      <main className="pt-20 sm:pt-24 pb-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <section className="relative overflow-hidden">
          {/* Subtle background accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-6 right-8 w-40 h-40 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-tr from-blue-400/10 to-green-400/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start lg:items-center">
            {/* Left column: title & description */}
            <div className="order-1 lg:order-1 lg:col-start-1">
              {/* Badge Offerta */}
              <div className="inline-flex items-center px-4 py-2 mt-8 mb-0 rounded-full bg-[#0ea5e91a] border border-[#0ea5e933]">
                <span className="w-2 h-2 rounded-full bg-azure-dark mr-2"></span>
                <span className="text-blue-dark font-semibold text-sm uppercase tracking-wider">Offerta GPADEL</span>
              </div>
              <h1 className="text-5xl sm:text-5xl lg:text-5xl font-black text-blue-dark leading-tight mb-5">
                L’Errore che Tutti i Padelisti Commettono Prima di Farsi Male Seriamente
                <span className="block text-4xl sm:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  (E Come Evitarlo Subito)
                </span>
              </h1>
              <p className="text-blue-dark/80 text-lg leading-relaxed max-w-2xl mb-8">
                Scopri i 4 errori più comuni che portano migliaia di padelisti a farsi male ogni stagione (spesso senza nemmeno accorgersene). In questa guida troverai le cause nascoste degli infortuni, una routine preventiva efficace e i segnali da non ignorare per giocare meglio, più a lungo e senza dolori. Prima ti informi, meno ti fermi. Ti diverti di più e stai meglio!
              </p>

            </div>

            {/* Right column: image + offer stacked with tight spacing on desktop */}
            <div className="order-2 lg:order-2 lg:col-start-2 flex flex-col items-center lg:items-start">
              <img
                src="/landing-pages/lm-gpadel-infortuni.png"
                alt="Ebook Guida Infortuni Padel"
                className="w-full max-w-md"
              />
              <div className="mt-4 w-full max-w-xl">
                <div className="bg-white/90 backdrop-blur-sm border border-green/30 rounded-2xl p-5 shadow">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-black line-through text-red-600">40€</span>
                    <span className="text-blue-dark/80">per te che arrivi dal GPADEL è</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-azure-dark">GRATIS</span>
                  </div>
                  <button
                    onClick={handleOpenPopup}
                    className="mt-4 inline-flex flex-col items-center justify-center text-center gap-0 w-full bg-blue-dark text-green font-bold px-7 py-4 rounded-xl shadow hover:brightness-110 transition cursor-pointer"
                  >
                    <span className="block leading-tight uppercase">Scarica la guida gratis</span>
                    <span className="block text-green/90 text-sm leading-tight">(offerta per te)</span>
                  </button>
                  <p className="text-xs text-blue-dark/60 mt-2 text-center">Te la invieremo entro 48 ore lavorative dopo aver effettuato controllato manualmente che si tratti di una richiesta vera.</p>
                </div>
              </div>
            </div>

            {/* Benefits panel now on left column on desktop */}
            <div className="order-3 lg:order-1 lg:col-start-1 self-center">
              <div className="bg-white border border-blue-dark/10 rounded-2xl shadow-sm p-6 max-w-xl mx-auto lg:mx-0 w-full">
                <h2 className="text-2xl font-bold text-blue-dark mb-5 mt-0">Cosa trovi nella guida</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="mt-0.5 mr-3 text-azure-dark w-5 h-5 shrink-0" />
                    <span className="text-blue-dark/90">Le 3 cause più sottovalutate che ti stanno avvicinando a un infortunio senza che tu te ne accorga</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="mt-0.5 mr-3 text-azure-dark w-5 h-5 shrink-0" />
                    <span className="text-blue-dark/90">I 4 infortuni che rovinano più spesso i padelisti (e come prevenirli)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="mt-0.5 mr-3 text-azure-dark w-5 h-5 shrink-0" />
                    <span className="text-blue-dark/90">La routine di riscaldamento che i migliori usano per non farsi MAI male (e che l’amatore ignora completamente)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="mt-0.5 mr-3 text-azure-dark w-5 h-5 shrink-0" />
                    <span className="text-blue-dark/90">Il più grande errore che commettono i padelisti quando si fanno male (e che li blocca più a lungo del dolore stesso)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {/* Gpadel Infortuni Popup */}
      <GpadelInfortuniPopup 
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  )
}


