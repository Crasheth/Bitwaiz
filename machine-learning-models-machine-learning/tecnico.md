# Refined and dynamic susceptibility assessment of landslides using InSAR and machine learning models

> L'intelligenza artificiale è la nuova elettricità. — Andrew Ng.



Secondo le fonti, il metodo introduce un approccio innovativo per la valutazione della suscettibilità a frane, integrando dati di monitoraggio InSAR con modelli di machine learning. Questo supera le limitazioni delle valutazioni tradizionali basate su fattori ambientali statici, catturando la dinamicità delle attività di frana, come l'aumento stagionale dovuto alle precipitazioni. Il processo inizia con l'applicazione di modelli di machine learning (random forest, logistic regression e gradient boosting decision tree) a fattori di condizione (topografia, geologia, idrologia e attività umana) per generare mappe preliminari di suscettibilità. Questi modelli sono addestrati su dati multicolineari per ridurre al minimo l'influenza delle variabili correlate. I dati di deformazione InSAR, raccolti su un periodo di sei anni (2019-2022), sono poi integrati attraverso una matrice di valutazione che classifica i livelli di intensità della deformazione (cinque classi) in base a intervalli naturali. Questa integrazione migliora significativamente le prestazioni del modello rispetto a modelli di machine learning isolati, riducendo i falsi positivi e falsi negativi nelle zone ad alta e molto alta suscettibilità.  Il lavoro è stato condotto nella contea di Hualong, in Cina, una zona di transizione tra la piattaforma Qinghai-Tibet e la piattaforma di Loess, evidenziando la potenziale applicazione per la riduzione del rischio di frane tenendo conto dei modelli di deformazione temporali influenzati da fattori come le precipitazioni e le attività umane.

Il metodo si articola in diverse fasi chiave:

*   **Raccolta e preparazione dei dati:** acquisizione di immagini InSAR e raccolta di dati di condizione (topografia, geologia, idrologia, attività umana).
*   **Addestramento del modello:** addestramento di modelli di machine learning (RF, LR, GBDT) sui dati di condizione.
*   **Integrazione InSAR:** integrazione dei dati di deformazione InSAR attraverso una matrice di valutazione.
*   **Valutazione e raffinamento:** valutazione delle mappe di suscettibilità e raffinamento tramite metriche di confusione, indagini sul campo e dati acquisiti tramite droni.
*   **Validazione:** verifica della precisione delle mappe di suscettibilità attraverso confronto con dati reali e indagini sul campo.

I risultati hanno rivelato concentrazioni di alta suscettibilità nelle zone occidentali, centrali e orientali della regione di studio, con il modello LR-InSAR che ha dimostrato le migliori prestazioni complessive nell'identificare le zone ad alta e molto alta suscettibilità su scala regionale e locale.




## Fonti

- [Machine learning model](https://en.wikipedia.org/wiki/Machine_learning_model)
- [Refined and dynamic susceptibility assessment of landslides using InSAR and machine learning models](https://grokipedia.com/page/Refined_and_dynamic_susceptibility_assessment_of_landslides_using_InSAR_and_machine_learning_models)
- [Machine Learning Models - GeeksforGeeks](https://www.geeksforgeeks.org/machine-learning/machine-learning-models/)