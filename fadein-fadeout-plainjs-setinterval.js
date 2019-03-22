    // fade in element
    const fadeIn = (el, ms = 400, displayStyle = 'block') => {
        el.style.opacity = 0;
        el.style.display = displayStyle;
        if (ms) {
          let opacity = 0;
          const timer = setInterval(() => {
            if (opacity >= 1) {
              clearInterval(timer);
              opacity = 1;
            }
            el.style.opacity = opacity += 50 / ms;
          }, 50);
        } else {
          el.style.opacity = 1;
        }
    };

    // fade out element
    const fadeOut = (el, ms = 400, displayStyle = 'none') => {
        if (ms) {
            let opacity = el.style.opacity;
            const timer = setInterval(() => {
                if (opacity <= 0) {
                    clearInterval(timer);
                    opacity = 0;
                }
                el.style.opacity = opacity -= 50 / ms;
            }, 50);
        }
        else {
            el.style.opacity = 0;
        }
        setTimeout(() => el.style.display = displayStyle, ms);
    };
