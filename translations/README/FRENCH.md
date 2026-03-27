> ⚠️ **This translation is outdated.** It describes an old workflow that no longer works. Please follow the [English README](../../README.md) for the current step-by-step tutorial.

---

> **Note:** The contribution tutorial has been updated. Please follow the [main README](https://github.com/Syknapse/Contribute-To-This-Project#readme) for the current instructions — it is the authoritative guide regardless of language.

---

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

### Index

- [Introduction](#introduction)
- [Objectifs](#objectifs)
- [Pour qui est ce projet?](#pour-qui-est-ce-projet)
- [Pourquoi contribuer?](#pourquoi-contribuer)
- [Que vais-je contribuer?](#que-vais-je-contribuer)
- [Traductions](#traductions)
- [Setup](#setup)
- [Contribuer](#contribuer)
  - [Étape 1: Forker le repo](#étape-1-forker-le-repo)
  - [Étape 2: Cloner le repo](#étape-2-cloner-le-repo)
  - [Étape 3: Créer une nouvelle branche](#étape-3-créer-une-nouvelle-branche)
  - [Étape 4: Ouvrir le fichier index.html](#étape-4-ouvrir-le-fichier-indexhtml)
  - [Étape 5: Copier la template de la carte](#étape-5-copier-la-template-de-la-carte)
  - [Étape 6: Apporter des modifications](#étape-6-apporter-des-modifications)
  - [Étape 7: Appliquer un commit](#étape-7-appliquer-un-commit)
  - [Étape 8: Faire un push à GitHub](#étape-8-faire-un-push-à-github)
  - [Étape 9: Soumettre une PR (Pull Request)](#étape-9-soumettre-une-pr-pull-request)
  - [Étape 10: Fêter ça](#étape-10-fêter-ça)
- [Prochaines étapes](#prochaines-étapes)
- [Remerciements](#remerciements)
- [Licence](#licence)
- [Top 100 Contributeurs](#top-100-contributeurs)

---

### Introduction

Ceci est un tutoriel pour aider les nouveaux contributeurs à participer à un projet simple et facile.

### Objectifs

- Apporter une contribution à un projet open source.
- Devenir plus à l'aise dans l'utilisation de GitHub.

### Pour qui est ce projet?

- Pour les débutants absolus. Si vous savez comment écrire et modifier une balise d'ancrage `<a href="" target=""></a>`, alors vous devriez pouvoir le faire.
- C'est aussi pour ceux qui ont un peu plus d'expérience mais qui veulent faire leur première contribution open source, ou pour ceux qui souhaitent faire plus de contributions - pour monter en expérience et prendre davantage confiance.

### Pourquoi contribuer?

Tout développeur web, en herbe ou expérimenté, doit utiliser le contrôle de version Git, et GitHub est le service d'hébergement Git le plus populaire au monde. C'est aussi le cœur de la communauté Open Source. Se familiariser avec GitHub est une compétence essentielle. Contribuer à un projet renforce votre confiance et vous donne quelque chose à afficher sur votre profil GitHub.

Si vous êtes un nouveau développeur et que vous vous demandez si vous avez besoin d'apprendre Git et GitHub, voici la réponse: [Vous auriez dû apprendre Git hier](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa 'Nouveau développeur? Vous devriez avoir appris Git hier. par Brandon Morelli, créateur de CodeBurst.io ').

### Que vais-je contribuer?

![Carte de contributeur](/readme-only/card.PNG 'Contributor Card')

Vous allez contribuer une carte comme celle-ci à la [page web du projet](https://syknapse.github.io/Contribute-To-This-Project/ 'https://syknapse.github.io/Contribute-To-This-Project'). Il comprendra votre nom, votre pseudo Twitter, une brève description et 3 liens vers des ressources utiles pour les développeurs web que vous recommandez.

Vous allez faire une copie du modèle de carte dans le fichier HTML et le personnaliser avec vos propres informations.

---

### Traductions

Ce tutoriel est également disponible dans d'[autres langues](/translations/README.md)

|    [Arabe (عربي)](/translations/README/ARABIC.md)    |       [Bengali (বাংলা)](/translations/README/BANGLA.md)       | [Chinois (Traditional) (繁體中文)](/translations/README/CHINESE_TRADITIONAL.md) |            [Anglais (English)](/README.md)            | [Français (Français)](/translations/README/FRENCH.md) |
| :--------------------------------------------------: | :-----------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------: | :---------------------------------------------------: |
| [Allemand (Deutsch)](/translations/README/GERMAN.md) |        [Hindu (हिंदी)](/translations/README/HINDI.md)         |              [Italien (Italiano)](/translations/README/ITALIAN.md)              | [Japonais (日本語)](/translations/README/JAPANESE.md) |   [Coréen (한국어)](/translations/README/KOREAN.md)   |
| [Polonais (Polski)](/translations/README/POLISH.md)  | [Portuguais (Portuguese)](/translations/README/PORTUGUESE.md) |               [Russe (Русский)](/translations/README/RUSSIAN.md)                |   [Serbe (Српски)](/translations/README/SERBIAN.md)   | [Espagnol (Español)](/translations/README/SPANISH.md) |
|   [Turc (Türkçe)](/translations/README/TURKISH.md)   |  [Ukrainien (українська)](/translations/README/UKRAINIAN.md)  |             [Norvégien (Norsk)](/translations/README/NORWEGIAN.md)              |

> Les traductions de documentations sont les bienvenues. Lisez le [`Guide du Traducteur`](/translations/README.md) pour contribuer.

---

### Setup

> [!Note]
> Ce tutoriel est basé sur l'application GitHub Desktop. [Si vous êtes confortable avec un terminal, essayez ce tutoriel (cliquez Ici)](/terminal_tutorial.md)

Commençons par configurer l'environnement de travail :

1. Connectez-vous à votre compte GitHub. Si vous n'en avez pas encore, [créez un compte](https://github.com/join). Je vous conseille de faire le [Tutoriel GitHub Hello World](https://guides.github.com/activities/hello-world/) avant de continuer.
2. Téléchargez l'application [GitHub Desktop](https://desktop.github.com/).
   - Autrement, si vous êtes confortable avec le terminal, vous pouvez l'utiliser: [voici le lien vers le tutoriel CLI](/terminal_tutorial.md).
   - Si vous utilisez [VS Code](https://code.visualstudio.com/ 'Visual Studio Code website'), il propose un Git intégré et permet de faire le nécessaire directement depuis l'éditeur.
   - La manière la plus simple et la plus directe de suivre ce tutoriel reste Github Desktop.

> Maintenant que vous avez la configuration nécessaire, passons à la partie contribution.

[↑ Retour à l'index ↑](#index)

---

### Contribuer

Devenir un contributeur open source en 10 étapes faciles.

_Temps estimé: moins de 30 minutes_.

### Étape 1: Forker le repo

- L'objectif ici est de faire une copie de ce projet sur votre compte.
- Un repo (dépôt) est la façon dont un projet est appelé sur GitHub, et un fork en est une copie par un autre utilisateur.
- Assurez-vous que vous êtes sur la [page principale](https://github.com/Syknapse/Contribute-To-This-Project 'https://github.com/Syknapse/Contribute-To-This-Project') de ce repo.

| ![Fork](/readme-only/fork.png "cliquez sur 'Fork'") |
| :-------------------------------------------------: |
|          **Cliquez sur le bouton _Fork_**           |

- Vous avez maintenant une copie complète du projet sur votre propre compte

[↑ Retour à l'index ↑](#index)

---

### Étape 2: Cloner le repo

- Maintenant, nous voulons faire une copie locale du projet. C'est une copie enregistrée sur votre propre machine.
- Ouvrez l'application de bureau GitHub. Dans l'appli:

| ![Clone](/readme-only/clone.PNG 'click clone repository') |
| :-------------------------------------------------------: |
|    **Cliquez sur _File_ puis sur _Clone repository_**     |

- Vous verrez une liste de vos projets et forks sur GitHub.
- Sélectionnez `<votre-nom-github>/Contribute-To-This-Project`.
- Cliquez sur _Clone_

| ![Clone project](/readme-only/clone-project.PNG 'click on =your-github-username=/Contribute-To-This-Project') |
| :-----------------------------------------------------------------------------------------------------------: |

| :arrow_right_hook: Un projet forké aura le symbole fork sur la gauche. Votre fork aura votre propre nom d'utilisateur GitHub. | ![votre fork](/readme-only/clone-your-fork.PNG "votre fork ressemblera à ça, avec votre propre nom d'utilisateur") |
| :---------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------: |

- La copie du projet sur votre disque dur prendra un moment. Il est conseillé de garder le chemin par défaut, qui est généralement `..\Documents\GitHub`.
- Vous avez maintenant une copie locale du projet.

[↑ Retour à l'index ↑](#index)

---

### Étape 3: Créer une nouvelle branche

- Une fois que le repo a été cloné et que vous l’avez ouvert dans GitHub Desktop, il est temps de créer une nouvelle branche.
- Une branche est un moyen de séparer vos modifications de la partie principale du projet, appelée `master`. Par exemple, si les choses tournent mal et que vous n’êtes pas satisfait de vos modifications, vous pouvez simplement supprimer la branche et le projet principal ne sera pas affecté.

| :arrow*right_hook: Cliquez sur *`Current branch`_, puis sur _`New`\_                   |                               ![Créer une branche](/readme-only/branch-new.PNG "Cliquez sur 'Branch', puis sur 'New'")                               |
| :------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Donnez un nom à votre branche, puis cliquez sur `Create branch`** |                                      ![Nommer la branche](/readme-only/branch-name.PNG 'Nommez votre branche')                                       |
| :arrow_right_hook: **Publiez votre nouvelle branche sur GitHub**                       | ![Publier la branche](/readme-only/branch-publish.PNG 'Cliquez sur Publier pour envoyer la nouvelle branche à votre référentiel distant sur GitHub') |

- Vous pouvez la nommer comme vous voulez, mais puisqu'il s’agit d’une branche pour ajouter une carte avec votre nom au projet, l'appeler `your-name-card` est une bonne pratique, parce que cela rend l’intention de la branche claire.
- Vous avez créé une nouvelle branche, séparée de la branche master.
- Pour les étapes suivantes, assurez-vous que vous travaillez sur cette branche. Vous verrez le nom de la branche sur laquelle vous vous trouvez en haut au centre de l’application de bureau GitHub, où il est dit _Current branch_.

**Ne PAS travailler sur la branche `master`**

[↑ Retour à l'index ↑](#index)

---

### Étape 4: Ouvrir le fichier index.html

- Maintenant, nous devons ouvrir le fichier que nous allons éditer avec votre éditeur de code préféré.
- Recherchez le dossier du projet sur votre ordinateur. Si vous avez conservé la valeur par défaut, cela devrait être quelque chose comme `your-computer > Documents > GitHub > Contribute-To-This-Project`
- Le fichier `index.html` est à la racine du dossier `Contribute-To-This-Project`.
- Ouvrez votre éditeur de code (Sublime, VS Code, Atom..etc), utilisez la commande `Open file` et trouvez le fichier index.html dans le répertoire principal du projet

|                           ![Ouvrir le fichier index.html](/readme-only/index-open.PNG 'Ouvrir l’index.html dans votre éditeur de texte')                           |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Vous pouvez également localiser le fichier sur votre disque dur, cliquer avec le bouton droit de la souris, et l’ouvrir avec votre éditeur.** |

- Vous avez maintenant le fichier ouvert dans votre éditeur et vous êtes prêt à y apporter des modifications.

[↑ Retour à l'index ↑](#index)

---

### Étape 5: Copier la template de la carte

- Nous allons faire une copie du modèle de carte pour commencer à travailler dessus
- Dans le `<body>`, vous trouverez une section `<div class="container">`. Elle contient d'autres sections.
- Les **2 premières** sections ont ce format: `<div class="row">`. Réduisez-les en cliquant la flèche sur le côté de VS Code, comme indiqué sur l'image en-dessous. (Si vous utilisez un autre éditeur, il est possible que vous n'ayez pas la fonctionnalité ; vous devrez descendre manuellement jusqu'à la section qui nous intéresse)
- Vous devriez maintenant voir la section qui contient les cartes de contribution : `<div class="grid" id="contributions">`

| ![Trouver le modèle de carte](/readme-only/find-card-template.png 'Trouver le modèle de carte') |
| :---------------------------------------------------------------------------------------------: |

- Dans cette section, vous trouverez la section intitulée `== TEMPLATE ==`
- Copiez tout ce qui se trouve dans le carré rouge de l’image, du commentaire `Contributor card START` jusqu'au commentaire `Contributor card END`

| ![Copier le modèle de carte](/readme-only/card-copy.PNG 'Copier le modèle de carte') |
| :----------------------------------------------------------------------------------: |

- Collez le tout directement sous le commentaire qui l’indique; juste au-dessus de la contribution la plus récente.
- Assurez-vous qu’il y a une ligne de marge entre la fin de votre carte et le début de la dernière. Ajoutez également une ligne de marge au début de votre carte, en-dessous du commentaire `=== Paste YOUR CARD directly BELOW this line ===`. C’est une bonne pratique qui permet de garder notre code aussi clair que possible
- N’utilisez pas de linters ou de formateurs de style. Le projet à une configuration Prettier

| ![Coller le modèle de carte](/readme-only/card-paste.PNG 'Coller sous la ligne indiquée') |
| :---------------------------------------------------------------------------------------: |

- **Vous** avez maintenant une carte à personnaliser et à modifier.

[↑ Retour à l'index ↑](#index)

---

### Étape 6: Apporter des modifications

- Nous allons maintenant commencer à éditer le html, en changeant les champs personnalisables de notre carte.

| :arrow_right_hook: Remplacez 'Your name' par votre nom | ![Changez le nom](/readme-only/change-name.PNG 'Tapez votre nom') |
| :----------------------------------------------------- | :---------------------------------------------------------------: |

- **Note: Ne changez pas `class="name"`**

| :arrow_right_hook: Copiez l'URL de votre compte Twitter dans `href="URL ici"`, et votre identifiant à la place de 'Your handle' | ![Changez le contact](/readme-only/change-contact.PNG 'Insérez un lien vers votre compte Twitter et entrez votre identifiant') |
| :------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------: |

- Si vous préférez utiliser un contact autre que Twitter, vous allez devoir remplacer l'icône Twitter `<i class="fa fa-x-twitter"></i>` en allant sur [Font Awesome Icons](http://fontawesome.io/icons/) et en trouvant un icône plus approprié. Il faudra remplacer l'identificateur `fa-x-twitter` par un autre icône, `fa-facebook` par example, et répéter les étapes précédentes pour l'URL et l'identifiant.

|                                                                                                                                                                             ![Changer la section About](/readme-only/change-about.PNG 'Ecrire un à-propos')                                                                                                                                                                              |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                                         :arrow_right_hook: **Parlez-nous de vous. Soyez bref et concis. Voyez ça comme un tweet plutôt qu'un article de blog.**                                                                                                                                                          |
|                                                                                                                                           ![Changer la section Resources](/readme-only/change-resources.PNG 'Insérer un lien, rédiger une brève description et saisir le nom de la ressource')                                                                                                                                           |
| :arrow_right_hook: **Partagez avec la communauté 3 liens vers des ressources que vous trouvez utiles au développement web. Cela peut être n'importe quoi: une vidéo, une conférence, un podcast, un article, une référence ou un outil. Si vous êtes débutant, ne vous laissez pas intimider, partagez ce que vous connaissez, même si vous trouvez ça basique. Vous serez surpris par le nombre de personnes qui trouveront ça utile.** |

- **Lien:** insérez le lien dans `href="ici"`, en remplaçant le `#`. Évitez les URL raccourcis, ou les liens qui pointent vers d'autres sites que celui que vous voulez montrer.
- **Titre:** écrivez une description rapide dans `title="ici"`.
- **Nom:** écrivez le nom de la ressource dans le champ `>ici</a>`.
- Assurez-vous d'avoir **enregistré toutes vos modifications**.
- **Testez vos modifications**. C'EST IMPORTANT! Ouvrez le fichier html dans votre navigateur (en double-cliquant dessus par exemple) et voyez à quoi ressemblera votre carte sur le site. Vérifiez que la page entière est toujours la même et que rien n'est cassé. Cliquez sur vos liens et assurez-vous qu'ils fonctionnent. Ouvrez la console (`Ctrl + Shift + J` (Windows / Linux) ou `Cmd + Opt + J` (Mac)) et vérifiez qu'il n'y a pas de messages d'erreur.
- Génial, vous avez fini de modifier votre code! Les étapes suivantes enverront vos modifications à GitHub, puis les soumettront pour être fusionnées avec le projet principal.

[↑ Retour à l'index ↑](#index)

---

### Étape 7: Appliquer un commit

- Revenez à l'application de bureau GitHub.
- Vos modifications auront été ajoutées automatiquement à la zone de staging.
- Cela signifie que Git a noté toutes les modifications **enregistrées**.
- Cela devrait être reflété dans l'application. Les additions au fichier seront en vert, et les suppressions s'afficheront en rouge.

|                                                                                         ![Commit changes](/readme-only/commit.PNG "Les modifications que vous avez ajoutées doivent apparaître en vert sur le côté droit de l'application de bureau GitHub. Le bouton de validation est en bas à gauche")                                                                                          |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                       :arrow*right_hook: L'étape suivante s'appelle *`Commit`\_. Cela signifie, grossièrement, `confirmer les modifications`                                                                                                                                       |
|                                                                                      ![Commit changes](/readme-only/commit-header.PNG "Les modifications que vous avez ajoutées doivent apparaître en vert sur le côté droit de l'application de bureau GitHub. Le bouton de validation est en bas à gauche")                                                                                      |
|                                                                          :arrow_right_hook: **Voici à quoi devrait ressembler votre entête de bureau GitHub. Notez le symbole de la fourche à côté du nom du projet dans `Current repository` ; votre `Current branch` aura le nom que vous lui avez donné à l'étape 3**                                                                           |
|                                                                                                                   ![Écrire un message et faire le commit](/readme-only/commit-message.PNG 'Écrivez un bref message de commit dans la section «summary» et cliquez sur «commit»')                                                                                                                   |
| :arrow*right_hook: \*\*Pour *`Commit`_, vous devez remplir le champ _`Summary`_. C'est le message de validation expliquant ce que vous avez changé. Ici, `"Ajout des informations de ma carte"` serait un message raisonnable. Vous pouvez éventuellement ajouter une _`Description`_ plus détaillée. Cliquez sur le bouton _`Commit`\_. Le bouton devrait dire `Commit to "your-branch-name"`\*\* |

[↑ Retour à l'index ↑](#index)

---

### Étape 8: Faire un push à GitHub

- Vos modifications sont maintenant enregistrées et committées. Mais les changements ne sont qu'en local, c'est-à-dire sur votre ordinateur.
- La synchronisation des modifications locales avec votre repo Github s'appelle un _Push_. Vous «poussez» les modifications de votre dépôt local vers le dépôt distant sur Github.

| :arrow*right_hook: Cliquez sur le bouton *`Push`\_ | ![Pousser vers GitHub](/readme-only/push.PNG "Envoyez vos modifications sur GitHub, cliquez sur le bouton 'Push'") |
| :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------: |

- Après quelques secondes, l'opération est terminée et vous avez la même version de cette branche sur GitHub que sur votre ordinateur.

[↑ Retour à l'index ↑](#index)

---

### Étape 9: Soumettre une PR (Pull Request)

- C'est le moment que vous attendiez; soumettre une _Pull Request_ (PR).
- Jusqu'à présent, tout le travail que vous avez effectué a été sur votre fork du projet, qui, comme vous vous en souvenez, réside sur votre propre compte de GitHub.
- Il est maintenant temps d'envoyer vos modifications au projet principal pour les fusionner.
- C'est ce qu'on appelle une [_Pull Request_](https://help.github.com/articles/about-pull-requests/ 'About Pull Requests - Github Help'), parce que vous demandez au responsable du projet d'origine de "tirer" (_pull_) vos modifications dans son projet.
- Allez à la page principale de **votre fork** sur GitHub (elle aura l'icône de fork et votre nom d'utilisateur en haut).
- Vers le haut du repo, vous verrez un message de pull request en surbrillance, avec un bouton vert.

| ![Soumettre une Pull Request](/readme-only/pull-request.PNG "C'est généralement vers le haut de la page, sous la description mais au-dessus des fichiers et dossiers du projet") |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          :arrow_right_hook: **Cliquez sur `Compare and pull request`**                                                           |
|      ![Ouvrir une Pull Request](/readme-only/pull-request-branches.PNG "Vous demandez de fusionner votre branche de votre fork dans la branche master du projet d'origine")      |
|                                                     :arrow_right_hook: Voilà à quoi la page `Open a pull request` ressemble.                                                     |

- RAPPELEZ-VOUS: _vous essayez de fusionner votre branche avec le projet d'origine, et non avec la branche `Master` de votre fork_.
- L'image ci-dessus vous donne une idée de ce à quoi devrait ressembler l'entête de votre pull request.
- Sur la gauche se trouve le projet d'origine, suivi de la branche principale. Sur la droite se trouve votre fork et la branche que vous avez créée.

|                         ![Soumettre une Pull Request](/readme-only/pull-request-open.PNG "Cliquez sur le bouton vert. N'ayez pas peur!")                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **Créez une pull request: écrivez un titre, ajoutez les informations facultatives dans la description, et cliquez sur `Create pull request`** |

- Ne soyez pas déconcerté par toutes les options. Il vous suffit de suivre ces trois étapes pour le moment.
- Laissez l'option `Allow edits from maintainers` cochée.
- Maintenant, une _Pull Request_ sera envoyée au responsable du projet. Dès qu'elles ont été examinées et acceptées, vos modifications apparaîtront sur le [page Web du projet](https://syknapse.github.io/Contribute-To-This-Project 'Contribuer à la page Web de ce projet').

[↑ Retour à l'index ↑](#index)

---

### Étape 10: Fêter ça

C'est tout. Vous l'avez fait! Vous avez contribué à l'open source sur GitHub.

Vous avez ajouté du code à une page web en direct: [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

Vos modifications **ne seront pas visibles immédiatement**; elles doivent d'abord être examinées, acceptées et fusionnées par le responsable du projet. Une fois vos changements fusionnés, votre carte sera visible en direct sur la page.

Il est tout à fait normal qu'un reviewer demande des modifications sur une PR. Si cela vous arrive, considérez ça comme un entraînement aux bonnes pratiques. Gardez un œil sur les commentaires et les modifications demandées. Une fois que vous avez effectué les modifications demandées (de retour dans votre branche), il ne vous reste plus qu'à commit et à push vos modifications. La PR se mettra automatiquement à jour avec les nouvelles modifications.

Je promets d'essayer de lire et de fusionner les changements dès que possible, mais je le fais sur mon temps libre, un délai de quelques jours est donc inévitable.

[↑ Retour à l'index ↑](#index)

---

## Prochaines étapes

- Revenez dans un moment pour vérifier la fusion de votre pull request.
- Vous devriez recevoir un e-mail de GitHub lorsque vos modifications ont été approuvées, ou si des modifications supplémentaires sont demandées. Vous en recevrez un autre une fois que la PR est fusionnée avec `master` et que votre carte a été ajoutée.
- Vous pouvez aussi apprendre comment contribuer de cette série _gratuite_: [Comment Contribuer à un Projet Open Source sur GitHub](https://kcd.im/pull-request)
- Si vous avez trouvé ce projet **utile**, n'hésitez pas à lui donner une :star: star :star: en haut de la page et à écrire un **tweet** pour faire passer le mot [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]
- Vous pouvez **me suivre** et me contacter sur [𝕏 (Twitter)](https://twitter.com/Syknapse '@Syknapse') ou [via une de ces options](https://syknapse.github.io/Syk-Houdeib/#contact 'Mon contact | Portfolio')
- Ce projet est open source, ce qui veut dire qu'en dehors de votre carte, vous êtes encouragé à aider dans la correction de bugs, l'amélioration et l'ajout de features. N'hésitez pas à ouvrir une [issue](https://help.github.com/articles/creating-an-issue/ 'Mastering Issues | GitHub Guides') ou à faire une nouvelle [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/ 'Creating a pull request from a fork | GitHub Help')
- Pour aider notre communauté, regardez l'onglet Github [Discussions](https://github.com/Syknapse/Contribute-To-This-Project/discussions) à côté des Pull Requests. C'est un endroit pour se présenter, parler de l'open source plus en détail, et communiquer avec les responsables du projet (maintainers). Allez-vous nous aider à développer cette feature, et porter la communauté?
- **Merci pour votre contribution à ce projet**. Vous pouvez maintenant essayer de contribuer à d'autres projets; cherchez des issues avec le label ![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png), indiquant des bonnes possibilités de contribution pour les débutants.
- Je cherche également des collaborateurs pour m'aider à lire et fusionner les PRs. Si vous voulez développer votre expérience sur Git, rejoignez le serveur Discord et lisez le [guide du mainteneur](/maintainer_guide.md).

[↑ Retour à l'index ↑](#index)

---

### Remerciements

Ce projet a été fortement influencé par le projet de [Roshan Jossey](https://github.com/Roshanjossey), [first-contributions](https://github.com/Roshanjossey/first-contributions), et de son excellent tutoriel.

Il est également particulièrement inspiré par la grande communauté autour de [#GoogleUdacityScholars](https://twitter.com/hashtag/GoogleUdacityScholars?src=hash): The Google Challenge Scholarship: Front-End Web Dev, promotion 2017 Europe.

### Licence

Ce projet est sous la [Licence MIT](./LICENSE).

### Top 100 Contributeurs

[![GitHub Contributors Image](https://contrib.rocks/image?repo=Syknapse/Contribute-To-This-Project)](https://github.com/Syknapse/Contribute-To-This-Project/graphs/contributors)

[↑ Retour à l'index ↑](#index)

[twit]: https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project'
