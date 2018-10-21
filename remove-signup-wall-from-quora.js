// ==UserScript==
// @name         Disable quora blocker
// @namespace    Quora
// @version      1
// @description  Disable quora blocker
// @author       Me
// @include      http*//de.quora.com/*
// @include      http*//www.quora.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var signupWall = Array.from(document.querySelectorAll("div")).filter(elem => {
        return elem.id.match(/\w+signup_wall_wrapper/);
    });
    signupWall.forEach(elem => elem.parentNode.removeChild(elem));
    document.body.classList.remove("signup_wall_prevent_scroll");
})();
