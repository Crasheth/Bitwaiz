# Supply Chain Attacks Open Source 2026: Come un fiume si scava intorno alle rocce  

> Un giorno le macchine avranno tutti i lavori e dovremo solo pensare. — Bill Gates.












Se ti capita di lavorare in un SOC o in un team CTI, probabilmente hai già sentito parlare di **supply chain attacks**. Questi attacchi non sono nuovi, ma nel 2026 si sono fatti strada come una tempesta di ghiaccio: rapidi, insidiosi e difficili da bloccare. Il problema? L’open source, che dovrebbe essere un alleato, è diventato un bersaglio privilegiato.  

## Cinque attacchi in dodici giorni
Tra il 19 e il 31 marzo 2026, cinque progetti open source hanno subìto intrusioni mirate: Trivy (Aqua Security), AST di Checkmarx, LiteLLM su PyPI, Telnyx e Axios. Il colpo è stato concentrato su due ecosistemi (npm e PyPI) con tecniche diverse: tag hijacking su GitHub Actions, iniezione di file .pth, e exploit di postinstall hooks su npm.  

Il problema non era solo la tecnica usata, ma il **fatto che ogni attacco si basava su credenziali rubate**. TeamPCP (o UNC6780), un gruppo sospetto, ha messo a segno una strategia di cascading trust chain: compromettere prima strumenti di sicurezza per ottenere accesso ai sistemi aziendali.  

## Il problema non è la tecnologia
L’errore principale? La **mancanza di visibilità** sulle dipendenze open source. Molti team usano pacchetti senza controllare cosa si nasconde dentro. Ad esempio, un progetto che usa Axios come HTTP client potrebbe non sapere che il codice è stato modificato per rubare credenziali.  

Il tao insegna che il fiume non si scontra con le rocce: si scava intorno. In cybersecurity, però, l’attaccante non cerca di rompere la barriera, ma **si infila dentro**. Ecco perché è così difficile rilevarlo: l’attacco sembra parte del flusso normale.  

## Nota 1: Cosa ha causato questa ondata
Tre motivi principali:  
1. **L’adozione di AI e agenti** ha amplificato la capacità degli attaccanti di automatizzare i processi.  
2. **La mancanza di governance** sui pacchetti open source permette a chiunque di modificare codice senza controlli.  
3. **Le credenziali non protette** su CI/CD runners e server di build sono state sfruttate come porte d’ingresso.  

## Nota 2: Come difendersi
L’unica soluzione è **ridurre la complessità delle dipendenze** e aumentare la trasparenza. Ecco alcuni passaggi chiave:  
- Usare SBOM (Software Bill of Materials) per tracciare ogni dipendenza.  
- Verificare le credenziali usate nei CI/CD e non fidarsi solo di tag GitHub.  
- Monitorare in tempo reale il comportamento delle applicazioni in esecuzione.

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