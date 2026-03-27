> ⚠️ **This translation is outdated.** It describes an old workflow that no longer works. Please follow the [English README](../../README.md) for the current step-by-step tutorial.

---

# [Bidra till detta projekt](https://syknapse.github.io/Contribute-To-This-Project/)

![bild info](/favicon.png)

> Logga skapad med :sparkling_heart: av [CandidDeer](https://github.com/CandidDeer)

[![X](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Gå med våran Discord server!')
[![PRs välkomna](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://syknapse.github.io/Contribute-To-This-Project/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://syknapse.github.io/Contribute-To-This-Project/)

---

> ## **Meddelande:**
>
> Vill du bli underhållare för detta projekt och hjälpa till att hålla det igång? Om du är intresserad, läs [underhållarguiden](/maintainer_guide.swe.md), gå med våran [Discord server](https://discord.gg/tWkvS4ueVF), och be om att få gå med i teamet hos projektets underhållare.

---

### Snabbnavigeringsindex

- [Introduktion](#introduction)
- [Mål](#objectives)
- [Vem är detta för?](#who-is-this-for)
- [Varför behöver jag göra detta?](#why-do-i-need-to-do-this)
- [Vad ska jag bidra med?](#what-am-i-going-to-contribute)
- [Översättningar](#translations)
- [Kom igång! :)](#setup-)
- [Bidra](#contribute)
  - [Steg 1: Forka denna repositoryt](#step-1-fork-this-repository)
  - [Steg 2: Klona repositoryt](#step-2-clone-the-repository)
  - [Steg 3: Skapa en ny branch](#step-3-create-a-new-branch)
  - [Steg 4: Öppna filen index.html](#step-4-open-the-indexhtml-file)
  - [Steg 5: Kopiera kortmallen](#step-5-copy-the-card-template)
  - [Steg 6: Applicera dina ändringar](#step-6-apply-your-changes)
  - [Steg 7: Committa dina ändringar](#step-7-commit-your-changes)
  - [Steg 8: Pusha dina ändringar till GitHub](#step-8-push-your-changes-to-github)
  - [Steg 9: Skicka in en PR (Pull Request)](#step-9-submit-a-prpull-request)
  - [Steg 10: Fira](#step-10-celebrate)
- [Nästa steg](#next-steps)
- [Tack till](#acknowledgements)
- [Licens](#license)
- [Topp 100 medverkande](#top-100-contributors)

---

## Introduktion

Detta är en guide för att hjälpa förstagångsbidragare att delta i ett enkelt och lätt projekt.

### Mål

- Bidra till ett open source-projekt.
- Bli mer bekväm med att använda GitHub.

### Vem är detta för?

- Detta är för absoluta nybörjare. Om du vet hur man skriver och redigerar en ankartagg `<a href="" target=""></a>` så ska du klara det.
- Det är också för dig med lite mer erfarenhet som vill göra ditt första open source-bidrag, eller få fler bidrag för mer erfarenhet och självförtroende.

### Varför behöver jag göra detta?

Alla webbutvecklare, oavsett om de är nybörjare eller erfaren, behöver använda Git för versionshantering, och GitHub är den mest populära Git-hostingtjänsten som används av alla. Det är också hjärtat i open source-communityn. Att bli bekväm med GitHub är en väsentlig färdighet. Att bidra till ett projekt ökar ditt självförtroende och ger dig något att visa upp på din GitHub-profil.

Om du är en ny utvecklare och undrar om du behöver lära dig Git och GitHub här är svaret: [Du borde ha lärt dig Git igår](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa 'Ny utvecklare? Du borde ha lärt dig Git igår. av Brandon Morelli, skapare av CodeBurst.io').

### Vad ska jag bidra med?

![Medverkarkort](/readme-only/card.PNG 'Contributor Card')

Du kommer att bidra med ett kort precis som detta till denna [projektets hemsida](https://syknapse.github.io/Contribute-To-This-Project/ 'https://syknapse.github.io/Contribute-To-This-Project'). Det kommer att innehålla ditt namn, din X-tagg, en kort beskrivning och tre länkar till användbara resurser för webbutvecklare som du rekommenderar.

Du kommer att göra en kopia av kortmallen i HTML-filen och anpassa den med din egen information.

---

### Översättningar

Denna guide finns även på andra språk [andra språk](/translations/README.md)

|     [Arabic (عربي)](/translations/README/ARABIC.md)     |  [Bangla (বাংলা)](/translations/README/BANGLA.md)  | [Chinese (Traditional) (繁體中文)](/translations/README/CHINESE_TRADITIONAL.md) | [Dutch](/translations/README/DUTCH.md) |            [English (English)](/README.md)             |  
| :---------------------------------------------: | :---------------------------------------: | :-----------------------------------------: | :---------------------------------------: | :---------------------------------------: |
| [French (Français)](/translations/README/FRENCH.md) |  [German (Deutsch)](/translations/README/GERMAN.md)  |      [Hindi (हिंदी)](/translations/README/HINDI.md)      | [Italian (Italiano)](/translations/README/ITALIAN.md) | [Japanese (日本語)](/translations/README/JAPANESE.md) |
  [Korean (한국어)](/translations/README/KOREAN.md)  | [Polish (Polski)](/translations/README/POLISH.md) | [Portuguese (Portuguese)](/translations/README/PORTUGUESE.md) | [Russian (Русский)](/translations/README/RUSSIAN.md) |  [Serbian (Српски)](/translations/README/SERBIAN.md)  |
  [Spanish (Español)](/translations/README/SPANISH.md) | [Swedish (Svenska)](/translations/README/SWEDISH.md) | [Turkish (Türkçe)](/translations/README/TURKISH.md) | [Ukrainian (українська)](/translations/README/UKRAINIAN.md) |  [Urdu (اُردُو)](/translations/README/URDU.md) | 
  [Norwegian (Norsk)](/translations/README/NORWEGIAN.md) | [Malayalam](/translations/README/MALAYALAM.md)

> Översättningar av projektdokumentationen är välkomna. Läs [`Översättningsguide`](/translations/README.md) för att bidra.

---

### Kom igång! :)

> [!Note]
> Denna guide är baserad på GitHub via dator. [Om du är bekväm med terminalen, gå till denna guide (Klicka här)](/terminal_tutorial.md)

Först ska vi sätta upp allt för att kunna arbeta

1. Logga in på ditt GitHub-konto. Om du inte har ett konto än [gå med GitHub](https://github.com/join). Jag rekommenderar att du kollar in [GitHub Hello World tutorial](https://guides.github.com/activities/hello-world/) innan du fortsätter.
2. Ladda ned [GitHub Desktop app](https://desktop.github.com/).
   - Alternativt, om du är bekväm med att använda Git i kommandotolken, kan du göra det [Här är en länk till CLI guiden](/terminal_tutorial.md).
   - Om du använder [VS Code](https://code.visualstudio.com/ 'Visual Studio Code hemsida') det kommer med integrerad Git och låter dig göra allt vi behöver direkt från editorn.
   - Men det enklaste och lättaste sättet att följa denna guide är att använda GitHub Desktop.

> Nu när du är helt uppsatt, låt oss sätta igång med att bidra till projektet!

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

### Bidra

Bli en open source-bidragsgivare i 10 enkla steg.

_Beräknad tid: Mindre än 30 minuter_.

#### Steg 1: Forka detta repositoryt

- Målet här är att göra en kopia av detta projekt och placera den i ditt konto.
- Ett repository (repo) är vad ett projekt kallas på GitHub, och en fork är en kopia av det.
- Se till att du är på [huvudsidan](https://github.com/Syknapse/Contribute-To-This-Project 'https://github.com/Syknapse/Contribute-To-This-Project') för detta repo.

| ![Fork](/readme-only/fork.png "Klicka på 'Fork'") |
| :---------------------------------------------: |
|         **Klicka på _Fork_ knappen**          |

- Nu har du en komplett kopia av projektet i ditt eget konto.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 2: Klona repositoryt

- Nu vill vi göra en lokal kopia av projektet. Det är en kopia som sparas på din egen dator.
- Öppna GitHub Desktop-appen. I appen:

| ![Klona](/readme-only/clone.PNG 'klicka clone repository') |
| :------------------------------------------------------: |
|       **Klicka på _File_ sen _Clone repository_**        |

- Du kommer att se en lista över dina projekt och forkade repos på GitHub.
- Välj `<ditt-github-användarnamn>/Contribute-To-This-Project>`.
- Klicka på _Clone_

| ![Klona projekt](/readme-only/clone-project.PNG 'Klicka på =ditt-github-användarnamn=/Contribute-To-This-Project>') |
| :----------------------------------------------------------------------------------------------------------: |

| :arrow_right_hook: Ett forkat projekt har en fork-symbol till vänster. Din fork kommer att ha ditt eget GitHub-användarnamn. | ![din fork](/readme-only/clone-your-fork.PNG 'din fork kommer att se ut så här, med ditt eget användarnamn') |
| :------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------: |

- Detta tar en stund medan projektet kopieras till din hårddisk. Jag rekommenderar att du behåller standardvägen, som vanligtvis är `..\Documents\GitHub`.
- Nu har du en lokal kopia av projektet.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 3: Skapa en ny branch

- När repot har klonats och du har det öppet i GitHub Desktop är det dags att skapa en ny branch.
- Branchen är ett sätt att hålla dina ändringar separerade från huvudprojektet, som kallas `Master`. Om något går fel och du inte är nöjd med ändringarna kan du helt enkelt ta bort branchen och huvudprojektet påverkas inte.

| :arrow_right_hook: Klicka på _`Current branch`_, sendan _`New`_ | ![Skapa branch](/readme-only/branch-new.PNG "Klicka på 'Branch', sedan 'New'") |
| :---------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Ge din branch ett namn, klicka sedan på `Create branch`** |                           ![Name branch](/readme-only/branch-name.PNG 'Namge din branch')                            |
| :arrow_right_hook: **Publicera din nya branch till GitHub**                      | ![Name branch](/readme-only/branch-publish.PNG 'Klicka på "Publish" för att skicka den nya branchen till ditt fjärr-repo på GitHub') |

- Du kan namnge den som du vill, men eftersom detta är en branch för att lägga till ett kort med ditt namn, är det god praxis att kalla den `ditt-namn-kort`. Det gör syftet med branchen tydlig.
- Nu har du skapat en ny branch som är separerad från master.
- För de kommande stegen, se till att du arbetar i denna branch. Du ser namnet på branchen högst upp i mitten av GitHub Desktop-appen, där det står _Current branch_.

**Arbeta INTE i `master`-branchen**

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 4: Öppna filen index.html

- Nu behöver vi öppna filen vi ska redigera med din favoritkodredigerare.
- Hitta projektmappen på din dator. Om du behållit standardinställningarna bör den ligga ungefär här: `din-dator > Documents > GitHub > Contribute-To-This-Project`
- Filen `index.html` ligger direkt i mappen `Contribute-To-This-Project`.
- Öppna din kodredigerare (Sublime, VS Code, Atom osv.) och använd kommandot `Open file` för att hitta och öppna index.html i projektets huvudmapp.

|                  ![Öppna index fil](/readme-only/index-open.PNG 'Öppna index.html i din textredigerare')                |
| :---------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Alternativt kan du hitta filen på hårddisken, högerklicka och välja Öppna med din redigerare.** |

- Nu har du filen du ska redigera öppen i din editor och du är redo att börja göra ändringar.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 5: Kopiera kortmallen

- Vi ska göra en kopia av kortmallen för att börja arbeta med den.
- Direkt i `<body>` hittar du en sektion `<div class="container">`. Den innehåller många andra sektioner.
- De första 2 sektionerna är precis som: `<div class="row">`. Kollapsa dem genom att klicka på pilen bredvid i VS Code (som visas i bilden nedan). (Om du använder en annan editor kanske du inte har denna funktion. Då får du bara scrolla nedåt). Kollapsning gör det lättare att dölja kod du inte behöver ändra.
- Nu bör du se sektionen som innehåller alla bidragskort: `<div class="grid" id="contributions">`

| ![Hitta kortmallen](/readme-only/find-card-template.png 'Hitta kortmallen') |
| :-----------------------------------------------------------------------: |

- Inuti denna sektion hittar du delen markerad med `== TEMPLATE ==`
- Kopiera allt inom den röda rutan i bilden, från kommentaren `Contributor card START` till `Contributor card END`

| ![Kopiera kortmallen](/readme-only/card-copy.PNG 'Kopiera kortmallen') |
| :-----------------------------------------------------------------------: |

- Klistra in hela delen direkt under kommentaren som anger det; ovanpå det senaste bidragsgivarens kort.
- Se till att det finns en tom rad mellan slutet på ditt kort och början på det senaste kortet. Lägg också till en tom rad mellan början på ditt kort och raden med kommentaren `=== Paste YOUR CARD directly BELOW this line ===`. Det är god praxis att hålla koden så tydlig som möjligt.
- Använd aldrig linters eller formaterare manuellt. Projektet har Prettier konfigurerat.

| ![Klistra in kortmallen](/readme-only/card-paste.PNG 'Klistra in under den angivna raden') |
| :---------------------------------------------------------------------------------: |

- Detta är nu ditt kort, redo för dig att anpassas och redigeras!

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 6: Applicera dina ändringar

- Nu börjar vi redigera HTML-koden och fylla i de anpassningsbara fälten i ditt kort.

| :arrow_right_hook: Ersätt 'Name' med ditt namn | ![Redigera namn](/readme-only/change-name.PNG 'Skriv ditt namn') |
| :----------------------------------------------- | :----------------------------------------------------------: |

- **Note: Ändra INTE `class="name"`**

| :arrow_right_hook: Lägg in URL:en till ditt X-konto `href="Insert URL here"`, skriv ditt användarnamn i textfältet | ![Redigera kontakt](/readme-only/change-contact.PNG 'Lägg in en länk till ditt X-konto och skriv ditt användarnamn') |
| :--------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------: |

- Om du föredrar en annan kontakt än X, byt ut X-ikonen <i class="fa fa-x-twitter"></i> genom att gå till [Font Awesome ikoner](http://fontawesome.io/icons/), söka efter rätt ikon och endast ersätta `fa-x-twitter` med den nya, t.ex. `fa-facebook`. Följ sedan samma steg som ovan.

|                                                                                                                                         ![Redigera om mig](/readme-only/change-about.PNG 'Skriv en mening om dig själv')                                                                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                               :arrow_right_hook: **Berätta något om dig. Håll det kort och koncist, tänk som en tweet, inte ett blogginlägg.**                                                                                                                |
|                                                                                                              ![Redigera resurser](/readme-only/change-resources.PNG 'Lägg in länk, skriv en kort beskrivning och ange resursens namn')                                                                                                              |
| :arrow_right_hook: **Dela med communityn tre länkar till resurser som är användbara för webbutveckling. Det kan vara vad som helst: en video, ett föredrag, en podcast, en artikel, en referens eller ett verktyg. Är du nybörjare? Oroa dig inte, dela det du kan, även om det känns grundläggande. Du kommer att bli förvånad över hur många som har nytta av det!** |

- **Länk:** Lägg in länken `href="here"` och ersätt `#`. Använd INTE URL-förkortare eller länkar som inte kommer direkt från webbplatsen!
- **Titel:** Skriv en kort beskrivning i `title="here"`.
- **Namn:** Skriv resursens namn i textfältet `>here</a>`.
- Se till att du har **sparat alla ändringar**.
- **Testa dina ändringar**. DETTA ÄR VIKTIGT! Öppna HTML-filen i webbläsaren (t.ex. genom att dubbelklicka på den) och se hur ditt kort ser ut på sidan. Kontrollera att hela sidan fortfarande ser likadan ut och att inget är trasigt. Klicka på dina länkar och se till att de fungerar. Öppna konsolen (Ctrl + Shift + J (Windows/Linux) eller Cmd + Opt + J (Mac)) och kontrollera att det inte finns några felmeddelanden.
- Bra jobbat, du är klar med redigeringen! Nästa steg skickar dina ändringar till GitHub och sedan skickar du in dem för att slås samman med huvudprojektet.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 7: Committa dina ändringar

- Gå tillbaka till GitHub Desktop-appen.
- Dina ändringar har automatiskt lagts till i staging-området.
- Det betyder att Git har registrerat alla sparade ändringar.
- Du ser detta i appen: allt du lagt till visas i grönt, och borttaget visas i rött.

|                                                                                                  ![Committa ändringar](/readme-only/commit.PNG "Dina ändringar visas i grönt till höger i GitHub Desktop. Commit-knappen finns längst ner till vänster.")                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: Nästa steg kallas _`Commit`_. Det betyder ungefär `bekräfta ändringarna`. |
|                                                                                              ![Committa ändringar](/readme-only/commit-header.PNG "Dina ändringar visas i grönt till höger i GitHub Desktop. Commit-knappen finns längst ner till vänster.")                                                                                               |
|                                                                            :arrow_right_hook: **Så här ska huvudet i GitHub Desktop se ut. Lägg märke till fork-symbolen bredvid projektnamnet under `Current repository`, din `Current branch` har namnet du gav den i steg 3.**                                                                            |
|                                                                                                                  ![Skriv ett commit meddelande och committa](/readme-only/commit-message.PNG "Skriv ett kort commit meddelande i fältet 'Summary' och klicka på 'Commit'.")                                                                                                                  |
| :arrow_right_hook: **För att _`Commit`_ måste du fylla i fältet _`Summary`_. Detta är ditt commit meddelande som förklarar vad du ändrat. I detta fall är t.ex. `"Lade till mitt kort"` ett bra meddelande. Du kan också lägga till en mer detaljerad _`Description`_ om du vill. Klicka sedan på _`Commit`_-knappen. Knappen kommer att säga något i stil med `Commit to "ditt-branch-namn"`.** |

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 8: Pusha dina ändringar till GitHub

- Dina ändringar är nu sparade (committed). Men endast lokalt, det vill säga på din dator.
- Att synkronisera lokala ändringar med ditt repository på GitHub kallas _Push_. Du "pushar" ändringarna från ditt lokala repository till det fjärranslutna på GitHub.

| :arrow_right_hook: Klicka på _`Push`_-knappen | ![Push to GitHub](/readme-only/push.PNG "Pusha dina ändringar till GitHub, klicka på 'Push'") |
| :------------------------------------------- | :-----------------------------------------------------------------------------------------------: |

- Efter några sekunder är operationen klar. Nu har du exakt samma version av branchen både på din dator och på GitHub.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 9: Skicka in en PR (*Pull Request*)

- Detta är ögonblicket du väntat på: att skicka in en _Pull Request_ (PR).
- Hittills har allt arbete gjorts på din fork av projektet, den som finns i ditt eget GitHub-konto.
- Nu är det dags att skicka dina ändringar till huvudprojektet för att slås samman.
- Detta kallas för en [Pull Request](https://help.github.com/articles/about-pull-requests/ 'About Pull Requests - GitHub Help') eftersom du ber den ursprungliga projektunderhållaren att "dra" dina ändringar till deras projekt.
- Gå till huvudsidan för din fork på GitHub (den har fork-ikonen och ditt användarnamn högst upp).
- Högst upp i repot ser du ett markerat meddelande om Pull Request med en grön knapp

| ![Skicka in en Pull Request](/readme-only/pull-request.PNG 'Detta ligger vanligtvis högst upp på sidan, under beskrivningen och ovanför filerna och mapparna.')  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                    :arrow_right_hook: **Klicka på `Compare and pull request`**                                                     |
| ![Öppna en Pull Request](/readme-only/pull-request-branches.PNG 'Du begär att merga din branch från din fork in i master-branchen i originalprojektet.') |
|                                              :arrow_right_hook: Så här ser sidan `Open a pull request` ut.                                               |

- VIKTIGT: _Du försöker merga din branch med originalprojektet INTE med master-branchen i din egen fork_.
- Bilden nedanför visar hur rubriken för din Pull Request ska se ut:
- På vänster är det ursprungliga projektet, följt av master-branchen. På höger sida är din fork och den branch du skapade.

|                   ![Skicka in en Pull Request](/readme-only/pull-request-open.PNG "Klicka på den gröna knappen. Var inte rädd!")                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Skapa en pull request: Skriv en titel, lägg till valfri information i beskrivning och klicka på `Create pull request`** |

- Oroa dig inte för alla alternativ. Du behöver bara göra dessa tre steg just nu.
- Låt kryssrutan `Allow edits from maintainers` vara ikryssad.
- Nu skickas en _Pull Request_ till projektets underhållare. Så snart den granskas och godkänns kommer dina ändringar att visas på [projektets webbsida](https://syknapse.github.io/Contribute-To-This-Project 'Contribute To This Project web page').

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

#### Steg 10: Fira

- Det var det. Du har gjort det! Du har nu bidragit till open source på GitHub!

- Du har lagt till kod på en levande webbsida: [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

- Dina ändringar **syns inte direkt**; de måste först granskas, godkännas och mergas av projektets underhållare. När det är klart kommer ditt kort att visas live på sidan.

- Det är helt normalt att en granskare ber om ändringar i en PR. Se det som bra träning om det händer dig. Håll koll på kommentarer och begärda ändringar. När du gör ändringarna (i din branch) räcker det med att committa och pusha ändringarna. PR:en uppdateras automatiskt med de nya ändringarna.

- Jag lovar att försöka granska och merga så fort som möjligt, men jag gör detta på fritiden, så ett par dagars väntetid är oundvikligt.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---

### Nästa steg

- Kom tillbaka efter en stund för att kolla om din Pull Request har mergats.
- Du bör få ett e-postmeddelande från GitHub när dina ändringar har godkänts, eller om ytterligare ändringar begärs. Och när PR:en slutligen mergas med master och ditt kort har lagts till.
- Du kan också lära dig hur du bidrar från denna _gratis_ serie: [How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)
- Om du tyckte att detta projekt var **användbart** ge det en :star: stjärna :star: högst upp på sidan och **Tweet**a om det för att hjälpa till att sprida ordet [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]
- Du kan gå med i våran [Discord server](https://discord.gg/tWkvS4ueVF)
- Du kan **följa mig** och komma i kontakt på [𝕏 (Twitter)](https://twitter.com/Syknapse '@Syknapse') eller [använda någon av dessa andra alternativ](https://syknapse.github.io/Syk-Houdeib/#contact 'Min kontaktsektion | Portfolio')
- Detta är ett open source-projekt så förutom att bidra med ditt kort är du välkommen att hjälpa till att fixa buggar, förbättringar eller nya funktioner. Öppna en [issue](https://help.github.com/articles/creating-an-issue/ 'Mastering Issues | GitHub Guides') eller skicka en ny [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/ 'Creating a pull request from a fork | GitHub Help')
- För att hjälpa till att förbättra vår community, ta en titt på GitHub [Discussions](https://github.com/Syknapse/Contribute-To-This-Project/discussions) fliken som ligger bredvid Pull Requests. Detta område är en plats för att presentera dig själv, gå in på djupare diskussioner om Open Source och kommunicera med projektets underhållare. Vill du hjälpa oss att bygga ut denna funktion och förbättra vår community?
- **Tack för att du bidrar till detta projekt**. Nu kan du gå vidare och försöka bidra till andra projekt; leta efter etiketten ![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png) för nybörjarvänliga bidragsalternativ.
- Jag letar också efter medunderhållare som kan hjälpa mig att granska och merga PRs. Om du vill få mer avancerad Git-träning, läs [underhållarguiden](/maintainer_guide.md), gå med i våran [Discord server](https://discord.gg/tWkvS4ueVF), och be om att få gå med i teamet hos projektets underhållare.

[↑ Tillbaka till toppen ↑](#quick-access-index)

---
### Tack till

Detta projekt är inspirerat av [Roshan Jossey's](https://github.com/Roshanjossey) grymma [first-contributions](https://github.com/Roshanjossey/first-contributions) projekt med dess utmärkta guide.

Det är också inspirerat av det grymma communityt runt [#GoogleUdacityScholars](https://twitter.com/hashtag/GoogleUdacityScholars?src=hash) The Google Challenge Scholarship: Front-End Web Dev, klass av 2017 Europe.

### Licens

Detta projekt är licensierat under [MIT License](./LICENSE).

### Topp 100 medverkande

[![GitHub Contributors Image](https://contrib.rocks/image?repo=Syknapse/Contribute-To-This-Project)](https://github.com/Syknapse/Contribute-To-This-Project/graphs/contributors)

[Tillbaka till toppen &uparrow;](#introduction)

[twit]: https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweeta om detta projekt'
