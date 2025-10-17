import React from 'react'
import HealthAreasCarousel from '../../components/HealthAreasCarousel'

const LaNostraStoria = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-dark to-azure-dark pt-0" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
      <div className="container mx-auto py-12">
        {/* Hero Section */}
        <div className="text-left mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-dark mb-6 font-montserrat">
            La Nostra Storia
          </h1>
          <p className="text-xl text-cream/80 max-w-3xl font-montserrat leading-relaxed">
            Due visionari, una missione impossibile, una rivoluzione nel mondo della salute.
            <br />
            <span className="text-azure-dark font-semibold">Questa è la storia di come tutto è iniziato.</span>
          </p>
        </div>

        {/* Sezione 1: I Fondatori */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
              <h2 className="text-4xl font-bold text-blue-dark mb-6 font-montserrat">
                I Due Visionari
              </h2>
              <p className="text-xl text-cream/80 font-montserrat max-w-3xl">
                Due storie diverse, una passione comune: trasformare il mondo della salute
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Carlos */}
              <div className="text-left">
                <div className="relative mb-8 text-center">
                  <img 
                    src="/storia/calcio.png" 
                    alt="Carlos Torre" 
                    className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-green shadow-2xl"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green text-blue-dark px-6 py-2 rounded-full font-bold font-montserrat">
                    Carlos Torre
                  </div>
                </div>
                <div className="bg-green/10 rounded-2xl p-8 text-left">
                  <h3 className="text-2xl font-bold text-blue-dark mb-4 font-montserrat">
                    Ex Calciatore e Ingegnere
                  </h3>
                  <p className="text-cream/80 leading-relaxed font-montserrat mb-4">
                    Tra le tante esperienze, ha anche militato nelle giovanili della <strong className="text-blue-dark">Juventus</strong>, 
                    ma la sua vera passione è sempre capire come funzionano i <strong>sistemi che governano il mondo</strong>. 
                    Laureato in ingegneria informatica, ha dedicato la sua vita allo studio e alla formazione personale continua.
                  </p>
                  <p className="text-cream/80 leading-relaxed font-montserrat mb-4">
                    <strong>Ogni singolo giorno</strong> della sua vita speso a formarsi. 
                    Capacità di analisi dei mercati, gestione finanziaria e strategie aziendali 
                    <span className="text-azure-dark font-semibold"> che portano risultati</span>.
                  </p>
                  <p className="text-cream/80 leading-relaxed font-montserrat">
                    La persona che sa trasformare le idee in realtà concrete, 
                    con la determinazione di chi ha vissuto sempre ai massimi livelli.
                  </p>
                </div>
              </div>

              {/* Nicolas */}
              <div className="text-left">
                <div className="relative mb-8 text-center">
                  <img 
                    src="/storia/nicolas.png" 
                    alt="Nicolas Ricciardi" 
                    className="w-64 h-64 rounded-full mx-auto object-cover border-4 border-green shadow-2xl"
                  />
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green text-blue-dark px-6 py-2 rounded-full font-bold font-montserrat">
                    Nicolas Ricciardi
                  </div>
                </div>
                <div className="bg-green/10 rounded-2xl p-8 text-left">
                  <h3 className="text-2xl font-bold text-blue-dark mb-4 font-montserrat">
                    L'Ex Nuotatore che Cambiò le Regole
                  </h3>
                  <p className="text-cream/80 leading-relaxed font-montserrat mb-4">
                    <strong>20 anni di sport agonistico</strong> alle spalle. Nicolas non è solo un atleta, 
                    è un <strong className="text-blue-dark">maestro delle soft skills</strong> che ha 
                    trasformato ogni esperienza in competenza.
                  </p>
                  <p className="text-cream/80 leading-relaxed font-montserrat mb-4">
                    Accademie, formazione continua, <strong>ogni singola settimana</strong> dedicata 
                    a migliorarsi. Le sue capacità umane e relazionali sono strepitose e <strong className="text-blue-dark">fuori dal comune</strong>.
                  </p>
                  <p className="text-cream/80 leading-relaxed font-montserrat">
                    Laureato in osteopatia, ha raggiunto un traguardo incredibile: 
                    <strong className="text-azure-dark"> 60 visite a settimana già dopo un mese dalla laurea</strong>. 
                    Un record che parla da solo. Merito solamente delle sue competenze ineguagliabili a livello umano e professionale. Medaglia d'oro!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione 2: L'Idea */}
        <section className="mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-left mb-8">
              <div className="w-20 h-20 bg-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-3xl font-bold text-blue-dark mb-6 font-montserrat">
                La Scoperta che Cambiò Tutto
              </h3>
            </div>

            <div className="space-y-6 text-cream/90 leading-relaxed font-montserrat text-lg">
                <p>
                  Entrambi amanti dello sport e della salute, si sono presto accorti di qualcosa 
                  che <span className="text-azure-dark font-semibold">non funzionava nel mondo della salute</span>.
                </p>

                <p>
                  <strong className="text-blue-dark">Il problema era chiaro:</strong> viviamo in una <strong className="text-blue-dark">società ultra esagerata</strong>, 
                  in tutto e per tutto. Chi sta <strong className="text-blue-dark">troppe ore seduto</strong>, 
                  chi porta il proprio corpo <strong className="text-blue-dark">allo sfinimento</strong>, 
                  chi lo logora con <strong className="text-blue-dark">lavori manuali e pesanti</strong> e così via.
                </p>

                <p>
                  E qual è la soluzione che la società ti propone? 
                </p>
                <p> 
                  Ti propone sempre qualcosa per 
                  <strong className="text-blue-dark">curare solo il sintomo</strong>, sempre con metodi 
                  che vanno a <strong className="text-blue-dark">spegnere il fuoco</strong>, 
                  senza mai risalire alla <strong className="text-blue-dark">causa dei problemi</strong>.
                </p>

                <p>
                  Questo approccio fa sì che le persone diventino <strong className="text-blue-dark">sempre più deboli</strong>{' '}
                  e dipendenti dalle soluzioni a breve termine. Soluzioni che non fanno altro che 
                  <strong className="text-blue-dark"> farti ammalare e peggiorare</strong>.
                </p>

                <p>
                  Lo stile di vita moderno è <strong className="text-blue-dark">troppo esagerato in tutto</strong> e ci porta 
                  ad ammalarci, creando un sistema nazionale che semplicemente <strong className="text-blue-dark">non funziona</strong>.
                </p>

                <div className="bg-green/20 rounded-2xl p-8 mt-8 border-l-4 border-azure-dark">
                  <p className="text-xl font-bold text-blue-dark mb-4">
                    E da qui abbiamo capito...
                  </p>
                  <p className="text-lg">
                    Dovevamo creare qualcosa di <span className="text-azure-dark font-bold text-xl">completamente innovativo</span>{' '}
                    per tornare a far evolvere l'essere umano e farlo splendere come merita.
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* Sezione 3: Il Giorno della Firma */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
              <h2 className="text-4xl font-bold text-blue-dark mb-6 font-montserrat">
                Il Giorno che Cambiò la Storia
              </h2>
              <p className="text-xl text-cream/80 font-montserrat">
                Quando la pazzia si trasformò in realtà. Ecco il giorno in cui è stata messa la firma per iniziare tutto quanto 😁
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Foto della firma */}
              <div className="text-center">
                <img 
                  src="/storia/firma.png" 
                  alt="Il giorno della firma" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <p className="text-cream/60 mt-4 font-montserrat italic">
                  Il momento in cui tutto è iniziato
                </p>
              </div>

              {/* Testo */}
              <div className="bg-gradient-to-br from-green/20 to-azure-dark/20 rounded-3xl p-10 border border-green/30">
                <div className="text-left mb-6">
                  <div className="w-16 h-16 bg-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✍️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-dark mb-4 font-montserrat">
                    La Pazzia che Diventò Realtà
                  </h3>
                </div>

                <div className="space-y-6 text-cream/90 leading-relaxed font-montserrat">
                  <p>
                    Carlos e Nicolas hanno deciso di compiere <span className="text-azure-dark font-semibold">la pazzia</span>{' '}
                    e fondare l'azienda. Ma non una pazzia qualsiasi: una pazzia costruita 
                    <strong> senza capitali e investitori esterni</strong>.
                  </p>

                  <div className="text-center my-8">
                    <img 
                      src="/storia/stretta.png" 
                      alt="La stretta di mano" 
                      className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                    />
                  </div>

                  <p>
                    Tutto con <strong className="text-blue-dark">sudore e fatica</strong>, 
                    sacrificando tantissimo per riuscire a dare vita a qualcosa di 
                    <strong className="text-blue-dark"> sensazionale</strong>.
                  </p>

                  <div className="bg-green/20 rounded-xl p-6 border-l-4 border-azure-dark">
                    <p className="font-bold text-blue-dark mb-2">
                      La forza che li ha spinti?
                    </p>
                    <p>
                      L'ambizione di <strong className="text-blue-dark">cambiare per sempre il mondo della salute</strong>, 
                      portare innovazione e innovare la storia dell'essere umano.
                    </p>
                  </div>

                  <p>
                    Facendo passare da essere che <strong className="text-blue-dark">sopravvive</strong>{' '}
                    (malato, senza rendersene conto) a essere che{' '}
                    <strong className="text-blue-dark">vive e splende ogni singolo giorno</strong>{' '}
                    con forza e vitalità.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sezione 4: Cosa Abbiamo Creato */}
        <section className="mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-left mb-16">
              <h2 className="text-4xl font-bold text-blue-dark mb-6 font-montserrat">
                Cosa Abbiamo Creato
              </h2>
              <p className="text-xl text-cream/80 font-montserrat">
                Un luogo di trasformazione e consapevolezza
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Foto del trattamento */}
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
                <img 
                  src="/storia/trattamento.png" 
                  alt="Trattamento Mobilitas" 
                  className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl object-cover"
                />
                <p className="text-cream/60 mt-4 font-montserrat italic text-sm">
                  Un luogo dove la trasformazione prende vita
                </p>
              </div>

              {/* Testo */}
              <div className="w-full lg:w-1/2 space-y-6 text-cream/90 leading-relaxed font-montserrat text-lg">
                <p>
                  Abbiamo creato un <strong className="text-blue-dark">luogo speciale</strong>{' '}
                  dove le persone vengono per risolvere i loro problemi e ne escono completamente trasformate.
                </p>

                <p>
                  Non è solo un centro di cura, è un <strong>spazio di consapevolezza</strong> dove 
                  ogni persona impara che può scegliere di stare in salute{' '}
                  <strong className="text-blue-dark">ogni singolo giorno della propria vita</strong>.
                </p>

                <p>
                  Il segreto? Lavorare attivamente sulle <span className="text-azure-dark font-semibold">5 aree fondamentali della salute</span>:
                </p>

                <HealthAreasCarousel variant="story" />

                <div className="bg-green/20 rounded-2xl p-6 mt-8 border-l-4 border-azure-dark">
                  <p className="text-lg font-bold text-blue-dark mb-2">
                    Il risultato?
                  </p>
                  <p>
                    Persone che non solo <strong className="text-blue-dark">guariscono</strong>, 
                    ma che diventano <strong className="text-blue-dark">protagonisti attivi</strong> della propria salute, 
                    capaci di mantenere il benessere ogni giorno della loro vita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-left">
          <div className="bg-gradient-to-r from-green/20 to-azure-dark/20 rounded-3xl p-12 border border-green/30 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-dark mb-6 font-montserrat">
              Vuoi Far Parte di Questa Rivoluzione?
            </h2>
            <p className="text-xl text-cream/80 mb-8 font-montserrat leading-relaxed">
              La storia di Mobilitas è appena iniziata. Unisciti a noi nel cambiare 
              il mondo della salute, una persona alla volta.
            </p>
            <a href="/lavora-con-noi" className="inline-block">
              <button className="bg-blue-dark text-green px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-dark/80 transition-all duration-300 transform hover:scale-105 font-montserrat shadow-lg">
                Lavora con Noi
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LaNostraStoria
