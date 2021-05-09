// to make the conformation box pop up when this function is called

function show_box(color) {

	document.getElementById("container-bg").style.visibility = "visible";
	document.getElementById("container-bg").style.backgroundColor = color;
	document.getElementById("container-bg").style.transition = "visibility 0s, backgroundColor 1s";
}

function hide_box(color) {

	document.getElementById("container-bg").style.backgroundColor = color;
	document.getElementById("container-bg").style.visibility = "hidden";
	document.getElementById("container-bg").style.transition = "visibility 0s 1.5s, backgroundColor 1s 1s";
}

function slideDown_dialog_box(boxName, color) {

	show_box(color);
	document.getElementById(boxName).style.transition = "transform 1s 0.2s, opacity 0.6s 0.2s";
	document.getElementById(boxName).style.opacity = "1";
	document.getElementById(boxName).style.transform = "translate(-50%,-50%)";
}

function slideUp_dialog_box(boxName, color) { 

	document.getElementById(boxName).style.transition = "transform 1s, opacity 0.6s";
	document.getElementById(boxName).style.opacity = "0";
	document.getElementById(boxName).style.transform = "translate(-50%,-80%)";
	hide_box(color);
}

function zoom_dialog_box(boxName) {

	document.getElementById(boxName).style.transform = "scale(1)";
	document.getElementById(boxName).style.boxShadow = "3px 3px 8px rgba(230,230,230,1), -1px -1px 4px rgba(230,230,230,1)";
	document.getElementById(boxName).style.opacity = "1";
}