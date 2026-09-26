# FIDO2 YubiKey: La chiave che non si può rubare  

> La sicurezza è un processo, non un prodotto. — Bruce Schneier.




















Se hai mai pensato che la protezione delle password sia come combattere un incendio con una bottiglia d’acqua, FIDO2 e YubiKey ti offrono una soluzione più radicata. Non si tratta di aggiungere strati sull’incendio, ma di ristrutturare il sistema in modo che non esista mai un fuoco da spegnere.  


![FIDO2 YubiKey](https://res.cloudinary.com/buysec-as/image/upload/d_standard_placeholder.png,f_auto,q_auto/v1682066255/p_KEY18_default_1)

## Perché i tradizionali metodi di autenticazione falliscono  
I sistemi basati su password o codici OTP (One-Time Passwords) sono come un muro di cartone: sembrano solidi, ma il primo colpo li distrugge. Secondo le fonti, il 70% degli attacchi moderni si basa su phishing o social engineering per rubare "shared secrets" – informazioni condivise tra utente e sistema. FIDO2 cambia tutto: non chiede di sapere una password, ma di possedere un oggetto fisico (come un YubiKey) che tiene nascosto il suo private key.  

## La differenza tra hardware e software  
Un YubiKey è come un'arma da fuoco in un combattimento a distanza: non si vede mai, ma è sempre pronta a intervenire. Mentre i software di autenticazione (come gli app authenticator) sono vulnerabili a attacchi remoti, il hardware isolato del YubiKey lavora in modo autonomo, senza dipendere dall’OS o dal browser. Questo lo rende un'alternativa essenziale per ambienti sensibili come server condivisi o workstation aziendali.  

## FIDO2: Il protocollo che non si può "rubare"  
FIDO2 funziona grazie a due componenti chiave: **WebAuthn** e **CTAP**. WebAuthn è il sistema che permette ai browser di comunicare con l’autenticatore, mentre CTAP (Client to Authenticator Protocol) fa sì che il dispositivo fisico (YubiKey) si interfacci direttamente con il sistema. Questo crea un circuito chiuso: il private key non esiste mai nel chiaro, e nessun attaccante può "catturarlo" come in un sistema tradizionale.  

## La parola chiave: PIN  
Prima di usare un YubiKey per FIDO2, devi creare un PIN. Non è solo una password; è la chiave che apre il "contenitore" dove si trova il private key. Se sbagli il PIN, non puoi accedere al sistema – e questo ti protegge da attacchi di tipo brute-force. La fonte precisa che YubiKey permette fino a 8 tentativi per riprovare, con blocchi automatici dopo errori consecutivi.  

## Il problema dei passkey  
I "passkeys" sono credenziali scoperte (discoverable) che si registrano direttamente su un account. Sono comodi perché non richiedono configurazioni complesse, ma questo stesso vantaggio li espone a rischi: se un attaccante riesce a rubare il passkey, può accedere all’account senza ulteriori passaggi. Per questo motivo, è sempre consigliabile usare anche un backup, come un YubiKey tradizionale o un PIN fisico.  

## Vedi anche  
- [FIDO2 Passwordless Authentication | YubiKey | Yubico](https://www.yubico.com/authentication-standards/fido2/)  
- [Passkeys: FIDO2 — Yubico Authenticator User Guide documentation](https://docs.yubico.com/software/yubikey/tools/authenticator/auth-guide/fido2.html)

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