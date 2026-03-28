import '../assets/styles/pages/HomePage.css'

import homePageQuantexBgImg from '../assets/imgs/home-page/Project image - Quantex.png'
import homePageQuantexImg from '../assets/imgs/home-page/Quantex.png'
import homePageKindredBgImg from '../assets/imgs/home-page/Project image - Kindred.png'
import homePageKindredImg from '../assets/imgs/home-page/Kindred.png'
import homePageEfficasafeBgImg from '../assets/imgs/home-page/Project image - Efficasafe.png'
import homePageEfficasafeImg from '../assets/imgs/home-page/Efficasafe.png'
import { ProjectPreview } from '../cmps/projects-cmps/ProjectPreview'

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
        <ProjectPreview
          className="home-project"
          to="/kindred"
          bgSrc={homePageKindredBgImg}
          fgSrc={homePageKindredImg}
          fgAlt="Kindred - project preview"
          title="Kindred"
          rolePrefix="UI/UX Designer (solo project)."
          description="A community-driven mobile app connecting local food businesses with volunteer couriers to rescue and donate surplus food."
        />

        <ProjectPreview
          className="home-project"
          to="/quantex"
          bgSrc={homePageQuantexBgImg}
          fgSrc={homePageQuantexImg}
          fgAlt="Quantex - laptop and phone"
          title="Quantex"
          rolePrefix="UI/UX Designer (solo project)."
          description="A multi-currency wallet for travelers to exchange and spend local currencies worldwide via mobile app and responsive website."
        />

        <ProjectPreview
          className="home-project"
          to="/efficasafe"
          bgSrc={homePageEfficasafeBgImg}
          fgSrc={homePageEfficasafeImg}
          fgAlt="Efficasafe - project preview"
          title="Efficasafe"
          rolePrefix="UI/UX Designer."
          description="A B2B e-commerce widget enabling shoppers to manage and verify supplement compatibility with their medications in real time during checkout."
        />
      </section>
    </section>
  )
}
