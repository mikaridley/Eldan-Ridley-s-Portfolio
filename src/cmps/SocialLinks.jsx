import githubIcon from '../assets/imgs/github.svg'
import linkedinIcon from '../assets/imgs/linkedin.svg'
import mailIcon from '../assets/imgs/mail.svg'
import whatsupIcon from '../assets/imgs/whatsup.svg'
import { showSuccessMsg } from '../services/event-bus.service'
import { Tooltip } from '@mui/material'

export function SocialLinks() {
  const email = 'mika.ridley26@gmail.com'
  const phoneNumber = '545657297'

  async function handleCopy(ev) {
    // Stops the email client from opening
    ev.preventDefault()

    try {
      await navigator.clipboard.writeText(email)
      console.log('Email copied to clipboard!')
      showSuccessMsg('Email had been copied!')
    } catch (err) {
      console.error('Unable to copy', err)
    }
  }

  return (
    <section className="social-links">
      <Tooltip title="Github">
        <a
          className="icon github"
          href="https://github.com/mikaridley"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} />
        </a>
      </Tooltip>

      <Tooltip title="Linkedin">
        <a
          className="icon linkedin"
          href="https://www.linkedin.com/in/mikaridley/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} />
        </a>
      </Tooltip>

      <Tooltip title="Copy mail">
        <a className="icon mail" href={`mailto:${email}`} onClick={handleCopy}>
          <img src={mailIcon} />
        </a>
      </Tooltip>

      <Tooltip title="Send WhatsApp">
        <a
          className="icon whatsup"
          href={`https://wa.me/972${phoneNumber}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsupIcon} />
        </a>
      </Tooltip>
    </section>
  )
}
