import { Link } from 'react-router-dom'
import { scrollToTopInstant } from '../utils/scrollToTop'
import '../assets/styles/pages/HomePage.css'

import homePageQuantexImg from '../assets/imgs/quantex/home-page-quantex.png'
import homePageKindredImg from '../assets/imgs/kindred/Project image - Kindred.png'

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
            <img src={homePageKindredImg} alt="Kindred - project preview" className="home-project-img" />
          </Link>
          <h2 className="home-project-title">Kindred</h2>
          <p className="home-project-desc">
            <span>UI/UX Designer (solo project).</span> A community-driven mobile app connecting local food businesses with volunteer couriers to rescue and donate surplus food.ile app and responsive web.
          </p>
        </div>

        <div className="home-project-quntex">
          <Link to="/quantex" className="home-project-link" onClick={scrollToTopInstant}>
            <img src={homePageQuantexImg} alt="Quantex - laptop and phone" className="home-project-img" />
          </Link>
          <h2 className="home-project-title">Quantex</h2>
          <p className="home-project-desc">
            <span>UI/UX Designer (solo project).</span> A multi-currency wallet for travelers to exchange and spend local currencies worldwide via mobile app and responsive web.
          </p>
        </div>
      </section>
    </section>
  )
}
