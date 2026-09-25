# La sicurezza del futuro: come prepararsi al dominio dei quanti  

> Il futuro appartiene a coloro che credono nella bellezza dei propri sogni. — Eleanor Roosevelt.















L’era dei computer quantistici sta arrivando. Non si tratta di fantascienza, ma di una realtà che già oggi influenza il modo in cui proteggiamo i dati. I sistemi crittografici attuali, basati su algoritmi come RSA o ECC, rischiano di essere compromessi da algoritmi quantistici come Shor’s, capaci di rompere la complessità matematica che li rende sicuri. La risposta? L’**criptografia post-quantum (PQC)**, un settore in crescita che si concentra su soluzioni resilienti a queste minacce.  

---


![post-quantum cryptography](https://postquantum.com/wp-content/uploads/2025/04/Post-Quantum-Cryptography-PQC.jpg)

## Perché la PQC è necessaria  
La crittografia moderna si basa su problemi matematici difficili da risolvere con computer classici: fattorizzazione di interi, logaritmi discreti e curve ellittiche. Tuttavia, un computer quantistico potrebbe risolverli in tempo polinomiale grazie a algoritmi come Shor’s o Grover’s. Questo renderebbe obsoleti i protocolli attuali, mettendo a rischio dati sensibili archiviati oggi (il cosiddetto "harvest now, decrypt later").  

La PQC si propone di sostituire questi algoritmi con nuove soluzioni che non dipendono da problemi classici. L’obiettivo è garantire la sicurezza anche in un mondo dominato dai computer quantistici. Il **National Institute of Standards and Technology (NIST)** ha già selezionato alcuni standard, tra cui Kyber e Dilithium, che saranno adottati per proteggere comunicazioni, transazioni e infrastrutture critiche.  

---

## Le basi della PQC: da quale matematica partire  
La ricerca si concentra su sei approcci principali:  
1. **Crittografia a reticoli (Lattice-based)**: Algoritmi come Kyber e Dilithium si basano sulla complessità di problemi in spazi multidimensionali, resistenti ai calcolatori quantistici.  
2. **Crittografia hash-based**: Schema come SPHINCS+ utilizzano funzioni hash per generare firme digitali, un approccio semplice ma efficace.  
3. **Crittografia basata su codici (Code-based)**: Algoritmi come McEliece si affidano a error-correcting codes, che hanno resistenza provata da decenni.  
4. **Crittografia multivariata**: Sistemi come UOV e Rainbow si basano su equazioni non lineari, ma alcuni sono già stati compromessi.  
5. **Crittografia isogeny-based**: Utilizza proprietà di curve ellittiche per creare chiavi resilienti ai quanti.  
6. **Algoritmi simmetrici**: Algoritmi come AES resistono meglio agli attacchi quantistici, grazie a chiavi più lunghe (es. 256 bit).  

---

## Il piano di transizione: un lavoro collettivo  
La transizione alla PQC richiede tempo e coordinazione. La **NIST** ha avviato un processo di standardizzazione nel 2016, selezionando algoritmi attraverso una competizione pubblica. Nel 2024, il primo insieme di standard è stato rilasciato:  
- FIPS 203 (Kyber per chiave)  
- FIPS 204 (Dilithium per firme)  
- FIPS 205 (SPHINCS+ per firme)  

Tuttavia, il lavoro non si ferma qui. Algoritmi come HQC (code-based) sono in fase di valutazione e potranno essere adottati in futuro. La transizione richiede aggiornamenti su infrastrutture esistenti, con un’attenzione particolare a **hybrid schemes** che combinano algoritmi classici e post-quantum per ridurre i rischi durante la migrazione.  

---


## Domande frequenti
#### Che cos'è la crittografia post-quantum?  
La crittografia post-quantum (PQC) è l’insieme di algoritmi che resistono agli attacchi dei computer quantistici, come quelli basati su Shor’s algorithm. Questo è necessario perché i computer quantistici potrebbero rompere la crittografia tradizionale.  

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