"use strict";

let body = document.body;
let alex = document.querySelector("#music");

setInterval(() => {
    let random1 = Math.round(Math.random() * 256);
    let random2 = Math.round(Math.random() * 256);
    let random3 = Math.round(Math.random() * 256);

    body.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
}, 400);

body.addEventListener("click", () => {
    if (alex.paused) {
        alex.play();
    }
    console.log("Hallo");
});