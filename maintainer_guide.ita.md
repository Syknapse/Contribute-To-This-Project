# Guida per Manutentori

Questa guida si rivolge a coloro che vogliono unirsi al progetto come manutentori, per aiutare a gestire e mantenere il progetto per la comunità. (Questa non è una guida per **contributori alla prima contribuzione**)

## Obiettivi

Il nostro obiettivo principale è di fornire ai nostri contributori nel modo più rapido possibile dei riscontri e risposte dal momento in cui aprono la loro richiesta di unione codice (pull request).

## A chi si rivolge?

Questa guida è adatta a chiunque abbia conoscenze di base di Git e GitHub. Il progetto è attivo e riceve contribuzioni regolari, aiutando le persone a iniziare a contribuire a progetti open source. Come manutentore, aiuterai a garantire una buona esperienza per i contributori e a incoraggiarli a continuare a contribuire. Puoi dedicare il tempo che vuoi a questa attività.

## Metodologia

- Recarsi nella sezione "Pull request" del progetto, e iniziare dalla meno recente che non sia in stato "Change requested" (Modifiche richieste)
- Aprire una PR (Pull Rquest) e spostarsi nella sezione "Changes" (modifiche), quindi iniziare la revisione del codice.
- Verificare la PR, assicurandosi che segua le specifiche del tutorial.
- Assicurarsi che HTML, collegamenti e dati siano tutti corretti. Assicurarsi che la scheda sia posizionata all'inizio del file dove dovrebbe essere.
- Successivamente, controllare che non ci siano conflitti. Unire `master` nella "branch" della PR per risolvere i conflitti. Solitamente, conflitti appaiono quando è passato del tempo dalle unioni precedenti e svariate PR stanno usando la stessa vecchia versione.
- Se questo è il caso, risolvere i conflitti. Solitamente sarà necessario aggiungere la nuova scheda sopra altre schede che sono state aggiunte da quando il "fork" (copia personale del progetto) è stato creato.
- Se tutto il resto è corretto, approvare la PR, scrivere un messaggio al contributore ringraziandolo per la contribuzione (Ricordate, è la loro prima volta e probabilmente beneficeranno da un incoraggiamento).
- Unire la PR in `master`.

### Richiedere modifiche

# Revisione di una PR

Verifica la PR:
- Assicurati che segua le specifiche del tutorial.
Controlla se ci sono problemi come:
-Creazione di una "branch" incorretta, 
-HTML incorretto
-Informazioni mancanti
-Scheda inserita nel posto sbagliato

Richiedi modifiche: Inizia la revisione su GitHub e richiedi modifiche specifiche, commentando la linea esatta e spiegando come sistemare il problema.

Sottoponi la revisione: Quando pronti, sottoponi la revisione.

Guida il contributore: Tenere d'occhio la conversazione e fornisci aiuto se necessario.

Unisci la PR: Una volta che il contributore ha fornito le modifiche richieste, unisci la PR a master.

# Importante:

 Verifica sempre che le modifiche non abbiano impattato le funzionalità del progetto e che la pagina "live" funzioni ancora come previsto. Verifica le modifiche in locale prima di unirle.

## Strumenti

Se non sono presenti troppe PR accumulate, questo intero processo può essere svolto direttamente nella pagina GitHub del progetto.
Nonostante ciò, non è insolito avere alcune PR in attesa, e questo porterà inevitabilmente a dei conflitti. È consentito usare qualsiasi strumento con cui si abbia familiarità per vedere differenze e risolvere conflitti.
Raccomandiamo l'uso di uno strumento come [GitKraken](https://www.gitkraken.com/download). È grafico e permette una gestione più facile del progetto quando ci sono diverse PR da revisionare.
Scaricare GitKraken, quindi clonare il progetto. Usando una combinazione di editor di codice a voi familiare e lo strumento integrato di gestione conflitti di GitKraken fornirà il controllo totale per muoversi con rapidità tra le varie PR, risolvendo conflitti ed unendo il codice.

Il progetto ha installato "Prettier" per assicurarsi che, a prescindere da come un contributore sottoponga la sua PR, la guida di stile verrà forzata. In questo modo il progetto è sempre mantenuto con la stessa indentazione e stile.
Nel caso notiate che il file HTML risulti disordinato, eseguite `npx prettier --write index.html` nella cartella "root" (base) del progetto. Questo dovrebbe cercare di formattare il file e, nel caso fallisse, mostrerà quali errori ha incontrato. In certi casi un tag di chiusura mancante o HTML incorretto potrebbe essere unito per errore, e questo è un metodo valido per accorgersene e risolvere il problema.

In caso di dubbi, è sempre possibile menzionare me o altri manutentori nella PR stessa, oppure inviarmi direttamente un messaggio diretto su [Twitter](https://twitter.com/Syknapse).

## Unisciti

Unisciti a noi per aiutare la crescita di questo progetto insieme. Contattami pure su Twitter e mandami il tuo account GitHub per essere aggiunto.

_Questo documento non è stato tradotto dall'inglese direttamente da [Syknapse](https://github.com/Syknapse), in caso di contatto si suggerisce di usare l'inglese_

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')









