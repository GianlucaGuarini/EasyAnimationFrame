var demo 				= document.getElementById('demo'),
	start 				= document.getElementById('start'),
	stop 				= document.getElementById('stop'),
	frameDelay 		 	= document.getElementById('frameDelay'),
	framerate 		 	= document.getElementById('framerate'),
	currentFrameDelay 	= document.getElementById('currentFrameDelay'),
	i 					= 0,
	animator;


var animate = function () {
	i ++;
	demo.innerHTML = i;
	demo.style.paddingLeft = i + 'px';
	framerate.innerHTML = animator.getFramerate();
};

window.onload = function () {
	// callback , DOM element to animate , FrameDelay

	animator = new EasyAnimationFrame( animate, demo , 150);
	//animator.startAnimation(); // autostart



	// Ui controllers
	stop.onclick = animator.clearAnimation;
	start.onclick = animator.startAnimation;


	currentFrameDelay.innerHTML = animator.getFrameDelay();


	frameDelay.onblur = function () {
		animator.updateFrameDelay(this.value);
		currentFrameDelay.innerHTML = animator.getFrameDelay();
	};
		
};
