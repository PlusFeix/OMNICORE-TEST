// ====================================
//  PROFILO AZIENDA - GESTIONE DINAMICA
// ====================================

// Dati azienda demo (in produzione verranno da API/database)
const businessData = {
    id: 1,
    name: "Ristorante Su Cumbidu",
    category: "Ristorazione",
    description: "Nel cuore di Cagliari, il Ristorante Su Cumbidu rappresenta l'eccellenza della cucina tradizionale sarda. Con oltre 20 anni di esperienza, offriamo piatti autentici preparati con ingredienti locali di altissima qualità. La nostra filosofia è semplice: rispettare le tradizioni culinarie sarde portando in tavola sapori genuini e autentici.",
    logo: "media/images/businesses/azienda-1.jpg",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 127,
    location: "Cagliari, Via Roma 45",
    lat: 39.2238,
    lng: 9.1217,
    phone: "+39 070 123456",
    email: "info@sucumbidu.it",
    website: "www.sucumbidu.it",
    whatsapp: "+39 070 123456",
    isOpen: true,
    
    features: [
        { icon: "fas fa-wifi", title: "WiFi Gratuito", value: "Alta velocità" },
        { icon: "fas fa-parking", title: "Parcheggio", value: "Disponibile" },
        { icon: "fas fa-wheelchair", title: "Accessibilità", value: "Struttura accessibile" },
        { icon: "fas fa-credit-card", title: "Pagamenti", value: "Carte e contanti" },
        { icon: "fas fa-utensils", title: "Cucina", value: "Tradizionale sarda" },
        { icon: "fas fa-users", title: "Capacità", value: "80 posti" }
    ],
    
    schedule: [
        { day: "Lunedì", hours: "12:00 - 15:00, 19:00 - 23:00", isToday: false, isClosed: false },
        { day: "Martedì", hours: "12:00 - 15:00, 19:00 - 23:00", isToday: false, isClosed: false },
        { day: "Mercoledì", hours: "12:00 - 15:00, 19:00 - 23:00", isToday: false, isClosed: false },
        { day: "Giovedì", hours: "12:00 - 15:00, 19:00 - 23:00", isToday: true, isClosed: false },
        { day: "Venerdì", hours: "12:00 - 15:00, 19:00 - 23:30", isToday: false, isClosed: false },
        { day: "Sabato", hours: "12:00 - 15:30, 19:00 - 00:00", isToday: false, isClosed: false },
        { day: "Domenica", hours: "Chiuso", isToday: false, isClosed: true }
    ],
    
    photos: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400",
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400"
    ],
    
    videos: [
        "https://www.youtube.com/embed/dQw4w9WgXcQ"
    ],
    
    services: [
        {
            icon: "fas fa-utensils",
            name: "Pranzo",
            description: "Menu tradizionale sardo",
            price: "€25"
        },
        {
            icon: "fas fa-moon",
            name: "Cena",
            description: "Menu degustazione",
            price: "€35"
        },
        {
            icon: "fas fa-birthday-cake",
            name: "Eventi",
            description: "Feste e cerimonie",
            price: "Da €40/persona"
        },
        {
            icon: "fas fa-box",
            name: "Asporto",
            description: "Take away disponibile",
            price: "Vedi menu"
        }
    ],
    
    reviews: [
        {
            author: "Marco Rossi",
            rating: 5,
            title: "Esperienza fantastica!",
            content: "Cibo eccellente, servizio impeccabile e atmosfera accogliente. I malloreddus alla campidanese sono i migliori che abbia mai assaggiato. Tornerò sicuramente!",
            date: "2 giorni fa"
        },
        {
            author: "Laura Bianchi",
            rating: 5,
            title: "Autentica cucina sarda",
            content: "Finalmente un ristorante che rispetta le tradizioni! Ingredienti freschi, porzioni generose e prezzi giusti. Consiglio vivamente il porceddu!",
            date: "1 settimana fa"
        },
        {
            author: "Giovanni Carta",
            rating: 4,
            title: "Ottimo ma servizio lento",
            content: "La qualità del cibo è indiscutibile, ma il servizio potrebbe essere più veloce nei giorni di punta. Comunque consigliatissimo!",
            date: "2 settimane fa"
        }
    ],
    
    social: [
        { platform: "facebook", url: "https://facebook.com", icon: "fab fa-facebook-f" },
        { platform: "instagram", url: "https://instagram.com", icon: "fab fa-instagram" },
        { platform: "twitter", url: "https://twitter.com", icon: "fab fa-twitter" }
    ]
};

// Inizializzazione
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true
    });
    
    // Carica dati da sessionStorage se disponibili
    const urlParams = new URLSearchParams(window.location.search);
    const businessId = urlParams.get('id');
    
    if (businessId) {
        const savedBusiness = sessionStorage.getItem('selectedBusiness');
        if (savedBusiness) {
            const business = JSON.parse(savedBusiness);
            // Merge con businessData demo
            Object.assign(businessData, {
                id: business.id,
                name: business.nome,
                category: getCategoryName(business.categoria),
                logo: business.immagine,
                rating: business.rating,
                location: business.location,
                lat: business.lat,
                lng: business.lng,
                phone: business.telefono,
                email: business.email,
                website: business.sito
            });
        }
    }
    
    loadBusinessData();
    initializeTabs();
    initializeMap();
    initializeEventListeners();
});

