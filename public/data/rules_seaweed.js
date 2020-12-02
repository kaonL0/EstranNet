/*******************************************************************************************************

Liste des caractéristiques
Dans ce cas chaque ligne représente une caractéritique
Chaque caractéristique est structurée de manière identique :
	- k: une clé permettant d'identifier la caractéristique (unqiue, pas d'accents,  '_' pour séparer les mots)
	- q: une question qui permet de définir la caractéristique
	- r: un tableau de réponses possibles (pas de limitation, attention rendu interface)

Syntaxe :
let features = [
	{k: 'trouver_une_cle_unique', q: 'Saisir une question ?', r: ['Réponse1', 'Réponse2', 'Réponse3']},
];
*/

let features_seaweed = [
	{k: 'color', q: 'De quelle couleur est cette algue ?', r: ['Rouge', 'Verte', 'Brune']},
	{k: 'hair', q: 'Cette algue ressemble t-elle à des cheveux ?', r: ['Oui', 'Non']},
	{k: 'smell_shrimp', q: 'Est ce que cette espèce sens légèrement la crevette ?', r: ['Oui', 'Non']}
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

let species_seaweed = [
    {name: 'Ao Nori', features: [['color', 'Verte'], ['hair', 'Oui']]},
    {name: 'Dulse', features: [['color', 'Rouge'], ['hair', 'Non']]},
    {name: 'Dusle poivrée', features: [['color', 'Rouge'], ['hair', 'Non']]},
    {name: 'Goémon Blanc', features: [['color', 'Brune'], ['smell_shrimp', 'Oui']]},
    {name: 'Haricot de mer', features: [['color', 'Verte'], ['hair', 'Oui']]},
    {name: 'Kombu royal', features: [['color', 'Brune'], ['hair', 'Non']]},
    {name: 'Laitue de mer', features: [['color', 'Verte'], ['hair', 'Oui']]},
    {name: 'Nori', features: [['color', 'Brune'], ['hair', 'Non']]}
];