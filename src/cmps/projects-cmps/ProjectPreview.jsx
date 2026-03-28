import { Link } from 'react-router-dom'
import { scrollToTopInstant } from '../../utils/scrollToTop'

export function ProjectPreview({
  className,
  to,
  bgSrc,
  fgSrc,
  fgAlt,
  title,
  description,
  rolePrefix,
}) {
  return (
    <div className={className}>
      <Link to={to} className="home-project-link" onClick={scrollToTopInstant}>
        <span className="home-project-media">
          <img src={bgSrc} alt="" className="home-project-img home-project-img--bg" />
          <img src={fgSrc} alt={fgAlt} className="home-project-img home-project-img--fg" />
        </span>
      </Link>
      <h3 className="home-project-title">{title}</h3>
      <p className="home-project-desc">
        <span>{rolePrefix}</span> {description}
      </p>
    </div>
  )
}
