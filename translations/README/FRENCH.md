# [Apporter votre contribution à ce projet](https://syknapse.github.io/Contribute-To-This-Project/)

![image info](/favicon.png)

> Logo créé avec :sparkling_heart: par [CandidDeer](https://github.com/CandidDeer)

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Rejoignez notre serveur Discord!')
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://syknapse.github.io/Contribute-To-This-Project/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://syknapse.github.io/Contribute-To-This-Project/)

---

> ### **Annonce:**
>
> Souhaitez-vous devenir un responsable de ce projet et aider à le maintenir? Si vous êtes intéressé, lisez le [guide du mainteneur](/maintainer_guide.md) et envoyez-moi un DM sur [Twitter](https://twitter.com/Syknapse).

---

### Index d'accès rapide

- [Introduction](#introduction)
- [Objectifs](#objectifs)
- [Pour qui est ce projet?](#pour-qui-est-ce-projet)
- [Pourquoi contribuer?](#pourquoi-contribuer)
- [Que vais-je contribuer?](#que-vais-je-contribuer)
- [Traductions](#traductions)
- [Setup! :)](#setup-)
- [Contribuer](#contribuer)
  - [Etape 1: Forker le repo](#etape-1-forker-le-repo)
  - [Etape 2: Cloner le repo](#etape-2-cloner-le-repo)
  - [Etape 3: Créer une nouvelle branche](#etape-3-creer-une-nouvelle-branche)
  - [Etape 4: Ouvrir le fichier index.html](#etape-4-ouvrir-le-fichier-indexhtml)
  - [Etape 5: Copier la template de la carte](#etape-5-copier-la-template-de-la-carte)
  - [Etape 6: Effectuer les modifications](#etape-6-effectuer-les-modifications)
  - [Etape 7: Appliquer un commit](#etape-7-appliquer-un-commit)
  - [Etape 8: Faire un push à GitHub](#etape-8-faire-un-push-a-github)
  - [Etape 9: Soumettre une PR (Pull Request)](#etape-9-soumettre-une-pr-pull-request)
  - [Etape 10: Fêter ça](#etape-10-feter-ca)
- [Prochaines étapes](#prochaines-etapes)
- [Remerciements](#remerciements)
- [License](#license)
- [Top 100 Contributeurs](#top-100-contributeurs)

---

### Introduction

Ceci est un tutoriel pour aider les nouveaux contributeurs à participer à un projet simple et facile.

### Objectifs

- Apporter une contribution à un projet open source.
- Devenir plus à l'aise dans l'utilisation GitHub.

### Pour qui est ce projet?

- Pour les débutants absolus. Si vous savez comment écrire et modifier une balise d'ancrage `<a href="" target=""></a>`, alors vous devriez pouvoir le faire.
- C'est aussi pour ceux qui ont un peu plus d'expérience mais qui veulent faire leur première contribution open source, ou pour ceux qui souhaitent faire plus de contributions pour plus monter en expérience et prendre confiance.

### Pourquoi contribuer?

Tout développeur heb, en herbe ou expérimenté, doit utiliser le contrôle de version Git, et GitHub est le service d'hébergement Git le plus populaire au monde. C'est aussi le cœur de la communauté Open Source. Se familiariser avec GitHub est une compétence essentielle. Contribuer à un projet renforce votre confiance et vous donne quelque chose à afficher sur votre profil GitHub.

Si vous êtes un nouveau développeur et que vous vous demandez si vous avez besoin d'apprendre Git et GitHub, voici la réponse: [Vous auriez dû apprendre Git hier](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa 'Nouveau développeur? Vous devriez avoir appris Git hier. par Brandon Morelli, créateur de CodeBurst.io ').

### Que vais-je contribuer?

![Carte de contributeur](/readme-only/card.PNG 'Contributor Card')

Vous allez contribuer une carte comme celle-ci à la [page web du projet](https://syknapse.github.io/Contribute-To-This-Project/ 'https://syknapse.github.io/Contribute-To-This-Project'). Il comprendra votre nom, votre pseudo Twitter, une brève description et 3 liens vers des ressources utiles pour les développeurs web que vous recommandez.

Vous allez faire une copie du modèle de carte dans le fichier HTML et le personnaliser avec vos propres informations.

---

### Traductions

Ce tutoriel est également disponible dans d'[autres langues](/translations/README.md)

|     [Arabe (عربي)](/translations/README/ARABIC.md)     |  [Bengali (বাংলা)](/translations/README/BANGLA.md)  | [Chinois (Traditional) (繁體中文)](/translations/README/CHINESE_TRADITIONAL.md) |            [Anglais (English)](/README.md)             |  [Français (Français)](/translations/README/FRENCH.md)  
| :---------------------------------------------: | :---------------------------------------: | :-----------------------------------------: | :---------------------------------------: | :---------------------------------------: |
|  [Allemand (Deutsch)](/translations/README/GERMAN.md)  |      [Hindu (हिंदी)](/translations/README/HINDI.md)      | [Italien (Italiano)](/translations/README/ITALIAN.md) | [Japonais (日本語)](/translations/README/JAPANESE.md) |  [Coréen (한국어)](/translations/README/KOREAN.md)  |
  [Polonais (Polski)](/translations/README/POLISH.md)  | [Portuguais (Portuguese)](/translations/README/PORTUGUESE.md) | [Russe (Русский)](/translations/README/RUSSIAN.md) |  [Serbe (Српски)](/translations/README/SERBIAN.md)  | [Espagnol (Español)](/translations/README/SPANISH.md) |
   [Turc (Türkçe)](/translations/README/TURKISH.md) | [Ukrainien (українська)](/translations/README/UKRAINIAN.md) | [Norvégien (Norsk)](/translations/README/NORWEGIAN.md)

> Les traductions de documentations sont les bienvenues. Lisez le [`Guide du Traducteur`](/translations/README.md) pour contribuer.

---

### Setup! :)

> [!Note]
> Ce tutoriel est basé sur un GitHub PC. [Si vous êtes confortable avec un terminal, essayez ce tutoriel (Cliquez Ici)](/terminal_tutorial.md)

Commençons par configurer l'environnement de travail :

1. Connectez-vous à votre compte GitHub. Si vous n'en avez pas encore, [créez un compte](https://github.com/join). Je vous conseille de faire le [Tutoriel GitHub Hello World](https://guides.github.com/activities/hello-world/) avant de continuer.
2. Téléchargez la [GitHub Desktop app](https://desktop.github.com/).
   - Autrement, si vous êtes confortable avec le terminal, vous pouvez l'utiliser: [voici le lien vers le tutoriel CLI](/terminal_tutorial.md).
   - Si vous utilisez [VS Code](https://code.visualstudio.com/ 'Visual Studio Code website'), il propose un Git intégré et permet de faire le nécessaire directement depuis l'éditeur.
   - La manière la plus simple et la plus directe de suivre ce tutoriel reste Github Desktop.

> Maintenant que vous avez la configuration nécessaire, passons à la partie contribution.

[↑ Retour à l'index ↑](#index-dacces-rapide)

---

### Contribuer

Devenir un contributeur open source en 10 étapes faciles.

_Temps estimé: moins de 30 minutes_.

### Etape 1: Forker ce repo

- L'objectif ici est de faire une copie de ce projet sur votre compte.
- Un repo (dépôt) est la façon dont un projet est appelé sur GitHub, et un fork en est une copie par un autre utilisateur.
- Assurez-vous que vous êtes sur la [page principale](https://github.com/Syknapse/Contribute-To-This-Project 'https://github.com/Syknapse/Contribute-To-This-Project') de ce repo.

| ![Fork](/readme-only/fork.png "cliquez sur 'Fork'") |
| :---------------------------------------------: |
|        **Cliquez sur le bouton _Fork_**         |

- Vous avez maintenant une copie complète du projet sur votre propre compte

[↑ Retour à l'index ↑](#index-dacces-rapide)

---

### Etape 2: Cloner le repo

- Maintenant, nous voulons faire une copie locale du projet. C'est une copie enregistrée sur votre propre machine.
- Ouvrez l'application de bureau GitHub. Dans l'appli:

| ![Clone](/readme-only/clone.PNG 'click clone repository') |
| :------------------------------------------------------: |
|    **Cliquez sur _File_ puis sur _Clone repository_**    |

- Vous verrez une liste de vos projets et forks sur GitHub.
- Sélectionnez `<your-github-username>/Contribute-To-This-Project`.
- Cliquez sur _Clone_

| ![Clone project](/readme-only/clone-project.PNG 'click on =your-github-username=/Contribute-To-This-Project') |
|:----------------------------------------------------------------------------------------------------------: |

| :arrow_right_hook: Un projet forké aura le symbole fork sur la gauche. Votre fork aura votre propre nom d'utilisateur GitHub. | ![votre fork](/readme-only/clone-your-fork.PNG 'votre fork ressemblera à ça, avec votre propre nom d'utilisateur') |
| :------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------: |

- La copie du projet sur votre disque dur prendra un moment. Il est conseillé de garder le chemin par défaut, qui est généralement `..\Documents\GitHub`.
- Vous avez maintenant une copie locale du projet.

[↑ Retour à l'index ↑](#index-dacces-rapide)

---

### Étape 3: créer une nouvelle branche

- Une fois que le repo a été cloné et que vous l’avez ouvert dans GitHub Desktop, il est temps de créer une nouvelle branche.
- Une branche est un moyen de séparer vos modifications de la partie principale du projet, appelée `master`. Par exemple, si les choses tournent mal et que vous n’êtes pas satisfait de vos modifications, vous pouvez simplement supprimer la branche et le projet principal ne sera pas affecté.

| :arrow_right_hook: Cliquez sur _`Current branch`_, puis sur _`New`_ | ![Créer une branche](/readme-only/branch-new.PNG "Cliquez sur 'Branch', puis sur 'New'") |
| :---------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Donnez un nom à votre branche, puis cliquez sur `Create branch`** |                           ![Nommer la branche](/readme-only/branch-name.PNG 'Nommez votre branche')                            |
| :arrow_right_hook: **Publiez votre nouvelle branche sur GitHub**                      | ![Publier la branche](/readme-only/branch-publish.PNG 'Cliquez sur Publier pour envoyer la nouvelle branche à votre référentiel distant sur GitHub') |

- Vous pouvez la nommer comme vous voulez, mais puisqu'il s’agit d’une branche pour ajouter une carte avec votre nom au projet, l'appeler `your-name-card` est une bonne pratique, parce que cela rend l’intention de la branche claire.
- Vous avez créé une nouvelle branche, séparée de la branche master.
- Pour les étapes suivantes, assurez-vous que vous travaillez sur cette branche. Vous verrez le nom de la branche sur laquelle vous vous trouvez en haut au centre de l’application de bureau GitHub, où il est dit _Current branch_.

**Ne PAS travailler sur la branche `master`**

[↑ Retour à l'index ↑](#index-dacces-rapide)

---

### Etape 4: Ouvrir le fichier index.html

- Maintenant, nous devons ouvrir le fichier que nous allons éditer avec votre éditeur de code préféré.
- Recherchez le dossier du projet sur votre ordinateur. Si vous avez conservé la valeur par défaut, cela devrait être quelque chose comme `your-computer > Documents > GitHub > Contribute-To-This-Project`
- Le fichier `index.html` est à la racine du dossier `Contribute-To-This-Project`.
- Ouvrez votre éditeur de code (Sublime, VS Code, Atom..etc) et utilisez la commande `Open file` et trouvez le fichier index.html dans le répertoire principal du projet

|                  ![Ouvrir le fichier index.html](/readme-only/index-open.PNG 'Ouvrir l’index.html dans votre éditeur de texte')                   |
| :---------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Vous pouvez également localiser le fichier sur votre disque dur, cliquer avec le bouton droit de la souris, et l’ouvrir avec votre éditeur.** |

- Vous avez maintenant le fichier ouvert dans votre éditeur et vous êtes prêt à y apporter des modifications.

[↑ Retour à l'index ↑](#index-dacces-rapide)

---

### Etape 5: Copier la template de la carte

- Nous allons faire une copie du modèle de carte pour commencer à travailler dessus

| <ul><li>Au début du fichier HTML, sous les sections `<head>` et `<header>` vous trouverez la section intitulée `== TEMPLATE ==`</li><li>Copiez tout ce qui se trouve dans le carré rouge de l’image, à partir du commentaire `Contributor card START` jusqu'au commentaire `Contributor card END`</li></ul> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Copier le modèle de carte](/readme-only/card-copy.PNG 'Copier le modèle de carte')                                                                                                                                                                                                                        |

| <ul><li>Collez le tout directement sous le commentaire qui l’indique</li><li>Assurez-vous qu’il y a une seule ligne d’espace entre le début de votre carte et la dernière fin de la carte. C’est une bonne pratique de garder notre code aussi clair que possible</li><li>N’utilisez jamais de linters ou de formateurs de style. Le projet à une configuration plus jolie</li></ul> |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Coller le modèle de carte](/readme-only/card-paste.PNG 'Coller sous la ligne indiquée')                                                                                                                                                                                                                                                                                            |

- C’est maintenant **votre** carte à personnaliser et à modifier.

---

### Étape 6: appliquez vos modifications

- Nous allons maintenant commencer à éditer le html, en changeant les champs personnalisables de notre carte.

| <ul> <li> Remplacez 'Nom' par votre nom </li> <li> Remarque: ne changez pas `class =" name "` </li> </ul> | ![Change name](/readme-only/change-name.PNG 'Tapez votre nom') |
| :-------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------: |


| <ul> <li> Insérez l'URL de votre compte Twitter `href =" Insérez l'URL ici "` </li> <li> Saisissez votre identifiant dans le champ de texte </li> </ul> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Changer de contact](/readme-only/change-contact.PNG 'Insérez un lien vers votre compte Twitter et saisissez votre identifiant')                       |

- Si vous préférez utiliser un contact autre que Twitter, vous devrez remplacer l'icône Twitter `<i class =" fa fa-x-twitter "> </i>` en accédant à [Font Awesome Icons](http://fontawesome.io/icons/) en recherchant la bonne icône et en remplaçant uniquement la partie `fa-x-twitter` par la nouvelle icône comme `fa-facebook` par exemple. Suivez ensuite les mêmes étapes ci-dessus.

| <ul> <li> Parlez-nous de vous </li> <li> Soyez bref et concis. Pensez-y plus comme un tweet qu'un article de blog </li> </ul> | ![Change about](/readme-only/change-about.PNG 'Ecrivez une phrase sur vous') |
| :---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------: |


| <ul> <li> Partager avec la communauté 3 liens vers des ressources utiles pour le développement Web </li> <li> Cela peut être n'importe quoi, une vidéo, une conférence, un podcast, un article, une référence ou un outil </li> <li> Si vous êtes un débutant, ne vous laissez pas intimider par cela, partagez tout ce que vous savez même si vous pensez que c'est basique. Vous serez surpris du nombre de personnes qui en bénéficieront </li> </ul> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Change resources](/readme-only/change-resources.PNG 'Insérer un lien, rédiger une brève description et saisir le nom de la ressource')                                                                                                                                                                                                                                                                                                                 |
| <ul> <li> Lien: insérez le lien `href =" here "` en remplaçant le `#` </li> <li> Titre: écrivez une brève description `title =" here "` </li> <li> Nom: écrivez le nom de la ressource dans le champ de texte `> ici </a>` </li> </ul>                                                                                                                                                                                                                   |

- Assurez-vous d'avoir ** enregistré toutes vos modifications **.
- ** Testez vos modifications **. C'EST IMPORTANT! Ouvrez le fichier html dans votre navigateur (en double-cliquant dessus par exemple) et voyez à quoi ressemblera votre carte sur le site. Vérifiez que la page entière est toujours la même et que rien n'est cassé Cliquez sur vos liens et assurez-vous qu'ils fonctionnent. Ouvrez la console (Ctrl + Maj + J (Windows / Linux) ou Cmd + Opt + J (Mac)) et vérifiez qu'il n'y a pas de messages d'erreur.
- Génial, vous avez fini de modifier votre code! Les étapes suivantes enverront vos modifications à GitHub, puis les soumettront pour être fusionnées avec le projet principal.

---

### Étape 7: Validez vos modifications

- Revenez à l'application de bureau GitHub.
- Vos modifications auront été ajoutées automatiquement à la zone de préparation.
- Cela signifie que Git a enregistré toutes les modifications ** enregistrées **.
- Vous pouvez voir cela reflété dans l'application. Tout ce que vous avez ajouté au fichier sera en vert et les suppressions s'afficheront en rouge.

| <ul><li>L'étape suivante s'appelle _Commit_</li><li>Cela signifie en gros "confirmer les modifications"</li></ul> | ![Commit changements](/readme-only/commit.PNG "Les modifications que vous avez ajoutées doivent apparaître en vert sur le côté droit de l'application de bureau GitHub. Le bouton de validation est en bas à gauche") |
| :---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


| <ul><li>Voici à quoi devrait ressembler votre en-tête de bureau GitHub </li> <li> Notez le symbole de la fourche à côté du nom du projet dans `Current repository`</li><li>Votre `succursale actuelle` aura le nom que vous lui avez donné à l'étape 3</li></ul> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Commit changements](/readme-only/commit-header.PNG "Les modifications que vous avez ajoutées doivent apparaître en vert sur le côté droit de l'application de bureau GitHub. Le bouton de validation est en bas à gauche ")                                    |

| <ul> <li> Pour _Commettre_, vous devez remplir le champ _Summary_ </li> <li> Ceci est le message de validation expliquant ce que vous avez changé </li> <li> Dans ce cas, "Ajout des informations de ma carte" serait un message raisonnable </li> <li> Vous pouvez éventuellement ajouter une _Description_ </li> <li> plus détaillée. Cliquez sur le bouton _Commit_. Votre bouton indiquera quelque chose comme "Commit to" your-branch-name "" </li> </ul> | ![Écrivez un message de validation et validez](/readme-only/commit-message.PNG "Écrivez un bref message de validation dans l'entrée «résumé» et cliquez sur «valider»") |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


---

### Étape 8: transférez vos modifications sur GitHub

- Vos modifications sont maintenant enregistrées ou validées. Mais ils ne sont enregistrés que localement, c'est-à-dire sur votre ordinateur.
- La synchronisation des modifications locales avec votre référentiel sur Github s'appelle un _Push_. Vous «poussez» les modifications de votre référentiel local vers le référentiel distant sur Github.

| <ul> <li> Cliquez sur le bouton _Push_ </li> </ul> | ![Pousser vers GitHub](/readme-only/push.PNG "Envoyez vos modifications sur GitHub, cliquez sur le bouton 'Push'") |
| :------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------: |


- Après quelques secondes, l'opération est terminée et vous avez maintenant exactement la même copie de cette branche sur votre machine ainsi que sur GitHub.

---

### Étape 9: Soumettez un PR

- C'est le moment que vous attendiez; soumettre une _Pull Request_ (PR).
- Jusqu'à présent, tout le travail que vous avez effectué a été sur la fourche du projet, qui, comme vous vous en souvenez, réside sur votre propre compte de GitHub.
- Il est maintenant temps d'envoyer vos modifications au projet principal pour les fusionner.
- C'est ce qu'on appelle un [_Demande de tirage_](https://help.github.com/articles/about-pull-requests/ "À propos des demandes d'extraction - Aide GitHub") parce que vous demandez au responsable du projet d'origine de "tirer" vos modifications dans son projet.
- Accédez à la page principale de **votre fork** sur GitHub (il aura l'icône de fork et votre propre nom d'utilisateur en haut).
- Vers le haut du dépôt, vous verrez un message de demande de tirage en surbrillance avec un bouton vert.

| <ul><li>Click on the `Compare and pull request`</li></ul> | ![Soumettre une demande de tirage](/readme-only/pull-request.PNG "C'est généralement vers le haut de la page, sous la description et au-dessus des fichiers et dossiers du projet ") |
| :-------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


| <ul><li>Voici à quoi ressemble la page `Ouvrir une demande d'extraction`. </li> <li> RAPPELEZ-VOUS _vous essayez de fusionner votre branche avec le projet d'origine et non avec la branche`Master` sur votre fork_. </li> <li > L'image ci-dessous vous donne une idée de ce à quoi devrait ressembler l'en-tête de votre pull request. </li> <li> Sur la gauche se trouve le projet d'origine, suivi de la branche principale. Sur la droite se trouve votre fork et la branche que vous avez créée. </li> </ul> |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Ouvrir une demande d'extraction](/readme-only/pull-request-branches.PNG "Vous demandez de fusionner votre branche de votre fork dans la branche master du projet d'origine ")                                                                                                                                                                                                                                                                                                                                    |

| <ul><li>Créez une pull request:</li><li>Écrivez un titre </li> <li> Ajoutez des informations facultatives dans la description </li> <li> Cliquez sur "Créer une demande d'extraction" </li> </ul> | ![Soumettre une demande de tirage](/readme-only/pull-request-open.PNG "Cliquez sur le bouton vert. N'aie pas peur! ") |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------: |


- Ne soyez pas déconcerté par toutes les options. Il vous suffit de suivre ces trois étapes pour le moment.
- Laissez cochée l'option «Autoriser les modifications des responsables».
- Maintenant, une _Pull Request_ sera envoyée au responsable du projet. Dès qu'ils seront examinés et acceptés, vos modifications apparaîtront sur le [page Web du projet](https://syknapse.github.io/Contribute-To-This-Project 'Contribuer à la page Web de ce projet').

---

### Étape 10: Célébrez!

C'est tout. Vous l'avez fait! Vous avez maintenant contribué à l'open source sur GitHub.

Vous avez ajouté du code à une page Web en direct: [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

Vos modifications **ne seront pas visibles immédiatement**; ils doivent d'abord être examinés, acceptés et fusionnés par le responsable du projet. Une fois qu'ils sont fusionnés, votre carte doit être visible et en direct sur la page.

Il est tout à fait normal qu'un critique demande des modifications sur un PR. Considérez cela comme une bonne pratique si cela vous arrive. Gardez un œil sur les commentaires et les modifications demandées. Une fois que vous avez effectué les modifications demandées (de retour dans votre branche), il ne vous reste plus qu'à valider et à pousser vos modifications. Le PR se mettra automatiquement à jour avec les nouvelles modifications.

Je promets que je vais essayer de revoir et de fusionner dès que possible, mais je le fais pendant mon temps libre, donc un retard de quelques jours est inévitable.

---

---

## Prochaines étapes

- Revenez dans un moment pour vérifier votre demande de tirage fusionnée.
- Vous devriez recevoir un e-mail de GitHub lorsque vos modifications ont été approuvées ou si des modifications supplémentaires sont demandées. Et quand le PR est finalement fusionné avec le maître et que votre carte a été ajoutée.
- Si vous avez trouvé ce projet **utile** merci de lui donner un: star: star: star: en haut de la page et **Tweet** à ce sujet pour aider à faire passer le mot [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweetez ce projet')
- You can **follow me** and get in touch on [Twitter](https://twitter.com/Syknapse '@Syknapse') or [using any of these other options](https://syknapse.github.io/Syk-Houdeib/#contact 'My contact section | Portfolio')
- This is an open source project so apart from contributing your card you are welcome to help fix bugs, improvements, or new features. Open an [issue](https://help.github.com/articles/creating-an-issue/ 'Mastering Issues | GitHub Guides') or send a new [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/ 'Creating a pull request from a fork | GitHub Help')
- **Thanks for contributing to this project**. Now you can go ahead and try contributing to other projects; look for the ![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png) label for beginner-friendly contribution options.
- I'm also looking for collaborators to give me a hand in reviewing and merging PRs. If you would like to get more advanced Git practice please send me a DM on Twitter and read the [collaborator's guide](collaborator_guide.md).

## Remerciements

Ce projet est fortement influencé par le projet [Roshan Jossey](https://github.com/Roshanjossey) [premières contributions](https://github.com/Roshanjossey/first-contributions) avec son excellent tutoriel.

Il est également particulièrement inspiré par la grande communauté autour de [#GoogleUdacityScholars](https://twitter.com/hashtag/GoogleUdacityScholars?src=hash) The Google Challenge Scholarship: Front-End Web Dev, promotion 2017 Europe.

## Licence

[Licence MIT](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/LICENSE)

[Retour en haut &uparrow;](#introduction)
