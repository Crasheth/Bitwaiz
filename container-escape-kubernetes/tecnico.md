# Container Escape Kubernetes: Pericoli e Mitigazioni  

> Ci sono solo due industrie che chiamano i propri clienti 'utenti': la droga e il software. — Edward Tufte.




---

![container escape Kubernetes](https://blogs.jsmon.sh/content/images/size/w1200/2026/03/feature-image-docker.png)

## Introduzione  
I container Kubernetes sono uno strumento essenziale per la gestione di infrastrutture cloud, ma il loro uso può introdurre rischi significativi. L’escape da un container (container escape) rappresenta una delle minacce più critiche in questo contesto: permette a un attaccante di superare i confini isolati del container e accedere al sistema host o alla rete Kubernetes. Questo articolo esplora come avviene tale fuga, le tecniche utilizzate dagli exploitatori e le misure per mitigarle.  

---

## Come funziona un container escape in Kubernetes  
I container Kubernetes si basano su meccanismi di isolamento come *capabilities* (privilegi del kernel) e *namespaces* (spazi logici di processi, file system, ecc.). Tuttavia, una configurazione errata può compromettere questa protezione.  

## 1. **Abuso delle capacità**  
Un container con privilegi elevati (es. `cap_sys_ptrace` o `cap_chown`) può sfruttare queste funzionalità per esplorare il sistema host. Ad esempio, l’attaccante potrebbe usare `cap_shmat` per accedere a memoria condivisa o `cap_net_admin` per modificare le regole di routing del sistema.  

## 2. **Accesso ai file system**  
Se un container ha montato directory come `/host-system`, può esplorarle e trovare informazioni sensibili, tra cui il file `/var/lib/kubelet/kubeconfig`. Questo permette all’attaccante di ottenere accesso al cluster Kubernetes.  

## 3. **Escapes laterali**  
Una volta compromesso un container, l’attaccante può spostarsi su altri nodi o risorse del cluster usando strumenti come `kubectl` con la configurazione kubeconfig rubata. Questo è particolarmente pericoloso in ambienti produttionali dove i container sono interconnessi.  

---

## Tecniche di mitigazione  
## 1. **Limitare le capacità**  
- Rimuovere capacità non necessarie (es. `cap_sys_ptrace`) durante la creazione dei container.  
- Usare policy di *least privilege* per garantire che i container abbiano solo i privilegi minimi richiesti.  

## 2. **Isolare il file system**  
- Evitare l’uso di montaggi come `/host-system` a meno che non siano strettamente necessari.  
- Utilizzare *read-only* mount per prevenire modifiche al sistema host da parte dei container.  

## 3. **Monitoraggio e rilevamento**  
- Implementare soluzioni EDR (Endpoint Detection and Response) per monitorare attività anomale nei container.  
- Configurare alert su eventi come accesso a `/var/lib/kubelet` o uso di `cap_shmat`.  

## 4. **Aggiornamenti e patching**  
- Mantenere aggiornati i componenti Kubernetes, Docker e il kernel del sistema host per correggere vulnerabilità note (es. CVE-2019-5736).  

---

## Vedi anche  
- [Container Breakouts: Escape Techniques in Cloud Environments](https://unit42.paloaltonetworks.com/container-escape-techniques/)  
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