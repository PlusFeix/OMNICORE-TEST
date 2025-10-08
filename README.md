# � Omnicore Service - Justdial Sardegna Clone

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://yourdomain.com)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername/omnicore)

> **La directory completa per trovare qualsiasi servizio in Sardegna** - Clone professionale di Justdial per il mercato sardo.

## ✨ Panoramica

**Omnicore Service** è una piattaforma web moderna ispirata a Justdial, progettata specificamente per il mercato sardo. Permette agli utenti di trovare facilmente qualsiasi tipo di servizio in Sardegna, dalle strutture ricettive ai professionisti, dai ristoranti ai servizi di emergenza.

### 🌐 Target Market
- **Regione**: Sardegna, Italia
- **Espansione futura**: Mercato nazionale italiano
- **Aziende registrate**: 5.000+
- **Categorie**: 25+ categorie di servizi

## � Features Principali

### 🏠 Homepage (index-justdial.html)
- ✅ **Hero Search Bar** con placeholder rotante (10 servizi)
- ✅ **Carousel Interattivo** con 6 slide e autoplay (4s)
- ✅ **Video Background** con overlay personalizzabile
- ✅ **24+ Categorie** con effetto blur e pulsante "Visualizza Altro"
- ✅ **Promo Cards** (B2B, Riparazioni, Immobiliare, Dottori)
- ✅ **Content Boxes** (Wedding, Beauty, Repairs, Daily Needs)
- ✅ **Bills & Recharge** con 6 servizi (NEW badge)
- ✅ **Travel Bookings** (5 servizi)
- ✅ **Trending Searches** con HOT badge e animazione pulse

### 🍽️ Pagina Ristoranti (ristoranti.html)
- ✅ Hero section "È TUTTO INCENTRATO SUL CIBO"
- ✅ Quick Actions: Prenota Tavolo, Tendenze, Ordina Cibo
- ✅ 6 Categorie: Sapori Italiani, Cucine Internazionali, Vita Notturna, Snack Veloci, Dolci, Buongustai
- ✅ 1.630+ Ristoranti censiti

### 🏨 Pagina Hotel (hotel.html)
- ✅ Hero section "SOGGIORNA CON STILE E COMFORT"
- ✅ Quick Actions: Prenota Camera, Offerte Speciali, Hotel Lusso
- ✅ 6 Categorie: Luxury, Beach Resorts, Boutique, Business, Budget, Family
- ✅ 850+ Hotel disponibili

### 🎨 Design System
- **Font**: Poppins (headings), Inter (body), SF Pro Display (Apple fallback)
- **Colori Primari**: 
  - Gold: `#C19A38`
  - Blue: `#0066cc`
  - Orange: `#ff6b35`
- **Responsive**: Desktop (1440px+), Tablet (1024px), Mobile (768px)
- **Animazioni**: Smooth transitions, hover effects, carousel autoplay

## 📁 Struttura Progetto

```
omnicore/
├── index-justdial.html          # Homepage principale (Justdial style) - 916 linee
├── ristoranti.html              # Pagina ristoranti - 291 linee
├── hotel.html                   # Pagina hotel - 285 linee
├── aziende.html                 # Lista aziende (legacy)
├── profilo-azienda.html         # Profilo singola azienda
├── css/
│   ├── style.css                # Stili principali (4355+ linee)
│   ├── ristoranti.css           # Stili pagina ristoranti (500+ linee)
│   ├── hotel.css                # Stili pagina hotel (400+ linee)
│   └── profilo-azienda.css      # Stili profilo azienda
├── js/
│   ├── app.js                   # JavaScript principale
│   ├── media-config.js          # Configurazione media
│   └── profilo-azienda.js       # Script profilo azienda
├── media/
│   ├── images/
│   │   ├── businesses/          # Immagini aziende
│   │   ├── gallery/             # Gallery immagini
│   │   └── team/                # Team photos
│   ├── videos/
│   │   └── videoheromare.mp4    # Video background homepage
│   └── GUIDA_MEDIA.md           # Guida gestione media
├── .gitignore
├── README.md
└── CHANGELOG.md
```

## 🛠 Tecnologie

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties
- **JavaScript (Vanilla)** - No frameworks, performance-first
- **Font Awesome 6.4.0** - Iconografia
- **Google Fonts** - Poppins, Inter

### Librerie & Servizi
- **Unsplash API** - Immagini placeholder ad alta qualità
- **Leaflet.js** - Mappe interattive (in app.js)

### Best Practices
- ✅ Mobile-first design
- ✅ SEO optimized (meta tags, semantic HTML)
- ✅ Accessibility (ARIA labels)
- ✅ Performance (lazy loading ready)
- ✅ Cross-browser compatibility

## 🚀 Installazione

### Prerequisiti
- Un web server locale (Live Server, XAMPP, MAMP, etc.)
- Browser moderno (Chrome, Firefox, Safari, Edge)

### Quick Start

```bash
# 1. Clone il repository
git clone https://github.com/yourusername/omnicore-service.git

# 2. Naviga nella cartella
cd omnicore-service

# 3. Apri con Live Server o qualsiasi web server
# Oppure apri index-justdial.html direttamente nel browser
```

### Usando Live Server (VS Code)
1. Installa l'estensione "Live Server" in VS Code
2. Right-click su `index-justdial.html`
3. Seleziona "Open with Live Server"
4. Il sito si aprirà su `http://127.0.0.1:5500`

## 🗺️ Roadmap

### ✅ Completato (Q4 2024 - Q1 2025)
- [x] Homepage completa stile Justdial (916 linee)
- [x] Sistema categorie con blur + "Visualizza Altro"
- [x] Carousel 6 slide con autoplay 4s
- [x] Pagina ristoranti completa (291 linee)
- [x] Pagina hotel completa (285 linee)
- [x] Header responsive con Login/Sign Up separati
- [x] Video background (videoheromare.mp4)
- [x] Rotating placeholder (10 servizi, 3s)
- [x] Category routing (JavaScript)
- [x] Footer completo
- [x] Responsive design (desktop/tablet/mobile)

### 🚧 In Sviluppo (Q2 2025)
- [ ] Pagine dedicate per tutte le 24+ categorie
- [ ] Sistema autenticazione completo
- [ ] Dashboard utente
- [ ] Dashboard aziende
- [ ] Sistema prenotazioni
- [ ] Integrazione pagamenti
- [ ] Chat live support

### 📅 Futuro (Q3-Q4 2025)
- [ ] API Backend (Node.js + MongoDB)
- [ ] Sistema recensioni e rating
- [ ] Geolocalizzazione avanzata
- [ ] Notifiche push
- [ ] Multi-lingua (IT, EN, DE)
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
- [ ] Mobile app (React Native)

## 🤝 Contributing

Contributi, issues e feature requests sono benvenuti!

1. Fork il progetto
2. Crea il tuo branch (`git checkout -b feature/AmazingFeature`)
3. Commit le modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## � Licenza

Questo progetto è rilasciato sotto licenza MIT - vedi il file [LICENSE](LICENSE) per dettagli.

## 🙏 Ringraziamenti

- Design ispirato a [Justdial](https://www.justdial.com)
- Immagini da [Unsplash](https://unsplash.com)
- Icone da [Font Awesome](https://fontawesome.com)
- Font da [Google Fonts](https://fonts.google.com)

---

**Made with ❤️ in Sardegna** 🏖️

*Versione 2.0 - Design Luxury Gold con Strong Contrast*
