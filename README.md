# Progetto Angular - Setup e Avvio in Locale

Questo repository contiene un'applicazione Angular già configurata. Segui le istruzioni sottostanti per eseguire il progetto in locale.

## Prerequisiti

Prima di eseguire il progetto, assicurati di avere installato sul tuo sistema i seguenti strumenti:

- [Node.js](https://nodejs.org/) (versione minima 14.x.x)
- [npm](https://www.npmjs.com/) (Node Package Manager) – dovrebbe essere installato automaticamente con Node.js.

Puoi verificare se hai già installato Node.js e npm eseguendo questi comandi nel terminale:

```bash
node -v
npm -v
```

## Installazione delle Dipendenze
Una volta dentro la cartella del progetto, esegui il comando per installare tutte le dipendenze necessarie:

```bash
npm install
```

Questo comando scaricherà e installerà tutte le librerie e i pacchetti necessari, definiti nel file package.json.

## Avvio dell'Applicazione in Locale
Per avviare l'applicazione Angular in modalità di sviluppo, esegui il comando:

```bash
ng serve
```
Il comando eseguirà il server di sviluppo e l'app sarà disponibile all'indirizzo:
http://localhost:4200

Puoi aprire il browser e accedere a questo URL per visualizzare l'app in esecuzione.
