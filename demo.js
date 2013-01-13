var demo 				= document.getElementById('demo'),
	start 				= document.getElementById('start'),
	stop 				= document.getElementById('stop'),
	frameDelay 		 	= document.getElementById('frameDelay'),
	currentFrameDelay 	= document.getElementById('currentFrameDelay'),
	i 					= 0;

var animate = function () {
	i ++;
	demo.innerHTML = i;
	demo.style.paddingLeft = i + 'px';
};

window.onload = function () {
	// callback , DOM element to animate , FrameDelay
	var animator = new EasyAnimationFrame( animate, demo , 150);
	
	//animator.startAnimation(); // if you want start automatically the animation uncomment this line


	// Ui controllers
	stop.onclick = animator.clearAnimation;
	start.onclick = animator.startAnimation;

	currentFramerate.innerHTML = animator.getFrameDelay();

	frameDelay.onblur = function () {
		animator.updateFrameDelay(this.value);
		currentFrameDelay.innerHTML = animator.getFrameDelay();
	};
		
};
