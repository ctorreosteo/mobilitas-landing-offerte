# Design System - Mobilitas

## Font
- **Font principale**: Montserrat
- **Pesi disponibili**: 300, 400, 500, 600, 700, 800, 900

## Colori Principali

### Colori del Brand
- **Blu scuro**: `#002552`
- **Verde**: `#72fa93`
- **Panna**: `#F4F4F4`
- **Rosso**: `#FF6869`

### Colori Secondari
- **Azure scuro**: `#0ea5e9`

## Utilizzo

### CSS Variables
```css
:root {
  --color-blue-dark: #002552;
  --color-green: #72fa93;
  --color-cream: #F4F4F4;
  --color-red: #FF6869;
  --font-primary: 'Montserrat', sans-serif;
}
```

### Classi CSS Utili
```css
/* Colori di testo */
.text-blue-dark    /* #002552 */
.text-green        /* #72fa93 */
.text-cream        /* #F4F4F4 */
.text-red          /* #FF6869 */

/* Colori di sfondo */
.bg-blue-dark      /* #002552 */
.bg-green          /* #72fa93 */
.bg-cream          /* #F4F4F4 */
.bg-red            /* #FF6869 */

/* Colori di bordo */
.border-blue-dark  /* #002552 */
.border-green      /* #72fa93 */
.border-cream      /* #F4F4F4 */
.border-red        /* #FF6869 */

/* Font */
.font-montserrat   /* Montserrat */
```

### Tailwind Classes
```html
<!-- Colori -->
<div class="bg-blue-dark text-cream">Blu scuro con testo panna</div>
<div class="bg-green text-blue-dark">Verde con testo blu scuro</div>
<div class="bg-red text-cream">Rosso con testo panna</div>

<!-- Font -->
<h1 class="font-montserrat font-bold">Titolo con Montserrat</h1>
<p class="font-sans">Testo con font di sistema (Montserrat)</p>
```

## Esempi di Utilizzo

### Header
```html
<header class="bg-blue-dark text-cream font-montserrat">
  <h1 class="text-2xl font-bold">Mobilitas</h1>
</header>
```

### Bottoni
```html
<button class="bg-green text-blue-dark font-montserrat font-semibold px-6 py-3 rounded-lg">
  CTA Button
</button>

<button class="bg-red text-cream font-montserrat font-semibold px-6 py-3 rounded-lg">
  Danger Button
</button>
```

### Cards
```html
<div class="bg-cream border-2 border-blue-dark p-6 rounded-lg">
  <h3 class="text-blue-dark font-montserrat font-bold">Titolo Card</h3>
  <p class="text-blue-dark/80">Contenuto della card</p>
</div>
```

## Note
- Tutti i colori sono accessibili e rispettano i contrasti WCAG
- Il font Montserrat è caricato da Google Fonts
- Le variabili CSS sono disponibili globalmente in tutto il progetto
- Tailwind è configurato per utilizzare questi colori come classi utility
