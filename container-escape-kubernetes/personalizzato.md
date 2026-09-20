# Container Escape Kubernetes: Come evitare le falle di sicurezza nei cluster  

> Ci sono solo due industrie che chiamano i propri clienti 'utenti': la droga e il software. — Edward Tufte.












Se immagini un sistema come una montagna, il container escape Kubernetes è come un’alpinista che trova una via segreta per scendere senza passare per la strada principale. Non si tratta di un attacco violento, ma di un sfruttamento delle debolezze inaspettate. I container sono progettati per isolare processi, ma quando le configurazioni non sono precise, possono diventare una porta aperta per chiunque abbia la pazienza di cercarla.  

## Perché i container non sono sempre al sicuro  
I container funzionano come un’isola separata all’interno del sistema host, ma il loro isolamento non è perfetto. In Kubernetes, alcuni pod possono essere configurati con privilegi inutilizzati, come l’accesso a `/host-system` o capacità come `cap_sys_ptrace`. Queste opzioni sono utili per debug e monitoraggio, ma se non vengono gestite con attenzione, diventano un’arma a doppio taglio.  

Un esempio? Immagina di avere una chiave che apre una porta. Se la lasci sempre esposta, chiunque può entrare. Lo stesso vale per i container: se vengono creati con privilegi non necessari, possono essere usati per accedere al sistema host e, da lì, a tutta la rete del cluster.  

## Come funziona un escape di container  
Il processo inizia con una configurazione sbagliata. Un pod con accesso a `/host-system` permette di esplorare il filesystem del nodo. Con strumenti come `chroot`, è possibile "entrare" nel sistema host, come se si fosse dentro la montagna e si trovasse un sentiero nascosto.  

Da lì, l’attaccante può recuperare file sensibili come `/var/lib/kubelet/kubeconfig` o usare `kubectl` per interagire con il cluster. È come trovare una mappa segreta che ti permette di muoverti liberamente dentro un sistema che dovrebbe essere invisibile.  

## Cosa puoi fare per proteggere i tuoi container  
1. **Limita i privilegi**: Non concedere capacità inutilizzate, come `cap_sys_ptrace` o accessi a `/host-segment`.  
2. **Verifica le configurazioni**: Usa strumenti per analizzare le impostazioni dei pod e assicurati che non siano state lasciate aperte.  
3. **Monitora il traffico**: Un sistema di threat hunting può rilevare comportamenti anomali, come accessi a directory inaspettate o uso di comandi strani.


## Come la vedo io  

Su **container escape Kubernetes** il quadro che uso nel **playbook** quotidiano è lineare: osservo i **log**, accetto il **flusso** degli incidenti senza dramma da manuale. La **consapevolezza** qui è operativa — come curare un **giardino**: controlli, correggi, ripeti.

## Domande frequenti

#### Cosa significa "container escape"?  
È l’accesso al sistema host da parte di un container non configurato correttamente, che permette di prendere il controllo del nodo e del cluster.  

#### Come posso rilevare un container escape?  
Utilizza strumenti come EDR per monitorare le attività sospette e analizzare i log dei pod in cerca di accessi anomali.  

#### Quali configurazioni sono più a rischio?  
Pod con capacità come `cap_sys_ptrace` o accesso a `/host-system`, spesso usati per debug ma abilitati senza controllo.  

### Vedi anche
- **Container security best practices**  
- **Kubernetes misconfigurations risks**  


![container escape Kubernetes](https://blogs.jsmon.sh/content/images/size/w1200/2026/03/feature-image-docker.png)











## Fonti

- [Container Breakouts: Escape Techniques in Cloud Environments](https://unit42.paloaltonetworks.com/container-escape-techniques/)
- [K8s - Pod to Node Escape Techniques | CovertSwarm](https://www.covertswarm.com/post/k8s-pod-to-node-escape-techniques)
- [⎈ Container escape to the host system | Kubernetes Goat](https://madhuakula.com/kubernetes-goat/docs/scenarios/scenario-4/container-escape-to-the-host-system-in-kubernetes-containers/welcome/)
- [Container escape in Kubernetes: risks for production applications](https://cibersafety.com/en/Kubernetes-container-escape/)