# EstranNet
Un outils pédagogique permettant d'identifier les espèces de notre territoire.


## Démonstration
Une version live est disponible ici : <a href="http://ldfreelance.fr/estrannet/" target="_blank">http://ldfreelance.fr/estrannet/</a>


## Idée de départ
* Lors de la formation "Utiliser les outils numériques en éducation à l’environnement"
* Dispensée par Guillaume REMAUD <a href="http://www.lespetitsdebrouillards.org/" target="_blank">Les Petits Débrouillards</a> à partir d'études de l'<a href="https://www.ifree.asso.fr/" target="_blank">Ifrée</a>
* Organisée par le <a href="http://www.reeb.asso.fr/" target="_blank">REEB</a> à Saint-Brieuc (décembre 2018)
* Application imaginée au cours d'un atelier de création d'animation pédagogique par l'équipe de Guillaume CARFANTAN, Michaël TANGHE et Michaël QUERRE


## Avantages de la technologie choisie
* Web : nécéssite simplement un navigateur, compatibilité tablette, ordinateur, téléphone, etc...
* Minimaliste : portable, pas besoin de réseau, léger
* Facilement personnalisable : chaque animateur peut paramétrer ses espèces et ses caractéristiques (un seul fichier à modifier)


## Théorie sur la recherche d'espèce
Ce genre de problème se gère avec une technique d'intelligence artificielle nommée "système expert". Ce genre d'algorithmes fonctionnent bien, parmi les applications connues : Akinathor, Mycin (outils de diagnotic médical), etc...

J'ai essayé de créer un système simplifié inspiré des systèmes experts. L'objectif est de permettre aux animateurs de le configurer facilement et rapidement.

La difficulté de ce gendre d'outil reste la constitution des règles (caractéristiques et espèces) qu'il faut définir pour que le système se comporte comme un vrai expert.


## Configurer son propre système
Par défaut, ce logiciel fonctionne avec 9 espèces et 13 caractéristiques. Pour créer son propre système, il n'y a qu'un seul fichier à modifier : [public/data/rules.js](https://github.com/kaonL0/EstranNet/blob/master/public/data/rules.js)
* Un tableau de caractéristiques (à configurer suivant le modèle)
* Un tableau d'espèces (à configurer suivant le modèle)

Une documentation complète se trouve dans ce fichier pour pouvoir le modifier facilement.


## Installation sur une machine
* Télécharger l'archive compressée (bouton vert ci-dessus : Clone or download > Donwload ZIP)
* Décompresser sur la machine
* Ouvrir le fichier public/index.html (cliquer ou double cliquer : il s'ouvrira automatiquement dans le navigateur)
* Sur tablette, possibilité de faire un lien sur l'écran d'accueil


## Et après...
Si certains d'entre vous souhaient améliorer/configurer/déployer cet outil pour pouvoir le proposer dans une de leur animation, je reste à votre disposition pour vous aider.

Ici se trouve la liste des choses à faire/discuter/imaginées : https://github.com/kaonL0/EstranNet/projects/1
