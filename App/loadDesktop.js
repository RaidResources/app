function preload(){
	const script = document.createElement('script');
	if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) script.src = 'App/mobile.js';
	else script.src = 'App/desktop.js';
	document.body.appendChild(script);
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0,0,0,0);
	//remove();
}