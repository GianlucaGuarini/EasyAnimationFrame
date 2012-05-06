/**
 *
 * Version:     0.1.0
 * Author:      Gianluca Guarini
 * Contact:     gianluca.guarini@gmail.com
 * Website:     http://www.gianlucaguarini.com/
 * Twitter:     @gianlucaguarini
 *
 * Copyright (c) 2012 Gianluca Guarini
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 **/

var EasyAnimationFrame = (function ( callback , elm , fps ) {

    // Private Vars
    var self    = this,
        fps     = fps !== undefined ? fps : 1000 / 60,
        stopped = false,
        RqAnFr,end,start;

    // Public Methods

    /*
    *
    * @startAnimation: this method allows you to start the the animation just when you need it
    *
    */
    this.startAnimation = function () {
        start   = Number(new Date) + fps;
        stopped = false;
        loop();

    };
    /*
    *
    * @clearAnimation: this method stops immediately the animation 
    *
    */
    this.clearAnimation = function () {
        cancelRequestAnimFrame ( RqAnFr );
        stopped = true;
    };
    /*
    *
    * @changeFramerate: this method can update the framerate on the fly
    *
    */
    this.updateFramerate = function ( framerate ) {
        fps = Number( framerate );
        start   = Number( new Date ) + fps;
    };
    /*
    *
    * @getFramerate: it could be used to get the current framerate
    *
    */
    this.getFramerate = function () {
        return fps;
    };
    // Private methods
    /*
    * this function loops on itself using the requestAnimationFrame API
    * the loop can not start twice if the animation is still running
    *
    */
    var loop = function () {
        if ( !stopped ) {
            RqAnFr = requestAnimFrame ( loop, elm )
            frameController( Number( new Date ) );
        }
    };
    /*
    * 
    * this function call the callback function respecting the framerate passed to Animator.js
    * 
    */
    var frameController = function ( currentTime ) {
        end = currentTime;
        var delta = start - end;
        if ( delta <= 0 ) {
            delta = fps;
            start = Number( new Date ) + fps;
            callback();
        } 
    };
    /* Paul Irish requestAnimationFrame Polyfill */
    var requestAnimFrame = (function(){
        return  window.requestAnimationFrame   || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
                return window.setTimeout(callback, fps);
        };
    })();
    var cancelRequestAnimFrame = ( function() {
        return window.cancelAnimationFrame          ||
            window.webkitCancelRequestAnimationFrame||
            window.mozCancelRequestAnimationFrame   ||
            window.oCancelRequestAnimationFrame     ||
            window.msCancelRequestAnimationFrame    ||
            clearTimeout
    })();

    return this;
});


