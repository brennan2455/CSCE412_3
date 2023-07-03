function changeStyle(){
	var theme = document.getElementById("style1");
	if(theme.getAttribute('href') == "new_style.css"){
		theme.setAttribute('href', "new_style2.css");
	}else{
		theme.setAttribute('href', "new_style.css");
	}
}
function changeStyleNone(){
	var theme = document.getElementById("style1");
	theme.setAttribute('href', "");
}
function setDefaultStyle(){
	var theme = document.getElementById("style1");
	theme.setAttribute('href', "new_style.css");
}
window.onload = function(){
	setDefaultStyle();
}