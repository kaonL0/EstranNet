/*******************************************************************************************************

Liste des caractéristiques
Dans ce cas chaque ligne représente une caractéritique
Chaque caractéritique est structurée de manière identique :
	- k: une clé permettant d'identifier la caractéristique (unqiue, pas d'accents,  '_' pour séparer les mots)
	- q: une question qui permet de définir la caractéristique
	- r: un tableau de réponses possibles (pas de limitation, attention rendu interface)

Syntaxe :
let features = [
	{k: 'trouver_une_cle_unique', q: 'Saisir une question ?', r: ['Réponse1', 'Réponse2', 'Réponse3']},
];
*/

let features_test = [
	{k: 'can_move', q: 'Est ce que cette espèce peut se déplacer ?', r: ['Oui', 'Non']},
	{k: 'can_fly', q: 'Est ce que cette espèce peut voler ?', r: ['Oui', 'Non']},
	{k: 'has_shell', q: 'Est ce que cette espèce a une carapace ?', r: ['Oui', 'Non']},
	{k: 'color_green', q: 'Est ce que cette espèce est verte ?', r: ['Oui', 'Non']},
	{k: 'color_red', q: 'Est ce que cette espèce est rouge ?', r: ['Oui', 'Non']},
	{k: 'yellow_head', q: 'Est ce que cette espèce a une tête jaune ?', r: ['Oui', 'Non']},
	{k: 'red_nose', q: 'Est ce que cette espèce a un bec rouge ?', r: ['Oui', 'Non']},
	{k: 'is_brisk', q: 'Est ce que cette espèce est vive ?', r: ['Oui', 'Non']},
	{k: 'big_claws', q: 'Est ce que cette espèce possède des pinces très robustes ?', r: ['Oui', 'Non']},
	{k: 'spider', q: 'Est ce que cette espèce ressemble à une araignée ?', r: ['Oui', 'Non']},
	{k: 'color_brown', q: 'Est ce que cette espèce est marron ?', r: ['Oui', 'Non']},
	{k: 'salade_like', q: 'Est ce que cette espèce ressemble à de la salade ?', r: ['Oui', 'Non']},
	{k: 'algae_high', q: 'Est ce que cette espèce s\'étend en hauteur ?', r: ['Oui', 'Non']},
];


/*******************************************************************************************************

Liste des espèces
Dans ce cas chaque ligne représente une espèce
Chaque espèce est structurée de manière identique :
	- name: le nom de l'espère
	- features: une liste de conditions à valider pour être considéré de cette espèce
		- premier élément: la clé de la caractéristique
		- second élément: la valeur que cette caractéristique doit avoir

Syntaxe :
let species = [
	{name: 'nom de l\'espèce', features: [['cle_1', 'valeurPourCle1'], ['cle_2', 'valeurPourCle2']]},
];

Pour réaliser une identification correctement il est conseiller d'avoir une liste de caractéristique/valeur unique
*/

let species_test = [
	{name: 'Fou de bassan', features: [['can_move', 'Oui'], ['can_fly', 'Oui'], ['yellow_head', 'Oui']]},
	{name: 'Macareux', features: [['can_move', 'Oui'], ['can_fly', 'Oui'], ['red_nose', 'Oui']]},
	{name: 'Crabe vert', features: [['can_move', 'Oui'], ['has_shell', 'Oui'], ['color_green', 'Oui']]},
	{name: 'Etrille', features: [['can_move', 'Oui'], ['has_shell', 'Oui'], ['is_brisk', 'Oui'], ['color_red', 'Oui']]},
	{name: 'Tourteau', features: [['can_move', 'Oui'], ['has_shell', 'Oui'], ['big_claws', 'Oui']]},
	{name: 'Araignée', features: [['can_move', 'Oui'], ['has_shell', 'Oui'], ['spider', 'Oui'], ['color_red', 'Oui']]},
	{name: 'Laitue de mer', features: [['can_move', 'Non'], ['color_green', 'Oui'], ['salade_like', 'Oui']]},
	{name: 'Haricot de mer', features: [['can_move', 'Non'], ['color_green', 'Oui'], ['algae_high', 'Oui']]},
	{name: 'Nori', features: [['can_move', 'Non'], ['color_brown', 'Oui']]},
];

/*
Détail de l'algorithme de choix de l'ordre des caractéristiques :
Voici la logique pour le choix d'une question : on recherche la meilleure question à poser (caractéristique) :
* Parmi les caractéristiques qui n'ont pas encore été traitées (après chaque question, la caractéristique est éliminée)
* Parmi les caractéristiques dans les espèces possible restantes (au fur et à mesure des réponses de l'utilisateur certaines espèces sont écartées)
* On compte le nombre de fois où la caractéristique est associé à une espèce
* On prend la caractéristique ayant le score le plus important
*/