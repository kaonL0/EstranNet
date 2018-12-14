let currentProp = null;

function loadParameters () {
	let systemDiv = document.getElementById('system');
	systemDiv.style.setProperty('--en-background-color', parameters.enbackgroundcolor);

	let questionDiv = document.getElementById('question');
	questionDiv.style.setProperty('--en-background-color-question', parameters.enbackgroundcolorquestion);
}

function load() {
	next();
	loadParameters();
}

function next() {
	let bestQuestion = getBestQuestionToAsk();
	if (bestQuestion === null) {
		displaySolution('Non trouvé... Demande à ton animateur !!', 'images/not_found.jpeg');
	} else {
		currentProp = bestQuestion[0];
		let p = getFeatureByKey(currentProp);
		displayQuestion(p.q, p.r);
	}
};

function choice(e) {
	// Parcours la liste des caractéritiques des éspèces
	// met à jour la valeur choisie par l'utilisateur
	species.forEach(specie => {
		specie.features.forEach(feature => {
			if (feature[0] == currentProp)
				feature.push(e.target.value);
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
			displaySolution(specie.name, 'images/'+getImageName(specie.name))
		}
	});

	setFeatureAsked(currentProp);

	if (!found) {
		next();
	}
}

/* Cherche la meilleure question à poser
On recherche la caractéristique qui n'a pas encore été traitée
et qui possède le plus d'occurence dans la liste des espèces
=> retourne une clé de caractéristique
*/
function getBestQuestionToAsk () {
	// Calc best question to ask
	let questionOrder = [];
	species.forEach(specie => {
		specie.features.forEach(props => {
			if (!getFeatureByKey(props[0]).asked) {
				if (!questionOrder[props[0]])
					questionOrder[props[0]] = 0;
				if (props[1] ==='Oui') {
					questionOrder[props[0]] +=  1;
				} else if (props[1] ==='Non') {
					questionOrder[props[0]] +=  -1;
				}
			}
			return 0;
		});
	});

	// Sort with max features
	var ordered = [];
	for (var e in questionOrder) {
	    ordered.push([e, questionOrder[e]]);
	}
	ordered.sort(function(prop1, prop2) {
	    return prop2[1] - prop1[1];
	});
	console.log('getBestQuestionToAsk', ordered);

	return ordered[0] || null;
}

function getFeature(idx) {
	return features.filter((e, i) => i === idx)[0];
}

function getFeatureByKey(key) {
	return features.filter((e, i) => e.k === key)[0];
}

function setFeatureAsked(key) {
	features.forEach((e, i) => {
		if(e.k === key) e.asked = true;
	});
}

function test() {
	console.log('bestQuestion', getBestQuestionToAsk());
	console.log('getFeature', getFeature(2));
	console.log('getFeatureByKey', getFeatureByKey('has_shell'));
	setFeatureAsked('has_shell');
	console.log('setFeatureAsked', features);
}
