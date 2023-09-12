# Leitfaden für Maintainer

Dieser Leitfaden richtet sich an diejenigen, die dem Projekt als Maintainer beitreten möchten, um die Verwaltung und Pflege des Projekts für die Community zu unterstützen. (Dies ist kein Leitfaden für **Erstbeiträger**)

## Übersetzungen

Dieses Tutorial ist auch in [anderen Sprachen verfügbar](/translations/README.md)

| [Englisch](/maintainer_guide.md) | [Bengali](/translations/maintainer_guide/maintainer_guide.ben.md) | [Deutsch](/translations/maintainer_guide/maintainer_guide.ger.md) | [Italienisch](/translations/maintainer_guide/maintainer_guide.ita.md) | [Japanisch](/translations/maintainer_guide/maintainer_guide.jpn.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Portugiesisch](/translations/maintainer_guide/maintainer_guide.por.md) | [Ukrainisch](/translations/maintainer_guide/maintainer_guide.ukr.md) | [Chinesische (Traditionell)](/translations/maintainer_guide/maintainer_guide.zho-tc.md)

> Übersetzungen für Projektdokumentationen sind willkommen. Lesen Sie den [`Übersetzungsleitfaden`](/translations/README.md), um beizutragen.

---

## Ziele

Unser Hauptziel ist es, unseren Beitragenden so schnell wie möglich Feedback zu geben, sobald sie ihren Pull-Request erstellt haben. Das bedeutet in erster Linie, Code-Reviews durchzuführen und akzeptierte PRs zusammenzuführen.  
Darüber hinaus können wir das Projekt pflegen und sicherstellen, dass alles korrekt funktioniert und so hilfreich und nützlich wie möglich für unsere Beitragenden ist.

## Für wen ist das?

Für jeden, der ein wenig Git- und GitHub-Kenntnisse hat. Sie müssen kein Experte sein, dieser Leitfaden sollte auch Anfängern helfen. Dies ist ein aktives Projekt, das regelmäßige Beiträge erhält und vielen Menschen ihren ersten Open-Source-Beitrag ermöglicht. Als Maintainer in diesem Projekt können Sie sicherstellen, dass es unseren Beitragenden weiterhin eine gute erste Erfahrung bietet und sie ermutigt, mehr beizutragen.

Sie können so viel oder so wenig Zeit investieren, wie Sie möchten. Zusammen können wir hoffentlich sicherstellen, dass es reibungslos läuft.

## Methodik

- Gehen Sie zur Pull-Request-Sektion des Projekts und beginnen Sie mit dem ältesten Pull-Request, der sich nicht im Zustand "Änderungen angefordert" befindet.
- Eröffnen Sie einen PR und gehen Sie zum Tab "Dateiänderungen" und starten Sie ein Code-Review.
- Überprüfen Sie den PR und stellen Sie sicher, dass er den Spezifikationen im Tutorial entspricht.
- Stellen Sie sicher, dass das HTML, die Links und die Daten alle korrekt sind. Achten Sie darauf, dass die Karte am Anfang der Datei positioniert ist, wo sie sein sollte.
- Überprüfen Sie als Nächstes auf Konflikte. Mergen Sie `master` in den PR-Zweig, um die Konflikte zu beheben. Konflikte treten normalerweise auf, wenn seit den letzten Merges einige PRs dieselbe veraltete Version verwenden.
- Wenn dies der Fall ist, beheben Sie den Konflikt. Normalerweise müssen Sie die neue Karte oben auf Karten hinzufügen, die seit der Fork-Erstellung hinzugefügt wurden.
- Wenn alles andere in Ordnung ist, genehmigen Sie den PR, schreiben Sie eine Nachricht an den Beitragenden und danken Sie ihnen für ihren Beitrag (denken Sie daran, dass sie Erstbeiträger sind und von Ermutigung profitieren).
- Mergen Sie den PR in `master`.

## Änderungen anfordern

