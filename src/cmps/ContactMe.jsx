import { showSuccessMsg } from '../services/event-bus.service'

export function ContactMe() {
  //send me email from Formspree
  async function handleSubmit(ev) {
    ev.preventDefault()

    const form = ev.target
    const formData = new FormData(form)

    const response = await fetch('https://formspree.io/f/xlggddyq', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json', // Tells Formspree: "Don't redirect me"
      },
    })

    if (response.ok) {
      form.reset()
      showSuccessMsg('Message has been sent!')
    }
  }

  return (
    <form className="contact-me" onSubmit={handleSubmit}>
      <h2>Send me a message!</h2>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>

      <button className="btn submit-btn" type="submit">
        Send
      </button>
    </form>
  )
}
