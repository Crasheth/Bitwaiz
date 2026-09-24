# FIDO2 YubiKey: La chiave di sicurezza nel futuro senza password  

> L'intelligenza artificiale è la nuova elettricità. — Andrew Ng.
















![FIDO2 YubiKey](https://res.cloudinary.com/buysec-as/image/upload/d_standard_placeholder.png,f_auto,q_auto/v1682066255/p_KEY18_default_1)

## Introduzione  
Il problema delle credenziali rubate rimane il principale veicolo di attacchi informatici. FIDO2 e YubiKey offrono una soluzione radicale: eliminare le password e i segreti condivisi, sostituendoli con tecnologie basate su crittografia pubblica. Questo articolo spiega come funziona il sistema, quali vantaggi offre e come implementarlo in modo efficace nel 2026.  

## FIDO2: La base della sicurezza senza password  
FIDO2 (Fast Identity Online) è un insieme di standard che permette l'autenticazione senza password, utilizzando crittografia pubblica per garantire la sicurezza. Il sistema si basa su due componenti chiave: **WebAuthn** e **CTAP**, che collaborano per gestire le credenziali in modo sicuro.  

- **WebAuthn**: Un'API standardizzata integrata nei browser moderni, che permette ai servizi di registrare e verificare l'autenticazione senza conoscere i dettagli del dispositivo utente.  
- **CTAP**: Un protocollo che consente al client (es. smartphone) di comunicare direttamente con un autenticatore esterno (come YubiKey), utilizzando USB, NFC o Bluetooth.  

Questo approccio elimina la vulnerabilità dei segreti condivisi, rendendo il sistema immune alle frodi basate su phishing. Secondo le fonti, FIDO2 è l'unica tecnologia in grado di soddisfare i requisiti delle normative come NIST AAL3.  

## YubiKey: La chiave hardware per la sicurezza  
YubiKey è un dispositivo fisico che supporta FIDO2 e permette di implementare autenticazione a fattore multipli (MFA) in modo robusto. I vantaggi principali includono:  

- **Isolamento dei dati**: La crittografia avviene all'interno del dispositivo, senza esporre le chiavi al sistema host o alla rete.  
- **Supporto per passkeys**: Permette di registrare credenziali scopribili (passkeys) su diversi servizi, semplificando l'accesso senza password.  
- **Compatibilità con standard legacy**: YubiKey supporta protocolli come FIDO U2F e PIV/Smart Card, facilitando la transizione da sistemi obsoleti.  

Secondo le fonti, i dispositivi YubiKey sono particolarmente adatti a contesti sensibili come workstation condivise o ambienti remoti, dove la sicurezza è prioritaria.  

## Implementazione: Da cosa iniziare  
Per utilizzare FIDO2 con YubiKey, è necessario seguire alcuni passaggi chiave:  

1. **Registrazione delle credenziali**: Il dispositivo genera una coppia di chiavi (pubblica e privata) specifica per ogni servizio. La chiave privata rimane protetta all'interno del dispositivo, mentre la pubblica viene associata al account.  
2. **Gestione PIN**: È obbligatorio creare un PIN FIDO2, che serve durante la registrazione e l'autenticazione. Il PIN è necessario anche per modificare le credenziali o abilitare funzionalità come Enterprise Attestation (EA).  
3. **Backup e ripristino**: È consigliabile registrare sia una chiave primaria che una di backup, per evitare blocchi causati da errori durante l'autenticazione.  

Secondo le fonti, il processo richiede attenzione alla configurazione iniziale, ma riduce significativamente i rischi legati alle credenziali tradizionali.  

## FAQ: Risposte pratiche  
## Nota 1: Cosa è un passkey
Un passkey è una credenziale scopribile creata da un servizio utilizzando lo standard FIDO2. Può essere memorizzato su YubiKey e usato per accedere a diversi account senza password.  

## Nota 2: Come gestire i PIN FIDO2 su YubiKey
Su desktop o Android, è possibile modificare il PIN tramite l'app Yubico Authenticator. Su iOS, la configurazione richiede il collegamento via NFC dopo aver inserito la chiave nel dispositivo.  

## Quali dispositivi supportano FIDO2 con YubiKey?
YubiKey 5 Series (standard, FIPS, CSPN), YubiKey Bio Series e Security Key Series sono compatibili con le funzionalità FIDO2. Altri modelli potrebbero richiedere aggiornamenti specifici per supportare il protocollo.  

## Nota 3: Perché usare un hardware security key
I dispositivi hardware isolano la crittografia dal sistema host, riducendo i rischi di attacchi remoti o compromissioni del software. Sono particolarmente adatti a contesti con elevati requisiti di sicurezza.  

## Nota 4: Cosa succede se dimentico il PIN FIDO2
YubiKey permette fino a 8 tentativi per modificare il PIN. Dopo 3 errori consecutivi, la chiave deve essere rimossa e reinserita nel dispositivo. Se si superano i limiti, è necessario resettarla.  

## Vedi anche  
- [FIDO2 Passwordless Authentication | YubiKey | Yubico](https://www.yubico.com/authentication-standards/fido2/)  
- [YubiKeys | Two-Factor Authentication for Secure Login](https://www.yubico.com/products/)

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