# Palette Colori Mobilitas

## Colori Principali

- **Blu Scuro**: `#002552` - Colore aziendale principale
- **Azzurro Scuro**: `#0ea5e9` - Colore di accento e varietà
- **Verde**: `#72fa93` - Colore di accento e call-to-action
- **Panna**: `#F4F4F4` - Colore di sfondo neutro

## Utilizzo nei Componenti

### Classi CSS Personalizzate

```css
/* Background */
.bg-blue-dark    /* Sfondo blu scuro */
.bg-green        /* Sfondo verde */
.bg-cream        /* Sfondo panna */

/* Testo */
.text-blue-dark  /* Testo blu scuro */
.text-green      /* Testo verde */
.text-cream      /* Testo panna */

/* Bordi */
.border-blue-dark /* Bordo blu scuro */
.border-green     /* Bordo verde */
.border-cream     /* Bordo panna */

/* Gradiente */
.gradient-text    /* Testo con gradiente verde → blu scuro */
```

### Classi Tailwind

```css
/* Background */
bg-blue-dark
bg-green
bg-cream

/* Testo */
text-blue-dark
text-green
text-cream

/* Bordi */
border-blue-dark
border-green
border-cream
```

### Variabili CSS

```css
:root {
  --color-blue-dark: #002552;
  --color-green: #72fa93;
  --color-cream: #F4F4F4;
}
```

## Font

Tutto il testo utilizza il font **Montserrat** con i seguenti pesi disponibili:
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (SemiBold)
- 700 (Bold)
- 800 (ExtraBold)
- 900 (Black)

## Regole di Contrasto

### ✅ **Sfondo Blu Scuro**
- **Testo principale**: Panna (#F4F4F4)
- **Testo di accento**: Panna (#F4F4F4) - mai verde su blu
- **Elementi interattivi**: Panna su blu

### ✅ **Sfondo Panna**
- **Testo principale**: Blu scuro (#002552)
- **Testo di accento**: Blu scuro (#002552) - mai verde su panna
- **Elementi interattivi**: Blu scuro su panna

### ❌ **Colori Vietati**
- **Verde su sfondi chiari**: Mai usare il verde su panna/bianco
- **Grigio**: Completamente rimosso dalla palette
- **Colori non brand**: Solo blu scuro, panna e verde (quest'ultimo solo su blu)

## Modifiche Implementate

✅ **Regole di contrasto corrette**: Implementate le regole di contrasto per leggibilità ottimale
✅ **Sfondo blu unificato**: Tutti gli sfondi scuri usano il blu aziendale
✅ **Testo panna su blu**: Massimo contrasto per leggibilità
✅ **Verde solo su blu/panna**: Il verde non viene mai usato su sfondi chiari
✅ **Font unificato**: Solo Montserrat utilizzato in tutto il progetto
✅ **Palette coerente**: Tutti i componenti rispettano le regole di contrasto

## Sezioni Aggiornate

- **HeroSection**: Sfondo blu scuro, accenti verdi
- **ProblemSection**: Problemi in blu scuro, soluzioni in verde
- **WhySection**: Sfondo panna/verde chiaro, accenti verdi
- **ExperienceSection**: Card con colori alternati verde/blu scuro
- **OfferSection**: Sfondo blu scuro, pacchetti con accenti verdi
- **FAQSection**: Sfondo panna, accenti verdi
- **ClosingSection**: Sfondo blu scuro, call-to-action verdi
