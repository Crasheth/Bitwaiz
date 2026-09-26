# **Supply Chain Attack NPM: Il rischio del "fiume che scorre"**  

> I computer sono incredibilmente veloci, accurati e stupidi. Gli uomini sono incredibilmente lenti, inaccurati e intelligenti. — Leo Cherne.







---

![supply chain attack npm](https://www.gep.com/prod/s3fs-public/blog-1199-npm-supply-chain-attack-risks-visual-selection.webp)

## **Introduzione**  
La supply chain attack NPM Sha1-Hulud rappresenta una delle minacce più complesse e diffuse negli ultimi mesi. Questo attacco ha sfruttato la fiducia implicita degli sviluppatori nei pacchetti di terze parti, trasformando il flusso automatico di installazione in un veicolo per il furto di credenziali e la diffusione di malware. Il suo impatto è stato enorme: oltre 187 pacchetti hanno subito modifiche maliziose, con conseguenze su migliaia di ambienti di sviluppo e CI/CD.

---

## **Metodologia dell'attacco**  
## **Compromissione dei maintainer**
L’attacco ha iniziato con la sottrazione delle credenziali degli account mantainer, spesso tramite phishing mirato o sfruttando vulnerabilità nei workflow GitHub. Gli aggressori hanno pubblicato versioni "trojanizzate" di pacchetti popolari, come **@postman/tunnel-agent** e **posthog-node**, integrando script preinstall che eseguivano codice dannoso durante l’installazione.

## **Propagazione automatica**
Il malware ha sfruttato la struttura del registry npm per replicarsi autonomamente: modificando i file `package.json` e riconfigurando le dipendenze, ha creato una cascata di pacchetti infetti. Questo meccanismo ha permesso al malware di espandersi rapidamente, con un tasso di diffusione che raggiungeva centinaia di repository ogni 30 minuti in punta.

## **Furto e esfiltrazione**
Le tecniche utilizzate includevano lo sfruttamento di endpoint cloud (come quelli di AWS, GCP) per rubare credenziali, e l’uso di strumenti come **TruffleHog** per scansionare il sistema in cerca di segreti esposti. I dati furono archiviati in repository pubblici con nomi falsi (es. "Shai-Hulud") o in GitHub Actions, rendendo la tracciabilità estremamente difficile.

---

## **Impatto e rischi**  
## **Vulnerabilità del modello di trust**
L’attacco ha messo in luce le fragilità del sistema di fiducia attuale nel registry npm: la mancanza di firma obbligatoria, la dipendenza da autenticazione a singolo fattore (MFA), e il rischio di single points of failure nei maintainer.

## **Danni concreti**
Le credenziali rubate hanno compromesso migliaia di CI/CD pipelines, permettendo agli aggressori di accedere a dati sensibili o di modificare codice in produzione. Alcuni varianti del malware incluso un "dead man’s switch", che cancellava i file se l’accesso ai repository veniva interrotto.

---

## **Come difendersi**  
## **Monitoraggio e rilevamento**
- **Analisi dei log**: Controllare le attività di installazione e le modifiche a `package.json` per identificare anomalie.  
- **Strumenti di rilevamento**: Utilizzare tool come **Snyk**, **OWASP Dependency-Check**, o **GitHub Advanced Security** per monitorare le dipendenze.  
- **IOC (Indicators of Compromise)**: Ricerca di script preinstall anomali, repository "Shai-Hulud", o commit con autori falsi (es. "Linus Torvalds").

## **Misure preventive**
- **Firma dei pacchetti**: Implementare la firma digitale per verificare l’autenticità delle dipendenze.  
- **MFA obbligatorio**: Abilitare sempre il Multi-Factor Authentication per gli account mantainer.  
- **Privatizzazione**: Mantenere repository sensibili privati e limitare l’accesso alle chiavi di credenziali.

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