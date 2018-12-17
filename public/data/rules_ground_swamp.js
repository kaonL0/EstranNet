let features_ground_swamp = [
	{k: 'is_ground', q: 'Est ce que cette espèce se déplace sur le sol ?', r: ['Oui', 'Non']},
	{k: 'has_articulations', q: 'Est ce que cette espèce possède des pattes avec des articulations facilement identifiables ?', r: ['Oui', 'Non']},
	{k: 'howmany_pattes', q: 'Combien de paires de pattes possède cette espèce ?', r: ['3 paires', '4 paires', 'Plus de 4 paires']},
	{k: 'has_pattes', q: 'Est ce que cette espèce possède des pattes ?', r: ['Oui', 'Non']},
	{k: 'has_coquille', q: 'Est ce que cette espèce à corps mou possède une coquille ?', r: ['Oui', 'Non']},
	{k: 'howmany_valves', q: 'Combien de valves possède son corps ?', r: ['1 valve', '2 valves']},
	{k: 'is_annele', q: 'Son corps possède des anneaux (annelé) ?', r: ['Oui', 'Non']},
	{k: 'is_fast', q: 'Est ce que cette espèce est rapide ?', r: ['Oui', 'Non']},
];

let species_ground_swamp = [
	{name: 'Insectes', features: [['is_ground', 'Oui'], ['has_pattes', 'Oui'], ['has_articulations', 'Oui'], ['howmany_pattes', '3 paires']]},
	{name: 'Arachnides', features: [['is_ground', 'Oui'], ['has_pattes', 'Oui'], ['has_articulations', 'Oui'], ['howmany_pattes', '4 paires']]},
	{name: 'Crustacés', features: [['is_ground', 'Oui'], ['has_pattes', 'Oui'], ['has_articulations', 'Oui'], ['howmany_pattes', 'Plus de 4 paires']]},
	{name: 'Pararthropodes', features: [['is_ground', 'Oui'], ['has_pattes', 'Oui'], ['has_articulations', 'Non']]},
	{name: 'Gastéropdes', features: [['is_ground', 'Oui'], ['has_pattes', 'Non'], ['has_coquille', 'Oui'], ['howmany_valves', '1 valve']]},
	{name: 'Bivalves', features: [['is_ground', 'Oui'], ['has_pattes', 'Non'], ['has_coquille', 'Oui'], ['howmany_valves', '2 valves']]},
	{name: 'Polychètes sédentaires', features: [['is_ground', 'Oui'], ['has_pattes', 'Non'], ['has_coquille', 'Non'], ['is_annele', 'Oui'], ['is_fast', 'Oui']]},
	{name: 'Polychètes errants', features: [['is_ground', 'Oui'], ['has_pattes', 'Non'], ['has_coquille', 'Non'], ['is_annele', 'Oui'], ['is_fast', 'Non']]},
	{name: 'Vers', features: [['is_ground', 'Oui'], ['has_pattes', 'Non'], ['has_coquille', 'Non'], ['is_annele', 'Non'], ['has_coquille', 'Oui']]},
];
