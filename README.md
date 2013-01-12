Unfortunatelly the new RequestAnimationFrame API does not allow us to control the framerate,
but using EasyAnimationFrame.js you can run html5 canvas or html animations having the complete
control of the framerate setting the delay between each frame. Using this script you get a complete cross browser support 
thanks to the [Paul Irish polyfill] (http://paulirish.com/2011/requestanimationframe-for-smart-animating/) 

----------
# DEMO
[codepen.io] (http://codepen.io/GianlucaGuarini/full/GlEzv)


----------
# USAGE
You must create an instance of the script setting the loop function, 
the element you would like to animate (this could be also null),
and then the initial framerate

<pre>
  var animator = new EasyAnimationFrame(loop_Function, html_Element, initial_frame_delay);
  animator.startAnimation();
</pre>

----------
#API (public methods)

- <code>startAnimation</code> : it starts the animation with the inital frame delay ( with frame delay equal to 0 you can run your animation to the maximum browser speet).
- <code>clearAnimation</code> : it stops immediately the animation.
- <code>getFrameDelay</code> : this returns the current frame delay
- <code>updateFrameDelay</code>: it updates the frame delay and could be used also on the fly
