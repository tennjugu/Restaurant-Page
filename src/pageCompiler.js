import { homePage } from "./home"

const pageStart = () =>{
    homePage()
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

    // setting up header and nav items

    const header = document.createElement('div')
    header.classList.add('header')

    const navBar = document.createElement('nav')

    const logo = document.createElement('img')
    logo.src = '../src/logo.png'
    logo.alt = 'Bigg Bites logo'

    const navItems = document.createElement('ul')
    const navItem1 = document.createElement('li')
    const homeBtn = document.createElement('a')
    homeBtn.href = '#home'
    homeBtn.innerText = 'Home'
    navItem1.appendChild(homeBtn)

    const navItem2 = document.createElement('li')
    const menuBtn = document.createElement('a')
    menuBtn.href = '#menu'
    menuBtn.innerText = 'Menu'
    navItem2.appendChild(menuBtn)

    const navItem3 = document.createElement('li')
    const contactBtn = document.createElement('a')
    contactBtn.href = '#contact'
    contactBtn.innerText = 'Contact Us'
    navItem3.appendChild(contactBtn)

    const navItem4 = document.createElement('li')
    const bookingBtn = document.createElement('a')
    bookingBtn.href = '#booking'
    bookingBtn.innerText = 'Booking'
    navItem4.appendChild(bookingBtn)


    navItems.appendChild(navItem1)
    navItems.appendChild(navItem2)
    navItems.appendChild(navItem3)
    navItems.appendChild(navItem4)

    navBar.appendChild(logo)
    navBar.appendChild(navItems)

    header.appendChild(navBar)
    
    // setting up footer
    
    const footer = document.createElement('footer')
    const footPara = document.createElement('p')
    footPara.innerText = '>&copy; 2023 Bigg Bites Restaurant. All rights reserved.'
    footer.appendChild(footPara)
    
    page.appendChild(header)
    page.appendChild(footer)

    content.appendChild(page)
}

export {pageNav}