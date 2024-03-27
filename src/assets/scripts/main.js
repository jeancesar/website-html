"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector(".card-header-icon");
    button.addEventListener("click", darkMode);
});

function darkMode(event) {
    const html = document.querySelector("html");

    event.target.classList.toggle("fa-regular")
    event.target.classList.toggle("fa-solid")
    html.classList.toggle("theme-dark")
    html.classList.toggle("theme-light")
}