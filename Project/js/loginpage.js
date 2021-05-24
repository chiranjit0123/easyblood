var password = document.getElementsByClassName('pwdIcon');

for (var i = 0; i < password.length; i++) {
	password[i].addEventListener("click", function() {
		if (this.previousElementSibling.type != "text") {
			this.previousElementSibling.type = "text";
		    this.classList.replace("fa-eye-slash","fa-eye");
	    }
	    else {
	    	this.previousElementSibling.type = "password";
		    this.classList.replace("fa-eye","fa-eye-slash"); 
	    }
	});
}

var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear()+"-"+(d.getFullYear() + 1);