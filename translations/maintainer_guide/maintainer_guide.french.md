# Guide du responsable

Ce guide est destiné à ceux qui souhaitent rejoindre le projet en tant que responsables, pour aider à gérer et maintenir le projet pour la communauté. (Ceci n'est pas un guide pour les **contributeurs débutants**)

## Traductions

Ce tutoriel est également disponible en [autres langues](translations/README.md)

| [English](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) | [Hindi](translations/maintainer_guide/maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Italian](translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md) | [Portuguese](translations/maintainer_guide/maintainer_guide.por.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) |


> Les traductions des documentations de projets sont les bienvenues. Lire [`Guide de traduction`](translations/README.md)contribuer.

---

## Objectifs

Notre objectif principal est de donner à nos contributeurs le feedback le plus rapide possible à partir du moment où ils font leur pull request. Cela signifie principalement procéder à des révisions de code et fusionner les PR acceptés.
En dehors de cela, nous pouvons maintenir le projet en nous assurant que tout fonctionne correctement et aussi utile que possible pour nos contributeurs.

## C'est pour qui ?

Toute personne possédant un peu de compétences en Git et GitHub. Vous n'avez pas besoin d'être un expert, ce guide devrait aider même les débutants. Il s'agit d'un projet actif qui reçoit des contributions régulières et qui aide de nombreuses personnes à apporter leur première contribution open source. Être responsable de ce projet permet de garantir qu'il continue à offrir à nos contributeurs une bonne première expérience et de les encourager à contribuer davantage.

Vous pouvez y consacrer autant ou aussi peu de temps que vous le souhaitez. Entre nous, nous espérons que tout se passera bien.

## Méthodologie

- Accédez à la section pull request du projet, commencez par la pull request la plus ancienne qui n'est pas dans l'état « modifications demandées ».
- Ouvrez un PR et accédez à l'onglet Modifications des fichiers et lancez une révision du code.
- Vérifiez le PR, assurez-vous qu'il suit les spécifications du didacticiel.
- Assurez-vous que le HTML, les liens et les données sont tous corrects. Assurez-vous que la carte est positionnée au début du fichier là où elle devrait être.
- Vérifiez ensuite tout conflit. Fusionnez « master » dans la branche PR pour résoudre les conflits. Les conflits surviennent généralement lorsqu'un certain temps s'est écoulé depuis les fusions précédentes et que plusieurs PR utilisent la même version obsolète.
- Si tel est le cas, résolvez le conflit. Habituellement, vous devrez ajouter la nouvelle carte au-dessus des cartes qui ont été ajoutées depuis la création du fork.
- Si tout le reste va bien, approuvez le PR, écrivez un message au contributeur pour le remercier pour sa contribution (en vous rappelant qu'il s'agit d'un premier venu et qu'il bénéficierait d'encouragements).
- Fusionnez le PR dans `master`.

## Demander des modifications

- Parfois, il y a des problèmes avec le PR qui devraient être résolus par le contributeur, comme une mauvaise branche, un code HTML cassé, des informations manquantes, une carte placée au mauvais endroit. Tout ce où le tutoriel n'a pas été suivi correctement (et pas de simples conflits de fusion).
- Démarrez une révision de code sur GitHub et demandez des modifications. Essayez d'être aussi descriptif que possible, commentez la ligne exacte, dites-leur exactement quel est le problème et comment le résoudre, et encouragez-les sur le fait qu'il s'agit d'une partie normale du processus d'examen des relations publiques.
- Lorsque vous êtes prêt, soumettez votre avis.
- Gardez un œil sur la conversation au cas où le contributeur aurait des questions complémentaires pour lesquelles vous pourriez l'aider. Notre objectif est d’amener tout le monde à franchir la ligne d’arrivée, c’est pourquoi nous essayons de les guider jusqu’au bout.
- Une fois qu'ils ont corrigé les modifications demandées, le PR peut être fusionné avec « maître ».
- Veuillez toujours vérifier que les modifications n'ont pas interrompu le projet et que la page en direct fonctionne toujours comme prévu. Il est toujours préférable de tester les modifications localement avant de fusionner et de ne jamais fusionner quoi que ce soit qui semble suspect.

## Outils

S'il n'y a pas beaucoup de PR accumulés, tout ce processus peut être effectué directement dans la page GitHub du projet.
Cependant, il n'est pas rare d'avoir quelques PR en attente et c'est alors qu'il y aura inévitablement des conflits de fusion. Vous pouvez utiliser tous les outils que vous connaissez pour voir les différences et résoudre les conflits.
I recommend the use of a tool like [GitKraken](https://www.gitkraken.com/download). C'est visuel et cela permet une gestion plus facile du projet lorsqu'il y a quelques PR à réaliser.
Téléchargez GitKraken, clonez le projet. L'utilisation d'une combinaison de votre éditeur de code et de l'outil de conflit de fusion intégré de GitKraken vous donne un contrôle total pour parcourir rapidement les PR, résoudre les conflits et fusionner.

Le projet a installé Prettier pour garantir que quelle que soit la manière dont un contributeur soumet le PR, le guide de style sera appliqué. Le projet de cette façon est toujours maintenu avec la même indentation et le même style.
Si vous remarquez que le fichier HTML semble désordonné, exécutez le code ci-dessous à la racine du projet.

```js
npx plus joli --write index.html
```

Il devrait essayer de formater le fichier et s'il n'y parvient pas, il vous montrera les erreurs. Parfois, une balise de fermeture manquante ou un code HTML cassé est fusionné par erreur et c'est un bon moyen de le repérer et de le corriger.

Si jamais vous avez des doutes, vous pouvez toujours me mentionner ou mentionner les autres responsables dans le PR lui-même ou m'envoyer un message privé sur [Twitter](https://twitter.com/Syknapse).

## Rejoignez-nous

Rejoignez-nous pour contribuer à faire grandir ce projet ensemble. Contactez-moi au [Twitter](https://twitter.com/Syknapse) et envoyez-moi votre nom d'utilisateur GitHub pour que je puisse vous ajouter. Vous pouvez également rejoindre notre communauté Discord en cliquant sur le bouton ci-dessous :

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')

##Merci

