# 📁 Guida Gestione Media - Omnicore Service

## 🎯 Struttura Cartelle

```
media/
├── videos/              # Video del sito
│   └── hero-video.mp4   # Video principale hero section
│
├── images/
│   ├── gallery/         # Foto città sarde (6 immagini)
│   │   ├── alghero.jpg
│   │   ├── cagliari.jpg
│   │   ├── costa-smeralda.jpg
│   │   ├── olbia.jpg
│   │   ├── sassari.jpg
│   │   └── bosa.jpg
│   │
│   ├── businesses/      # Foto aziende (8+ immagini)
│   │   ├── azienda-1.jpg
│   │   ├── azienda-2.jpg
│   │   ├── azienda-3.jpg
│   │   └── ... (fino a azienda-N.jpg)
│   │
│   └── team/            # Foto team/CEO
│       └── ceo.jpg      # Foto del CEO/Fondatore
```

---

## 🎬 VIDEO

### Hero Video (Video Principale)
**Nome file**: `hero-video.mp4`  
**Percorso**: `media/videos/hero-video.mp4`

**Specifiche consigliate**:
- **Formato**: MP4 (H.264)
- **Risoluzione**: 1920x1080 (Full HD) o 1280x720 (HD)
- **Durata**: 30-60 secondi
- **Dimensione**: Max 50MB
- **Aspect Ratio**: 16:9

**Come sostituire**:
1. Rinomina il tuo video in `hero-video.mp4`
2. Copia nella cartella `media/videos/`
3. Sovrascrivi il file esistente
4. Ricarica la pagina nel browser

**Poster Image (Anteprima video)**:
- **Nome**: `hero-video-poster.jpg`
- **Percorso**: `media/videos/hero-video-poster.jpg`
- **Risoluzione**: 1920x1080px
- **Formato**: JPG

---

## 🖼️ IMMAGINI GALLERIA CITTÀ

### 1. Alghero
**Nome file**: `alghero.jpg`  
**Percorso**: `media/images/gallery/alghero.jpg`

### 2. Cagliari
**Nome file**: `cagliari.jpg`  
**Percorso**: `media/images/gallery/cagliari.jpg`

### 3. Costa Smeralda
**Nome file**: `costa-smeralda.jpg`  
**Percorso**: `media/images/gallery/costa-smeralda.jpg`

### 4. Olbia
**Nome file**: `olbia.jpg`  
**Percorso**: `media/images/gallery/olbia.jpg`

### 5. Sassari
**Nome file**: `sassari.jpg`  
**Percorso**: `media/images/gallery/sassari.jpg`

### 6. Bosa
**Nome file**: `bosa.jpg`  
**Percorso**: `media/images/gallery/bosa.jpg`

**Specifiche per tutte le immagini galleria**:
- **Formato**: JPG o WebP
- **Risoluzione**: 1200x900px (aspect ratio 4:3)
- **Qualità**: 85-90%
- **Dimensione**: Max 500KB per immagine

---

## 🏢 IMMAGINI AZIENDE

### Sistema di Numerazione
**Nome file**: `azienda-1.jpg`, `azienda-2.jpg`, `azienda-3.jpg`, ecc.  
**Percorso**: `media/images/businesses/`

**Corrispondenza ID Aziende**:
- `azienda-1.jpg` → Ristorante Su Cumbidu
- `azienda-2.jpg` → Hotel Costa Smeralda
- `azienda-3.jpg` → Artigianato Sardo Premium
- `azienda-4.jpg` → Caffè Tostato Sassarese
- `azienda-5.jpg` → Studio Legale Carboni
- `azienda-6.jpg` → Agriturismo Monte Lerno
- `azienda-7.jpg` → Pizzeria La Vela
- `azienda-8.jpg` → Grafica Digitale Olbiese

**Specifiche**:
- **Formato**: JPG o WebP
- **Risoluzione**: 800x600px (aspect ratio 4:3)
- **Qualità**: 80-85%
- **Dimensione**: Max 300KB per immagine

**Per aggiungere nuove aziende**:
1. Aggiungi l'azienda nel file `js/app.js` (array `aziende`)
2. Salva l'immagine come `azienda-N.jpg` (dove N è l'ID dell'azienda)
3. Copia nella cartella `media/images/businesses/`

