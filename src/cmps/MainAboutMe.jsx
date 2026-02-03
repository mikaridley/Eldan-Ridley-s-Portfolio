import mikaAvatar from '../assets/imgs/mika-avatar.png'
import resumePdf from '../assets/files/Full Stack Developer - Mika Ridley.pdf'
import { SocialLinks } from './SocialLinks'
import { Tooltip } from '@mui/material'

export function MainAboutMe() {
  return (
    <section className="main-about-me">
      <div className="about-me">
        <h1>MIKA RIDLEY</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build websites and I love it. Bringing ideas to life through code is
          my craft.
        </p>

        <Tooltip title="Open in new tab">
          <a
            className="resume-btn btn"
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </Tooltip>
      </div>

      <img className="avatar" src={mikaAvatar} />

      <SocialLinks />
    </section>
  )
}
