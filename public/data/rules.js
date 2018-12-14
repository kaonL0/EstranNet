/*
Liste des caractéristiques (ceci est une 'variable' qui se nomme 'features')
Dans ce cas chaque ligne représente une caractéritique
Chaque caractéritique est structurée de manière identique :
	- k: une clé permettant d'identifier la caractéristique (unqiue, pas d'accents,  '_' pour séparer les mots)
	- q: une question qui permet de définir la caractéristique
	- r: un tableau de réponses possibles
	- asked: false
*/
let features = [
	{k: 'can_move', q: 'Est ce que cette espèce peut se déplacer ?', r: ['Oui', 'Non'], asked: false},
	{k: 'can_fly', q: 'Est ce que cette espèce peut voler ?', r: ['Oui', 'Non'], asked: false},
	{k: 'has_shell', q: 'Est ce que cette espèce a une carapace ?', r: ['Oui', 'Non'], asked: false},
	{k: 'color_green', q: 'Est ce que cette espèce est verte ?', r: ['Oui', 'Non'], asked: false},
	{k: 'color_red', q: 'Est ce que cette espèce est rouge ?', r: ['Oui', 'Non'], asked: false},
	{k: 'yellow_head', q: 'Est ce que cette espèce a une tête jaune ?', r: ['Oui', 'Non'], asked: false},
	{k: 'red_nose', q: 'Est ce que cette espèce a un bec rouge ?', r: ['Oui', 'Non'], asked: false},
	{k: 'is_brisk', q: 'Est ce que cette espèce est vive ?', r: ['Oui', 'Non'], asked: false},
	{k: 'big_claws', q: 'Est ce que cette espèce possède des pinces très robustes ?', r: ['Oui', 'Non'], asked: false},
	{k: 'spider', q: 'Est ce que cette espèce ressemble à une araignée ?', r: ['Oui', 'Non'], asked: false},
	{k: 'color_brown', q: 'Est ce que cette espèce est marron ?', r: ['Oui', 'Non'], asked: false},
	{k: 'salade_like', q: 'Est ce que cette espèce ressemble à de la salade ?', r: ['Oui', 'Non'], asked: false},
	{k: 'algae_high', q: 'Est ce que cette espèce s\'étend en hauteur ?', r: ['Oui', 'Non'], asked: false},
];

/*
Liste des espèces (ceci est une 'variable' qui se nomme 'species')
Dans ce cas chaque ligne représente une espèce
Chaque caractéritique est structurée de manière identique :
	- name: le nom de l'espère
	- features: une liste de conditions
		- premier élément: la clé de la caractéristique
		- second élément: la valeur que cette caractéristique doit avoir

Pour réaliser une identification correctement
il faut que chaque espèce possède une liste de caractéristique/valeur unique
*/
let species = [
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
