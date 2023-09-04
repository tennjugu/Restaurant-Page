const homePage = () =>{
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

    const heading = document.createElement('h1')
    heading.textContent = 'Welcome to Bigg Bites Restaurant!'


    const grid = document.createElement('div')
    grid.classList.add  ('grid')


    const RestImage = document.createElement('img')
    RestImage.src = '../src/jason-leung-poI7DelFiVA-unsplash.jpg'
    RestImage.alt = 'restaurant image'


    const captionDiv = document.createElement('div')
    captionDiv.classList.add ('captionDiv')
    const caption = document.createElement('h3')
    caption.classList.add ( 'caption')
    caption.textContent = `At Bigg Bites Restaurant, we take pride in offering a remarkable dining experience that combines exquisite flavors, exceptional service, and an inviting atmosphere. Our expert chefs craft each dish with passion and creativity, using only the finest ingredients. Whether you're joining us for a special occasion or a casual meal, we promise an unforgettable culinary journey that will tantalize your taste buds and leave you craving for more.`

    page.appendChild(heading)
    grid.appendChild(RestImage)

    captionDiv.appendChild(caption)
    grid.appendChild(captionDiv)

    page.appendChild(grid)
    content.appendChild(page)
}

export {homePage} 