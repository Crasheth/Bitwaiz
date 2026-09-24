# Supply Chain Attack Npm: La Ricerca di Vulnerabilità nel Registro JavaScript  

> La sicurezza è un processo, non un prodotto. — Bruce Schneier.




L’attacco al registro npm denominato **Sha1-Hulud** rappresenta una delle minacce più complesse mai registrate nell’ecosistema open-source. Tra novembre 2025 e settembre dello stesso anno, il malware si è propagato autonomamente attraverso migliaia di pacchetti npm, sfruttando la fiducia implicita dei sviluppatori nei confronti delle dipendenze esterne. L’incidenza ha colpito oltre 187 pacchetti popolari, tra cui **angulartics2**, **ngx-toastr** e **@ctrl/tinycolor**, con conseguenze significative per le infrastrutture di sviluppo e i sistemi CI/CD.  

---


![supply chain attack npm](https://www.gep.com/prod/s3fs-public/blog-1199-npm-supply-chain-attack-risks-visual-selection.webp)

## L’Esecuzione dell’Attacco: Da Mantainer a Malware  

L’attacco ha iniziato con la compromissione delle credenziali dei **maintainer** di pacchetti npm, un passo chiave per infiltrarsi nell’ecosistema. Gli aggressori hanno pubblicato versioni "trojanizzate" con script preinstall che eseguivano malware durante l’installazione. Queste versioni sono state replicate automaticamente, incrementando i numeri di versione e integrando codice malizioso in file come **setup_bun.js** o **bun_environment.js**, che creavano un ambiente eseguibile per il payload.  

L’automatizzazione ha permesso al malware di propagarsi rapidamente: in pochi minuti, centinaia di repository GitHub sono stati infettati, con credenziali rubate (come token GitHub, chiavi AWS/GCP/Azure) scaricate e archiviate in repository pubblici. L’attacco ha raggiunto un picco di 1.000 nuovi repository ogni 30 minuti, dimostrando l’efficienza del modello di attacco.  

---

## Le Vulnerabilità dell’Ecosistema Npm  

L’ecosistema npm è stato progettato per essere aperto e collaborativo, ma questa caratteristica ha creato una vulnerabilità. La **fede implicita** dei sviluppatori nei confronti delle dipendenze esterne ha permesso agli aggressori di sfruttare la fiducia per infiltrarsi. L’assenza di meccanismi obbligatori come la firma dei pacchetti o la verifica della provenienza ha reso più semplice il rilascio di aggiornamenti maliziosi senza rilevamento.  

Tra i vettori d’attacco, **account takeovers** e **typosquatting** (o dependency confusion) sono stati utilizzati per indirizzare gli sviluppatori verso pacchetti falsi. L’esempio storico di **event-stream** nel 2018 mostra come un attacco simile potesse compromettere milioni di download, sfruttando la fiducia nei confronti di dipendenze legittime.  

---

## Le Consequenze: Un Ecosistema in Pericolo  

L’attacco ha esposto oltre **25.000 repository GitHub**, con migliaia di credenziali rubate e utilizzate per compromettere pipeline CI/CD su sistemi Linux, Windows e macOS. L’impatto è stato amplificato dal fatto che il malware non solo rubava dati, ma anche eseguiva **"dead man’s switch"** per cancellare file o sovrascrivere dischi se si perseguiva accesso a GitHub o npm.  

Le aziende come **Zapier**, **PostHog** e **Postman** hanno subito danni significativi, con pacchetti popolari infettati e processi di sviluppo compromessi. La reazione degli esperti ha incluso la rotazione rapida delle credenziali, il rimozione dei package dannosi e l’aggiornamento dei tool come **Microsoft Defender for Cloud** per rilevare le attività sospette.  

---

## Come Proteggersi: Da Monitoraggio a Gestione del Rischio  

La difesa richiede un approccio multifattoriale:  
1. **Monitoraggio attivo**: utilizzare strumenti come **Snyk** o **Wiz** per rilevare script sospetti o modifiche anomale ai pacchetti.  
2. **Verifica delle provenienze**: implementare controlli su chi firma i pacchetti e verificare la validità dei repository.  
3. **Automazione della risposta**: configurare processi di rotazione automatica delle credenziali e isolamento di sistemi compromessi.  

L’esperienza del **Sha1-Hulud** dimostra che le minacce supply chain non sono più un problema marginale, ma una realtà che richiede strategie proattive e una cultura della sicurezza integrata nel ciclo di sviluppo.  

---

## Vedi Anche  
- [Rilevamento di attacchi supply chain in npm](https://github.com/AdityaBhatt3010/NPM-Supply-Chain-Attacks-Detection-and-Defense)  
- [CISA Alert: Compromissione del supply chain npm](https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem)  

---

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