// Helper function
function getCategoryName(category) {
    const categories = {
        'ristorazione': 'Ristorazione',
        'turismo': 'Turismo',
        'artigianato': 'Artigianato',
        'commercio': 'Commercio',
        'servizi': 'Servizi'
    };
    return categories[category] || category;
}

// Carica dati azienda
function loadBusinessData() {
    // Header
    document.getElementById('businessName').textContent = businessData.name;
    const categoryBadge = document.getElementById('businessCategory');
    categoryBadge.querySelector('span').textContent = businessData.category;
    document.getElementById('businessRating').textContent = businessData.rating;
    document.getElementById('reviewCount').textContent = `(${businessData.reviewCount} recensioni)`;
    document.getElementById('businessLocation').textContent = businessData.location;
    document.getElementById('businessLogo').src = businessData.logo;
    document.getElementById('heroCover').src = businessData.cover;
    
    // Status
    const statusEl = document.getElementById('businessStatus');
    statusEl.classList.add(businessData.isOpen ? 'open' : 'closed');
    statusEl.querySelector('span').textContent = businessData.isOpen ? 'Aperto ora' : 'Chiuso';
    
    // Description
    document.getElementById('businessDescription').textContent = businessData.description;
    
    // Features
    const featuresContainer = document.getElementById('businessFeatures');
    featuresContainer.innerHTML = businessData.features.map(feature => `
        <div class="info-item">
            <i class="${feature.icon}"></i>
            <div class="info-item-content">
                <strong>${feature.title}</strong>
                <span>${feature.value}</span>
            </div>
        </div>
    `).join('');
    
    // Schedule
    const scheduleContainer = document.getElementById('businessSchedule');
    scheduleContainer.innerHTML = businessData.schedule.map(day => `
        <div class="schedule-item ${day.isToday ? 'today' : ''}">
            <span class="schedule-day">${day.day}</span>
            <span class="schedule-time ${day.isClosed ? 'closed' : ''}">${day.hours}</span>
        </div>
    `).join('');
    
    // Photos
    loadMedia('photos');
    
    // Services
    const servicesContainer = document.getElementById('servicesGrid');
    servicesContainer.innerHTML = businessData.services.map(service => `
        <div class="service-card">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <div class="service-price">${service.price}</div>
        </div>
    `).join('');
    
    // Reviews
    loadReviews();
    
    // Contact info
    document.getElementById('phoneContact').href = `tel:${businessData.phone}`;
    document.getElementById('phoneContact').querySelector('span').textContent = businessData.phone;
    document.getElementById('emailContact').href = `mailto:${businessData.email}`;
    document.getElementById('emailContact').querySelector('span').textContent = businessData.email;
    document.getElementById('websiteContact').href = `https://${businessData.website}`;
    document.getElementById('websiteContact').querySelector('span').textContent = businessData.website;
    document.getElementById('whatsappContact').href = `https://wa.me/${businessData.whatsapp.replace(/\s/g, '')}`;
    
    // Social links
    const socialContainer = document.getElementById('socialLinks');
    socialContainer.innerHTML = businessData.social.map(social => `
        <a href="${social.url}" class="social-link ${social.platform}" target="_blank">
            <i class="${social.icon}"></i>
        </a>
    `).join('');
    
    // Directions
    document.getElementById('directionsBtn').href = `https://www.google.com/maps/dir/?api=1&destination=${businessData.lat},${businessData.lng}`;
    
    // Populate service select
    const serviceSelect = document.getElementById('serviceSelect');
    serviceSelect.innerHTML = '<option value="">Seleziona un servizio</option>' +
        businessData.services.map(service => `
            <option value="${service.name}">${service.name} - ${service.price}</option>
        `).join('');
}

// Load media (photos/videos)
function loadMedia(type) {
    const mediaGrid = document.getElementById('mediaGrid');
    const items = type === 'photos' ? businessData.photos : businessData.videos;
    
    if (type === 'photos') {
        mediaGrid.innerHTML = items.map((photo, index) => `
            <div class="media-item" onclick="openLightbox(${index})">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
                <div class="media-item-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        `).join('');
    } else {
        mediaGrid.innerHTML = items.map((video, index) => `
            <div class="media-item" onclick="openVideo('${video}')">
                <iframe src="${video}" frameborder="0" allowfullscreen></iframe>
                <div class="media-item-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `).join('');
    }
}

