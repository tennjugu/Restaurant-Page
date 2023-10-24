
import  {homePage}  from "./home"
import  {menu}  from "./menu"
import  {contactUs}  from "./contact"
import  {booking}  from "./reservation"


const pageHead= () =>{
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

//setting up header and nav items
    const header = document.createElement('div')
    header.classList.add('header')

    const navBar = document.createElement('nav')

    const logo = document.createElement('img')
    logo.src = '../src/logo.png'
    logo.alt = 'Bigg Bites logo'

    const navItems = document.createElement('ul')
    navItems.classList.add('navItems')
    const navItem1 = document.createElement('li')
    navItem1.classList.add('nav-item')
    const homeBtn = document.createElement('a')
    homeBtn.href = '#home'
    homeBtn.classList.add('nav-menu')
    homeBtn.textContent = 'Home'
    navItem1.appendChild(homeBtn)

    const navItem2 = document.createElement('li')
    navItem2.classList.add('nav-item')
    const menuBtn = document.createElement('a')
    menuBtn.href = '#menu'
    menuBtn.classList.add('nav-menu')
    menuBtn.textContent = 'Menu'
    navItem2.appendChild(menuBtn)

    const navItem3 = document.createElement('li')
    navItem3.classList.add('nav-item')
    const contactBtn = document.createElement('a')
    contactBtn.href = '#contact'
    contactBtn.classList.add('nav-menu')
    contactBtn.textContent = 'Contact Us'
    navItem3.appendChild(contactBtn)

    const navItem4 = document.createElement('li')
    navItem4.classList.add('nav-item')
    const bookingBtn = document.createElement('a')
    bookingBtn.href = '#booking'
    bookingBtn.classList.add('nav-menu')
    bookingBtn.textContent = 'Booking'
    navItem4.appendChild(bookingBtn)

    const hamburger = document.createElement('div')
    hamburger.classList.add('hamburger')

    const bars = ['barOne', 'barTwo', 'barThree']
    for(let i = 0; i < bars.length; i++){
        const bar = document.createElement('span')
        bar.classList.add('bar')
        hamburger.appendChild(bar)
    }

    navItems.appendChild(navItem1)
    navItems.appendChild(navItem2)
    navItems.appendChild(navItem3)
    navItems.appendChild(navItem4)

    navBar.appendChild(logo)
    navBar.appendChild(navItems)
    navBar.appendChild(hamburger)

    header.appendChild(navBar)

    content.appendChild(header)

//setting up footer
    const footer = document.createElement('footer')
    const footPara = document.createElement('p')
    footPara.textContent = ' © 2023 Bigg Bites Restaurant. All rights reserved.'

    footer.appendChild(footPara)
    content.appendChild(footer)

//add eventlisteners
    homeBtn.addEventListener('click', function() {
        resetPage()
        homePage()  
    })

    menuBtn.addEventListener('click', function() {
        resetPage()
        menu()  
    })

    contactBtn.addEventListener('click', function() {
        resetPage()
        contactUs()  
    })

    bookingBtn.addEventListener('click', function() {
        resetPage()
        booking()  
    })

    function resetPage(){
        const content = document.querySelector('#content')
        const page = document.querySelector('.page')
        if(content.contains(page)){
            content.removeChild(page)
        }
    }   
}

export {pageHead}

