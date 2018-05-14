const displayText = () => {
	element = document.getElementById("text");
	element.style.display = "block";
}

const hideSpinner = () => {
	element = document.getElementById("spinner");
	element.style.display = "none";
}

const changeHeader = () => {
	element = document.getElementById("header");
	element.innerHTML = "Goodbye spinner, Hello text!";
}

setTimeout(function() {
	hideSpinner();
	changeHeader();
	displayText();
}, 3000);