---

## 👨‍💼 FOTO CEO/TEAM

### Foto CEO
**Nome file**: `ceo.jpg`  
**Percorso**: `media/images/team/ceo.jpg`

**Specifiche**:
- **Formato**: JPG
- **Risoluzione**: 800x1000px (verticale) o 1000x800px (orizzontale)
- **Qualità**: 90%
- **Dimensione**: Max 500KB
- **Stile**: Foto professionale, sfondo neutro o sfocato

**Per aggiungere altri membri del team**:
- `team-member-1.jpg`, `team-member-2.jpg`, ecc.

---

## 🔧 COME SOSTITUIRE I MEDIA

### Metodo 1: Drag & Drop (Consigliato)
1. Apri la cartella `media/`
2. Vai nella sottocartella corretta (`videos/`, `images/gallery/`, ecc.)
3. Trascina il tuo file rinominato correttamente
4. Conferma la sovrascrittura
5. Ricarica la pagina web (F5)

### Metodo 2: Copia-Incolla
1. Rinomina il tuo file secondo le convenzioni sopra
2. Copia il file (Ctrl+C)
3. Vai nella cartella di destinazione
4. Incolla (Ctrl+V)
5. Sovrascrivi se richiesto
6. Ricarica la pagina web

---

## 📐 OTTIMIZZAZIONE IMMAGINI

### Tools consigliati (gratuiti):
- **TinyPNG** (https://tinypng.com/) - Compressione online
- **Squoosh** (https://squoosh.app/) - Tool Google
- **GIMP** (gratuito) - Editor immagini completo
- **XnConvert** (gratuito) - Batch resize/convert

### Comandi rapidi (se hai ImageMagick):
```bash
# Ridimensiona immagine galleria
magick input.jpg -resize 1200x900^ -gravity center -extent 1200x900 output.jpg

# Ridimensiona immagine azienda
magick input.jpg -resize 800x600^ -gravity center -extent 800x600 output.jpg

# Compressione JPG
magick input.jpg -quality 85 output.jpg
```

---

## 🎨 FORMATI SUPPORTATI

### Immagini
✅ **JPG/JPEG** (consigliato per foto)
✅ **PNG** (per loghi/trasparenze)
✅ **WebP** (formato moderno, dimensioni ridotte)
❌ **GIF** (non consigliato)
❌ **BMP** (troppo pesante)

### Video
✅ **MP4** (H.264) - consigliato
✅ **WebM** (VP9) - alternativa moderna
❌ **AVI** (non supportato dai browser)
❌ **MOV** (compatibilità limitata)

---

## 🚀 CHECKLIST PRIMA DI CARICARE

### Per ogni file:
- [ ] Nome file corretto (minuscolo, no spazi, no caratteri speciali)
- [ ] Formato corretto (JPG per foto, MP4 per video)
- [ ] Dimensione ottimizzata (< 500KB immagini, < 50MB video)
- [ ] Risoluzione corretta secondo specifiche
- [ ] File salvato nella cartella giusta

### Test dopo il caricamento:
- [ ] Ricaricare la pagina (F5 o Ctrl+F5)
- [ ] Verificare che l'immagine/video sia visibile
- [ ] Controllare che non ci siano errori nella console (F12)
- [ ] Testare su mobile/tablet

---

## ⚠️ PROBLEMI COMUNI

### Immagine non appare
1. Controlla il nome file (deve essere esatto, maiuscole/minuscole)
2. Verifica il percorso (cartella corretta?)
3. Ricarica con cache vuota (Ctrl+Shift+R)
4. Controlla console browser (F12) per errori

### Video non si carica
1. Formato deve essere MP4 (H.264)
2. Dimensione max 50MB
3. Controlla il nome: `hero-video.mp4`
4. Browser supporta il codec?

### Immagine troppo pesante
1. Usa TinyPNG per comprimere
2. Riduci qualità JPG a 80-85%
3. Ridimensiona a risoluzione corretta
4. Considera formato WebP

---

## 📞 Supporto

Per problemi o domande:
- Consulta questo file
- Verifica console browser (F12 → Console)
- Controlla nomi file e percorsi

---

**Ultima modifica**: Ottobre 2025  
**Versione**: 2.0
