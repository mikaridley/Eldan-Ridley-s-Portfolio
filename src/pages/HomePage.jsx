import { Link } from 'react-router-dom'
import { scrollToTopInstant } from '../utils/scrollToTop'
import '../assets/styles/pages/HomePage.css'

import homePageQuantexBgImg from '../assets/imgs/home-page/Project image - Quantex.png'
import homePageQuantexImg from '../assets/imgs/home-page/Quantex.png'
import homePageKindredBgImg from '../assets/imgs/home-page/Project image - Kindred.png'
import homePageKindredImg from '../assets/imgs/home-page/Kindred.png'

export function HomePage() {
  return (
    <section className="home-page projects-layout">
      <div className="home-intro">
        <h1 className="home-intro-title">Hi! I&apos;m Eldan.</h1>
        <p className="home-intro-role">UI/UX Designer</p>
        <p className="home-intro-p">
          I&apos;m dedicated to creating accessible and easy-to-use experiences. I combine empathy and user-centred design to build intuitive products for everyone.
        </p>
      </div>

      <section className='projects'>
      <div className="home-project-kindred">
          <Link to="/kindred" className="home-project-link" onClick={scrollToTopInstant}>
            <span className="home-project-media">
              <img src={homePageKindredBgImg} alt="" className="home-project-img home-project-img--bg" />
              <img src={homePageKindredImg} alt="Kindred - project preview" className="home-project-img home-project-img--fg" />
            </span>
          </Link>
          <h3 className="home-project-title">Kindred</h3>
          <p className="home-project-desc">
            <span>UI/UX Designer (solo project).</span> A community-driven mobile app connecting local food businesses with volunteer couriers to rescue and donate surplus food.
          </p>
        </div>

        <div className="home-project-quntex">
          <Link to="/quantex" className="home-project-link" onClick={scrollToTopInstant}>
            <span className="home-project-media">
              <img src={homePageQuantexBgImg} alt="" className="home-project-img home-project-img--bg" />
              <img src={homePageQuantexImg} alt="Quantex - laptop and phone" className="home-project-img home-project-img--fg" />
            </span>
          </Link>
          <h3 className="home-project-title">Quantex</h3>
          <p className="home-project-desc">
            <span>UI/UX Designer (solo project).</span> A multi-currency wallet for travelers to exchange and spend local currencies worldwide via mobile app and responsive web.
          </p>
        </div>
      </section>
    </section>
  )
}
