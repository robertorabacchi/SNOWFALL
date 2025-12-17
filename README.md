# ❄️ Snowfall Bookmarklet - Landing Page

## 🎄 Progetto Standalone per Netlify

Landing page interattiva per il bookmarklet "Neve" che funziona su qualsiasi sito web.

---

## 📁 Struttura

```
snowfall/
├── index.html          # Landing page completa
├── snowfall.js         # Script bookmarklet (versione leggibile)
├── netlify.toml        # Configurazione Netlify
└── README.md           # Questa guida
```

---

## 🚀 Deploy su Netlify

### Opzione 1: Netlify Drop (più veloce)

1. Vai su [netlify.com/drop](https://app.netlify.com/drop)
2. Trascina l'intera cartella `snowfall/`
3. DONE! Ottieni URL tipo: `https://snowfall-xyz.netlify.app`

### Opzione 2: Git (per aggiornamenti continui)

```bash
cd /Users/user/NATALE2025/snowfall
git init
git add .
git commit -m "🎄 Initial commit - Snowfall bookmarklet landing page"

# Crea repo su GitHub/GitLab
# Poi collega a Netlify tramite UI
```

### Opzione 3: Netlify CLI

```bash
cd /Users/user/NATALE2025/snowfall
netlify deploy --prod
```

---

## 🎯 Features Landing Page

### ✅ Incluse:

1. **Bottone Trascinabile** "❄️ FAI NEVICARE"
   - Design accattivante
   - Istruzioni chiare
   - Visual feedback

2. **Demo Live**
   - Bottone "Prova Demo"
   - Attiva neve sulla stessa pagina
   - Toggle on/off

3. **Istruzioni Passo-Passo**
   - Come trascinare nei preferiti
   - Come usare su altri siti
   - Visual chiara

4. **Features Grid**
   - 100 fiocchi
   - GPU accelerated
   - Responsive
   - Universale
   - Toggle ON/OFF
   - Zero install

5. **Design Moderno**
   - Gradient background
   - Glassmorphism
   - Responsive
   - Mobile-friendly
   - Animazioni fluide

6. **SEO Ready**
   - Meta tags
   - Open Graph
   - Description

---

## 🔗 Uso del Bookmarklet

### Per gli utenti:

1. Visita: `https://[tuo-dominio].netlify.app`
2. Trascina il bottone "❄️ FAI NEVICARE" nei preferiti
3. Vai su qualsiasi sito (Facebook, LinkedIn, ecc)
4. Clicca il bookmark
5. NEVE! ❄️

---

## 📊 Analytics (Opzionale)

Se vuoi trackare quante persone usano il bookmarklet, puoi aggiungere:

### 1. Plausible Analytics (consigliato)

Aggiungi in `<head>` di `index.html`:

```html
<script defer data-domain="[tuo-dominio].netlify.app" src="https://plausible.io/js/script.js"></script>
```

### 2. Tracking Click Bookmarklet

Modifica `snowfall.js` per aggiungere:

```javascript
// All'inizio della funzione
fetch('https://[tuo-dominio].netlify.app/.netlify/functions/track', {
  method: 'POST',
  body: JSON.stringify({ 
    event: 'snow_activated',
    url: window.location.href 
  })
});
```

---

## 🎨 Personalizzazione

### Cambia Numero Fiocchi

In `snowfall.js` e nell'HTML, cerca:

```javascript
for (let i = 0; i < 100; i++)  // Cambia 100 con il numero desiderato
```

### Cambia Velocità

```javascript
animationDuration: (6 + Math.random() * 6) + 's'  // 6-12 secondi
```

### Cambia Simbolo

```javascript
snowflake.textContent = '❄';  // Cambia con ✦, *, ◆, ecc
```

---

## 📱 Test Browser

- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ✅ Brave
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 🌐 Domini Custom

Se vuoi usare un dominio custom tipo `snow.digitalengineered.ai`:

1. Netlify Dashboard → Site Settings → Domain Management
2. Add custom domain: `snow.digitalengineered.ai`
3. Aggiungi CNAME DNS record su Cloudflare:
   - Type: `CNAME`
   - Name: `snow`
   - Content: `[site-name].netlify.app`
   - Proxy: ✅ (Proxied)

---

## 🔒 Security Headers

Già configurate in `netlify.toml`:

- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

---

## 🚨 Limitazioni Bookmarklet

**Siti che potrebbero bloccare:**

- ❌ Gmail (CSP policy)
- ❌ Google Docs (CSP policy)
- ❌ Banking sites (security)

**Soluzione per utenti:** Copia/incolla nella console browser (F12)

---

## 📈 Viralità Social

### Template Post

**LinkedIn:**
```
🎄 Ho creato un bookmarklet magico che fa nevicare su qualsiasi sito web!

Facebook, LinkedIn, Twitter... ovunque! ❄️

Prova qui: [link]

#WebDevelopment #JavaScript #Christmas
```

**Twitter/X:**
```
❄️ Bookmarklet magico che fa nevicare su QUALSIASI sito!

[link]

#JavaScript #Christmas #WebDev
```

---

## 🎁 Next Steps

### Idee per espansione:

1. **Varianti Effetti:**
   - Pioggia 🌧
   - Stelle ⭐
   - Coriandoli 🎊
   - Fuochi d'artificio 🎆

2. **Personalizzazione UI:**
   - Scegli colore fiocchi
   - Scegli velocità
   - Scegli densità

3. **Browser Extension:**
   - Chrome Web Store
   - Firefox Add-ons

4. **API Embeddable:**
   ```html
   <script src="https://snow.digitalengineered.ai/embed.js"></script>
   ```

---

## 📞 Support

**Issues:** Apri issue su GitHub  
**Email:** info@digitalengineered.ai

---

**Made with ❄️ by DIGITALENGINEERED.AI**  
**TITAN PROTOCOL v4.5 Certified**
