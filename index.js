const displayText = () => {
	element = document.getElementById("text");
	element.style.display = "block";
}

setTimeout(function() {
	displayText();
}, 3000);