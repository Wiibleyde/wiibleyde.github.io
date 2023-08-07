const textParam = new URLSearchParams("text");

function processTextAnimation(element, unanimate = false) {
	const targetElement = document.querySelector(element);
	const text = targetElement.innerText;
	const charArray = Array.from(text);

	const newText = charArray
		.map(char => {
			if (char === ' ') {
				return '&nbsp;';
			}
			return `<div>${char}</div>`;
		})
		.join('');

	targetElement.innerHTML = newText;

	const targetsDiv = targetElement.querySelectorAll('div');
	const animationConfig = {
		opacity: unanimate ? 0 : 1,
		y: unanimate ? 90 : 0,
		ease: Elastic.easeOut.config(1.2, 0.5)
	};

	TweenMax.staggerFromTo(targetsDiv, 2, animationConfig, { opacity: 1 - animationConfig.opacity, y: 90 - animationConfig.y, ease: Elastic.easeOut.config(1.2, 0.5) }, 0.03);
}

function loopAnimation() {
	const textElement = "#text-anim";
	processTextAnimation(textElement);
	setTimeout(() => {
		processTextAnimation(textElement, true);
		setTimeout(loopAnimation, 3000);
	}, 3000);
}

function getUrlParam(paramName) {
	const params = new URLSearchParams(location.search);
	return params.get(paramName);
}

const text = getUrlParam("text");
if (text) {
	document.querySelector("#text-anim").innerText = text;
}

document.addEventListener("DOMContentLoaded", () => {
	loopAnimation();
});