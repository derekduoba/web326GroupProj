$(function () {
	$(document).find("Signout").bind('click', function (event){
		eraseCookie(active);
		 window.open('http://localhost:3000/');
		 
	}
	
	function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function eraseCookie(name) {
	createCookie(name,"",-1);
	}
})

