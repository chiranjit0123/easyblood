var inputbox = document.getElementsByTagName('input');

var slide = document.getElementsByClassName("slides");
var button = document.getElementsByClassName("control-buttons");
var submit = document.getElementById("register-button");
var slideindex = document.getElementById("slideCount");
var title = document.getElementsByClassName("section-head");

var currentSlideIndex = 0;

// styling input box on focus and blur
for (var i = 0; i < inputbox.length; i++) {
	inputbox[i].addEventListener("focus", function () {
		this.parentElement.style.padding = "3px 9px";
		this.parentElement.style.borderWidth = "3px";

		this.parentElement.style.backgroundColor = "rgba(180,221,255,0.5)";
		this.parentElement.style.borderColor = "#0097FC";
	});

	inputbox[i].addEventListener("blur", function () {
		this.parentElement.style.padding = "4px 10px";
		this.parentElement.style.borderWidth = "2px";

		this.parentElement.style.backgroundColor = "transparent";
		this.parentElement.style.borderColor = "darkblue";
	});
}

function nextSlide() {
	title[currentSlideIndex].classList.remove("active-head");
	slide[currentSlideIndex].classList.replace("active-slide","slideLeft");
	if (currentSlideIndex < 3) {
		currentSlideIndex++;
	}
	title[currentSlideIndex].classList.add("active-head");
	slideindex.innerHTML = currentSlideIndex + 1;

	slide[currentSlideIndex].classList.remove("slideRight");
	setTimeout(slide[currentSlideIndex].classList.add("active-slide"),100);
}

function prevSlide() {
	title[currentSlideIndex].classList.remove("active-head");
	slide[currentSlideIndex].classList.replace("active-slide","slideRight");
	if (currentSlideIndex > 0) {
		currentSlideIndex--;
	}
	title[currentSlideIndex].classList.add("active-head");
	slideindex.innerHTML = currentSlideIndex + 1;

	setTimeout(slide[currentSlideIndex].classList.replace("slideLeft","active-slide"),100);
}

// moving slides on click of acitive button
for (var i = 0; i < button.length; i++) {
	button[i].addEventListener("click", function() {
		if (this.classList.contains("active-button")) {
			if (this.classList.contains("next")) {
				nextSlide();
				button[0].classList.add("active-button");

				if (currentSlideIndex == 3) {
					this.style.display = "none";
					submit.style.display = "block";
				}
			}
			else {
				prevSlide();
				if (currentSlideIndex == 0) {
					button[0].classList.remove("active-button");
				}
				if (currentSlideIndex < 3) {
					button[1].style.display = "block";
					submit.style.display = "none";
				}
			}
		}
	});
}

// to enable and disable submit button of form to create account based on user acceptance of terms and conditions
document.getElementById("check").addEventListener("click",function() {
	console.log("checkbox");
	console.log(this.checked);
	if (this.checked == true) {
		submit.classList.add("active-button");
		submit.disabled = false;
		console.log("checkbox checked");
	}
	else {
		submit.classList.remove("active-button");
		submit.disabled = true;
	}
});
