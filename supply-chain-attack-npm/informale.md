# Supply chain attack npm: come un fiume segue il cammino più facile  

> I computer sono incredibilmente veloci, accurati e stupidi. Gli uomini sono incredibilmente lenti, inaccurati e intelligenti. — Leo Cherne.






Quando parliamo di supply chain attacks su npm, siamo di fronte a una realtà che sembra esistere da sempre, ma in modo invisibile: come un fiume che scorre senza rumore, il malware si muove nel sistema, trovando i punti più deboli. Sha1-Hulud è stato uno dei casi più estesi mai registrati, con centinaia di pacchetti compromessi e migliaia di credenziali rubate. Non un attacco improvvisato, ma una strategia che segue il principio taoista del "fiume che non si scontra con le rocce".  


![supply chain attack npm](https://www.gep.com/prod/s3fs-public/blog-1199-npm-supply-chain-attack-risks-visual-selection.webp)

## Nota 1: Cosa è successo
Sha1-Hulud (noto anche come Shai-Hulud 2.0) ha colpito l'ecosistema npm a novembre 2025, segnando la seconda ondata di una campagna che aveva iniziato nel settembre dello stesso anno. Gli attaccanti hanno sfruttato account mantenitori compromessi per pubblicare versioni "trojanizzate" con script preinstall. Questi script hanno eseguito malware durante l'installazione, trasformando macchine sviluppatori e ambienti CI/CD in runner GitHub Actions.  

La diffusione è stata rapida: il malware ha sfruttato credenziali rubate per infettare altri pacchetti, incrementando i numeri di versione e ripubblicandoli con codice malevolo in file come `setup_bun.js`. Questo ha creato un ambiente eseguibile nascosto, a volte mimando l'installazione di Bun, un runtime JavaScript legittimo.  

## Nota 2: Perché funziona
Il taoismo ci dice che il fiume non lotta con le rocce: segue il percorso più facile. Gli attaccanti hanno fatto esattamente questo, sfruttando la fiducia dei sviluppatori nei pacchetti npm e la mancanza di controllo sui maintainer. Non c'è stato bisogno di forzare nulla: il malware si è propagato da solo, come un virus che si replica in silenzio.  

## Nota 3: Cosa ha colpito
Più di 600 pacchetti npm hanno subito l'infezione, tra cui progetti noti come Zapier, PostHog e Postman. Le credenziali rubate sono state esfiltrate in repository pubblici GitHub, con un ritmo impressionante: fino a 1.000 nuovi repository ogni 30 minuti. Il malware ha incluso anche funzionalità distruttive, come un "dead man's switch" che eliminava file o sovrascriveva dischi se non aveva accesso ai servizi cloud.  

## Nota 4: Cosa fare
La risposta deve essere veloce: ruotare credenziali, rimuovere pacchetti compromessi e privatizzare repository GitHub. Gli strumenti come Microsoft Defender for Cloud o Snyk hanno aiutato a rilevare l'attacco, ma la lezione è chiara: il sistema npm non è sicuro per default.  

## Vedi anche  
- [NPM Supply Chain Attacks: Detection & Defense](https://github.com/AdityaBhatt3010/NPM-Supply-Chain-Attacks-Detection-and-Defense)  
- [Widespread Supply Chain Compromise Impacting npm Ecosystem](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)

## Domande frequenti

### Qual è la differenza tra Sha1-Hulud e altri attacchi supply chain?
Sha1-Hulud si distingue per la sua capacità di propagarsi autonomamente, sfruttando le dipendenze npm per espandersi rapidamente. Molti attacchi tradizionali richiedono intervento manuale.  

### Come rilevare un attacco come Sha1-Hulud?
Monitora i log di installazione e cerca script preinstall sospetti, repository anomali, o commit con autori falsi. Strumenti come Snyk o GitHub Advanced Security possono aiutarti nel rilevamento.  

### Quali pacchetti sono stati compromessi?
Pacchetti come **angulartics2**, **ngx-toastr**, e **@ctrl/tinycolor** sono stati colpiti, con oltre 187 package interessati in totale.  

---





## Fonti

- [NPM Supply Chain Attacks: Detection & Defense](https://github.com/AdityaBhatt3010/NPM-Supply-Chain-Attacks-Detection-and-Defense)
- [Widespread Supply Chain Compromise Impacting npm Ecosystem](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)
- [Sha1-Hulud npm supply chain attack](https://grokipedia.com/page/Sha1-Hulud_npm_supply_chain_attack)
- [NPM Supply Chain Attack: 187 Packages Compromised by Self-Spreading Malware](https://www.mend.io/blog/npm-supply-chain-attack-packages-compromised-by-self-spreading-malware/)
- [NPM Supply-Chain Attacks: Detection & Defense - GitHub](https://github.com/AdityaBhatt3010/NPM-Supply-Chain-Attacks-Detection-and-Defense)