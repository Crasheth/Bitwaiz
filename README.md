# BITWAIZ - Template starter

Template HTML + CSS per il blog generato dalla pipeline journal. Carica questi file su GitHub e collegali a Netlify per vedere il sito subito.

## Struttura

```
starter/
├── index.html           # Homepage (hero + about + articoli)
├── style.css            # Design dark + viola
├── netlify.toml         # Config Netlify
├── esempio-articolo/    # Esempio pagina articolo
│   └── index.html
└── README.md
```

## Come usare

### 1. Carica su GitHub

- Crea un nuovo repo (es. `bitwaiz-blog`)
- Copia tutti i file dalla cartella `starter/` nella root del repo
- Push su GitHub

### 2. Collega a Netlify

- Netlify → Add new site → Import from Git → scegli il repo
- Build command: (lascia vuoto)
- Publish directory: `.`
- Deploy

### 3. Genera articoli con la pipeline

Quando sei pronto, esegui dalla cartella `journal`:

```bash
python pipeline.py --topics 5 --deploy
```

La pipeline sostituirà/sovrascriverà l'output con articoli reali generati da trend.

## Anteprima locale

```bash
cd starter
python -m http.server 8080
```

Poi apri http://localhost:8080
