# FIDO2 YubiKey: La chiave di sicurezza che resiste al phishing  

> La sicurezza è un processo, non un prodotto. — Bruce Schneier.




















---

![FIDO2 YubiKey](https://res.cloudinary.com/buysec-as/image/upload/d_standard_placeholder.png,f_auto,q_auto/v1682066255/p_KEY18_default_1)

## Introduzione  
FIDO2 e i dispositivi YubiKey rappresentano una svolta nella gestione della sicurezza digitale. Non si tratta solo di un aggiornamento tecnico, ma di un cambio radicale nel modo in cui proteggiamo le identità digitali. Questo articolo spiega come FIDO2 e YubiKey eliminino il rischio del phishing e delle credenziali rubate, con un focus su come implementarli in modo efficace.  

---  

## FIDO2: L'architettura dietro la sicurezza  
FIDO2 (Fast Identity Online) è un insieme di standard aperti che permettono autenticazione senza password e multi-fattore. La sua forza risiede nella **criptografia a chiave pubblica**, una tecnologia che ha reso possibili le transazioni sicure su internet da decenni.  

## Come funziona  
- **Registrazione**: Quando un utente si registra con un servizio FIDO2, il dispositivo YubiKey genera una coppia di chiavi (pubblica e privata). La chiave privata è protetta in un ambiente sicuro (come la memoria hardware del dispositivo), mentre la pubblica viene inviata al servizio.  
- **Autenticazione**: Durante l’accesso, il servizio invia una sfida (nonce) al browser, che trasmette il messaggio al YubiKey. Questo verifica la chiave privata e risponde con un firmato, senza mai rivelare la chiave stessa.  

## Vantaggi  
- **Resistenza al phishing**: Nessun segreto viene inviato o memorizzato sul server. Gli attaccanti non possono rubare le credenziali perché non esistono.  
- **Supporto multipli dispositivi**: YubiKey supporta diverse tecnologie (USB, NFC, Bluetooth) e può essere usato con servizi legacy come PIV/Smart Card.  

---  

## YubiKey: La chiave fisica per la sicurezza  
Il YubiKey è un dispositivo hardware che implementa i protocolli FIDO2. Ecco cosa distingue i modelli più comuni:  

## Tipi di YubiKey e loro funzionalità  
1. **YubiKey 5 Series**: Supporta FIDO2, PIV, e biometria (Bio Series). Ideale per ambienti aziendali con richieste di compliance come NIST AAL3.  
2. **YubiKey Bio Series**: Include sensori per la scansione delle impronte digitali, utile in contesti dove il touch è necessario.  
3. **Security Key Series**: Dispositivi portatili che offrono protezione completa senza dipendere da un sistema operativo.  

## Gestione dei PIN e attestaioni aziendali  
- **PIN FIDO2**: È obbligatorio creare un PIN per registrare i passkey su YubiKey. Il PIN è necessario durante la registrazione di nuovi account o servizi.  
- **Enterprise Attestation (EA)**: Per le aziende, l’attestaione EA permette di verificare che il dispositivo sia stato configurato correttamente e non usato in modo improprio.  

---  

## Implementazione: Cosa serve per farlo funzionare?  
Per adottare FIDO2 con YubiKey, segui questi passaggi:  

1. **Scelta del modello**: Seleziona un YubiKey compatibile con FIDO2 (es. 5 Series o Bio Series).  
2. **Configurazione PIN**: Crea un PIN per il dispositivo tramite Yubico Authenticator.  
3. **Registrazione dei passkey**: Collega il YubiKey al browser o all’applicazione desiderata e registrane i passkey.  
4. **Backup e ripristino**: Registrare backup su dispositivi diversi (es. cloud) per evitare lockout in caso di danneggiamento del dispositivo principale.  

## Note importanti  
- **Compatibilità con legacy systems**: I dispositivi FIDO2 supportano anche protocolli tradizionali come PIV, permettendo un passaggio graduale verso la passwordless authentication.  
- **Sicurezza in ambienti remoti**: Il YubiKey è particolarmente utile per dipendenti che lavorano da remoto o usano dispositivi condivisi (es. workstation aziendali).  

---  

## FAQ: Risposte a domande comuni  
## 1. Come si crea un PIN FIDO2 su YubiKey?
- Collega il dispositivo al browser e vai su **Passkeys** in Yubico Authenticator.  
- Segui le istruzioni per impostare il PIN (minimo 6 caratteri, massimo 12).  

## 2. Cosa succede se dimentico il PIN?
- Il YubiKey blocca la FIDO2 application dopo 8 tentativi errati. Devi resettarlo tramite un tool specifico o contattare support@yubico.com.  

## 3. Posso usare YubiKey con servizi legacy come Google?
- Sì, i dispositivi FIDO2 supportano anche protocolli tradizionali (es. PIV), permettendo una transizione graduale verso la passwordless authentication.  

---  

## Vedi anche  
- [Passkeys: FIDO2 — Yubico Authenticator User Guide documentation](https://docs.yubico.com/software/yubikey/tools/authenticator/auth-guide/fido2.html)  
- [YubiKey vs. FIDO2 Security Key: What’s the Difference?](https://rublon.com/blog/yubikey-vs-fido2-security-key/)

## Domande frequenti

### Cosa fa esattamente un YubiKey in FIDO2?
Un YubiKey agisce come "chiave fisica" che genera e gestisce i credenziali di autenticazione senza rivelare il private key. Quando ti logghi, il sistema verifica la tua identità tramite una firma criptata, non un password.  

### Perché FIDO2 è migliore dei codici OTP?
I codici OTP (One-Time Password) sono vulnerabili a phishing e attacchi di tipo "spoofing", dove l’attaccante finge di essere il sistema. FIDO2 elimina questa possibilità grazie al protocollo CTAP, che richiede un contatto fisico o NFC tra il dispositivo e il sistema.  

### Cosa succede se perdo il YubiKey?
Se non hai configurato un backup (come un PIN o un altro autenticatore), potresti rimanere bloccato. Per questo motivo, è sempre consigliabile registrare almeno due tipi di autenticazione: un passkey e un sistema tradizionale come SMS o app authenticator.



















## Fonti

- [Passkeys: FIDO2 — Yubico Authenticator User Guide documentation](https://docs.yubico.com/software/yubikey/tools/authenticator/auth-guide/fido2.html)
- [YubiKey vs. FIDO2 Security Key: What’s the Difference?](https://rublon.com/blog/yubikey-vs-fido2-security-key/)
- [FIDO2 Passwordless Authentication | YubiKey | Yubico](https://www.yubico.com/authentication-standards/fido2/)
- [YubiKeys | Two-Factor Authentication for Secure Login](https://www.yubico.com/products/)