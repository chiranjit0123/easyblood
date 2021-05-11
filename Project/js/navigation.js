function showHideDropDown(menuid, height) {

	//var status = document.getElementById("dropdown-menu");
	
	var menu = document.getElementById(menuid).style;

	if (menuid != "menu") {
		if (menu.height != "0px") {
			menu.height = "0px";
		}
		else {

			closeAllMenu();
			menu.height = height;
		} 
	}
	else {

		if (menu.height == "28px") {
			menu.height = "240px";
		}
		else {
			menu.height = "28px";
		}
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

function closeAllMenu() {

	var dropdown = document.getElementsByClassName("dropdown-menu");
	for (var i = 0; i < dropdown.length; i++) {

		dropdown[i].style.height = "0px";
	}
}