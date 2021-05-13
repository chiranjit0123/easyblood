function showHideDropDown(menuid, height) {

	//var status = document.getElementById("dropdown-menu");
	
	var menu = document.getElementById(menuid).style;

		if (menu.height == height) {
			menu.height = "45px";
		}
		else {

			menu.height = height;
	}
	/*
	if (status.style.display == "block") {

		status.style.display = "none";
		status.style.height = "0px";
	}
	else {

		status.style.display = "block";
		status.style.height = "117px";
	}
	*/
}

function extendMenu() {

	var menu = document.getElementById("top-navbar").style;

		if (menu.height == "494px") {
			menu.height = "630px";
		}
}

function contractMenu() {

	var menu = document.getElementById("top-navbar").style;

		if (menu.height == "630px") {
			menu.height = "494px";
		}
}

function closeAllMenu() {

	var dropdown = document.getElementsByClassName("dropdown-menu");
	for (var i = 0; i < dropdown.length; i++) {

		dropdown[i].style.height = "0px";
	}
}