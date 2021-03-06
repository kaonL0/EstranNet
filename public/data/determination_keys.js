let determination_keys = {
	ground_swamp: {name: 'Sol marais maritime', features: features_ground_swamp, species: species_ground_swamp},
	seaweed: {name: 'Clé algues', features: features_seaweed, species: species_seaweed},
	test: {name: 'Clé test', features: features_test, species: species_test}
}

function setDeterminationKey() {
	var url = new URL(window.location.href);
	var determination_key = url.searchParams.get('determination_key') || 'ground_swamp';
	features = determination_keys[determination_key].features,
	species = determination_keys[determination_key].species
}

let features = null;
let species = null;

setDeterminationKey();
console.log(features);
console.log(species);

