# Post-quantum cryptography: preparazione per un futuro quantico  

> Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. — Eleanor Roosevelt.
















---

![post-quantum cryptography](https://postquantum.com/wp-content/uploads/2025/04/Post-Quantum-Cryptography-PQC.jpg)

## Introduzione  
La crittografia post-quantum (PQC) rappresenta una risposta tecnica a una minaccia emergente: la capacità dei computer quantistici di rompere algoritmi tradizionali. Il problema si pone già oggi, anche se i sistemi quantistici potenti non esistono ancora. L’obiettivo è progettare algoritmi che resistano a attacchi basati su algoritmi come Shor o Grover, garantendo la protezione dei dati finché il futuro non arriverà.  

---

## Contesto e motivazione  
La crittografia moderna si basa su problemi matematici complessi, come la fattorizzazione di interi o i logaritmi discreti. Questi algoritmi, utilizzati in RSA e ECC, potrebbero essere compromessi da computer quantistici sufficientemente potenti. La **"harvest now, decrypt later"** è una minaccia reale: dati crittografati oggi potrebbero essere decifrati nel futuro quando i quantum computers saranno disponibili.  

La **NIST** ha lanciato un processo di standardizzazione già nel 2016, selezionando algoritmi come Kyber (lattice-based) e Dilithium (hash-based). Il primo insieme di standard è stato pubblicato nel 2024, con l’obiettivo di migrare a soluzioni resilienti.  

---

## Approcci chiave  
La ricerca si concentra su sei metodologie principali:  

1. **Crittografia basata su reticoli** (Lattice-based): Algoritmi come Kyber e Dilithium, che utilizzano strutture matematiche complesse per resistere a attacchi quantistici.  
2. **Crittografia hash-based**: Schema come SPHINCS+ o Lamport signatures, che si basano su funzioni hash sicure.  
3. **Crittografia basata sui codici** (Code-based): Algoritmi come McEliece, utilizzati da tempo ma ritenuti resilienti.  
4. **Crittografia multivariata**: Schema come Rainbow, che sfrutta equazioni di grado elevato.  
5. **Isogeny-based cryptography**: Utilizza proprietà di curve ellittiche per creare sistemi quantistici resistenti.  
6. **Algoritmi simmetrici**: Algoritmi come AES sono relativamente sicuri grazie a Grover’s algorithm, che richiede chiavi più lunghe.  

---

## Passaggi operativi per la transizione  
1. **Valutare l’infrastruttura**: Identificare i sistemi crittografici in uso e valutarne la vulnerabilità al quantum computing.  
2. **Scegliere standard NIST**: Adottare algoritmi approvati, come ML-KEM (Kyber), ML-DSA (Dilithium) o SPHINCS+.  
3. **Implementare soluzioni ibride**: Combinare crittografia classica e post-quantum per un transito graduale.  
4. **Testare e monitorare**: Verificare la compatibilità dei nuovi algoritmi in ambienti di produzione, tenendo traccia di eventuali problemi.  
5. **Pianificare il backup**: Utilizzare sistemi air-gapped o crittografia a chiave simmetrica per dati sensibili.  

---

## Rischi e sfide  
- **Grandezza delle chiavi**: Algoritmi post-quantum richiedono chiavi più lunghe, aumentando la complessità computazionale.  
- **Vulnerabilità side-channel**: Alcuni algoritmi potrebbero essere compromessi da attacchi non diretti (es. analisi del tempo di esecuzione).  
- **Compatibilità con infrastrutture esistenti**: La transizione richiede modifiche a protocolli e hardware, con costi significativi.  

---

## Domande frequenti
#### Che cos'è la post-quantum cryptography?  
La post-quantum cryptography (PQC) è l'insieme di algoritmi che resistono agli attacchi dei computer quantistici, come quelli basati su Shor's algorithm. Questo è necessario perché i computer quantistici potrebbero rompere la crittografia tradizionale.  

#### Perché è importante per il 2026?  
Nel 2026, i computer quantistici non saranno ancora sufficientemente potenti per rompere la crittografia attuale, ma le aziende devono iniziare a migrare verso PQC per evitare rischi futuri.  

#### Quali algoritmi sono stati selezionati da NIST?  
NIST ha selezionato algoritmi come Kyber, Dilithium e SPHINCS+ per la crittografia post-quantum. Questi si basano su diverse strutture matematiche, tra cui lattice-based e hash-based.  

#### Come posso iniziare a prepararmi?  
Le aziende dovrebbero valutare i propri sistemi e iniziare a testare algoritmi PQC per la crittografia a chiave pubblica. Questo è un passo necessario per garantire la sicurezza futura dei dati sensibili.














## Fonti

- [Post-quantum cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography)
- [Post-quantum cryptography](https://grokipedia.com/page/Post-quantum_cryptography)
- [Post-Quantum Cryptography | CSRC](https://csrc.nist.gov/projects/post-quantum-cryptography)
- [Post-quantum cryptography | NIST](https://www.nist.gov/pqc)