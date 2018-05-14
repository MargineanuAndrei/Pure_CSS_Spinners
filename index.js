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

const updateTime = (k) => {
	if(k < 1) {
		clearInterval(interval);
		hideSpinner();
		changeHeader();
 		displayText();
	}
	element = document.getElementById("time");
	element.innerHTML = k;
}

k = 3;
updateTime(k);

const interval = setInterval(() => {
	k--;
	updateTime(k);
}, 1000);
