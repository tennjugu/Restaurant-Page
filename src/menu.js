const menu = () => {
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

    const menuHead = document.createElement('h1')
    menuHead.classList.add('menu-head')
    menuHead.textContent = 'Bigg Bites Menu'

    const menuSection = document.createElement('div')
    menuSection.classList.add('menu-section')

    //soups section
    const soupContainer = document.createElement('div')
    soupContainer.classList.add('menuContainer')
    const soupDiv = document.createElement('div')
    soupDiv.classList.add('menuDiv')
    const soups = document.createElement('h3')
    soups.textContent = 'Soups'
    const soupList = document.createElement('ul')
    soupList.classList.add('soup')
    const soup1 = document.createElement('li')
    soup1.textContent = 'Eguisi----------#500'

    const soup2 = document.createElement('li')
    soup2.textContent = 'Ogbono----------#500'

    const soup3 = document.createElement('li')
    soup3.textContent = 'Oha----------#600'

    const soup4 = document.createElement('li')
    soup4.textContent = 'Vegetable--------#500'

    soupList.appendChild(soup1)
    soupList.appendChild(soup2)
    soupList.appendChild(soup3)
    soupList.appendChild(soup4)

    soupDiv.appendChild(soupList)

    soupContainer.appendChild(soups)
    soupContainer.appendChild(soupDiv)

    //condiments section
    const condimentContainer = document.createElement('div')
    condimentContainer.classList.add('menuContainer')
    const condimentDiv = document.createElement('div')
    condimentDiv.classList.add('menuDiv')
    const condiments = document.createElement('h3')
    condiments.textContent = 'Condiments'
    const condimentsList = document.createElement('ul')
    soupList.classList.add('condiment')
    const condiment1 = document.createElement('li')
    condiment1.textContent = 'Fish----------#400'

    const condiment2 = document.createElement('li')
    condiment2.textContent = 'Beef----------#800'

    const condiment3 = document.createElement('li')
    condiment3.textContent = 'Goat----------#1000'

    const condiment4 = document.createElement('li')
    condiment4.textContent = 'Chicken--------#1300'


    condimentsList.appendChild(condiment1)
    condimentsList.appendChild(condiment2)
    condimentsList.appendChild(condiment3)
    condimentsList.appendChild(condiment4)

    condimentDiv.appendChild(condimentsList)

    condimentContainer.appendChild(condiments)
    condimentContainer.appendChild(condimentDiv)


    //Stews section
    const stewContainer = document.createElement('div')
    stewContainer.classList.add('menuContainer')
    const stewDiv = document.createElement('div')
    stewDiv.classList.add('menuDiv')
    const stews = document.createElement('h3')
    stews.textContent = 'Stews'
    const stewsList = document.createElement('ul')
    stewsList.classList.add('stews')
    const stews1 = document.createElement('li')
    stews1.textContent = 'Tomato----------#400'

    const stews2 = document.createElement('li')
    stews2.textContent = 'Pepper----------#400'

    const stews3 = document.createElement('li')
    stews3.textContent = 'Beef----------#700'

    const stews4 = document.createElement('li')
    stews4.textContent = 'Banga--------#800'

    const stews5 = document.createElement('li')
    stews5.textContent = 'Goat----------#1000'

    stewsList.appendChild(stews1)
    stewsList.appendChild(stews2)
    stewsList.appendChild(stews3)
    stewsList.appendChild(stews4)
    stewsList.appendChild(stews5)

    stewDiv.appendChild(stewsList)

    stewContainer.appendChild(stews)
    stewContainer.appendChild(stewDiv)


    //Rice section
    const riceContainer = document.createElement('div')
    riceContainer.classList.add('menuContainer')
    const riceDiv = document.createElement('div')
    riceDiv.classList.add('menuDiv')
    const rice = document.createElement('h3')
    rice.textContent = 'Rice'
    const riceList = document.createElement('ul')
    riceList.classList.add('rice-type')
    const rice1 = document.createElement('li')
    rice1.textContent = 'Jollof----------#700'

    const rice2 = document.createElement('li')
    rice2.textContent = 'Fried----------#700'

    const rice3 = document.createElement('li')
    rice3.textContent = 'White----------#800'

    const rice4 = document.createElement('li')
    rice4.textContent = 'Coconut--------#800'

    riceList.appendChild(rice1)
    riceList.appendChild(rice2)
    riceList.appendChild(rice3)
    riceList.appendChild(rice4)

    riceDiv.appendChild(riceList)

    riceContainer.appendChild(rice)
    riceContainer.appendChild(riceDiv)

    menuSection.appendChild(soupContainer)
    menuSection.appendChild(condimentContainer)
    menuSection.appendChild(stewContainer)
    menuSection.appendChild(riceContainer)
    
    page.appendChild(menuHead)
    page.appendChild(menuSection)
    content.appendChild(page)

}

export {menu}