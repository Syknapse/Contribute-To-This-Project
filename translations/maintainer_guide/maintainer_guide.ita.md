# Guida del Manutentore (Italiano)

Questa guida è destinata a coloro che desiderano unirsi al progetto come manutentori, per contribuire a gestire e mantenere il progetto per la comunità. (Questa **non è una guida per i nuovi contributori**)

⚠️ Questa è la traduzione italiana della guida del manutentore. Per la versione originale in inglese, visita [maintainer_guide.md](../../maintainer_guide.md)

## Traduzioni

Questo tutorial è disponibile anche in [altre lingue](translations/README.md)

| [English](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [French (française)](translations/maintainer_guide/maintainer_guide.fra.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) |
| :---: | :---: | :---: | :---: | :---: |
[Hindi](translations/maintainer_guide/maintainer_guide.hin.md) | [Indonesian](translations/maintainer_guide/maintainer_guide.ind.md) | [Italian](translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md) | [Korean](translations/maintainer_guide/maintainer_guide.kor.md) | 
[Portuguese](translations/maintainer_guide/maintainer_guide.por.md) | [Russian](translations/maintainer_guide/maintainer_guide.rus.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) |

> Translations for projects documentations are welcome. Read [`Translation Guide`](translations/README.md) to contribute.

---

## Obiettivi

Il nostro obiettivo principale è fornire ai contributori il feedback più rapido possibile dal momento in cui inviano la loro pull request.Ciò significa principalmente eseguire le revisioni del codice e unire (merge) le PR accettate.

Oltre a questo, possiamo mantenere il progetto assicurandoci che tutto funzioni correttamente e che rimanga il più utile e intuitivo possibile per i nostri contributori.

## Who is this for?

Chiunque abbia un po' di esperienza con Git e GitHub. Non è necessario essere un esperto: questa guida dovrebbe aiutare anche i principianti. Questo è un progetto attivo che riceve contributi regolari e aiuta molte persone a fare la loro prima contribuzione open source. Essere un manutentore di questo progetto aiuta a garantire che continui a offrire ai contributori una buona prima esperienza e li incoraggi a contribuire di più.

Puoi dedicare a questo progetto tutto il tempo che desideri, poco o tanto. Tra di noi, speriamo di riuscire a mantenerlo in funzione senza problemi.

## Metodologia

- Vai alla sezione delle pull request del progetto e inizia con la pull request più vecchia che non si troa nello stato "modifiche richieste".
- Apri una PR, vai alla scheda delle modifiche ai file e inizia una revisione del codice.
- Controlla la PR e assicurati che segua le specifiche indicate nel tutorial.
- Assicurati che l'HTML, i collegamenti e i dati siano tutti corretti. Verifica che la scheda sia posizionata all'inizio del file, dove dovrebbe essere.
- Successivamente controlla la presenza di eventuali conflitti. Unisci il branch `master` nel branch della PR per risolverli. I conflitti di solito si verificano quando è passato un po' di tempo dagli ultimi merge e diverse PR utilizzano la stessa versione non aggiornata.
- In questo caso, risolvi il conflitto. Di solito dovrai aggiungere la nuova scheda sopra le schede che sono state aggiunte dopo la creazione del fork.
- Se tutto il resto è a posto, approva la PR e scrivi un messaggio al collaboratore ringraziandolo per il contributo (ricorda che spesso sono alle prime armi e trarranno beneficio da un po' di incoraggiamento).
- Unisci la PR nel branch `master`.

## Richiedi modifiche

- A volte ci sono problemi con la PR che devono essere corretti dal collaboratore, come ramificazioni errate, HTML danneggiato, informazioni mancanti o la scheda posizionata nel posto sbagliato. Qualsiasi cosa che non segua correttamente il tutorial (e non semplici conflitti di merge).
- Avvia una revisione del codice su GitHub e richiedi modifiche. Cerca di essere il più descrittivo possibile, commenta la riga esatta, spiega esattamente qual è il problema e come risolverlo e incoraggiali, ricordando che fa parte normale del processo di revisione delle PR.
- Quando sei pronto, invia la revisione.
- Tieni d’occhio la conversazione nel caso il collaboratore abbia domande di follow-up su cui puoi aiutarlo. Il nostro obiettivo è far arrivare tutti al traguardo, quindi cerchiamo di guidarli fino alla fine.
- Una volta che hanno corretto le modifiche richieste, la PR può essere unita al branch `master`.

Ti preghiamo sempre di testare che le modifiche non abbiano rotto il progetto e che la pagina live funzioni come previsto. È sempre meglio testare le modifiche in locale prima di fare il merge e non unire mai nulla che sembri sospetto.

## Strumenti

Se non ci sono molte PR accumulate, l’intero processo può essere eseguito direttamente dalla pagina GitHub del progetto.  
Tuttavia, non è raro avere alcune PR in attesa, e in questi casi ci saranno inevitabilmente conflitti di merge. Puoi usare qualsiasi strumento con cui ti senti a tuo agio per vedere le differenze e risolvere i conflitti.  
Ti consiglio di usare uno strumento come [GitKraken](https://www.gitkraken.com/download). È visivo e consente una gestione più semplice del progetto quando ci sono diverse PR da revisionare.  
Scarica GitKraken, clona il progetto. Usando una combinazione del tuo editor di codice e dello strumento integrato di risoluzione dei conflitti di GitKraken, puoi gestire rapidamente le PR, risolvendo conflitti e unendo i cambiamenti.

Il progetto ha Prettier installato per garantire che, indipendentemente da come un collaboratore invii la PR, la guida allo stile venga sempre rispettata. In questo modo il progetto mantiene sempre la stessa indentazione e stile.  
Se noti che il file HTML sembra disordinato, esegui il seguente comando nella directory principale del progetto:

```js
npx prettier --write index.html

