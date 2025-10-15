import React, { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (sectionIndex, questionIndex) => {
    const key = `${sectionIndex}-${questionIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const faqSections = [
    {
      title: "Differenze tra osteopatia, fisioterapia e altro",
      questions: [
        { 
          question: "Qual è la differenza tra un osteopata e un fisioterapista?",
          answer: "Il fisioterapista lavora principalmente sui muscoli e sui sintomi, spesso con esercizi e macchinari. L'osteopata lavora su tutto il sistema corpo, andando alla radice dei problemi. L'approccio osteopatico è più globale: non solo dove fa male, ma perché fa male. Spesso lavoriamo in sinergia con i fisioterapisti per risultati migliori."
        },
        { 
          question: "Voi siete medici?",
          answer: "No, non siamo medici. Siamo osteopati con una formazione specifica di 5 anni in osteopatia. Non prescriviamo farmaci né facciamo diagnosi mediche. Il nostro ruolo è complementare alla medicina: lavoriamo sulla funzionalità del corpo e sui problemi meccanici. Se rileviamo qualcosa che richiede un consulto medico, siamo i primi a consigliartelo."
        },
        { 
          question: "L'osteopata può fare diagnosi?",
          answer: "Facciamo una valutazione osteopatica, non una diagnosi medica. Analizziamo la funzionalità del corpo, le tensioni, i blocchi articolari. Se rileviamo qualcosa che potrebbe richiedere esami medici, ti consigliamo di consultare il tuo medico. La nostra valutazione è complementare, non sostitutiva di quella medica."
        },
        { 
          question: "Posso venire anche senza una prescrizione del medico?",
          answer: "Sì, puoi venire direttamente da noi senza prescrizione medica. L'osteopatia è una professione sanitaria autonoma. Tuttavia, se hai una prescrizione medica o esami recenti, portali pure: ci aiutano a capire meglio la tua situazione e a lavorare in modo più mirato."
        },
        { 
          question: "Qual è la differenza tra osteopatia e chiropratica?",
          answer: "La chiropratica si concentra principalmente sulla colonna vertebrale e sui nervi. L'osteopatia lavora su tutto il corpo: articolazioni, muscoli, organi, circolazione. È un approccio più globale. Inoltre, l'osteopatia usa tecniche più dolci e meno invasive rispetto alla chiropratica tradizionale."
        },
        { 
          question: "L'osteopata manipola sempre le ossa?",
          answer: "No, non sempre. L'osteopatia ha molte tecniche diverse: alcune lavorano sui muscoli, altre sui tessuti molli, altre ancora sugli organi. Le manipolazioni articolari sono solo una delle tecniche disponibili. Scegliamo sempre l'approccio più adatto al tuo caso specifico e al tuo comfort."
        },
        { 
          question: "L'osteopatia è riconosciuta in Italia?",
          answer: "Sì, dal 2018 l'osteopatia è riconosciuta come professione sanitaria in Italia. Gli osteopati devono essere iscritti a un registro professionale e avere una formazione specifica di 5 anni. Tutti i nostri osteopati sono regolarmente iscritti e in regola con la normativa italiana."
        },
        { 
          question: "I vostri trattamenti sono coperti dalla mutua o da assicurazioni?",
          answer: "Al momento l'osteopatia non è coperta dal SSN, ma molte assicurazioni sanitarie private rimborsano i trattamenti osteopatici. Ti consigliamo di verificare con la tua assicurazione. Inoltre, le spese osteopatiche sono detraibili fiscalmente come spese sanitarie."
        },
        { 
          question: "Come faccio a sapere se chi mi tratta è davvero qualificato?",
          answer: "Tutti i nostri osteopati hanno una formazione di 5 anni in osteopatia e sono iscritti al registro professionale. Puoi verificare l'iscrizione sul sito del ROI (Registro Osteopati Italiani). Inoltre, tutti i nostri professionisti seguono corsi di aggiornamento continui per mantenere alta la qualità dei trattamenti."
        },
        { 
          question: "Ci sono rischi nel fare trattamenti osteopatici?",
          answer: "I trattamenti osteopatici sono generalmente molto sicuri. Usiamo tecniche dolci e non invasive. Prima di ogni trattamento facciamo una valutazione accurata per escludere controindicazioni. I rischi sono minimi, soprattutto se confrontati con i benefici. Ti informiamo sempre su cosa aspettarti durante e dopo il trattamento."
        }
      ]
    },
    {
      title: "Fiducia e differenze rispetto agli altri",
      questions: [
        { 
          question: "L'osteopatia è una moda o funziona davvero?",
          answer: "L'osteopatia non è affatto una moda: è una disciplina medica riconosciuta dal 2018 in Italia, con oltre 140 anni di storia e basata su principi biomeccanici e fisiologici scientificamente validati. Il fondatore, Andrew Taylor Still, ha sviluppato un sistema di diagnosi e trattamento che considera il corpo come un'unità funzionale integrata. Lavoriamo sulle cause profonde dei sintomi, non solo sui sintomi stessi, utilizzando tecniche mirate e non invasive che rispettano la fisiologia naturale del corpo. I nostri risultati parlano da soli: ogni giorno aiutiamo persone che avevano perso fiducia in tutto, che avevano provato ogni tipo di trattamento senza successo. La differenza? L'osteopatia va alla radice del problema, ripristinando l'equilibrio e la mobilità di tutto il sistema corpo."
        },
        {
          question: "Perché dovrei venire da voi invece di andare dal medico o in fisioterapia?",
          answer: "Non siamo in competizione con nessuno: il nostro approccio è complementare e spesso lavoriamo in sinergia con medici e fisioterapisti. Tuttavia, la nostra forza distintiva è che andiamo oltre il sintomo per identificare e trattare la causa profonda del problema. Mentre la medicina tradizionale si concentra sulla diagnosi e sul trattamento farmacologico, e la fisioterapia lavora principalmente sui muscoli e sui sintomi, l'osteopatia considera il corpo come un sistema integrato. Non lavoriamo solo dove fa male, ma analizziamo tutto ciò che ha contribuito a creare quel dolore: tensioni muscolari, blocchi articolari, problemi di circolazione, disfunzioni viscerali. È questo approccio globale che fa la differenza e che spesso porta a risultati duraturi quando altri metodi hanno fallito."
        },
        {
          question: "Come faccio a sapere che non mi venderete cose inutili?",
          answer: "Ogni trattamento è su misura, dopo un'attenta valutazione iniziale. Nessuna vendita forzata, nessun pacchetto preimpostato. Il nostro obiettivo è che tu stia meglio, non che torni per sempre."
        },
        {
          question: "Cosa c'è di diverso in Mobilitas rispetto a un qualsiasi studio osteopatico?",
          answer: "Mobilitas non è semplicemente uno studio, è un progetto di benessere che va oltre il trattamento osteopatico tradizionale. La differenza principale sta nella nostra filosofia: ogni osteopata del team lavora con un metodo condiviso, formazione continua obbligatoria, e una visione unificata che punta a ridare al corpo la sua piena libertà di movimento. Non ci limitiamo al trattamento, ma ci prendiamo cura di ogni aspetto dell'esperienza del paziente: dall'accoglienza iniziale al follow-up, dall'ambiente confortevole alle spiegazioni dettagliate. Inoltre, investiamo costantemente in ricerca e aggiornamento, mantenendo i più alti standard qualitativi. Il nostro obiettivo non è solo risolvere il problema immediato, ma educare il paziente a mantenere il benessere nel tempo, fornendo strumenti e conoscenze per una vita più sana e attiva."
        },
        {
          question: "Trattate solo il sintomo o anche la causa vera del problema?",
          answer: "Trattiamo soprattutto la causa. Il sintomo è solo la punta dell'iceberg. Lavoriamo per capire cosa ha portato il tuo corpo a creare quella disfunzione e risolviamo alla radice."
        },
        {
          question: "L'osteopatia è una scienza o qualcosa di alternativo?",
          answer: "L'osteopatia è assolutamente una scienza, non una medicina alternativa. Si basa su conoscenze scientifiche solide: anatomia, biomeccanica, fisiologia, neurologia e patologia. Ogni trattamento parte da una valutazione reale e obiettiva del corpo, utilizzando test specifici e palpazione clinica. L'osteopatia è riconosciuta come professione sanitaria in Italia dal 2018 e in molti altri paesi europei. Non è 'alternativa' ma 'complementare' alla medicina tradizionale, nel senso che lavora in sinergia con essa. I principi osteopatici sono basati su evidenze scientifiche: la relazione struttura-funzione, l'autoguarigione del corpo, l'unità del sistema corpo. Utilizziamo tecniche che hanno dimostrato la loro efficacia attraverso studi clinici e ricerche scientifiche. La differenza rispetto alla medicina tradizionale non è nel rigore scientifico, ma nell'approccio: consideriamo il corpo come un sistema integrato piuttosto che come organi separati."
        },
        {
          question: "Cosa succede se non sento miglioramenti dopo la prima visita?",
          answer: "Non tutti rispondono allo stesso modo e non sempre il miglioramento è immediato. Valutiamo insieme dopo il primo trattamento e, se serve, adattiamo il percorso. Ma il nostro impegno è che ogni trattamento porti un cambiamento reale."
        },
        {
          question: "Come posso fidarmi a farmi trattare senza una diagnosi medica?",
          answer: "Non sostituiamo il medico, ma facciamo una valutazione funzionale approfondita. Se rileviamo qualcosa che richiede un consulto medico, siamo i primi a dirtelo. Il nostro obiettivo non è sostituire la medicina, ma aiutarti in modo complementare e responsabile."
        },
        {
          question: "Non rischio che sia solo un effetto placebo?",
          answer: "Il miglioramento che vediamo ogni giorno nei nostri pazienti va ben oltre un effetto placebo. Parliamo di mobilità recuperata, dolori che spariscono, energie che tornano. Tutto questo è il risultato di un lavoro tecnico, preciso, mirato."
        },
        {
          question: "Perché fate così tante pubblicità? Siete veramente bravi o solo bravi a vendere?",
          answer: "Siamo bravi a comunicare perché vogliamo che le persone giuste ci trovino. Ma quello che fa tornare i pazienti non è la pubblicità: sono i risultati. Basta leggere le loro testimonianze per capire che c'è molto di più dietro a uno studio \"visibile\"."
        }
      ]
    },
    {
      title: "Scetticismo e tentativi falliti",
      questions: [
        { 
          question: "Ho già fatto fisioterapia, ginnastica, tecar, massaggi… perché dovrei provare anche l'osteopatia?",
          answer: "Capiamo la tua frustrazione. L'osteopatia non sostituisce quello che hai già fatto, ma lo completa. Mentre altri approcci lavorano sui sintomi, noi andiamo alla radice del problema. Molti dei nostri pazienti arrivano proprio dopo aver provato tutto il resto. La differenza? Lavoriamo su tutto il corpo come un sistema integrato, non solo sulla parte che fa male."
        },
        { 
          question: "Nessuno è riuscito a capire da cosa viene il mio dolore, voi come fareste?",
          answer: "Il nostro approccio è diverso: non cerchiamo solo dove fa male, ma perché fa male. Attraverso una valutazione osteopatica completa, analizziamo le catene muscolari, le tensioni fasciali e le compensazioni che il tuo corpo ha creato. Spesso il dolore è solo l'effetto finale di un problema che si è sviluppato altrove nel corpo."
        },
        { 
          question: "E se il mio problema fosse troppo complicato anche per voi?",
          answer: "Non esistono casi 'troppo complicati', esistono solo approcci sbagliati. La nostra forza è proprio nella complessità: ogni osteopata di Mobilitas ha una formazione continua e si confronta regolarmente con casi difficili. Se un approccio non funziona, ne proviamo un altro. La nostra esperienza ci ha insegnato che ogni corpo ha la sua soluzione."
        },
        { 
          question: "Quanto tempo serve per vedere un vero cambiamento?",
          answer: "Dipende dal problema e da quanto tempo è presente. Alcuni pazienti sentono miglioramenti già dalla prima seduta, altri hanno bisogno di 3-4 trattamenti per vedere cambiamenti significativi. Quello che ti garantiamo è che ogni trattamento porta un progresso misurabile. Ti teniamo sempre informato sui tempi realistici per il tuo caso specifico."
        },
        { 
          question: "Trattate anche problemi cronici o solo dolori \"recenti\"?",
          answer: "Trattiamo entrambi, ma i problemi cronici sono spesso la nostra specialità. Quando un dolore è presente da tempo, il corpo ha creato compensazioni complesse che richiedono un approccio più articolato. La buona notizia? Anche i problemi cronici possono migliorare significativamente. Molti dei nostri pazienti più soddisfatti avevano dolori presenti da anni."
        },
        { 
          question: "Avete mai risolto casi gravi come il mio?",
          answer: "Ogni settimana risolviamo casi che sembravano impossibili. Dolori cronici, limitazioni funzionali, problemi che duravano da anni. La nostra esperienza ci ha insegnato che non esistono 'casi senza speranza'. Se vuoi, possiamo condividere con te alcune testimonianze di pazienti che erano nella tua stessa situazione e ora stanno bene."
        },
        { 
          question: "E se la colpa fosse della postura? Anche in quel caso potete aiutarmi?",
          answer: "La postura è spesso solo la punta dell'iceberg. Non è solo questione di 'stare dritti', ma di capire perché il tuo corpo ha assunto quella postura. Lavoriamo sulle cause profonde: tensioni muscolari, blocchi articolari, problemi di respirazione. Risolviamo questi, e la postura migliora naturalmente, senza sforzi forzati."
        },
        { 
          question: "Ho sempre avuto problemi di schiena, è troppo tardi per cambiare?",
          answer: "Non è mai troppo tardi. Il corpo ha una capacità di recupero straordinaria, anche dopo anni di problemi. Quello che conta è l'approccio giusto. Non ti promettiamo miracoli, ma ti garantiamo che possiamo migliorare significativamente la tua situazione. Molti dei nostri pazienti più motivati sono proprio quelli che hanno convissuto con il dolore per anni."
        },
        { 
          question: "I trattamenti vanno ripetuti per sempre o si arriva a una vera soluzione?",
          answer: "Il nostro obiettivo è sempre arrivare a una soluzione definitiva. Non vogliamo pazienti 'dipendenti' dai trattamenti. Il percorso ideale prevede una fase intensiva iniziale, poi controlli sempre più distanziati fino all'autonomia. Ti insegniamo anche esercizi e strategie per mantenere i risultati nel tempo."
        },
        { 
          question: "Lavorate solo sul corpo o anche su aspetti emotivi e stress?",
          answer: "Lavoriamo su tutto il sistema. Stress ed emozioni si somatizzano nel corpo creando tensioni, blocchi e dolori. Non facciamo psicoterapia, ma riconosciamo e trattiamo le manifestazioni fisiche dello stress. Spesso, risolvendo le tensioni del corpo, migliora anche l'umore e la gestione dello stress."
        }
      ]
    },
    {
      title: "Gravidanza e post-parto",
      questions: [
        { 
          question: "È sicuro fare osteopatia in gravidanza?",
          answer: "Assolutamente sì, anzi è molto consigliato. L'osteopatia in gravidanza è sicura e benefica sia per la mamma che per il bambino. Usiamo tecniche dolci e non invasive, adattate a ogni trimestre. Molte ostetriche ci consigliano alle loro pazienti proprio per la sicurezza e l'efficacia dei nostri trattamenti."
        },
        { 
          question: "In che modo il trattamento può aiutare il mio bambino?",
          answer: "Un corpo materno rilassato e in equilibrio crea l'ambiente ideale per lo sviluppo del bambino. Lavoriamo sulla mobilità del bacino, sulla respirazione e sulla circolazione, favorendo il posizionamento ottimale del feto. Molte mamme riferiscono che il bambino si muove più liberamente dopo i trattamenti."
        },
        { 
          question: "Cosa succede se dopo il trattamento sento dolore o fastidio?",
          answer: "È normale sentire qualche fastidio temporaneo dopo il primo trattamento, soprattutto se c'erano tensioni importanti. Il corpo si sta riadattando. Ti diamo sempre indicazioni precise su cosa aspettarti e come gestire eventuali reazioni. La maggior parte delle pazienti si sente subito più leggera e rilassata."
        },
        { 
          question: "Potete aiutarmi con dolori alla schiena, bacino o gambe gonfie?",
          answer: "Questi sono esattamente i problemi che risolviamo più spesso in gravidanza. I dolori lombari, la sciatalgia, i problemi al bacino e il gonfiore alle gambe sono molto comuni e rispondono molto bene all'osteopatia. Lavoriamo in modo specifico sui cambiamenti posturali e ormonali della gravidanza."
        },
        { 
          question: "Trattate anche problemi digestivi o reflusso in gravidanza?",
          answer: "Sì, l'osteopatia può essere molto efficace per problemi digestivi, reflusso e nausea. Lavoriamo sul diaframma, sulla mobilità gastrica e sulle tensioni che possono influenzare la digestione. Molte pazienti riferiscono un miglioramento significativo di questi sintomi."
        },
        { 
          question: "Serve fare più trattamenti o basta una volta sola?",
          answer: "Dipende dal problema e dal trimestre. Per dolori acuti, spesso bastano 2-3 trattamenti ravvicinati. Per un percorso di benessere completo, consigliamo trattamenti mensili durante tutta la gravidanza. Ti proponiamo sempre il percorso più adatto alla tua situazione specifica."
        },
        { 
          question: "È meglio iniziare presto in gravidanza o verso la fine?",
          answer: "È meglio iniziare presto! Il primo trimestre è ideale per preparare il corpo ai cambiamenti che verranno. Ma non è mai troppo tardi: anche iniziando nel terzo trimestre possiamo fare molto per alleviare i fastidi e preparare il corpo al parto."
        },
        { 
          question: "Posso continuare i trattamenti anche dopo il parto?",
          answer: "Assolutamente sì, anzi è molto consigliato. Il post-parto è un momento delicato in cui il corpo si riadatta. L'osteopatia aiuta con i dolori da allattamento, la ripresa della mobilità del bacino, i problemi posturali legati al portare il bambino. Molte mamme continuano anche per il benessere generale."
        },
        { 
          question: "Fate trattamenti anche ai neonati?",
          answer: "Sì, l'osteopatia pediatrica è una delle nostre specialità. I neonati possono beneficiare enormemente da trattamenti delicati per problemi di suzione, coliche, plagiocefalia, disturbi del sonno. I trattamenti sono estremamente dolci e i bambini spesso si rilassano completamente durante la seduta."
        },
        { 
          question: "È possibile prevenire problemi nel parto con l'osteopatia?",
          answer: "L'osteopatia può aiutare molto nella preparazione al parto. Lavoriamo sulla mobilità del bacino, sulla respirazione e sulla preparazione dei tessuti. Questo può favorire un travaglio più fisiologico e ridurre la necessità di interventi. Molte ostetriche ci consigliano proprio per questo."
        }
      ]
    },
    {
      title: "Sedentarietà e lavoro da scrivania",
      questions: [
        { 
          question: "Ho sempre male alla schiena e sto seduto tutto il giorno. Cosa potete fare per me?",
          answer: "Il lavoro sedentario è una delle cause principali di mal di schiena. L'osteopatia è perfetta per questo problema perché lavoriamo sulle tensioni che si creano stando seduti, sulla mobilità del bacino e sulla postura. Molti dei nostri pazienti sono professionisti che lavorano al computer e vedono miglioramenti significativi già dalle prime sedute."
        },
        { 
          question: "Il dolore cervicale può dipendere solo dalla postura?",
          answer: "La postura è spesso la causa principale, ma non l'unica. Lavoriamo su tutto il sistema: tensioni muscolari, blocchi articolari, problemi di respirazione e stress. Il dolore cervicale da computer è uno dei problemi che risolviamo più frequentemente. Spesso bastano pochi trattamenti per vedere un miglioramento importante."
        },
        { 
          question: "Anche se faccio stretching tutti i giorni, non cambia nulla. Dove sbaglio?",
          answer: "Lo stretching è utile, ma se non funziona significa che il problema è più profondo. Probabilmente ci sono blocchi articolari o tensioni fasciali che lo stretching da solo non può risolvere. L'osteopatia lavora su questi blocchi, poi lo stretching diventa molto più efficace. Ti insegniamo anche gli esercizi giusti per il tuo caso specifico."
        },
        { 
          question: "Se lavoro 10 ore al giorno al computer, serve a qualcosa fare un trattamento?",
          answer: "Assolutamente sì! Anzi, più lavori al computer, più ne hai bisogno. I trattamenti osteopatici sono come la manutenzione per il tuo corpo. Ti aiutiamo a compensare gli effetti negativi del lavoro sedentario e ti diamo strategie per lavorare in modo più ergonomico. Molti pazienti riferiscono di essere più produttivi e concentrati dopo i trattamenti."
        },
        { 
          question: "Potete aiutarmi anche se non riesco ad allenarmi?",
          answer: "Certo! L'osteopatia è perfetta per chi non può fare sport. Lavoriamo sulla mobilità, sulla circolazione e sul benessere generale senza bisogno di sforzi fisici. Anzi, spesso i trattamenti ti fanno sentire meglio e più energico, e magari poi ti viene voglia di muoverti di più. Ti accompagniamo in un percorso graduale verso uno stile di vita più attivo."
        },
        { 
          question: "Ho spesso mal di testa dopo il lavoro. Può c'entrare la cervicale?",
          answer: "Sì, molto spesso! I mal di testa da tensione cervicale sono molto comuni in chi lavora al computer. L'osteopatia è molto efficace per questo tipo di cefalea. Lavoriamo sulle tensioni del collo, delle spalle e del cranio. Molti pazienti vedono una riduzione significativa della frequenza e intensità degli attacchi."
        },
        { 
          question: "Potete darmi anche esercizi o cose da fare a casa?",
          answer: "Assolutamente sì! Ti diamo sempre consigli personalizzati per il tuo caso specifico: esercizi di stretching, posture da mantenere al lavoro, pause da fare durante la giornata. L'idea è che tu diventi autonomo nella gestione del tuo benessere. Ti diamo anche consigli ergonomici per la tua postazione di lavoro."
        },
        { 
          question: "È normale sentire tensione anche di notte?",
          answer: "No, non è normale. Se senti tensione anche di notte significa che il corpo non riesce a rilassarsi completamente. L'osteopatia aiuta molto con i problemi del sonno legati alle tensioni muscolari. Molti pazienti riferiscono di dormire meglio e svegliarsi più riposati dopo i trattamenti."
        },
        { 
          question: "Trattate anche stress e ansia legati al lavoro?",
          answer: "Sì, lo stress lavorativo si somatizza spesso nel corpo creando tensioni, dolori e mal di testa. L'osteopatia aiuta a gestire le manifestazioni fisiche dello stress. Non facciamo psicoterapia, ma lavoriamo sul corpo per aiutarti a sentirti più rilassato e gestire meglio le pressioni lavorative."
        },
        { 
          question: "Serve venire spesso o bastano pochi trattamenti mirati?",
          answer: "Dipende dalla situazione. Per problemi acuti spesso bastano 3-4 trattamenti ravvicinati. Per chi lavora molto al computer, consigliamo trattamenti di mantenimento ogni 4-6 settimane per prevenire l'accumulo di tensioni. Ti proponiamo sempre il percorso più adatto alle tue esigenze e al tuo budget."
        }
      ]
    },
    {
      title: "Non ho dolori, ma mi sento rigido",
      questions: [
        { 
          question: "Anche se non ho dolore fisso, posso comunque venire da voi?",
          answer: "Assolutamente sì! Anzi, è il momento ideale per venire. L'osteopatia non è solo per chi ha dolori, ma per chi vuole mantenere il corpo in equilibrio e prevenire problemi futuri. Molti dei nostri pazienti più soddisfatti sono proprio quelli che vengono per prevenzione e benessere generale."
        },
        { 
          question: "Mi sento sempre stanco e rigido, potete aiutarmi anche senza diagnosi?",
          answer: "Certo! La stanchezza e la rigidità sono spesso segnali che il corpo non funziona al meglio. L'osteopatia lavora proprio su questi aspetti: migliora la circolazione, la mobilità e l'energia generale. Non serve una diagnosi medica per sentirsi meglio e più vitali."
        },
        { 
          question: "È vero che il corpo si irrigidisce col tempo anche senza infortuni?",
          answer: "Sì, è normale che con l'età il corpo perda mobilità, ma non è inevitabile! L'osteopatia aiuta a mantenere la flessibilità e la mobilità articolare. Molti pazienti si sorprendono di quanto giovane e agile si sentano dopo i trattamenti, indipendentemente dall'età."
        },
        { 
          question: "L'osteopatia può aiutare a migliorare le performance fisiche o mentali?",
          answer: "Assolutamente sì! Un corpo in equilibrio funziona meglio in tutti gli aspetti. Migliora la circolazione, la respirazione, la concentrazione e l'energia. Molti atleti e professionisti vengono da noi proprio per ottimizzare le loro performance. Anche chi non fa sport può beneficiare di maggiore vitalità e benessere."
        },
        { 
          question: "Posso fare trattamenti solo per \"prevenzione\"?",
          answer: "Certo! La prevenzione è una delle cose migliori che puoi fare per il tuo corpo. Trattamenti regolari di mantenimento aiutano a prevenire problemi futuri e a mantenere il benessere generale. È molto più facile e meno costoso prevenire che curare."
        },
        { 
          question: "Cosa significa che il problema è \"strutturale\" e non solo muscolare?",
          answer: "Significa che il problema coinvolge le articolazioni, le ossa e le connessioni tra le diverse parti del corpo, non solo i muscoli. L'osteopatia lavora proprio su questi aspetti strutturali, ripristinando la mobilità e l'equilibrio di tutto il sistema. È un approccio più completo e duraturo."
        },
        { 
          question: "Trattate anche la respirazione e il diaframma?",
          answer: "Sì, la respirazione è fondamentale per il benessere generale. Lavoriamo molto sul diaframma e sulla respirazione perché influenzano tutto: la postura, la circolazione, la digestione, lo stress. Molti pazienti riferiscono di respirare meglio e sentirsi più rilassati dopo i trattamenti."
        },
        { 
          question: "Sentirsi bloccati a livello del corpo può influenzare anche l'umore?",
          answer: "Assolutamente sì! Corpo e mente sono strettamente connessi. Quando il corpo è rigido e bloccato, anche l'umore ne risente. L'osteopatia aiuta a liberare queste tensioni, migliorando non solo la mobilità fisica ma anche il benessere emotivo e la vitalità generale."
        },
        { 
          question: "Che differenza c'è tra un massaggio e un trattamento osteopatico?",
          answer: "Il massaggio lavora principalmente sui muscoli, l'osteopatia lavora su tutto il sistema: articolazioni, ossa, organi, circolazione. È un approccio più completo che va alla radice dei problemi. Inoltre, l'osteopata fa una valutazione specifica e personalizza il trattamento per le tue esigenze."
        },
        { 
          question: "Posso migliorare la mia postura anche se ho più di 40 anni?",
          answer: "Assolutamente sì! Non è mai troppo tardi per migliorare la postura. L'osteopatia lavora sulle cause profonde dei problemi posturali, non solo sui sintomi. Molti pazienti over 40 vedono miglioramenti significativi nella postura e si sentono più giovani e vitali."
        }
      ]
    },
    {
      title: "Durata, frequenza e continuità dei trattamenti",
      questions: [
        { 
          question: "Quanti trattamenti servono per vedere un miglioramento?",
          answer: "Dipende dal problema e da quanto tempo è presente. Per problemi acuti spesso bastano 2-3 trattamenti ravvicinati. Per problemi cronici possono servire 4-6 trattamenti. Ti diamo sempre una stima realistica dopo la prima valutazione. L'importante è che ogni trattamento porti un progresso misurabile."
        },
        { 
          question: "Ogni quanto devo fare i trattamenti?",
          answer: "Per problemi acuti consigliamo trattamenti ravvicinati (1-2 volte a settimana). Per problemi cronici o di mantenimento, ogni 2-4 settimane. Ti proponiamo sempre il piano più adatto alla tua situazione. L'importante è la continuità iniziale per consolidare i risultati."
        },
        { 
          question: "Una volta che sto meglio, devo continuare a venire?",
          answer: "Non è obbligatorio, ma consigliamo controlli di mantenimento ogni 2-3 mesi per prevenire ricadute. Molti pazienti scelgono di continuare perché si sentono meglio e vogliono mantenere il benessere. Ti insegniamo anche esercizi per essere autonomo nella gestione del tuo benessere."
        },
        { 
          question: "Se salto un appuntamento, vanifico il percorso?",
          answer: "No, non vanifica tutto, ma può rallentare i progressi. La continuità è importante soprattutto nella fase iniziale. Se salti un appuntamento, riprogrammiamo il più presto possibile. Ti teniamo sempre informato su come gestire eventuali interruzioni del percorso."
        },
        { 
          question: "Posso fare un solo trattamento \"di prova\" per capire com'è?",
          answer: "Certo! Molti pazienti iniziano con un trattamento di prova. Ti facciamo una valutazione completa e un primo trattamento per farti capire il nostro approccio. Poi decidi tu se continuare. Spesso già dal primo trattamento si sentono differenze significative."
        }
      ]
    },
    {
      title: "Costi, offerte e pagamenti",
      questions: [
        { 
          question: "Quanto costa una visita osteopatica da voi?",
          answer: "Il costo varia a seconda del tipo di trattamento e della durata. Ti diamo sempre un preventivo chiaro prima di iniziare. Considera che investire nella tua salute è sempre la scelta migliore. Molti pazienti ci dicono che i benefici superano di gran lunga il costo del trattamento."
        },
        { 
          question: "Ci sono offerte per la prima visita?",
          answer: "Sì, spesso abbiamo promozioni per la prima visita o per pacchetti di trattamenti. Ti consigliamo di chiamarci per conoscere le offerte attuali. L'importante è iniziare il percorso giusto per il tuo benessere."
        },
        { 
          question: "I trattamenti sono detraibili o coperti da assicurazione?",
          answer: "Sì, le spese osteopatiche sono detraibili fiscalmente come spese sanitarie. Inoltre, molte assicurazioni sanitarie private rimborsano i trattamenti osteopatici. Ti aiutiamo anche con la documentazione per la detrazione fiscale."
        },
        { 
          question: "Posso pagare anche a rate o a pacchetti?",
          answer: "Sì, offriamo diverse modalità di pagamento per rendere i trattamenti accessibili. Pacchetti di trattamenti con sconti, pagamenti rateizzati, diverse opzioni per adattarci alle tue esigenze. L'importante è che tu possa prenderti cura della tua salute."
        },
        { 
          question: "Se porto un amico, ci sono sconti?",
          answer: "Sì, abbiamo programmi di referral per chi porta amici e parenti. La salute è importante per tutti, e siamo felici di estendere i nostri servizi a chi ti sta a cuore. Chiamaci per conoscere i dettagli delle nostre promozioni referral."
        }
      ]
    },
    {
      title: "Neonati, bambini e adolescenti",
      questions: [
        { 
          question: "Perché far trattare un neonato se non ha dolori?",
          answer: "I neonati possono beneficiare enormemente dall'osteopatia anche senza dolori evidenti. Il parto può creare tensioni e compressioni che influenzano lo sviluppo. Trattamenti precoci possono prevenire problemi futuri e favorire uno sviluppo ottimale. I trattamenti sono estremamente dolci e i bambini spesso si rilassano completamente."
        },
        { 
          question: "Da che età si può iniziare con l'osteopatia?",
          answer: "Si può iniziare fin dai primi giorni di vita. L'osteopatia pediatrica è molto delicata e adatta a ogni età. Più si inizia presto, più si possono prevenire problemi futuri. Trattiamo neonati, bambini e adolescenti con approcci specifici per ogni fascia d'età."
        },
        { 
          question: "Aiutate anche con coliche, plagiocefalia o problemi di suzione?",
          answer: "Sì, questi sono problemi molto comuni che rispondono molto bene all'osteopatia pediatrica. Le coliche, la plagiocefalia e i problemi di suzione spesso hanno cause meccaniche che l'osteopatia può risolvere. I trattamenti sono delicati e spesso i bambini si rilassano durante la seduta."
        },
        { 
          question: "L'osteopatia può aiutare i bambini con postura o scoliosi?",
          answer: "Sì, l'osteopatia può essere molto utile per problemi posturali e scoliosi lievi. Lavoriamo sulla mobilità della colonna e su tutto il sistema posturale. È importante intervenire precocemente per prevenire peggioramenti. Spesso lavoriamo in collaborazione con ortopedici e fisioterapisti per risultati ottimali."
        },
        { 
          question: "Trattate anche adolescenti con problemi sportivi o tensioni da studio?",
          answer: "Assolutamente sì! Gli adolescenti hanno esigenze specifiche: sport intensi, ore di studio, crescita rapida. L'osteopatia aiuta con dolori da crescita, problemi sportivi, tensioni da studio e postura. È un'età ideale per prevenire problemi futuri e ottimizzare le performance."
        }
      ]
    },
    {
      title: "Stress, emozioni e traumi",
      questions: [
        { 
          question: "Il mio problema potrebbe essere legato allo stress?",
          answer: "Molto probabilmente sì. Lo stress si somatizza nel corpo creando tensioni, dolori e disfunzioni. L'osteopatia lavora proprio su questi aspetti: tensioni muscolari, blocchi articolari, problemi di respirazione. Spesso, risolvendo le tensioni del corpo, migliora anche la gestione dello stress."
        },
        { 
          question: "Trattate anche disturbi come ansia, fiato corto o tensione al petto?",
          answer: "Sì, questi sono disturbi molto comuni legati allo stress e alle tensioni. Lavoriamo sul diaframma, sulla respirazione e sulle tensioni del torace. Non facciamo psicoterapia, ma trattiamo le manifestazioni fisiche di ansia e stress. Molti pazienti riferiscono di respirare meglio e sentirsi più rilassati."
        },
        { 
          question: "Si può liberare il corpo da traumi emotivi anche se non li ricordo?",
          answer: "Sì, il corpo ricorda tutto, anche quello che la mente ha dimenticato. I traumi emotivi si imprimono nel corpo come tensioni e blocchi. L'osteopatia può aiutare a liberare queste tensioni, anche senza dover rivivere i traumi. È un lavoro delicato ma molto efficace."
        },
        { 
          question: "Che legame c'è tra il diaframma e le emozioni?",
          answer: "Il diaframma è strettamente connesso alle emozioni. Quando siamo stressati o ansiosi, il diaframma si contrae e la respirazione diventa superficiale. Lavorando sul diaframma, miglioriamo la respirazione e questo ha effetti positivi sull'umore e sulla gestione delle emozioni."
        },
        { 
          question: "L'osteopatia può aiutare con la stanchezza cronica?",
          answer: "Sì, la stanchezza cronica spesso ha cause fisiche che l'osteopatia può trattare. Problemi di circolazione, tensioni muscolari, disfunzioni del sistema nervoso. Lavoriamo su tutto il sistema per migliorare l'energia e la vitalità. Molti pazienti riferiscono di sentirsi più energici dopo i trattamenti."
        }
      ]
    },
    {
      title: "Diagnosi, esami e visite specialistiche",
      questions: [
        { 
          question: "Avete bisogno di vedere i miei esami prima di trattarmi?",
          answer: "Non è obbligatorio, ma è molto utile. Gli esami ci aiutano a capire meglio la tua situazione e a lavorare in modo più mirato. Se hai esami recenti, portali pure. Se non li hai, non è un problema: facciamo una valutazione osteopatica completa che ci dà tutte le informazioni necessarie."
        },
        { 
          question: "Se ho fatto risonanze o TAC, vi possono servire?",
          answer: "Sì, assolutamente! Le risonanze e le TAC ci danno informazioni preziose sulla struttura del tuo corpo. Ci aiutano a capire meglio il problema e a scegliere l'approccio più adatto. Se le hai, portale pure: le leggiamo e le integriamo nella nostra valutazione."
        },
        { 
          question: "Lavorate anche in collaborazione con medici?",
          answer: "Sì, lavoriamo spesso in collaborazione con medici, fisioterapisti e altri professionisti sanitari. L'approccio multidisciplinare è spesso il migliore per risultati ottimali. Se necessario, ti consigliamo di consultare altri specialisti e manteniamo la comunicazione per un percorso coordinato."
        },
        { 
          question: "E se ho una diagnosi medica, potete comunque trattarmi?",
          answer: "Assolutamente sì! Anzi, è ancora meglio. Una diagnosi medica ci aiuta a capire meglio la situazione e a lavorare in modo più mirato. L'osteopatia è complementare alla medicina, non in alternativa. Spesso lavoriamo su problemi che la medicina ha già identificato."
        },
        { 
          question: "Posso venire anche se non ho ancora capito da dove viene il mio problema?",
          answer: "Certo! Anzi, è proprio il nostro lavoro capire da dove viene il problema. La valutazione osteopatica è molto approfondita e spesso riusciamo a identificare cause che altri approcci non hanno trovato. Venire da noi può essere il primo passo per capire cosa sta succedendo."
        }
      ]
    },
    {
      title: "Sicurezza e sensazioni dopo il trattamento",
      questions: [
        { 
          question: "I trattamenti fanno male?",
          answer: "No, i trattamenti osteopatici sono generalmente molto dolci e non dolorosi. Usiamo tecniche delicate e non invasive. Se una tecnica dovesse causare fastidio, la modifichiamo o ne usiamo un'altra. Il comfort del paziente è sempre la nostra priorità."
        },
        { 
          question: "Potete farmi del male se sbagliate qualcosa?",
          answer: "I rischi sono minimi. Prima di ogni trattamento facciamo una valutazione accurata per escludere controindicazioni. Usiamo tecniche sicure e non invasive. Se rileviamo qualcosa che potrebbe essere rischioso, ti consigliamo di consultare il medico prima di procedere."
        },
        { 
          question: "Cosa succede se dopo il trattamento mi sento peggio?",
          answer: "È raro, ma può succedere. A volte il corpo ha bisogno di tempo per riadattarsi dopo il trattamento. Ti diamo sempre indicazioni precise su cosa aspettarti. Se dovessi sentirti peggio, contattaci subito: siamo sempre disponibili per chiarimenti e supporto."
        },
        { 
          question: "È normale sentire dolore il giorno dopo?",
          answer: "Può succedere, soprattutto dopo il primo trattamento o se c'erano tensioni importanti. È una reazione normale del corpo che si sta riadattando. Ti diamo sempre indicazioni su come gestire eventuali fastidi temporanei. La maggior parte dei pazienti si sente subito meglio."
        },
        { 
          question: "L'osteopatia è adatta anche agli anziani o a chi ha patologie?",
          answer: "Sì, l'osteopatia è adatta a tutte le età e a molte condizioni patologiche. Usiamo tecniche delicate e adattiamo l'approccio a ogni situazione specifica. Se hai patologie particolari, facciamo una valutazione accurata e, se necessario, ti consigliamo di consultare il medico prima del trattamento."
        }
      ]
    },
    {
      title: "Logistica, appuntamenti e prima visita",
      questions: [
        { 
          question: "Dove vi trovate esattamente?",
          answer: "Ci troviamo in Via Peyron 54 a Torino. Siamo facilmente raggiungibili con i mezzi pubblici (anche la metropolitana) e in auto. Ti inviamo sempre le indicazioni precise quando prenoti l'appuntamento. Se hai difficoltà a trovarci, chiamaci e ti guidiamo al telefono."
        },
        { 
          question: "C'è parcheggio vicino allo studio?",
          answer: "Sì, ci sono diverse opzioni di parcheggio nelle vicinanze. Ti diamo sempre le indicazioni più aggiornate quando prenoti. Se hai difficoltà con il parcheggio, chiamaci e ti aiutiamo a trovare la soluzione migliore."
        },
        { 
          question: "Devo portare qualcosa per la prima visita?",
          answer: "Porta pure eventuali esami recenti, prescrizioni mediche o documentazione sanitaria. Non è obbligatorio, ma ci aiuta a capire meglio la tua situazione. Porta anche un documento d'identità per la registrazione. Il resto lo facciamo noi."
        },
        { 
          question: "Posso venire in abiti normali o servono indumenti specifici?",
          answer: "Puoi venire in abiti normali, comodi e che si possano togliere facilmente. Ti forniamo sempre un camice o un telo per il trattamento. L'importante è che tu ti senta a tuo agio. Evita abiti troppo stretti o con molti bottoni."
        },
        { 
          question: "Cosa succede nella prima visita?",
          answer: "La prima visita dura circa 60-75 minuti. Iniziamo con un colloquio approfondito per capire il tuo problema, poi facciamo una valutazione osteopatica completa. Infine, se appropriato, facciamo il primo trattamento. Ti spieghiamo sempre tutto quello che stiamo facendo e perché."
        },
        { 
          question: "Quanto dura ogni trattamento?",
          answer: "I trattamenti successivi durano circa 45-60 minuti. Il tempo dipende dal tipo di problema e dalle tecniche che usiamo. Ti diamo sempre un'indicazione precisa quando prenoti. L'importante è che tu abbia tutto il tempo necessario per il tuo benessere."
        },
        { 
          question: "Posso venire anche se non sono di Torino?",
          answer: "Assolutamente sì! Abbiamo pazienti che vengono da tutta Italia. Se vieni da lontano, possiamo organizzare trattamenti più intensivi in pochi giorni. Ti aiutiamo anche con consigli su dove alloggiare se necessario. La tua salute vale il viaggio."
        },
        { 
          question: "Posso prenotare online o solo al telefono?",
          answer: "Puoi prenotare sia online che al telefono. Online è più veloce e puoi vedere subito le disponibilità. Al telefono possiamo darti consigli personalizzati e rispondere a tutte le tue domande. Scegli il metodo che preferisci."
        },
        { 
          question: "Se ho bisogno urgente, posso trovare un appuntamento in giornata?",
          answer: "Cerchiamo sempre di accogliere le urgenze. Se hai un dolore acuto o un problema urgente, chiamaci e vediamo cosa possiamo fare. Spesso riusciamo a trovare un posto anche lo stesso giorno. La tua salute è la nostra priorità."
        },
        { 
          question: "Posso scegliere l'osteopata o mi viene assegnato?",
          answer: "Ovviamente puoi scegliere l'osteopata che preferisci, ma è meglio seguire la nostra indicazione per l'osteopata più adeguato a te. Se non hai preferenze, ti assegniamo quello più adatto al tuo problema. Tutti i nostri osteopati sono altamente qualificati e lavorano con lo stesso metodo. L'importante è che tu ti senta a tuo agio."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold text-blue-dark mb-6 font-montserrat">
            Domande Frequenti
          </h1>
          <p className="text-xl text-blue-dark/80 max-w-3xl font-montserrat">
            Trova risposte alle domande più comuni sui nostri servizi osteopatici, 
            i trattamenti e tutto quello che devi sapere prima di prenotare la tua visita.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-dark mb-6 font-montserrat border-b-2 border-green-primary pb-2">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, questionIndex) => {
                  const isOpen = openItems[`${sectionIndex}-${questionIndex}`]
                  const question = typeof item === 'string' ? item : item.question
                  const answer = typeof item === 'object' && item.answer ? item.answer : null
                  
                  return (
                    <div key={questionIndex} className="bg-cream border border-blue-dark/10 rounded-xl shadow-sm">
                      <button
                        onClick={() => toggleItem(sectionIndex, questionIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-dark/5 transition-colors duration-200 rounded-xl"
                      >
                        <span className="text-lg font-medium text-blue-dark font-montserrat pr-4">
                          {question}
                        </span>
                        <div className="flex-shrink-0">
                          <svg
                            className={`w-5 h-5 text-green-primary transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-blue-dark/10 pt-4">
                            <p className="text-blue-dark/80 font-montserrat leading-relaxed">
                              {answer || "Risposta in arrivo..."}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
