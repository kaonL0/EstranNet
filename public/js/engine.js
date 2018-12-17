let currentFeature = null; // caractéristique courante

// Charge les paramètres de couleur
function loadParameters () {
	let systemDiv = document.getElementById('system');
	systemDiv.style.setProperty('--en-background-color', parameters.enbackgroundcolor);

	let questionDiv = document.getElementById('question');
	questionDiv.style.setProperty('--en-background-color-question', parameters.enbackgroundcolorquestion);
}

// Initialisation de l'application
function load() {
	loadParameters();

	features.forEach(feature => {
		feature.asked = false;
	});

	species.forEach(specie => {
		specie.possible = true;
	});

	next();
}

// Passe à la quesiton suivante
function next() {
	let bestQuestion = getBestQuestionToAsk();
	if (bestQuestion === null) {
		const suggestion = species
			.filter(specie => specie.possible)
			.reduce((acc, value)=> {
				return `${acc} ${value.name} ?`;
			}, '');
		displaySolution('Non trouvé... Demande à ton animateur !!', 'images/not_found.jpeg', suggestion);
	} else {
		currentFeature = bestQuestion[0];
		let p = getFeatureByKey(currentFeature);
		displayQuestion(p.q, p.r);
	}
};

// Gestion du choix de l'utilisateur
function choice(e) {
	// Mise à jour la valeur choisie par l'utilisateur
	// Flag si cette espèce devient maintenant impossible
	species.forEach(specie => {
		specie.features.forEach(feature => {
			if (feature[0] == currentFeature) {
				feature.push(e.target.value);
				if (e.target.value !== feature[1]) {
					specie.possible = false;
				}
			}
		});
	});
	console.log('species', species);

	// Cherche si une solution est trouvée
	let found = false;
	species.forEach(specie => {
		let all_true = true;
		specie.features.forEach(feature => {
			all_true &= feature[1] === feature[2];
		});
		if (all_true) {
			found = true;
			displaySolution(specie.name, 'images/'+getImageName(specie.name));
		}
	});

	setFeatureAsked(currentFeature);

	if (!found) {
		next();
	}
}

/* Cherche la meilleure question à poser
On recherche la caractéristique :
	- qui n'a pas encore été traitée
	- qui possède le plus d'occurence dans la liste des espèces possibles
=> retourne une clé de caractéristique
*/
function getBestQuestionToAsk () {

	let featuresCount = [];
	features.forEach(feature => {
		featuresCount[feature.k] = 0;
	});

	// count
	species.forEach(specie => {
		specie.features.forEach(feature => {
			if (!getFeatureByKey(feature[0]).asked && specie.possible) {
				featuresCount[feature[0]] +=  1;
			}
			return 0;
		});
	});

	let featuresOrdered = [];
	let totalCount = 0;
	// sort
	for (var k in featuresCount) {
		featuresOrdered.push([k, featuresCount[k]]);
		totalCount += featuresCount[k];
	}
	featuresOrdered.sort(function(prop1, prop2) {
	    return prop2[1] - prop1[1];
	});
	console.log('featuresOrdered', featuresOrdered);

	return totalCount>0 ? featuresOrdered[0] : null;
}

// Récupère une feature à partir d'un indice
function getFeature(idx) {
	return features.filter((e, i) => i === idx)[0];
}

// Récupère une feature à partir d'une clé
function getFeatureByKey(key) {
	return features.filter((e, i) => e.k === key)[0];
}

// Défini une feature comme déjà demandée
function setFeatureAsked(key) {
	features.forEach((e, i) => {
		if(e.k === key) e.asked = true;
	});
}

// tests
function test() {
	console.log('bestQuestion', getBestQuestionToAsk());
	console.log('getFeature', getFeature(2));
	console.log('getFeatureByKey', getFeatureByKey('has_shell'));
	setFeatureAsked('has_shell');
	console.log('setFeatureAsked', features);
}
