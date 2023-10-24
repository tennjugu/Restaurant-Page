import {load} from "./initializePage";
load()

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navItems")
const navLinks = document.querySelectorAll(".nav-menu")
const pageContent = document.querySelector(".page")
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    pageContent.classList.toggle("active")
})


navLinks.forEach((menu) => 
    menu.addEventListener("click", closeMenu
))

window.addEventListener("click", (event) => {
    if(
        !event.target.closest(".hamburger") &&
        !event.target.closest(".navItems")
    ) {
        closeMenu()
    }
})

function closeMenu() {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
    pageContent.classList.remove("active")
}