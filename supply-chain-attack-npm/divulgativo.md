# Supply Chain Attack NPM: Come un virus si infila nel sistema  

> I computer sono incredibilmente veloci, accurati e stupidi. Gli uomini sono incredibilmente lenti, inaccurati e intelligenti. — Leo Cherne.







Negli ultimi mesi, il mondo della cybersecurity ha visto un attacco senza precedenti all'interno del cosiddetto "ecosistema npm", la rete di librerie JavaScript più usata al mondo. Non si tratta di una semplice violazione: è come se un virus si fosse infiltrato nei circuiti di un'azienda, sfruttando le sue stesse regole per propagarsi in modo invisibile. Questo attacco, noto come **Sha1-Hulud**, ha messo a nudo le fragilità di un sistema che sembra sicuro ma è in realtà pieno di buchi.  

La cosa più preoccupante non è la tecnologia usata (script automatici, GitHub Actions, script automatici), ma il modo in cui l'attaccante ha sfruttato la stessa logica del sistema per farlo funzionare a suo favore. È come se un monaco taoista avesse capito che il fiume scorre sempre verso il punto più basso, e si fosse messo a guidarlo con una bussola invisibile. L'attacco ha sfruttato la fiducia dei programmatori nei confronti delle dipendenze automatiche, trasformando l'ecosistema npm in un terreno fertile per la diffusione di malware.  


![supply chain attack npm](https://www.gep.com/prod/s3fs-public/blog-1199-npm-supply-chain-attack-risks-visual-selection.webp)

## Come funziona un attacco supply chain  
L’idea base è semplice: **un attaccante si infila nel sistema da dentro**, sfruttando le sue stesse regole per spostarsi senza essere notato. Nel caso di Sha1-Hul, l'attentatore ha compromesso account di mantenitori di pacchetti popolari (come Postman o Zapier) e pubblicato versioni "trojanizzate" con script malevoli nascosti in file come `setup_bun.js`. Questi script si attivano durante l’installazione, eseguendo codice che non è mai stato visto prima.  

È come se un virus si fosse insinuato nel sistema operativo: non si vede subito, ma ogni volta che qualcuno apre una finestra o scarica un file, il virus si riproduce. L’attacco ha sfruttato la stessa logica del sistema per diffondersi automaticamente, incrementando le versioni dei pacchetti e rilasciandone nuove con codice malevolo. Questo processo è stato così rapido che in pochi minuti si è arrivati a migliaia di pacchetti contaminati.  

## Le conseguenze: credenziali rubate, sistemi compromessi  
L’obiettivo finale non era solo danneggiare il sistema, ma **rubare informazioni sensibili**. L’attacco ha sfruttato le credenziali di GitHub, AWS, GCP e Azure per accedere a repository privati, esfiltrando dati in modo invisibile. È come se un ladro si fosse infiltrato in una casa usando la stessa chiave che gli è stata data per aprire la porta.  

In alcuni casi, l’attacco ha anche incluso funzionalità distruttive: ad esempio, un "dead man’s switch" che eliminava file o sovrascriveva dati se il malware perse accesso alle risorse necessarie. Questa caratteristica rende l'attacco ancora più pericoloso, perché non si limita a rubare informazioni, ma può danneggiare fisicamente il sistema.  

## Cosa fare per proteggersi  
La soluzione non è solo tecnica, ma anche culturale. Occorre **ridurre la fiducia cieca** nei confronti delle dipendenze automatiche e sfruttare le stesse regole del sistema per farlo funzionare a nostro vantaggio.  

- **Controlla le credenziali**: Usa strumenti come GitHub Actions o Snyk per monitorare l’accesso ai repository e identificare eventuali accessi anomali.  
- **Verifica i pacchetti**: Prima di installare un nuovo pacchetto, verifica la sua provenienza e il numero di dipendenze che potrebbe richiedere.  
- **Aggiorna regolarmente**: Mantieni sempre aggiornati i sistemi e le applicazioni per ridurre il rischio di vulnerabilità non corrette.  

La sicurezza è un processo, non un prodotto. Come dice Bruce Schneier: "La sicurezza è un processo, non un prodotto." Questo concetto si applica perfettamente al mondo delle supply chain attacks: non esiste una soluzione definitiva, ma una serie di azioni che possono ridurre il rischio e aumentare la resilienza del sistema.

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