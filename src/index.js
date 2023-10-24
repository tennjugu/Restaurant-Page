import {load} from "./initializePage";
load()

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navItems")
const pageContent = document.querySelector(".page")
const navLinks = document.querySelectorAll(".nav-menu")
hamburger.addEventListener("click", () =>{
    pageContent.classList.toggle("active")
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


navLinks.forEach(menu => 
    menu.addEventListener("click", () =>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
        pageContent.classList.remove("active")
    })
)
