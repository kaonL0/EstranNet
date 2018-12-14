function createQuestion(question) {
	let div = document.createElement('div');
	div.classList.add('questionText');
	div.innerHTML = question;
	div.style.setProperty('--en-background-color-question-text', parameters.enbackgroundcolorquestiontext);
	return div;
}

function createAnswer(answer){
	let div = document.createElement('div');
	div.classList.add('answer');
	div.style.setProperty('--en-background-color-answer', parameters.enbackgroundcoloranswer);
	div.style.setProperty('--en-background-color-button-down', parameters.enbackgroundcolorbuttondown);

	div.value = answer;
	div.addEventListener('mousedown', mouseDown);
	div.addEventListener('mouseup', mouseUp);

	let divText = document.createElement('div');
	divText.classList.add('answerText');
	divText.innerHTML = answer;
	divText.style.setProperty('--en-background-color-answer-text', parameters.enbackgroundcoloranswertext);
	divText.value = answer;
	divText.parentNode = div;
	div.appendChild(divText);

	return div;
}

function displayQuestion(question, responses) {
	var questionDOM = document.getElementById("question");
	while (questionDOM.firstChild) {
	    questionDOM.removeChild(questionDOM.firstChild);
	}
	questionDOM.appendChild(createQuestion(question));

	var answersDOM = document.getElementById("answers");
	while (answersDOM.firstChild) {
	    answersDOM.removeChild(answersDOM.firstChild);
	}

	responses.forEach(r => {
		response = createAnswer(r);
		response.addEventListener('click', choice);
		document.getElementById('answers').appendChild(response);
	});
}

function mouseUp(e) {
	console.log(e);
	if (e.target.classList.contains('answerText')) {
		e.target.parentNode.classList.remove('mousedown');
	} else {
		e.target.classList.remove('mousedown');
	}
}

function mouseDown(e) {
	if (e.target.classList.contains('answerText')) {
		e.target.parentNode.classList.add('mousedown');
	} else {
		e.target.classList.add('mousedown');
	}
}

function displaySolution(solutionText, imgPath) {
	var questionDOM = document.getElementById("question");
	while (questionDOM.firstChild) {
	    questionDOM.removeChild(questionDOM.firstChild);
	}
	questionDOM.appendChild(createQuestion(solutionText));

	var answersDOM = document.getElementById("answers");
	while (answersDOM.firstChild) {
	    answersDOM.removeChild(answersDOM.firstChild);
	}

	let div = document.createElement('div');
	div.classList.add('answer');
	div.style.setProperty('--en-background-color-answer', parameters.enbackgroundcoloranswer);

	let img = document.createElement('img');
	img.src = imgPath;
	div.appendChild(img);
	document.getElementById('answers').appendChild(div);

	document.getElementById('home').style.display = 'block';
}


function getImageName(name) {
	return name
		.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
		.toLowerCase()
		.replace(/ /g,"_")
		+ '.jpeg';
}

function test() {
	console.log('getImageName', getImageName('Laitue de mer'));
}