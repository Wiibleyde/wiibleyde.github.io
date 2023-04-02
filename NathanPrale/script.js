document.addEventListener("DOMContentLoaded", function(event) {
	loopAnimation();
});
  
function animation_text_1 (element){
	var newText = "";
	var theText = document.querySelector(element);
	for (i = 0; i < theText.innerText.length; i++) {
		newText += "<div>";
		if (theText.innerText[i] == " "){newText += "&nbsp;"}
		else {newText += theText.innerText[i];}
		newText += "</div>";
	}
	theText.innerHTML = newText;
	var targetsDiv = document.querySelectorAll(element+" div");
	TweenMax.staggerFromTo(targetsDiv, 2, {opacity:0, y:90, ease: Elastic.easeOut.config(1.2, 0.5)}, {opacity:1, y:0, ease: Elastic.easeOut.config(1.2, 0.5)}, 0.03);
}

function unanimation_text_1 (element){
	var newText = "";
	var theText = document.querySelector(element);
	for (i = 0; i < theText.innerText.length; i++) {
		newText += "<div>";
		if (theText.innerText[i] == " "){newText += "&nbsp;"}
		else {newText += theText.innerText[i];}
		newText += "</div>";
	}
	theText.innerHTML = newText;
	var targetsDiv = document.querySelectorAll(element+" div");
	TweenMax.staggerFromTo(targetsDiv, 2, {opacity:1, y:0, ease: Elastic.easeOut.config(1.2, 0.5)}, {opacity:0, y:90, ease: Elastic.easeOut.config(1.2, 0.5)}, 0.03);
}

function loopAnimation(){
	animation_text_1("#text-anim");
	setTimeout(
		function(){
			unanimation_text_1("#text-anim");
		}, 2000);
	setTimeout(
		function(){
			loopAnimation();
		}, 4000);
}