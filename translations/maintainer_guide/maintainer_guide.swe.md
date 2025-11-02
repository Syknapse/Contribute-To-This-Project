# Underhållarguide

Denna guide är för dig som vill bli underhållare i projektet och hjälpa till att hantera och underhålla det för communityn. (Detta är inte en guide för **förstagångsbidragare**)

## Översättningar

Denna guide finns också tillgänglig på [andra språk](translations/README.md)

> Översättningar för detta projekts dokumentation är välkommen. Läs [`Översättningsguide`](translations/README.md) för mer information om hur du kan bidra med översättningar.

---

## Mål

Vårt främsta mål är att ge våra bidragsgivare den snabbaste feedbacken möjligt från det ögonblick de skapar sin pull request. Detta innebär främst att ge kodgranskningar och merga accepterade PR:er.
Utöver det kan vi underhålla projektet genom att säkerställa att allt fungerar korrekt och är så hjälpsamt och användbart som möjligt för våra bidragsgivare.

## Vem är detta för?

Alla som har lite kunskaper i Git och GitHub. Du behöver inte vara expert, den här guiden ska hjälpa även nybörjare. Detta är ett aktivt projekt som får regelbundna bidrag och hjälper många att göra sitt första open source-bidrag. Att vara underhållare i projektet säkerställer att det fortsätter att ge våra bidragsgivare en bra första upplevelse och uppmuntrar till att bidra mer.

Du kan lägga så mycket eller så lite tid du vill på detta. Tillsammans hoppas vi kunna hålla igång det smidigt.

## Metod

- Gå till projektets avsnitt för pull requests och börja med den äldsta pull request som inte är i tillståndet *changes requested*.
- Öppna en PR, gå till fliken *Files changed* och påbörja en kodgranskning
- Kontrollera PR:en och säkerställ att den följer specifikationen i tutorialen.
- Se till att HTML, länkar och data är korrekta. Kontrollera att kortet är placerat i början av filen där det ska vara.
- Kontrollera sedan efter eventuella konflikter. Merga `master` in i PR-grenen för att lösa konflikterna. Konflikter uppstår oftast när det gått en tid sedan senaste mergen och flera PR:er använder samma föråldrade version.
- Om så är fallet, lös konflikten. Vanligtvis behöver du lägga till det nya kortet ovanpå kort som lagts till sedan grenen skapades.
- Om allt annat är okej, godkänn PR:en och skriv ett meddelande till bidragsgivaren där du tackar för bidraget (kom ihåg att de är förstagångsbidragare och mår bra av uppmuntran).
- Merga PR:en in i `master`.

## Begär ändringar

- Ibland finns det problem med PR:en som bidragsgivaren bör åtgärda, t.ex. fel gren, trasig HTML, saknad information eller kort placerat på fel ställe. Allt där tutorialen inte följts korrekt (och som inte är enkla merge-konflikter).
- Starta en kodgranskning på GitHub och begär ändringar. Försök vara så beskrivande som möjligt: kommentera exakt på raden, förklara exakt vad problemet är och hur det ska åtgärdas, och uppmuntra dem med att detta är en normal del av PR-granskningsprocessen.
- När du är klar, skicka in granskningen.
- Håll koll på konversationen ifall bidragsgivaren har uppföljande frågor som du kan hjälpa till med. Vårt mål är att få alla i mål, så vi guidar dem hela vägen dit.
- När de åtgärdat de begärda ändringarna kan PR:en mergas in i `master`.

Vänligen testa alltid att ändringarna inte har förstört projektet och att den live-sidan fortfarande fungerar som förväntat. Det är alltid bäst att testa ändringarna lokalt innan merge och aldrig merga något som verkar misstänkt.

## Verktyg

Om det inte har samlats många PR:er kan hela processen göras direkt på projektets GitHub-sida.
Det är dock inte ovanligt att några PR:er väntar, och då uppstår oundvikligen merge-konflikter. Du kan använda vilka verktyg du är bekant med för att se diffar och lösa konflikter.
Jag rekommenderar ett verktyg som [GitKraken](https://www.gitkraken.com/download). Det är visuellt och gör det enklare att hantera projektet när flera PR:er ska gås igenom.
Ladda ner GitKraken och klona projektet. Genom att kombinera din kodredigerare med GitKrakens inbyggda verktyg för merge-konflikter får du full kontroll för att snabbt gå igenom PR:er, lösa konflikter och merga.

Projektet har Prettier installerat för att säkerställa att kodstilen följs oavsett hur bidragsgivaren skickar in sin PR. På så vis hålls projektet alltid med samma indrag och stil.
Om du ser att HTML-filen ser rörig ut, kör följande kommando i projektets rotmapp:

```js
npx prettier --write index.html
```

Det kommer att försöka formatera filen, och om det inte går visas felen. Ibland smyger sig en saknad stängtag eller trasig HTML in vid merge detta är ett bra sätt att upptäcka och åtgärda det.

Om du någonsin är osäker kan du alltid nämna mig eller andra underhållare direkt i PR:en eller skicka ett DM till mig på [X](https://x.com/Syknapse) f.d *Twitter*.

## Gå med oss

Gå med oss för att växa projektet tillsammans. Kontakta mig på [X](https://x.com/Syknapse) och skicka ditt GitHub-användarnamn så jag kan lägga till dig. Du kan också gå med i vår Discord-community genom att klicka på knappen nedan:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Gå med våran Discord server!')
