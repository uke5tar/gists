// fade in element
const fadeIn = (el, smooth = true, displayStyle = 'block') => {
    el.style.opacity = 0;
    el.style.display = displayStyle;
    if (smooth) {
        let opacity = 0;
        let request;

        const animation = () => {
        el.style.opacity = opacity += 0.04;
        if (opacity >= 1) {
            opacity = 1;
            cancelAnimationFrame(request);
            }
        };

        const rAf = () => {
            request = requestAnimationFrame(rAf);
            animation();
        };
        rAf();

    } else {
        el.style.opacity = 1;
    }
};

// fade out element
const fadeOut = (el, smooth = true, displayStyle = 'none') => {
    if (smooth) {
        let opacity = el.style.opacity;
        let request;

        const animation = () => {
            el.style.opacity = opacity -= 0.04;
            if (opacity <= 0) {
                opacity = 0;
                cancelAnimationFrame(request);
                el.style.display = displayStyle
            }
        };

        const rAf = () => {
                request = requestAnimationFrame(rAf);
                animation();
        };
        rAf();

    } else {
        el.style.opacity = 0;
    }
};
