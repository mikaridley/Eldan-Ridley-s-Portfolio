import appScreen from '../assets/imgs/quantex/first-page.png'
import appGif from '../assets/imgs/quantex/app-gif.gif'
import { ImgsCarousel } from '../cmps/ImgsCarousel'

const stepperImgModules = import.meta.glob('../assets/imgs/quantex/stepper/*.{png,jpg,jpeg,webp}', { eager: true })
const STEPPER_PERSONA_IMAGES = Object.keys(stepperImgModules)
  .sort()
  .slice(0, 2)
  .map((key) => stepperImgModules[key].default)
  .filter(Boolean)
const getStepperImg = (name) => {
  const key = Object.keys(stepperImgModules).find((k) => k.toLowerCase().includes(name.toLowerCase()))
  return key ? stepperImgModules[key].default : null
}
const EMPATHY_MAP_IMG = getStepperImg('empathy')

import { Stepper } from '../cmps/Stepper'
import { StepperHeader } from '../cmps/StepperHeader'

const quantexCarouselModules = import.meta.glob('../assets/imgs/quantex/carousel/*', { eager: true })
const QUANTEX_CAROUSEL_IMAGES = Object.keys(quantexCarouselModules)
  .sort()
  .map((key) => quantexCarouselModules[key].default)
  .filter(Boolean)



export function HomePage() {
  return (
    <section className="home-page">
      
      <section className="home-opening">
        <h1>Quantex</h1>
        <h4>A multi-currency wallet for travellers to spend local currencies worldwide via mobile app and responsive web.</h4>
        <img src={appScreen} alt="app-screen" />
      </section>

      <section className="overview">
      <h4>Overview</h4>
      <p>Quantex was born from a simple observation: the traditional way of exchanging money is a bit of a chore. Whether people are too busy to visit a physical exchange shop, can't find one nearby, or simply prefer the security of digital over physical cash, there is a clear need for a more flexible solution.
        <br /><span className="p-gap" aria-hidden="true" />I designed this multi-currency wallet to give travellers total control. With just a few taps, users can convert their funds at fair rates and immediately use their device to pay at a cashier or online, anywhere in the world.</p>
      <img src={appGif} alt="Quantex app" className="overview-gif" />
      </section>

      <section className="problem-solution">
        <div className="problem-solution-col">
          <h4 className="problem-solution-heading">Problem</h4>
          <p>The traditional currency exchange process is an inconvenient hurdle. Many travellers are simply too busy to visit a physical exchange shop before a trip, or they find it difficult to locate one when they actually need it. Beyond the chore of the errand, many people now prefer the security and ease of digital payments over carrying bundles of physical cash.</p>
        </div>
        <div className="problem-solution-col">
          <h4 className="problem-solution-heading">Solution</h4>
          <p>I designed Quantex to replace the physical errand with a digital-first approach. The platform allows users to convert currencies instantly with a single tap, enabling them to pay at cashiers or online without delay. By prioritising a simple, high-contrast interface, I ensured the product is easy to navigate for everyone, from tech-savvy travellers to those who typically struggle with complex digital tools.</p>
        </div>
      </section>

      <section className="project-details">
        <div className="project-details-col">
          <h4 className="project-details-heading">My role</h4>
          <ul className="project-details-list">
            <li>UX designer</li>
            <li>Visual designer</li>
            <li>UX researcher</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Team</h4>
          <ul className="project-details-list">
            <li>Solo project</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Duration</h4>
          <ul className="project-details-list">
            <li>3 weeks</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Tools</h4>
          <ul className="project-details-list">
            <li>Figma</li>
            <li>Good old fashion pen & paper</li>
          </ul>
        </div>
      </section>

      {QUANTEX_CAROUSEL_IMAGES.length > 0 && (
        <section className="home-page-carousel">
          <ImgsCarousel images={QUANTEX_CAROUSEL_IMAGES} />
        </section>
      )}

      <Stepper activeStep={1} />
      <StepperHeader number={1} word="Research" />

      <section className="research-personas" aria-labelledby="research-personas-heading">
        <h3 id="research-personas-heading" className="research-personas-heading">1.1. Defining the target audience</h3>
        <h4 className="research-personas-subtitle">Personas</h4>
        <p className="research-personas-intro">
          These personas represent the core user groups identified during the research phase. They served as a guide for every design decision, helping me build a solution that simplifies the currency exchange process for everyone, from busy parents to users with specific accessibility requirements.
        </p>
        <div className="research-personas-imgs">
          {STEPPER_PERSONA_IMAGES.map((src, index) => (
            <img key={index} src={src} alt="" className="research-personas-img" />
          ))}
        </div>
      </section>

      <section className="research-empathy" aria-labelledby="research-empathy-heading">
        <div className="research-empathy-text">
          <h3 id="research-empathy-heading" className="research-empathy-heading">1.2. User research & synthesis</h3>
          <h4 className="research-empathy-subtitle">Empathy map</h4>
          <p className="research-empathy-p">
            The key insight from this map was that users didn&apos;t just want better rates - they wanted their time back.
          </p>
          <p className="research-empathy-p">
            I created this empathy map to align the product&apos;s core features with the real-world needs of my users.
          </p>
          <p className="research-empathy-p">
            By mapping out what travellers say, think, do, and feel, I identified a clear demand for a digital-first solution that removes the &apos;chore&apos; of visiting a physical exchange centre. This allowed me to focus on creating a &apos;one-click&apos; exchange experience that feels accessible to everyone, regardless of their tech experience.
          </p>
        </div>
        {EMPATHY_MAP_IMG && (
          <div className="research-empathy-fig">
            <img src={EMPATHY_MAP_IMG} alt="Empathy map for Robert - says, thinks, does, feels" className="research-empathy-img" />
          </div>
        )}
      </section>

    </section>
  )
}
