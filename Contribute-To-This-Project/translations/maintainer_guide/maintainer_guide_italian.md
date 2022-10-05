# Guida Manutentori

Questa guida si rivolge a coloro che vogliono unirsi al progetto come manutentori, per aiutare a gestire e mantenere il progetto per la comunità. (Questa non è una guida per **contributori alla prima contribuzione**)

## Obiettivi

Il nostro obiettivo principale è di fornire ai nostri contributori nel modo più rapido possibile dei riscontri e risposte dal momento in cui aprono la loro richiesta di unione codice (pull request). Questo si traduce principalmente in fornire revisioni di codice, ed unire "PRs" approvate.
Inoltre, possiamo mantenere il progetto accertandoci che tutto funzioni correttamente nella maniera più utile per i nostri contributori.ontributors.

## A chi si rivolge?

Chiunque abbia un minimo di conoscenze Git e GitHub. Non è necessario essere esperti, questa guida dovrebbe essere d'aiuto perfino per neofiti. Questo è un progetto attivo che riceve contribuzioni regolarmente ed aiuta molte persone ad intraprendere i loro primi passi verso contribuzioni open source. Essere un manutentore di questo progetto aiuta ad assicurarsi di continuare a fornire ai nostri contributori una buona prima esperienza, e ad incoraggiarli a contribuire ancora.

È possibile dedicare quanto più o meno tempo si voglia in questa atività. Con il nostro impegno dovremmo riuscire a mantenere il tutto ben funzionante.

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

- Alcune volte potrebbero esserci problemi con la PR che dovrebbero essere sistemati dal contributore, come la creazione di una "branch" (ramo) incorretta, HTML incorretto, informazioni mancanti, scheda inserita nel posto sbagliato. Tutto ciò che dimostri di non avere seguito correttamente il tutorial (e non semplici conflitti di unione).
- Iniziare la revisione su GitHub e richiedere modifiche. Cercare di essere quanto più descrittivi possibile, commentare la linea esatta, informare loro esattamente di quale sia il problema e come sistemarlo, quindi incoraggiarli comunicando quanto questo sia normale nel processo di revisione di una PR.
- Quando pronti, sottoporre la revisione.
- Tenere d'occhio la conversazione nel caso il contributore abbia successive domande a cui si possa fornire aiuto. Il nostro obiettivo è che raggiunga il traguardo, proviamo quindi a guidarli fino alla fine.
- Una volta che il contributore avrà fornito le modifiche richieste, la PR può essere unita a `master`.

Per favore, verificare sempre che le modifiche non abbiano impattato le funzionalità del progetto e che la pagina "live" (in diretta) funzioni ancora come previsto. È sempre meglio verificare le modifiche in locale prima di unirle, e mai unire niente che risulti sospetto.

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
