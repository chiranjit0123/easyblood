<!DOCTYPE html>
<html>
<head>
	<title>Easy Blood - Login</title>
	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="../css/login.css">

</head>
<body onload="loadYear()">
<div id="login-bg">
	<div class="circle" id="circle-1">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-2">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-3">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-4">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-5">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-6">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-7">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-8">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-9">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-10">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-11">
		<div class="inner-circle"></div>
	</div>
	<div class="circle" id="circle-12">
		<div class="inner-circle"></div>
	</div>

	<div id="container">
		<div id="image-container">
			<img src="#" alt="logo" id="logo"> <br>
			<img src="../image/hello_blood_drop.jpg" id="login-image">
		</div>

		<div id="form-container">

			<h1>Welcome Back</h1>
			<form action="" method="">
				<span>Select Account Type</span> <br>

				<input type="radio" name="account-type" class="account" id="user" checked="true"> 
				<label for="user"> Member </label>

				<input type="radio" name="account-type" class="account" id="volunteer"> 
				<label for="volunteer"> Volunteer </label>
				<br>

				<span>Email ID</span>
				<div class="login-info" >
					<i class="fas fa-at"></i>
					<input type="email" name="email" onfocus="addBorder(this)" onblur="removeBorder(this)" onmouseover="changeBackground(this,'rgb(239, 244, 251)')" onmouseout="changeBackground(this,'rgb(255,255,255)')">
				</div>

				<span>Password</span>
				<div class="login-info">
					<i class="fas fa-unlock-alt"></i>
					<input type="password" name="password" onfocus="addBorder(this)" onblur="removeBorder(this)" onmouseover="changeBackground(this,'rgb(239, 244, 251)')" onmouseout="changeBackground(this,'rgb(255,255,255)')" id="password" style="margin-left:5px;">
					<i class="fas fa-eye-slash" onclick="showHidePassword('password', this)" id="pwdIcn"></i>	
				</div>

				<span id="forgot-pwd">
					<a href="#">Forgot Password ?</a>
				</span>

				<input type="submit" name="submit" value="Login">
			</form>

		</div>

		<div id="create-account">
			Don't have an account yet ? <a href="#">Create account </a>
		</div>
	</div>

	<div id="footer">
		<i class="far fa-copyright"></i> Copyright | <span id="year"></span> | <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>
	</div>	
</div>

<script src="../js/login.js"></script>
</body>
</html>
