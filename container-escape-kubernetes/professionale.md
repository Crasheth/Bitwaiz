# Container Escape Kubernetes: Rischi e Mitigazioni  

> Ci sono solo due industrie che chiamano i propri clienti 'utenti': la droga e il software. — Edward Tufte.




![container escape Kubernetes](https://blogs.jsmon.sh/content/images/size/w1200/2026/03/feature-image-docker.png)

## Contesto e rischi  
Kubernetes ha reso i container una parte essenziale della gestione cloud, ma questa popolarità ha anche ampliato le opportunità per gli attacchi. Un errore di configurazione o un abuso di privilegi può permettere a un attaccante di "fuggire" dal contenitore e accedere al sistema host. Questo scenario, noto come *container escape*, è diventato un problema critico per le organizzazioni che utilizzano Kubernetes in produzione.  

La complessità dei cluster Kubernetes crea differenze tra i privilegi assegnati e quelli effettivamente necessari. Gli attaccanti sfruttano queste lacune, come il *cap_sys_ptrace* o l'accesso a percorsi come */var/lib/kubelet/kubeconfig*, per ottenere controllo su risorse critiche del cluster. Il problema non è solo tecnico: è una conseguenza diretta di un modello di sicurezza che privilegia la velocità e la scalabilità rispetto alla rigidità delle politiche di accesso.  

## Metodi di escape  
I container escape in Kubernetes si basano su due principi chiave: **privilegi non necessari** e **accesso a risorse host**. La maggior parte dei casi si verifica quando un pod è configurato con capacità come *HostPath* o *Privileged*, che permettono di esplorare il filesystem del sistema ospite.  

Un attaccante può iniziare con comandi come `capsh --print` per identificare le capacità assegnate, poi usare `chroot /host-system bash` per accedere al contesto host. Dopo aver ottenuto privilegi, il passo successivo è recuperare il *kubeconfig* del nodo e utilizzare strumenti come `kubectl` per esplorare l'intero cluster. Questo processo richiede una combinazione di abilità tecniche e conoscenza delle vulnerabilità comuni (es. CVE-2019-5736), che spesso vengono sfruttate in modo sistematico.  

## Rilevamento e mitigazioni  
La difesa contro i container escape dipende da una **gestione rigorosa dei privilegi** e un monitoraggio attivo. Le organizzazioni devono:  
1. Evitare di concedere capacità non necessarie ai contenitori (es. *Privileged*).  
2. Isolare il filesystem host con limiti chiari, evitando montaggi come */host-system*.  
3. Utilizzare strumenti come *Cortex* o *Prisma Cloud* per rilevare comportamenti anomali nel cluster.  

Il problema richiede un approccio proattivo: non basta proteggere i contenitori, ma garantire che il sistema host rimanga inaccessibile a qualsiasi tentativo di "fuga". Questo è il cuore della sicurezza in Kubernetes — non un muro, ma una **conoscenza precisa del flusso delle risorse**.  

## Vedi anche  
- **Kubernetes Container Security Best Practices**  
- **Detecting and Preventing Container Escapes in Cloud Environments**

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