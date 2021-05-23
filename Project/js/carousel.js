var slide = document.getElementsByClassName("carousel-slide");
var dot = document.getElementsByClassName("carousel-dot");
var index = 0, time;

function nextSlide() {
	for (var i = 0; i < slide.length; i++) {
		slide[i].style.display = "block";
		if (i != index) {
			slide[i].style.left = "100%";
		}
	}
	setTimeout(function() {
		slide[index].style.left = "-100%";
		dot[index].classList.remove("active");
		if (index < 2) {
			index++;
		}
		else {
			index = 0;
		}
		slide[index].style.left = "0%";
		dot[index].classList.add("active");
		}, 1);

	if (index-1 >= 0) {
		slide[index-1].style.display = "none";
	}
	else {
		slide[2].style.display = "none";
	}
	
}


function prevSlide() {
	for (var i = 0; i < slide.length; i++) {
		slide[i].style.display = "block";
		if (i != index) {
			slide[i].style.left = "-100%";
		}
	}
	setTimeout(function() {
		slide[index].style.left = "100%";
		dot[index].classList.remove("active");
		if (index > 0) {
			index--;
		}
		else {
			index = 2;
		}
		slide[index].style.left = "0%";
		dot[index].classList.add("active");
		}, 1);
	
	if (index+1 <= 2) {
		slide[index+1].style.display = "none";
	}
	else {
		slide[0].style.display = "none";
	}
}

/*
function showSlide(slideIndex) {
	index = slideIndex;
	checkIndex(); 
	for (var i = 0; i < slide.length; i++) {
			slide[i].style.display = "none";
			dot[i].classList.remove("active");
	}

	slide[index].style.display = "block";
	dot[index].style.display = "block";
	dot[index].classList.add("active");
}
*/

function startSlide() {
	time = setInterval(nextSlide,3500);
}

function stopSlide() {
	clearInterval(time);
}

startSlide();