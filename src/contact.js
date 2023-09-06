
const contactUs = () => {
    const content = document.querySelector('#content')
    const page = document.createElement('div')
    page.classList.add('page')

    const contactHead = document.createElement('h1')
    contactHead.textContent = 'Contact Us'
    contactHead.classList.add('contactHead')

    // description paragraph
    const description = document.createElement('h4')
    description.textContent = `If you have any questions, special requests, or if you simply want to get in touch,
    call us at (234) 456-7890 during our business hours. Our friendly staff is ready to assist you with any inquiries
     you may have.Feel free to send us an email at info@BiggBitesrestaurant.com. We'll respond promptly to your messages.
    Alternatively, you can use the contact form below to send us a message. Just fill out the required fields, hit "Submit,"
      and your request will be duly noted. We value your feedback and look forward to hearing from you! `
    description.classList.add('note')

    const contactbottom = document.createElement('h4')
    contactbottom.textContent = `Thank you for considering Bigg Bites Restaurant as your dining destination. Your satisfaction is
    our top priority, and we're here to assist you in any way we can.`
    contactbottom.classList.add('note')
    // form element
    const form = document.createElement('form')
    form.action = '#'
    form.method = 'post'

    // Name input field
    const nameLabel = document.createElement('label')
    nameLabel.textContent = 'Name:'
    nameLabel.for = 'name'
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.id = 'name'
    nameInput.name = 'name'
    nameInput.required = true

    // Email input field
    const emailLabel = document.createElement('label')
    emailLabel.textContent = 'Email:'
    emailLabel.for = 'email'
    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.id = 'email'
    emailInput.name = 'email'
    emailInput.required = true

    // Message textarea
    const messageLabel = document.createElement('label')
    messageLabel.textContent = 'Message:'
    messageLabel.for = 'message'
    const messageTextarea = document.createElement('textarea')
    messageTextarea.id = 'message'
    messageTextarea.name = 'message'
    messageTextarea.rows = '4'
    messageTextarea.required = true

    // Submit button
    const submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.value = 'Submit'
    submitButton.textContent= 'Submit'

    form.appendChild(nameLabel)
    form.appendChild(nameInput)
    form.appendChild(emailLabel)
    form.appendChild(emailInput)
    form.appendChild(messageLabel)
    form.appendChild(messageTextarea)
    form.appendChild(submitButton)
    page.appendChild(contactHead)
    page.appendChild(description)
    page.appendChild(form)
    page.appendChild(contactbottom)

    content.appendChild(page)
}

export {contactUs}