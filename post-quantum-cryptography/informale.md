# Post-quantum cryptography: prepararsi al futuro che arriverà  

> Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. — Eleanor Roosevelt.


















Se hai un sistema che respira, devi imparare a capire il suo respiro. La crittografia moderna funziona così: ogni volta che mandi un messaggio, sei in una danza con il tempo. Ma il tempo potrebbe cambiare. Il quantum computing non è solo un’idea futura: è un fiume che scorre, e il nostro lavoro è capire dove andrà a finire.  


![post-quantum cryptography](https://postquantum.com/wp-content/uploads/2025/04/Post-Quantum-Cryptography-PQC.jpg)

## Nota 1: Perché preoccuparsi  
La crittografia attuale si basa su problemi matematici che i computer classici risolvono con difficoltà. Ma se un quantum computer arriva, questi problemi diventano come una foglia in acqua: troppo facile da portare via. Algoritmi come RSA o ECC saranno vulnerabili a Shor's algorithm, che li spaccherà come un’onda di mare.  

Però non c’è bisogno di panico. La crittografia post-quantum (PQC) è un tentativo di riallineare il passo. Non si tratta di costruire muri alti, ma di trovare una strada che il fiume possa seguire senza scontrarsi con le rocce.  

## Nota 2: Come funziona  
La PQC si basa su algoritmi diversi:  
- **Lattice-based** (es. Kyber, Dilithium): usano strutture matematiche complesse come reticoli. Sono i favoriti di NIST.  
- **Hash-based**: come le firme di Merkle o XMSS. Funzionano con hash, ma non sono ideali per molti scenari.  
- **Code-based** (es. McEliece): si basano su codici correttori d’errore. Hanno resistenza storica, ma i parametri possono essere pesanti.  
- **Isogeny-based**: usano proprietà di curve ellittiche. Sono ancora in fase di sperimentazione.  

La cosa bella è che non devi buttare via tutto: molti algoritmi PQC possono convivere con quelli classici in modo ibrido. È come un monaco che osserva il respiro senza forzare, solo con attenzione.  

## Nota 3: Perché NIST si occupa di questo  
NIST ha lanciato un progetto per standardizzare la PQC da anni. Hanno selezionato algoritmi che sembrano resistere ai colpi del futuro. Il loro lavoro è un esempio di come prepararsi a una transizione lenta e inesorabile.  

## Vedi anche  
- **Standard NIST**: [Post-Quantum Cryptography | NIST](https://www.nist.gov/pqc)  
- **Confronto algoritmi PQC**: [Post-Quantum Cryptography | CSRC](https://csrc.nist.gov/projects/post-quantum-cryptography)


## Domande frequenti
#### Che cos’è la post-quantum cryptography?  
La post-quantum cryptography (PQC) è l’insieme di algoritmi che resistono agli attacchi dei computer quantistici, come quelli basati su Shor's algorithm. Questo è necessario perché i computer quantistici potrebbero rompere la crittografia tradizionale.  

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