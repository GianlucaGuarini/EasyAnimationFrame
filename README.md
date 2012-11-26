Unfortunatelly the new RequestAnimationFrame API does not allow us to set the framerate, but using EasyAnimationFrame.js you can run html5 canvas or html animations having the complete control of the framerate. Using this class you get a complete cross browser support thanks to the [Paul Irish polyfill] (http://paulirish.com/2011/requestanimationframe-for-smart-animating/) 

----------
# DEMO
[codepen.io] (http://codepen.io/GianlucaGuarini/full/GlEzv)


----------
# USAGE
You must create an instance of the script setting the loop function, 
the element you would like to animate (this could be also null),
and then the initial framerate

<pre>
  var animator = new EasyAnimationFrame(loop_Function, html_Element, initial_framerate);
  animator.startAnimation();
</pre>

----------
#API (public methods)

- <code>startAnimation</code> : it starts the animation with the inital frame rate.
- <code>clearAnimation</code> : it stops immediately the animation.
- <code>getFramerate</code> : this returns the current frame rate
- <code>updateFramerate</code>: it updates the framerate and could be used also on the fly