What is EasyAnimationFrame for?
- To make easy javascript loops ( optimized for animations ) using the new RequestAnimationFrame API
- To control and get precisely the framerate of your loops
- To stop and restart any kind of loop without using any javascript timer ( setTimeout or setInterval )
- Thanks to the <a href="http://paulirish.com/2011/requestanimationframe-for-smart-animating/">Paul Irish polyfill</a> it is supported also by the old browsers ( IE7+ )

----------
# DEMO
[codepen.io] (http://codepen.io/GianlucaGuarini/full/GlEzv)


----------
# USAGE
You must create a new instance of the EAF class setting the loop function, 
the element you would like to animate (this could be also null),
and then the initial framedelay 
# OPTIONS
<code>loop_Function</code> : the function you want to loop
<code>html_Element</code> : { optional, by default is null } the DOM element you are manipulating ,generally it could be an HTML5 canvas
<code>initial_frame_delay</code> : { optional int, by default is 0} the time expressed in ms EAF should wait each frame before triggering the loop function )
<pre>
  var animator = new EAF(loop_Function, html_Element, initial_frame_delay); 
  animator.startAnimation();
</pre>

----------
#API (public methods)

- <code>startAnimation</code> : it starts the animation with the inital frame delay ( with frame delay equal to 0 you can run your animation to the maximum browser speet).
- <code>clearAnimation</code> : it stops immediately the animation.
- <code>getFrameDelay</code> : this returns the current frame delay
- <code>updateFrameDelay</code>: it updates the frame delay and could be used also on the fly
- <code>getFramerate</code>: It returns the framerate of the current animation
