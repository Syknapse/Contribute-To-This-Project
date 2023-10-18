# Guide des mainteneurs

Ce guide est destiné à ceux qui veulent rejoindre le projet en tant que mainteneurs, pour aider à gérer et maintenir le projet pour la communauté. (Ce n'est pas un guide pour les **premiers contributeurs**)

## Objectifs

Notre objectif principal est de fournir à nos contributeurs un retour sur les renseignements/réponses nécessaires aussi rapidement que possible à partir du moment où ils ouvrent leur demande de fusion de code (pull request). Cela se traduit principalement par la réalisation de revues de code et la fusion des "PR" approuvés.
En outre, nous pouvons maintenir le projet en nous assurant que tout fonctionne correctement et de la manière la plus utile pour nos contributeurs.

## A qui cela s'adresse-t-il ?

Toute personne ayant un minimum de connaissances sur Git et GitHub. Il n'est pas nécessaire d'être un expert, ce guide devrait aider même les débutants. Il s'agit d'un projet actif qui reçoit régulièrement des contributions et qui aide de nombreuses personnes à faire leurs premiers pas vers les contributions open source. Être mainteneur de ce projet permet de s'assurer que nous continuons à fournir à nos contributeurs une bonne première expérience, et à les encourager à contribuer à nouveau.

Vous pouvez consacrer autant de temps que vous le souhaitez à cette activité. Grâce à nos efforts, nous devrions être en mesure d'assurer le bon fonctionnement du projet.

## Méthodologie

- Allez dans la section "Pull request" du projet, et commencez par la moins récente qui n'est pas en statut "Change requested".
- Ouvrez un PR (Pull Rquest) et allez dans la section "Files Changes", puis commencez à réviser le code.
- Vérifiez le PR, en vous assurant qu'il respecte les spécifications du tutoriel.
- Assurez-vous que le code HTML, les liens et les données sont corrects. Assurez-vous que l'onglet est placé au début du fichier, là où il doit l'être.
- Ensuite, vérifiez qu'il n'y a pas de conflits. Fusionnez `master` dans la branche PR pour résoudre les conflits.
Habituellement, les conflits apparaissent lorsqu'un certain temps s'est écoulé depuis les fusions précédentes et que plusieurs PRs utilisent la même ancienne version.
- Si c'est le cas, résolvez les conflits. Il sera généralement nécessaire d'ajouter le nouvel onglet au-dessus des autres onglets qui ont été ajoutés depuis la création de la "fourche" (copie personnelle du projet).
- Si tout le reste est correct, approuvez la PR, écrivez un message au contributeur pour le remercier de sa contribution (rappelez-vous que c'est sa première fois et qu'il aura probablement besoin d'encouragements).
- Fusionnez le PR dans `master`.

### Demande de modifications

- Parfois, il peut y avoir des problèmes avec le PR qui devraient être corrigés par le contributeur, comme la création d'une "branche" incorrecte, du HTML incorrect, des informations manquantes, une tabulation insérée au mauvais endroit. Tout ce qui montre que vous n'avez pas suivi le tutoriel correctement (et non de simples conflits de fusion).
- Lancez la révision sur GitHub et demandez des modifications. Essayez d'être aussi descriptif que possible, commentez la ligne exacte, dites-leur exactement quel est le problème et comment le corriger, puis encouragez-les en leur disant à quel point c'est normal dans le processus de révision des RP.
- Lorsque vous êtes prêt, soumettez l'évaluation.
- Gardez un œil sur la conversation au cas où le contributeur aurait d'autres questions à poser. Notre objectif est qu'il atteigne la ligne d'arrivée, alors essayez de le guider jusqu'au bout.
- Une fois que le contributeur a fourni les changements demandés, le PR peut être fusionné avec `master`.

Veuillez toujours vérifier que les changements n'ont pas eu d'impact sur la fonctionnalité du projet et que la page "live" fonctionne toujours comme prévu. Il est toujours préférable de vérifier les changements localement avant de les fusionner, et de ne jamais fusionner quelque chose qui semble suspect.

## Outils

S'il n'y a pas trop de PRs accumulés, tout ce processus peut être fait directement dans la page GitHub du projet.
Néanmoins, il n'est pas rare d'avoir quelques PR en attente, ce qui conduira inévitablement à des conflits. Vous pouvez utiliser n'importe quel outil qui vous est familier pour voir les différences et résoudre les conflits.
Nous recommandons l'utilisation d'un outil tel que [GitKraken] (https://www.gitkraken.com/download). Il est graphique et permet une gestion de projet plus facile lorsqu'il y a plusieurs PR à examiner.
Téléchargez GitKraken, puis clonez le projet. L'utilisation combinée de votre éditeur de code habituel et de l'outil de gestion des conflits intégré à GitKraken vous donnera un contrôle total pour passer rapidement d'un PR à l'autre, résoudre les conflits et fusionner le code.

Le projet a installé 'Prettier' pour s'assurer que, quelle que soit la manière dont un contributeur soumet son PR, le guide de style sera forcé. De cette manière, le projet est toujours maintenu avec la même indentation et le même style.
Si vous remarquez que le fichier HTML est désordonné, lancez `npx prettier --write index.html` dans le dossier 'root' (base) du projet. Cela devrait essayer de formater le fichier, et si cela échoue, il affichera les erreurs qu'il a rencontrées. Dans certains cas, une balise fermante manquante ou un code HTML incorrect peut être fusionné par erreur, et il s'agit d'une méthode valable pour remarquer et résoudre le problème.

En cas de doute, vous pouvez toujours me mentionner ou mentionner d'autres responsables dans le PR lui-même, ou m'envoyer un message direct sur [Twitter](https://twitter.com/Syknapse).

## Rejoindre

Rejoignez-nous pour aider ce projet à grandir ensemble. N'hésitez pas à me contacter sur Twitter et à m'envoyer votre compte GitHub pour être ajouté.

Ce document n'a pas été traduit de l'anglais directement par [Syknapse](https://github.com/Syknapse), en cas de contact veuillez utiliser l'anglais_.

[ ![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')