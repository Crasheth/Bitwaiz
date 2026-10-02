# Supply Chain Attack Open Source 2026: La vulnerabilità del trust  

> Un giorno le macchine avranno tutti i lavori e dovremo solo pensare. — Bill Gates.










Negli ultimi mesi del 2026, il mondo della cybersecurity ha assistito a una serie di attacchi di supply chain che hanno messo in discussione la fiducia nei software open source. Tra marzo e aprile, cinque progetti open source sono stati compromessi in meno di due settimane, svelando una vulnerabilità strutturale nel modo in cui le aziende gestiscono i dipendenze e i flussi di lavoro automatizzati. Questo articolo esamina i dettagli degli attacchi, le tecniche utilizzate e le misure necessarie per mitigare il rischio.  

---


![supply chain attack open source 2026](https://cybertechnologyinsights.com/wp-content/uploads/2026/05/The-Open-Source-Trust-Crisis-Supply-Chain-Attacks-in-2026-1-1024x576.png)

## Il contesto: un ecosistema in bilico  

La supply chain open source è diventata una priorità critica per le aziende moderne. I progetti come Trivy, Checkmarx AST, LiteLLM, Telnyx e Axios sono utilizzati da milioni di organizzazioni, integrando funzionalità essenziali come la scansione delle vulnerabilità, l'analisi del codice e il routing degli AI models. Tuttavia, questa dipendenza ha creato un punto debole: **la fiducia nel sistema non è mai stata verificata**.  

Secondo le fonti, tra marzo 19 e marzo 31, 2026, cinque attacchi hanno sfruttato la stessa vulnerabilità: **credenziali memorizzate in ambienti di CI/CD**, che gli aggressori hanno sfruttato per infiltrarsi nei sistemi. Questo ha permesso a TeamPCP e altri attori di distribuire malware, rubare dati sensibili e compromettere la sicurezza di infrastrutture enterprise.  

---

## I cinque attacchi: una cascata di danni  

## 1. **Trivy (GitHub Actions / Docker)**
L’attacco ha iniziato con un errore nella configurazione del workflow `pull_request_target` su GitHub, permettendo a un bot autonomo (hackerbot-claw) di rubare token PAT. Aqua Security ha rilevato e rotto le credenziali, ma la rotazione non era completa. TeamPCP ha sfruttato quelle residue per iniettare strumenti di furto di credenziali in 75 tag falsi e repository defaced.  

**Vettore**: Spoofed commits + tag hijacking  
**Impatto**: Over 1,000 ambienti cloud infetti  

## 2. **Checkmarx AST (GitHub Actions)**
Usando lo stesso schema di furto delle credenziali, TeamPCP ha sfruttato le informazioni ottenute da Trivy per rubare segreti di pipeline CI/CD a livello globale.  

**Vettore**: Identical credential stealer pattern  
**Impatto**: Sistemi di analisi del codice compromessi  

## 3. **LiteLLM (PyPI)**
Le credenziali ottenute da Trivy sono state usate per pubblicare versioni maliziose su PyPI, sfruttando il file `.pth` che esegue automaticamente ogni avvio di Python. Il malware ha rubato variabili d’ambiente, chiavi SSH e configurazioni Kubernetes.  

**Vettore**: Iniezione di `.pth` + proxy_server.py  
**Impatto**: 97M installazioni mensili a rischio  

## 4. **Telnyx (PyPI)**
L’attacco si è esteso all’ecosistema SDK di comunicazione, sfruttando la catena di fiducia iniziale.  

**Vettore**: Compromised package con furto di credenziali  
**Impatto**: Sistemi di comunicazione compromessi  

## 5. **Axios (npm)**
L’ultimo attacco ha sfruttato un account mantenuto rubato su npm, permettendo agli aggressori di iniettare un payload RAT (Remote Access Trojan) durante l’installazione. L’attacco è stato lanciato tardi la sera UTC, quando le squadre di risposta erano a minima capacità.  

**Vettore**: Hijacked maintainer account + postinstall hook  
**Impatto**: 100M installazioni settimanali a rischio  

---

## Le due campagne: un’unica vulnerabilità  

I due attacchi (TeamPCP e Axios) hanno sfruttato **la stessa debolezza architetturale**: **credenziali memorizzate in ambienti di build e runtime**. Mentre TeamPCP ha usato una cascata di fiducia, l’attacco su Axios è stato più preciso, con un approccio di tipo APT (Advanced Persistent Threat).  

## **Misure di difesa: cosa fare?**
1. **Implementare SBOM (Software Bill of Materials)** per tracciare ogni dipendenza.  
2. **Usare tool SCA (Software Composition Analysis)** per monitorare le vulnerabilità.  
3. **Verificare la provenienza dei pacchetti** con checksum e digital signatures.  
4. **Aumentare il controllo sui CI/CD pipelines**, usando MFA (Multi-Factor Authentication) e limitando i privilegi.  
5. **Monitorare in tempo reale le attività di installazione** per rilevare comportamenti anomali.  

---

## Domande frequenti

### Qual è la principale vulnerabilità esposta dagli attacchi del 2026?
La debolezza principale era il **maneggio delle credenziali in ambienti di build e runtime**, che ha permesso agli aggressori di compromettere pacchetti open source senza essere rilevati.  

### Cosa hanno in comune gli attacchi su Trivy, Checkmarx e LiteLLM?
Tutti si sono avvalsi di una **cascata di fiducia** che ha permesso agli aggressori di sfruttare credenziali ottenute da un target precedente per attaccarne uno successivo.  

### Quali strumenti possono aiutare a rilevare questi tipi di attacchi?
Strumenti come **SBOM**, **SCA** e **runtime monitoring** sono fondamentali per tracciare le dipendenze, identificare vulnerabilità e monitorare comportamenti anomali.  

### Perché Axios è stato un bersaglio particolare?
Axios è uno dei pacchetti più scaricati su npm, il che lo rende una **target di alto valore** per gli aggressori che cercano di compromettere la base delle comunicazioni e delle richieste HTTP.  

### Quali misure si possono adottare per prevenire futuri attacchi?
Implementare un **controllo rigoroso su CI/CD**, usare **MFA** e monitorare in tempo reale le attività di installazione sono passaggi chiave per ridurre il rischio di attacchi supply chain.









## Fonti

- [Five Supply Chain Attacks in Twelve Days: How March 2026 ...](https://blog.dreamfactory.com/five-supply-chain-attacks-in-twelve-days-how-march-2026-broke-open-source-trust-and-what-comes-next)
- [Open-Source Supply Chain Attacks in 2026](https://cybertechnologyinsights.com/whitepaper/the-open-source-trust-crisis-supply-chain-attacks-in-2026/)
- [Supply Chain Attacks 2026: npm, PyPI, VS Code, AI Agents — 0 CVEs](https://phoenix.security/accelerating-supply-chain-attacks-npm-pypi-vsx-ai-enabled-2026/)
- [Open Source Supply Chain Attacks: 2024–2026 Report](https://phoenix.security/open-source-supply-chain-attacks-2024-2026/)