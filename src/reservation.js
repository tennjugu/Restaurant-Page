const booking = () =>{
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

    const bookheading = document.createElement("h1")
    bookheading.textContent = "Make a Reservation"

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
    const submitButton = document.createElement("input")
    submitButton.type = "submit"
    submitButton.value = "Reserve Now"


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
    page.appendChild(form)

    content.appendChild(page)

}

export {booking}