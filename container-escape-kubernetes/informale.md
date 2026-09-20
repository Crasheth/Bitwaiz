# Container Escape Kubernetes: come un fiume trova la via più facile  

> Ci sono solo due industrie che chiamano i propri clienti 'utenti': la droga e il software. — Edward Tufte.












Se ti capita di lavorare in un ambiente Kubernetes, una configurazione sbagliata può far scivolare il sistema come un fiume che cerca sempre il punto più basso. I container sono progettati per isolarsi, ma quando si concede troppi privilegi – come *HostPath* o capacità superflue – diventano una porta aperta.  


![container escape Kubernetes](https://blogs.jsmon.sh/content/images/size/w1200/2026/03/feature-image-docker.png)

## Cos’è un escape in Kubernetes?  
Un container escape è come un fiume che scava sotto le rocce: cerca il modo più semplice per uscire dal suo ambiente ristretto. In Kubernetes, questo significa sfruttare errori di configurazione per accedere al sistema host o a risorse del cluster.  

La maggior parte dei container è progettata per eseguire un singolo compito – come monitoraggio o debug – ma richiede privilegi extra. Se questi vengono concessi in modo non necessario, diventa facile rompere il confine. La tecnica più comune? Usare *cap_sys_ptrace* o *HostPath* per esplorare l’host e rubare la configurazione di sistema.  

## Come accade un container escape  
1. **Capacità sbagliate**: Un container con capacità come *cap_sys_ptrace* può leggere il traffico del kernel, creando una via d’accesso al sistema.  
2. **Mount HostPath**: Se i file system dell’host sono montati, è possibile navigare in /var/lib/kubelet per trovare il kubeconfig e accedere al cluster.  
3. **Escaped container**: Usare *chroot* o *crictl* per esplorare le risorse del host e sfruttare la configurazione di sistema.  

Questo è come un monaco che osserva il respiro: ogni passo sembra naturale, ma nasconde una via segreta. Una volta dentro, l’attaccante può spostarsi in tutto il cluster, come un fiume che scorre senza ostacoli.  

## Nota 1: Perché preoccuparsi  
Un container escape non è solo un problema tecnico: è una minaccia a tutta la sicurezza del sistema. Se un attaccante riesce a uscire da un container, può rubare dati sensibili, modificare configurazioni o propagare malware attraverso il cluster.  

L’errore più comune? Concedere privilegi inutili. Un container che non ha bisogno di *HostPath* o *cap_sys_ptrace* non dovrebbe averli. La soluzione è ridurre al minimo le capacità e verificare ogni configurazione con attenzione.  

## Cosa fare per proteggersi  
- **Limita le capacità**: Usa solo quelle necessarie, come *cap_net_bind_service* o *cap_ipc_lock*.  
- **Verifica i mount**: Assicurati che non siano montati file system dell’host a meno che non sia strettamente necessario.  
- **Monitora il flusso**: Osserva i comportamenti anomali, come accessi inaspettati ai log o al kubeconfig.  

Come diceva un maestro taoista: “Il fiume non lotta con le rocce, scorre intorno”. La sicurezza deve fare lo stesso: non costruire muri altissimi, ma capire dove il flusso va e guidarlo fuori dalla strada giusta.  

## Vedi anche  
- [Container escape in Kubernetes: rischi per applicazioni produttionali](https://cibersafety.com/en/Kubernetes-container-escape/)  
- [K8s - Pod to Node Escape Techniques | CovertSwarm](https://www.covertswarm.com/post/k8s-pod-to-node-escape-techniques)

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