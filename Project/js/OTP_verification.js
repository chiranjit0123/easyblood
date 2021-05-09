function fillCode() {

	var box = document.getElementsByClassName("code");

	for (var i = 0; i < box.length; i++) {

		if(box[i].value == "") {

			x = event.which || event.keyCode;
			inputOTP(box[i]);

			if (x > 47 && x < 59) {
				box[i].value = String.fromCharCode(x);
			}

		break;
		}
	}
}

function inputOTP(box) {

	box.style.border = "4px solid rgb(226, 226, 226)";
	box.style.width = "50px";
	box.style.height = "42px";
}
