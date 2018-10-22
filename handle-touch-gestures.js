/*  About: function to handle touch direction in browser
    Usage: custom event: custom_handleTouch:'direction' (direction = left, right, up, down)
    Example: $(document).on('custom_handleTouch:left', function() { // own code });
*/

function handleTouchGestures() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown, yDown = null;

    function handleTouchStart(event) {
        xDown = event.touches[0].clientX;
        yDown = event.touches[0].clientY;
    }

    function handleTouchMove(event) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = event.touches[0].clientX;
        var yUp = event.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff) ) {
            if (xDiff > 0) {
                // left swipe
                $(document).trigger('custom_handleTouch:left');
            } else {
                // right swipe
                $(document).trigger('custom_handleTouch:right');
            }
        } else {
            if (yDiff > 0) {
                // up swipe
                $(document).trigger('custom_handleTouch:up');
            } else {
                // down swipe
                $(document).trigger('custom_handleTouch:down');
            }
        }
        // reset values
        xDown = yDown = null;
    }
}
