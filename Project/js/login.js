function changeBackground(element, color) {

	element.parentElement.style.backgroundColor = color;
	

}

// for login page
function addBorder(element) {

	changeBackground(element,"rgb(239, 244, 251)");
	element.parentElement.style.borderWidth = "3px";
	element.parentElement.style.padding = "4px 0px 4px 9px";
} 


function removeBorder(element) {

	changeBackground(element,"rgb(255,255,255)");
	element.parentElement.style.borderWidth = "2px";
	element.parentElement.style.padding = "5px 0px 5px 10px";
}

// to show and hide password
function showHidePassword(password, pwdIcon) {

	var pwdStatus = document.getElementById(password);
	//var pwdIcon = document.getElementById("pwdIcn");

	if (pwdStatus.type == "password") {

		pwdStatus.type = "text";
		pwdIcon.className = "fas fa-eye"; 
	}
	else {

		pwdStatus.type = "password";
		pwdIcon.className = "fas fa-eye-slash"; 
	}
}

// for copy right 
function loadYear() {

	var d = new Date();
	document.getElementById("year").innerHTML = d.getFullYear()+"-"+(d.getFullYear() + 1);
};


// for password change page 
function addBorderStyle(element) {

	changeBackground(element,"rgb(231, 239, 249)");
	element.parentElement.style.borderColor = "rgb(0, 112, 192)";
} 

function removeBorderStyle(element) {

	changeBackground(element,"rgb(255,255,255)");
	element.parentElement.style.borderColor = "rgb(0, 0, 0)";
}