// Load reviews
function loadReviews() {
    // Calculate rating distribution
    const ratingCounts = [0, 0, 0, 0, 0];
    businessData.reviews.forEach(review => {
        ratingCounts[review.rating - 1]++;
    });
    
    // Reviews summary
    const summaryContainer = document.getElementById('reviewsSummary');
    summaryContainer.innerHTML = `
        <div class="reviews-score">
            <div class="reviews-score-number">${businessData.rating}</div>
            <div class="reviews-score-stars">${'★'.repeat(Math.floor(businessData.rating))}${'☆'.repeat(5 - Math.floor(businessData.rating))}</div>
            <div class="reviews-score-count">${businessData.reviewCount} recensioni</div>
        </div>
        <div class="reviews-breakdown">
            ${[5, 4, 3, 2, 1].map(stars => {
                const count = ratingCounts[stars - 1];
                const percentage = (count / businessData.reviews.length) * 100;
                return `
                    <div class="review-bar">
                        <span class="review-bar-stars">${stars} stelle</span>
                        <div class="review-bar-progress">
                            <div class="review-bar-fill" style="width: ${percentage}%"></div>
                        </div>
                        <span class="review-bar-count">${count}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    // Reviews list
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = businessData.reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-author">
                    <div class="review-avatar">${review.author.charAt(0)}</div>
                    <div class="review-author-info">
                        <h4>${review.author}</h4>
                        <span class="review-date">${review.date}</span>
                    </div>
                </div>
                <div class="review-rating">${'★'.repeat(review.rating)}</div>
            </div>
            <div class="review-content">
                <h5>${review.title}</h5>
                <p>${review.content}</p>
            </div>
        </div>
    `).join('');
}

// Initialize tabs
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Media tabs
    const mediaBtns = document.querySelectorAll('.media-tab-btn');
    mediaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mediaBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            loadMedia(btn.dataset.media);
        });
    });
}

// Initialize map
function initializeMap() {
    const mapEl = document.getElementById('businessMap');
    const businessMap = L.map(mapEl).setView([businessData.lat, businessData.lng], 15);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(businessMap);
    
    const goldIcon = L.divIcon({
        className: 'custom-marker',
        html: '<i class="fas fa-map-marker-alt" style="color: #C19A38; font-size: 36px;"></i>',
        iconSize: [36, 36],
        iconAnchor: [18, 36]
    });
    
    L.marker([businessData.lat, businessData.lng], { icon: goldIcon })
        .addTo(businessMap)
        .bindPopup(`<strong>${businessData.name}</strong><br>${businessData.location}`);
}

// Event listeners
function initializeEventListeners() {
    // Back button
    document.getElementById('backBtn').addEventListener('click', () => {
        window.history.back();
    });
    
    // Contact button
    document.getElementById('contactBtn').addEventListener('click', () => {
        openModal('contactModal');
    });
    
    // Book button
    document.getElementById('bookBtn').addEventListener('click', () => {
        openModal('bookingModal');
    });
    
    // Write review button
    document.getElementById('writeReviewBtn').addEventListener('click', () => {
        openModal('reviewModal');
    });
    
    // Favorite button
    document.getElementById('favoriteBtn').addEventListener('click', function() {
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
    });
    
    // Share buttons
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            shareOnPlatform(btn.dataset.platform);
        });
    });
    
    // Forms
    document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
    document.getElementById('bookingForm').addEventListener('submit', handleBookingSubmit);
    document.getElementById('reviewForm').addEventListener('submit', handleReviewSubmit);
    
    // Star rating
    const stars = document.querySelectorAll('#starRating i');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.rating;
            stars.forEach(s => {
                s.classList.remove('fas', 'active');
                s.classList.add('far');
                if (s.dataset.rating <= rating) {
                    s.classList.add('fas', 'active');
                    s.classList.remove('far');
                }
            });
        });
    });
    
    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
        document.querySelector('.nav').classList.toggle('active');
    });
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    document.body.style.overflow = '';
}

// Share function
function shareOnPlatform(platform) {
    const url = window.location.href;
    const text = `Guarda ${businessData.name} su Omnicore Service!`;
    
    const shareUrls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
        copy: null
    };
    
    if (platform === 'copy') {
        navigator.clipboard.writeText(url);
        alert('Link copiato negli appunti!');
    } else {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Form handlers
function handleContactSubmit(e) {
    e.preventDefault();
    alert('Messaggio inviato con successo! Ti risponderemo al più presto.');
    closeModal('contactModal');
    e.target.reset();
}

function handleBookingSubmit(e) {
    e.preventDefault();
    alert('Prenotazione inviata con successo! Riceverai una conferma via email.');
    closeModal('bookingModal');
    e.target.reset();
}

function handleReviewSubmit(e) {
    e.preventDefault();
    alert('Grazie per la tua recensione! Sarà pubblicata dopo la moderazione.');
    closeModal('reviewModal');
    e.target.reset();
}

// Lightbox (da implementare)
function openLightbox(index) {
    alert(`Aprendo immagine ${index + 1}. Lightbox da implementare.`);
}

function openVideo(url) {
    window.open(url, '_blank');
}