- Manchmal gibt es Probleme mit dem PR, die vom Beitragenden behoben werden sollten, wie falsche Verzweigungen, defektes HTML, fehlende Informationen oder falsch platzierte Karten. Alles, bei dem das Tutorial nicht korrekt befolgt wurde (und keine einfachen Merge-Konflikte).
- Starten Sie ein Code-Review auf GitHub und fordern Sie Änderungen an. Versuchen Sie, so genau wie möglich zu sein, kommentieren Sie die genaue Zeile, teilen Sie ihnen genau mit, was das Problem ist und wie es behoben werden kann, und ermutigen Sie sie, dass dies ein normaler Teil des PR-Überprüfungsprozesses ist.
- Wenn Sie bereit sind, reichen Sie die Überprüfung ein.
- Behalten Sie die Konversation im Auge, falls der Beitragende Nachfragen hat, bei denen Sie helfen können. Unser Ziel ist es, alle über die Ziellinie zu bringen, daher versuchen wir, sie den ganzen Weg zu begleiten.
- Sobald sie die angeforderten Änderungen vorgenommen haben, kann der PR in `master` gemergt werden.

Bitte testen Sie immer, ob die Änderungen das Projekt nicht kaputt gemacht haben und ob die Live-Seite wie erwartet funktioniert. Es ist immer am besten, die Änderungen lokal zu testen, bevor Sie sie zusammenführen, und niemals etwas zu mergen, das verdächtig aussieht.

## Werkzeuge

Wenn nicht viele PRs angesammelt sind, kann dieser gesamte Prozess direkt auf der GitHub-Seite des Projekts durchgeführt werden.  
Es ist jedoch nicht ungewöhnlich, einige PRs zu haben, die warten, und dabei wird es unweigerlich zu Konflikten beim Zusammenführen kommen. Sie können jedes Ihnen vertraute Tool verwenden, um Diffs zu sehen und Konflikte zu beheben.  
Ich empfehle die Verwendung eines Tools wie [GitKraken](https://www.gitkraken.com/download). Es ist visuell und ermöglicht eine einfachere Verwaltung des Projekts, wenn einige PRs durchzugehen sind.  
Laden Sie GitKraken herunter, klonen Sie das Projekt. Mit einer Kombination aus Ihrem Code-Editor und dem integrierten Merge-Konflikt-Tool von GitKraken haben Sie die volle Kontrolle, um PRs schnell durchzugehen, Konflikte zu beheben und zu mergen.

Das Projekt hat Prettier installiert, um sicherzustellen, dass unabhängig davon, wie ein Beitragender den PR einreicht, der Style-Guide durchgesetzt wird. Auf diese Weise wird das Projekt immer mit der gleichen Einrückung und dem gleichen Stil gepflegt.  
Falls Sie feststellen, dass die HTML-Datei unordentlich aussieht, führen Sie den folgenden Code im Projektstammverzeichnis aus.

```js
npx prettier --write index.html
```
Es sollte versuchen, die Datei zu formatieren, und wenn es nicht kann, wird es Ihnen die Fehler anzeigen. Manchmal wird ein fehlendes schließendes Tag oder kaputtes HTML versehentlich gemergt, und dies ist eine gute Möglichkeit, es zu erkennen und zu beheben.

Wenn Sie jemals Zweifel haben, können Sie mich oder die anderen Maintainer jederzeit im PR selbst erwähnen oder mir eine DM auf [Twitter](https://twitter.com/Syknapse) senden.

## Treten Sie bei uns bei

Schließen Sie sich uns an, um dieses Projekt gemeinsam zu erweitern. Nehmen Sie Kontakt mit mir auf [Twitter](https://twitter.com/Syknapse) auf und senden Sie mir Ihren GitHub-Benutzernamen, damit ich Sie hinzufügen kann. Sie können auch unserer Discord-Community beitreten, indem Sie auf die Schaltfläche unten klicken:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Treten Sie unserem Discord-Server bei!')
