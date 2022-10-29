let headingE1 = document.querySelector(".heading");
let mainbutton = document.querySelector(".btn");
let popupcontainerE1 = document.querySelector(".popup-container");
let closebtnE1 = document.querySelector(".close-icon");

mainbutton.addEventListener("click", () => {
    headingE1.classList.add("active");
    popupcontainerE1.classList.remove("active");
});

closebtnE1.addEventListener("click", () => {      // Just the reverse process,so that we get back our page
    headingE1.classList.remove("active");
    popupcontainerE1.classList.add("active");
});