var supportsTouch = false;
if ('ontouchstart' in window) {
    //iOS & android
    supportsTouch = true;
} else if(window.navigator.msPointerEnabled) {
    // Windows
    // To test for touch capable hardware 
    if(navigator.msMaxTouchPoints) {
        supportsTouch = true;
    }
}

// Créer un div de question
function createQuestion(question) {
	let div = document.createElement('div');
	div.classList.add('questionText');
	div.innerHTML = question;
	div.style.setProperty('--en-background-color-question-text', parameters.enbackgroundcolorquestiontext);

	return div;
}

// Créer un div de réponse
function createAnswer(answer){
	let div = document.createElement('div');
	div.classList.add('answer');
	div.style.setProperty('--en-background-color-answer', parameters.enbackgroundcoloranswer);
	div.style.setProperty('--en-background-color-button-down', parameters.enbackgroundcolorbuttondown);
	div.classList.add('unselect');
	div.value = answer;
	if (!supportsTouch) {
		div.addEventListener('mouseup', mouseUp);
		div.addEventListener('mousedown', mouseDown);
	} else {
		div.addEventListener('touchstart', mouseUp);
		div.addEventListener('touchend', mouseDown);
	}

	let divText = document.createElement('div');
	divText.classList.add('answerText');
	divText.innerHTML = answer;
	divText.style.setProperty('--en-background-color-answer-text', parameters.enbackgroundcoloranswertext);
	divText.value = answer;
	divText.parentNode = div;
	divText.classList.add('unselect');
	div.appendChild(divText);

	return div;
}

// Affiche une question
function displayQuestion(question, responses) {
	let questionDOM = document.getElementById("question");
	while (questionDOM.firstChild) {
	    questionDOM.removeChild(questionDOM.firstChild);
	}
	questionDOM.appendChild(createQuestion(question));

	let answersDOM = document.getElementById("answers");
	while (answersDOM.firstChild) {
	    answersDOM.removeChild(answersDOM.firstChild);
	}

	responses.forEach(r => {
		response = createAnswer(r);
		response.addEventListener('mouseup', choice);
		document.getElementById('answers').appendChild(response);
	});
}

let isTouchStartMouseDown = false;
function mouseUp(e) {
	if (isTouchStartMouseDown) {	
		if (e.target.classList.contains('answerText')) {
			e.target.parentNode.classList.remove('mousedown');
		} else {
			e.target.classList.remove('mousedown');
		}
		isTouchStartMouseDown = false;
	}	
}

function mouseDown(e) {
	if (!isTouchStartMouseDown) {	
		if (e.target.classList.contains('answerText')) {
			e.target.parentNode.classList.add('mousedown');
		} else {
			e.target.classList.add('mousedown');
		}
		isTouchStartMouseDown = true;
	}
}

// Affiche la solution
// Pas très propre, mais bon...
function displaySolution(solutionText, imgPath, suggestion='') {
	let questionDOM = document.getElementById("question");
	while (questionDOM.firstChild) {
	    questionDOM.removeChild(questionDOM.firstChild);
	}
	questionDOM.appendChild(createQuestion(solutionText));

	let answersDOM = document.getElementById("answers");
	while (answersDOM.firstChild) {
	    answersDOM.removeChild(answersDOM.firstChild);
	}

	let div = document.createElement('div');
	div.style.setProperty('--en-background-color-answer', parameters.enbackgroundcolor);

	let img = document.createElement('img');
	img.src = imgPath;
	img.classList.add('unselect')
	div.appendChild(img);
	document.getElementById('answers').appendChild(div);

	let span = document.createElement('span');
	span.innerHTML = suggestion;
	div.appendChild(span);

	document.getElementById('home').style.display = 'block';
}

// Construit un chemin d'image à partir du nom de l'espece
function getImageName(name) {
	return name
		.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/ /g,"_")
		+ '.jpeg';
}

// tests
function test() {
	console.log('getImageName', getImageName('Laitue de mer'));
}