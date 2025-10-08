// ====================================
//  CONFIGURAZIONE MEDIA - OMNICORE
//  Percorsi centralizzati per foto/video
// ====================================

const MediaConfig = {
    // Base path
    basePath: 'media/',
    
    // Video paths
    videos: {
        hero: 'media/videos/hero-video.mp4',
        heroPoster: 'media/videos/hero-video-poster.jpg'
    },
    
    // Images paths
    images: {
        // Galleria città sarde
        gallery: {
            alghero: 'media/images/gallery/alghero.jpg',
            cagliari: 'media/images/gallery/cagliari.jpg',
            costaSmeralda: 'media/images/gallery/costa-smeralda.jpg',
            olbia: 'media/images/gallery/olbia.jpg',
            sassari: 'media/images/gallery/sassari.jpg',
            bosa: 'media/images/gallery/bosa.jpg'
        },
        
        // Foto aziende (sistema dinamico basato su ID)
        businesses: {
            getPath: (id) => `media/images/businesses/azienda-${id}.jpg`
        },
        
        // Team/CEO
        team: {
            ceo: 'media/images/team/ceo.jpg'
        }
    },
    
    // Fallback images (se il file non esiste)
    fallback: {
        business: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
        gallery: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=900&fit=crop',
        team: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
};

// Export per uso in altri file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MediaConfig;
}
