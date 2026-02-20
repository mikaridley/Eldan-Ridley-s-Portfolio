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
const STEPPER_STICKY_NOTE_IMAGES = Object.keys(stepperImgModules)
  .filter((k) => k.toLowerCase().includes('sticky'))
  .sort()
  .map((key) => stepperImgModules[key].default)
  .filter(Boolean)
const PROJECT_IMAGE = getStepperImg('project image')
const PAPER_WIREFRAME_IMG = getStepperImg('paper wireframe')
const MOODBOARD_IMG = getStepperImg('mood-board')
const STICKER_SHEET_IMG = getStepperImg('sticker sheet') || getStepperImg('sticker')

import { Stepper } from '../cmps/Stepper'
import { StepperHeader } from '../cmps/StepperHeader'

const quantexCarouselModules = import.meta.glob('../assets/imgs/quantex/carousel/*', { eager: true })
const QUANTEX_CAROUSEL_IMAGES = Object.keys(quantexCarouselModules)
  .sort()
  .map((key) => quantexCarouselModules[key].default)
  .filter(Boolean)

const lowWireframesCarouselModules = import.meta.glob('../assets/imgs/quantex/stepper/low-wireframes-carousel/*.{png,jpg,jpeg,webp}', { eager: true })
const LOW_WIREFRAMES_CAROUSEL_IMAGES = Object.keys(lowWireframesCarouselModules)
  .sort()
  .map((key) => lowWireframesCarouselModules[key].default)
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
        <h3 id="research-empathy-heading" className="research-empathy-heading">1.2. User research & synthesis</h3>
        <h4 className="research-empathy-subtitle">Empathy map</h4>
        <div className="research-empathy-text">
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

      <StepperHeader number={2} word="Ideation" />

      <section className="ideation-user-stories" aria-labelledby="ideation-user-stories-heading">
        <h3 id="ideation-user-stories-heading" className="ideation-user-stories-heading">2.1. User stories & requirements</h3>

        <div className="ideation-block">
          <h4 className="ideation-block-title">User stories</h4>
          <p className="ideation-block-p">
            I drafted user stories to define the core needs of my personas. These statements ensured that every feature addressed a specific goal, such as Drake&apos;s need for efficiency as a single parent or Natasha&apos;s requirement for spontaneity and simplicity.
          </p>
          {STEPPER_STICKY_NOTE_IMAGES.length > 0 && (
            <div className="ideation-sticky-notes">
              {STEPPER_STICKY_NOTE_IMAGES.map((src, index) => (
                <img key={index} src={src} alt="" className="ideation-sticky-note-img" />
              ))}
            </div>
          )}
        </div>

        <div className="ideation-block">
          <h4 className="ideation-block-title">How might we</h4>
          <p className="ideation-block-p">
            I translated my research findings and user stories into &apos;How Might We&apos; statements. This process allowed me to reframe user pain points as design opportunities, ensuring the solution focused on accessibility, speed, and the removal of physical errands.
          </p>
          <ul className="ideation-hmw-list">
            <li>How might we eliminate the need for travellers to visit physical exchange shops before or during their trip?</li>
            <li>How might we design a currency exchange process that is intuitive for users with low technical knowledge or memory hurdles?</li>
            <li>How might we help a busy parent complete a secure transaction in seconds?</li>
          </ul>
        </div>
      </section>

      <section className="ideation-mapping" aria-labelledby="ideation-mapping-heading">
        <h3 id="ideation-mapping-heading" className="ideation-mapping-heading">2.2. Mapping the journey</h3>
        <h4 className="ideation-mapping-subtitle">Sitemap</h4>
        <p className="ideation-mapping-p">
          I designed a sitemap to establish a clear and shallow information architecture. By keeping the navigation simple, I ensured that users could reach the exchange flow in a single tap.
        </p>
        {PROJECT_IMAGE && (
          <div className="ideation-mapping-fig">
            <img src={PROJECT_IMAGE} alt="Quantex sitemap - Homepage, Profile, Exchange, Wallet, Rate History" className="ideation-mapping-img" />
          </div>
        )}
      </section>

      <StepperHeader number={3} word="Design" />

      <section className="design-wireframes" aria-labelledby="design-wireframes-heading">
        <h3 id="design-wireframes-heading" className="design-wireframes-heading">3.1. Sketches to low-fidelity</h3>
        <h4 className="design-wireframes-subtitle">Paper wireframes</h4>
        <div className="design-wireframes-text">
          <p className="design-wireframes-p">
            I used paper wireframes to explore a layout that removes complexity for those less familiar with digital finance. By simplifying the steps between currency selection and the final exchange, I ensured the process feels intuitive and efficient, regardless of the user&apos;s technical experience.
          </p>
          <ul className="design-wireframes-notes">
            <li><strong>a.</strong> Large, clear input fields allow users to quickly choose their currencies without searching through dense menus.</li>
            <li><strong>b.</strong> Positioning the primary action at the bottom of the screen ensures it sits within the &apos;thumb zone&apos;. This ergonomic choice improves accessibility and allows for a more comfortable one-handed experience for all users.</li>
          </ul>
        </div>
        {PAPER_WIREFRAME_IMG && (
          <div className="design-wireframes-fig">
            <img src={PAPER_WIREFRAME_IMG} alt="Paper wireframe - select amount screen for currency exchange" className="design-wireframes-img" />
          </div>
        )}

        <h4 className="design-wireframes-subtitle design-wireframes-subtitle--block">Low-fidelity wireframes</h4>
        <p className="design-wireframes-lofi-p">
          I transitioned my paper sketches into digital low-fidelity wireframes to focus on visual hierarchy and flow. During this stage, I refined the layout to ensure the core exchange process remained the central focus, allowing me to test the usability of the interface before introducing brand elements.
        </p>
        <div className="design-wireframes-carousel">
          {LOW_WIREFRAMES_CAROUSEL_IMAGES.length > 0 ? (
            <ImgsCarousel images={LOW_WIREFRAMES_CAROUSEL_IMAGES} />
          ) : (
            <p className="design-wireframes-carousel-placeholder">
              Add wireframe images to <code>src/assets/imgs/quantex/stepper/low-wireframes-carousel/</code> to see the carousel.
            </p>
          )}
        </div>
      </section>

      <section className="design-visual-identity" aria-labelledby="design-visual-identity-heading">
        <h3 id="design-visual-identity-heading" className="design-visual-identity-heading">3.2. Visual identity & moodboard</h3>

        <div className="design-visual-identity-block">
          <h4 className="design-visual-identity-subtitle">Moodboard</h4>
          <p className="design-visual-identity-p">
            I looked for visuals that balanced a sense of security with the excitement of travel. I chose a blue accent to build professional trust, paired with cleaner, lighter tones to ensure the app feels like a helpful travel companion rather than a complex financial tool.
          </p>
          {MOODBOARD_IMG && (
            <div className="design-visual-identity-fig">
              <img src={MOODBOARD_IMG} alt="Moodboard - banking and travel app UI inspiration" className="design-visual-identity-img" />
            </div>
          )}
        </div>

        <div className="design-visual-identity-block">
          <h4 className="design-visual-identity-subtitle">Style guide</h4>
          <p className="design-visual-identity-p">
            I designed these components to keep the experience intuitive and approachable. By using familiar iconography and a clean visual hierarchy, I ensured the interface feels friendly and simple to navigate, removing the &apos;intimidation factor&apos; usually found in banking apps.
            Accessibility in mind: I used universally recognised icons and high-contrast colours to support users who may find text-heavy interfaces overwhelming. This approach ensures that even at a glance, the app&apos;s functions remain clear and accessible to everyone.
          </p>
          {STICKER_SHEET_IMG && (
            <div className="design-visual-identity-fig">
              <img src={STICKER_SHEET_IMG} alt="Style guide - Quantex typography, colours, buttons, inputs, icons" className="design-visual-identity-img" />
            </div>
          )}
        </div>
      </section>

      <section className="design-hifi" aria-labelledby="design-hifi-heading">
        <div className="design-hifi-intro">
          <h3 id="design-hifi-heading" className="design-hifi-heading">3.3. High-fidelity mockups</h3>
          <h4 className="design-hifi-subtitle">Iterations</h4>
          <p className="design-hifi-p">
            After testing the initial designs, I identified several areas where the user flow could be further simplified. These iterations focus on refining the layout based on direct user feedback, ensuring that the most important tasks — like checking rates and finalising an exchange — are as seamless as possible.
          </p>
        </div>
        <div className="design-hifi-iteration">
          <h4 className="design-hifi-iteration-title">Iteration #1</h4>
        </div>
      </section>

    </section>
  )
}
