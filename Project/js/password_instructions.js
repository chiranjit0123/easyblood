
// to validate if password contains uppercase letter
function containsUpperCaseLetter(password) {

	var pattern = new RegExp("[A-Z]");
	return pattern.test(password);
}

// to validate if password contains lowercase letter
function containsLowerCaseLetter(password) {

	var pattern = new RegExp("[a-z]");
	return pattern.test(password);
}

// to validate if password contains numeric value
function containsNumber(password) {

	var pattern = new RegExp("[0-9]");
	return pattern.test(password);
}

function validatePassword(password) {

	// password length validation
	if (password.value.length >= 8) {

		document.getElementById("instruction-1").style.color = "rgb(9, 221, 150)";
	}
	else {

		document.getElementById("instruction-1").style.color = "rgb(233, 21, 87)";
	}

	// password contains atleast one upper case letter validation
	if (containsUpperCaseLetter(password.value)) {

		document.getElementById("instruction-2").style.color = "rgb(9, 221, 150)";
	}
	else {

		document.getElementById("instruction-2").style.color = "rgb(233, 21, 87)";
	}

	// password contains atleast one lower case letter validation
	if (containsLowerCaseLetter(password.value)) {

		document.getElementById("instruction-3").style.color = "rgb(9, 221, 150)";
	}
	else {

		document.getElementById("instruction-3").style.color = "rgb(233, 21, 87)";
	}

	// validating if passsword contains atleast one numeric value
	if (containsNumber(password.value)) {

		document.getElementById("instruction-4").style.color = "rgb(9, 221, 150)";
	}
	else {

		document.getElementById("instruction-4").style.color = "rgb(233, 21, 87)";
	}
}

var new_password = document.getElementById("password-2");
function checkPasswordMatch(password) {

	if ((new_password.value).match(password.value/i)) {

		password.parentElement.style.borderColor = "red";
	}
	else {

		passsword.parentElement.style.borderColor = "rgb(231, 239, 249)";
	}
}