const booking = () =>{
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

    const bookheading = document.createElement("h1")
    bookheading.textContent = "Make a Reservation"

    const bookPara = document.createElement("h3")
    bookPara.textContent = `Ready to experience the exquisite flavors of Bigg Bites Restaurant? 
    Booking a table is easy! Simply fill out the reservation form below, and we'll ensure your 
    dining experience is perfect. For any urgent reservation requests or if you need assistance, 
    you can also reach us by phone at (234) 456-7890 or send us an email at reservations@BiggBitesrestaurant.com.
     We're here to make your visit memorable and hassle-free.`
     bookPara.classList.add('note')

    // form element
    const form = document.createElement("form")
    form.action = "#"
    form.method = "post"

    // Name input field
    const nameLabel = document.createElement("label")
    nameLabel.textContent = "Name:"
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.id = "name"
    nameInput.name = "name"
    nameInput.required = true

    // Date input field
    const dateLabel = document.createElement("label")
    dateLabel.textContent = "Date:"
    const dateInput = document.createElement("input")
    dateInput.type = "date"
    dateInput.id = "date"
    dateInput.name = "date"
    dateInput.required = true

    // Time input field
    const timeLabel = document.createElement("label")
    timeLabel.textContent = "Time:"
    const timeInput = document.createElement("input")
    timeInput.type = "time"
    timeInput.id = "time"
    timeInput.name = "time"
    timeInput.required = true

    // Number of Guests input field
    const guestsLabel = document.createElement("label")
    guestsLabel.textContent = "Number of Guests:"
    const guestsInput = document.createElement("input")
    guestsInput.type = "number"
    guestsInput.id = "guests"
    guestsInput.name = "guests"
    guestsInput.required = true

    // Submit button
    const submitButton = document.createElement("button")
    submitButton.type = "submit"
    submitButton.textContent = "Reserve Now"

    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(dateLabel)
    form.appendChild(dateInput)
    form.appendChild(timeLabel)
    form.appendChild(timeInput)
    form.appendChild(guestsLabel)
    form.appendChild(guestsInput)
    form.appendChild(submitButton)
    page.appendChild(bookheading)
    page.appendChild(bookPara)
    page.appendChild(form)
    content.appendChild(page)
}

export {booking}