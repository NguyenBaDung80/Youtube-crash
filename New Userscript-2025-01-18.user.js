// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  hello.
// @author       Nguyen Ba Dung
// @match        https://www.youtube.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    while (true) {
    setTimeout(() => {
    alert("Youtube is crash");
    alert("HaHaHa")
       }, 1000);
    }
})();
