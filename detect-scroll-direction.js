// Detect scroll direction

(function scrollPosition() {
    "use strict"

    // get last scroll position
    let lastY = window.scrollY;
    let running = false;

    function getScrollPosition() {
        // run rAF only if que is empty and no other rAf is currently running
    	if(!running) {
    		requestAnimationFrame(updateScrollPosition);
    	}
    	running = true;
    }

    function updateScrollPosition() {
        // get current scroll position
        let currY = window.scrollY;
        // determine scroll direction
        let y = (currY > lastY) ? 'down' : ((currY === lastY) ? 'none' : 'up');
        // do something here…
        console.log(y);
        // update last scroll position to current position
        lastY = currY;
        // reset running
        running = false;
    }

    window.addEventListener('scroll', getScrollPosition);

})();
