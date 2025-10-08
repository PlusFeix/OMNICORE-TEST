# 🏆 Omnicore Service - Piattaforma Digitale per le Eccellenze Sarde

## ✨ Panoramica

**Omnicore Service** è la piattaforma digitale più completa della Sardegna per connettere aziende locali con migliaia di clienti. Design luxury minimalist con **palette oro e nero**, contrasti forti, video hero, galleria delle città sarde e sezione dedicata al CEO.

## 🎨 Design Highlights

### Palette Colori (Strong Contrast)
- **Bianco**: `#FFFFFF` - Background principale
- **Nero Intenso**: `#0F0F0F` - Testo principale (contrasto 14:1)
- **Gold Luxury**: `#C19A38` - Accento primario
- **Gold Hover**: `#A67C2B` - Stati hover
- **Warm Gray**: `#F5F5F5` - Background alternativo
- **Divider**: `#D4D4D4` - Separatori

### Tipografia
- **Headings**: Playfair Display (Serif luxury)
- **Body**: Inter (Modern sans-serif)

### Effetti
- **Bordi**: 2px solid per maggior contrasto
- **Ombre**: Più pronunciate per depth
- **Animazioni**: 200ms fluide
- **Border Radius**: 16px (2xl)

## 🚀 Nuove Feature

### 1. **Video Hero Integrato**
- Video introduttivo nella hero section
- Overlay con play button elegante
- Autoplay al click con controlli nativi
- Poster image placeholder

### 2. **Galleria Città Sarde**
- 6 città showcase: Alghero, Cagliari, Costa Smeralda, Olbia, Sassari, Bosa
- Immagini HD con overlay descriptions
- Hover effect con transform scale
- Layout responsive grid

### 3. **Sezione About CEO**
- Biografia del fondatore
- Foto professionale con badge CEO
- 3 statistiche chiave (Anno, Aziende, Esperienza)
- Link social media integrati
- Design 2-column responsive

### 4. **Contrasto Migliorato**
- Testo nero intenso (#0F0F0F) su bianco
- Bordi 2px invece di 1px
- Ombre più pronunciate
- Focus rings più visibili
- WCAG AAA compliance

## 📁 Struttura Progetto

```
omnicore/
├── index.html          # Landing page completa
├── css/
│   └── style.css       # Stile luxury gold (2000+ linee)
├── js/
│   └── app.js          # Logica interattiva
└── README.md           # Documentazione
```

## 🎯 Sezioni Principali

### Header Sticky
- Logo + navigazione
- Bottoni Accedi/Registrati
- Hamburger menu responsive
- Blur backdrop effect

### Hero Section
- Titolo impattante con gold accent
- Video hero con controls
- 2 CTA buttons (primary + outline)
- Trust badges (sicurezza, privacy, SSL)
- Scroll indicator animato

### Stats Banner
- 4 card statistiche animate
- Counter animati al scroll
- Layout responsive
- Background warm gray

### Features Grid
- 6 feature cards con icone
- Hover effects con transform
- Icone outline che diventano filled
- Descrizioni dettagliate

### Galleria Città
- Grid 3 colonne (responsive)
- Immagini HD con aspect ratio 4:3
- Overlay con titolo e descrizione
- AOS animations

### Testimonials
- 3 recensioni clienti
- Rating stars gold
- Avatar circolari
- Card con hover effect

### Business Catalog
- Search + filtri categoria/location
- 8 business cards sample
- Immagini, rating, info contatto
- Hover effect con border gold

### Mappa Interattiva
- Leaflet.js integration
- Custom gold markers
- Filtri categoria
- Popup informativi
- 700px height desktop

### About CEO
- Layout 2-column (immagine + contenuto)
- Badge CEO su immagine
- 3 statistiche key
- 4 social links
- Biografia completa

### CTA Section
- Background nero con radial gradient gold
- 2 bottoni CTA
- 3 benefit features
- Border top gold 3px

### Footer
- Background nero intenso (#0A0A0A)
- 4 colonne info
- Social links circolari
- Border top gold
- Copyright

## 🛠 Tecnologie

- **HTML5**: Semantico e accessibile
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript ES6+**: Vanilla JS ottimizzato
- **Leaflet.js 1.9.4**: Mappe interattive
- **Font Awesome 6.4**: Icone
- **AOS 2.3**: Scroll animations
- **Google Fonts**: Playfair Display + Inter

## ⚡ Features Avanzate

### Performance
- Lazy loading immagini
- Debouncing su ricerca
- IntersectionObserver per stats
- Minified assets ready

### UX/UI
- Micro-animations 200ms
- Smooth scroll
- Keyboard navigation
- Focus visible states

### Responsive
- **Desktop**: 1280px+ 
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 767px
- Touch-friendly buttons

## 🎨 Componenti Riutilizzabili

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline">Outline</button>
```

### Section Headers
```html
<div class="section-header">
    <span class="section-badge">Badge</span>
    <h2 class="section-title">Title</h2>
    <p class="section-subtitle">Subtitle</p>
</div>
```

### Cards
- `.feature-card`
- `.testimonial-card`
- `.azienda-card`
- `.stat-card`
- `.gallery-item`

## 🔐 Sicurezza

- Input validation
- XSS protection
- HTTPS ready
- Secure localStorage
- GDPR compliant ready

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (max-width: 1024px) { ... }

/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

## 🌟 Business Sample Data

8 aziende demo incluse:
- **Ristorazione**: Su Cumbidu, Pizzeria La Vela
- **Turismo**: Hotel Costa Smeralda, Agriturismo Monte Lerno
- **Artigianato**: Artigianato Sardo Premium
- **Commercio**: Caffè Tostato Sassarese
- **Servizi**: Studio Legale Carboni, Grafica Digitale Olbiese

## 🚀 Quick Start

1. **Clone/Download** il progetto
2. **Apri** `index.html` nel browser
3. **Personalizza** colori/contenuti nel CSS
4. **Integra** backend per dati reali

## 🎯 Prossimi Sviluppi

### Backend Integration
- [ ] REST API per aziende
- [ ] Database PostgreSQL/MongoDB
- [ ] Sistema autenticazione JWT
- [ ] Dashboard admin

### Payment System
- [ ] Stripe integration
- [ ] PayPal checkout
- [ ] Subscription plans
- [ ] Invoice generation

### Features Extra
- [ ] Chat live support
- [ ] Email marketing integration
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Push notifications

## 📞 Contatti

- **Website**: www.omnicoreservice.it (demo)
- **Email**: info@omnicoreservice.it
- **Phone**: +39 070 123456
- **Social**: LinkedIn | Twitter | Instagram

## 📄 Licenza

© 2024 Omnicore Service. Tutti i diritti riservati.

---

**Made with ❤️ in Sardegna** 🏖️

*Versione 2.0 - Design Luxury Gold con Strong Contrast*
