import { useState, useRef, useEffect } from 'react'
import appScreen from '../assets/imgs/kindred/Hand showing Kindred app.png'
import appGif from '../assets/imgs/quantex/app-gif.gif'
import { ImgsCarousel } from '../cmps/ImgsCarousel'

const stepperImgModules = import.meta.glob('../assets/imgs/quantex/stepper/*.{png,jpg,jpeg,webp}', { eager: true })
const getStepperImg = (name) => {
  const key = Object.keys(stepperImgModules).find((k) => k.toLowerCase().includes(name.toLowerCase()))
  return key ? stepperImgModules[key].default : null
}
const STEPPER_PERSONA_IMAGES = [
  getStepperImg('Persona - Drake'),
  getStepperImg('Persona - Natasha'),
].filter(Boolean)
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
const BEFORE_HOMEPAGE_IMG = getStepperImg('App Homepage - Before 1')
const AFTER_HOMEPAGE_IMG = getStepperImg('App Homepage - After 1')
const BEFORE_HOMEPAGE_2_IMG = getStepperImg('App Homepage - Before 2')
const AFTER_HOMEPAGE_2_IMG = getStepperImg('App Homepage - After 2')
const BEFORE_HOMEPAGE_3_IMG = getStepperImg('App Homepage - Before 3')
const AFTER_HOMEPAGE_3_IMG = getStepperImg('App Homepage - After 3')
const LINE_IMG = getStepperImg('Line')
const FINAL_DESIGN_IMG = getStepperImg('final-design')
const METRICS_IMG = getStepperImg('metrics')

import { Stepper } from '../cmps/Stepper'
import { StepperHeader } from '../cmps/StepperHeader'

const lowWireframesCarouselModules = import.meta.glob('../assets/imgs/quantex/stepper/low-wireframes-carousel/*.{png,jpg,jpeg,webp}', { eager: true })
const LOW_WIREFRAMES_CAROUSEL_IMAGES = Object.keys(lowWireframesCarouselModules)
  .sort()
  .map((key) => lowWireframesCarouselModules[key].default)
  .filter(Boolean)

const computerCarouselModules = import.meta.glob('../assets/imgs/quantex/stepper/computer-carousel/*.{png,jpg,jpeg,webp}', { eager: true })
const COMPUTER_CAROUSEL_IMAGES = Object.keys(computerCarouselModules)
  .sort()
  .map((key) => computerCarouselModules[key].default)
  .filter(Boolean)

const finalCarouselModules = import.meta.glob('../assets/imgs/quantex/stepper/final-carousel/*.{png,jpg,jpeg,webp}', { eager: true })
const FINAL_CAROUSEL_IMAGES = Object.keys(finalCarouselModules)
  .sort()
  .map((key) => finalCarouselModules[key].default)
  .filter(Boolean)



const STEP_HEADER_OFFSET = 120
const STEPPER_SCROLL_OFFSET = 100

export function KindredPage() {
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)
  const step4Ref = useRef(null)
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref]
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      let current = 1
      stepRefs.forEach((ref, i) => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top
          if (top <= STEP_HEADER_OFFSET) current = i + 1
        }
      })
      setActiveStep(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleStepClick = (stepNumber) => {
    const ref = stepRefs[stepNumber - 1]?.current
    if (ref) {
      const y = ref.getBoundingClientRect().top + window.scrollY - STEPPER_SCROLL_OFFSET
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="kindred-page projects-layout">
      
      <div className="kindred-opening-bg"></div>
        <section className="kindred-opening">
          <h1>Kindred</h1>
          <h4>A community-driven mobile app connecting local food businesses with volunteer couriers to rescue and donate surplus food.</h4>
          <img src={appScreen} alt="app-screen" />
        </section>


      <section className="overview">
        <h4>Overview</h4>
        <p className="overview-p">Kindred was developed to address a significant gap in local food sustainability: the difficulty of getting surplus food from businesses to those who can use it. Many local food businesses want to reduce waste, but they often lack the time to manage logistics or a reliable way to connect with volunteers during a busy shift.
        <br /><span className="p-gap" aria-hidden="true" />I designed this platform to bridge that gap by simplifying the donation process. By focusing on high-contrast accessibility and clear role transparency, Kindred allows business owners to schedule a rescue in seconds, ensuring that surplus food is efficiently redirected to the community instead of being thrown away.</p>

          <h4 className="problem-heading">Problem</h4>
          <p className="problem-solution-p">The logistical gap between local businesses and food rescue initiatives is a significant hurdle for sustainability.<br />
Many food business managers want to donate their surplus, but they are often too busy during a high-pressure shift to manage complex logistics or coordinate with volunteers.<br />
Without a reliable and quick way to bridge this gap, high-quality food is frequently thrown away simply because the effort to donate it is too high.</p>


          <h4 className="solution-heading">Solution</h4>
          <p className="problem-solution-p">I designed Kindred to eliminate this friction with a streamlined, "seconds-to-submit" donation flow. The platform connects businesses directly with volunteer couriers, providing total transparency regarding who is collecting the food and when.<br />
          By prioritising high-contrast visuals and a clear feedback loop, I ensured the app remains accessible and easy to navigate even in a hectic kitchen environment, allowing staff to complete a rescue and return to their work without delay.</p>
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
            <li>3.5 weeks</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Tools</h4>
          <ul className="project-details-list">
            <li>Figma</li>
            <li>Good old fashion pen & paper</li>
            <li>Gen AI</li>
          </ul>
        </div>
      </section>

      {/* <Stepper activeStep={activeStep} onStepClick={handleStepClick} className="stepper" /> */}

      {/* <div ref={step1Ref} className="stepper-header-container"><StepperHeader number={1} word="Research" /></div> */}

      {/* <section className="research-personas" aria-labelledby="research-personas-heading">
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
      </section> */}

      {/* <section className="research-empathy" aria-labelledby="research-empathy-heading">
        <h3 id="research-empathy-heading" className="research-empathy-heading">1.2. User research & synthesis</h3>
        <h4 className="research-empathy-subtitle">Empathy map</h4>
        <div className="research-empathy-text">
          <p className="research-empathy-p darker">
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
      </section> */}

      {/* <div ref={step2Ref} className="stepper-header-container"><StepperHeader number={2} word="Ideation" /></div> */}

      {/* <section className="ideation-user-stories" aria-labelledby="ideation-user-stories-heading">
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
      </section> */}

      {/* <section className="ideation-mapping" aria-labelledby="ideation-mapping-heading">
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
      </section> */}

      {/* <div ref={step3Ref} className="stepper-header-container"><StepperHeader number={3} word="Design" /></div> */}

      {/* <section className="design-wireframes" aria-labelledby="design-wireframes-heading">
        <h3 id="design-wireframes-heading" className="design-wireframes-heading">3.1. Sketches to low-fidelity</h3>
        <h4 className="design-wireframes-subtitle">Paper wireframes</h4>
          <p className="design-wireframes-p">
            I used paper wireframes to explore a layout that removes complexity for those less familiar with digital finance. By simplifying the steps between currency selection and the final exchange, I ensured the process feels intuitive and efficient, regardless of the user&apos;s technical experience.
          </p>
          <ul className="design-wireframes-notes">
            <li><span>a.</span> Large, clear input fields allow users to quickly choose their currencies without searching through dense menus.</li>
            <li><span>b.</span> Positioning the primary action at the bottom of the screen ensures it sits within the &apos;thumb zone&apos;. This ergonomic choice improves accessibility and allows for a more comfortable one-handed experience for all users.</li>
          </ul>
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
            <ImgsCarousel images={LOW_WIREFRAMES_CAROUSEL_IMAGES} gap={15} />
          ) : (
            <p className="design-wireframes-carousel-placeholder">
              Add wireframe images to <code>src/assets/imgs/quantex/stepper/low-wireframes-carousel/</code> to see the carousel.
            </p>
          )}
        </div>
      </section> */}

      {/* <section className="design-visual-identity" aria-labelledby="design-visual-identity-heading">
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
            <span>Accessibility in mind</span> I used universally recognised icons and high-contrast colours to support users who may find text-heavy interfaces overwhelming. This approach ensures that even at a glance, the app&apos;s functions remain clear and accessible to everyone.
          </p>
          {STICKER_SHEET_IMG && (
            <div className="design-visual-identity-fig">
              <img src={STICKER_SHEET_IMG} alt="Style guide - Quantex typography, colours, buttons, inputs, icons" className="design-visual-identity-img secondary" />
            </div>
          )}
        </div>

        <div className="design-hifi-intro">
          <h3 id="design-hifi-heading" className="design-hifi-heading">3.3. High-fidelity mockups</h3>
          <h4 className="design-hifi-subtitle">Iterations</h4>
          <p className="design-hifi-p">
            After testing the initial designs, I identified several areas where the user flow could be further simplified. These iterations focus on refining the layout based on direct user feedback, ensuring that the most important tasks ΓÇö like checking rates and finalising an exchange ΓÇö are as seamless as possible.
          </p>
        </div>
      </section> */}

      {/* <section className="design-hifi" aria-labelledby="design-hifi-heading">
        <div className="design-hifi-iteration">
          <h4 className="design-hifi-iteration-title">Iteration #1</h4>
        </div>

        <div className="design-hifi-before-after">
            <h4 className="design-hifi-ba-title before">Before</h4>
            <p className="design-hifi-ba-p before">
              The original layout relied on a vertical list of buttons, requiring users to navigate away from the home screen to view essential data like rate trends or transaction history.
            </p>
            {BEFORE_HOMEPAGE_IMG && (
              <img src={BEFORE_HOMEPAGE_IMG} alt="Quantex app homepage - before redesign" className="design-hifi-ba-img before" />
            )}

          {LINE_IMG && (
            <img src={LINE_IMG} alt="" className="design-hifi-arrow" aria-hidden="true" />
          )}

            <h4 className="design-hifi-ba-title after">After</h4>
            <p className="design-hifi-ba-p after">
              I redesigned the home screen to feature interactive widgets that display live data. By bringing the wallet balance and rate graph to the forefront, users can get an instant overview of their finances without additional navigation.
            </p>
            {AFTER_HOMEPAGE_IMG && (
              <img src={AFTER_HOMEPAGE_IMG} alt="Quantex app homepage - after redesign" className="design-hifi-ba-img after" />
            )}

        </div>

        <div className="design-hifi-iteration">
          <h4 className="design-hifi-iteration-title">Iteration #2</h4>
        </div>

        <div className="design-hifi-before-after">
            <h4 className="design-hifi-ba-title before">Before</h4>
            <p className="design-hifi-ba-p before">
              In the initial design, the exchange arrows were a flat icon without any button characteristics. This made it unclear if the element was interactive or simply a visual divider between the currency fields.
            </p>
            {BEFORE_HOMEPAGE_2_IMG && (
              <img src={BEFORE_HOMEPAGE_2_IMG} alt="Quantex exchange screen - before" className="design-hifi-ba-img before" />
            )}
          {LINE_IMG && (
            <img src={LINE_IMG} alt="" className="design-hifi-arrow" aria-hidden="true" />
          )}
            <h4 className="design-hifi-ba-title after">After</h4>
            <p className="design-hifi-ba-p after">
              I redesigned the arrows as a clear, shadowed button to signal interactivity. This change follows the app&apos;s established button styles, making it intuitive for users to tap and switch the exchange direction instantly.
            </p>
            {AFTER_HOMEPAGE_2_IMG && (
              <img src={AFTER_HOMEPAGE_2_IMG} alt="Quantex exchange screen - after" className="design-hifi-ba-img after" />
            )}
        </div>

        <div className="design-hifi-iteration design-hifi-iteration--with-intro">
          <h4 className="design-hifi-iteration-title">Iteration #3</h4>
        </div>

        <h4 className="design-hifi-iteration-subtitle">Accessibility refinements</h4>
          <p className="design-hifi-iteration-p">
            I conducted an accessibility audit using WebAIM&apos;s contrast checker to ensure the interface meets industry standards for readability. These refinements focus on adjusting colour contrast and button visibility, making the app easier to navigate for users with visual impairments or those viewing the screen in challenging lighting conditions.
          </p>

        <div className="design-hifi-before-after">
            <h4 className="design-hifi-ba-title before">Before</h4>
            <p className="design-hifi-ba-p before">
              The initial green brand colour failed to meet the WCAG AA contrast standards for accessibility. The light text on the green background made primary actions difficult to read for users with low vision.
            </p>
            {BEFORE_HOMEPAGE_3_IMG && (
              <img src={BEFORE_HOMEPAGE_3_IMG} alt="Quantex transaction summary - before accessibility update" className="design-hifi-ba-img before" />
            )}
          {LINE_IMG && (
            <img src={LINE_IMG} alt="" className="design-hifi-arrow" aria-hidden="true" />
          )}
            <h4 className="design-hifi-ba-title after">After</h4>
            <p className="design-hifi-ba-p after">
              I updated the brand palette to a deeper blue, which passed the WebAIM contrast test with a higher ratio. This change ensures that all text and icons are sharp and legible, providing a more inclusive experience without sacrificing the professional look of the app.
            </p>
            {AFTER_HOMEPAGE_3_IMG && (
              <img src={AFTER_HOMEPAGE_3_IMG} alt="Quantex transaction summary - after accessibility update" className="design-hifi-ba-img after" />
            )}
        </div>

        <div className="design-hifi-final">
          <h3 className="design-hifi-final-heading">Final design</h3>
          <p className="design-hifi-final-p">
            The final phase of the project involved expanding Quantex across multiple platforms. By designing the mobile app alongside the desktop and mobile web versions, I made sure the app feels the same no matter where you use it. Whether a user is at home on a PC, using a mobile browser, or opening the app while travelling, the layout remains familiar and easy to navigate.
          </p>
          {FINAL_DESIGN_IMG && (
            <img src={FINAL_DESIGN_IMG} alt="Quantex final design - Payment received screens across mobile and web" className="design-hifi-final-img" />
          )}
        </div>

        <div className="design-hifi-desktop">
          <h3 className="design-hifi-desktop-heading">Desktop website</h3>
          <p className="design-hifi-desktop-p">
            For the desktop version, I maintained the exact same layout and functionality as the mobile experience to ensure total consistency. By keeping the interface centred with generous margins, the app remains easy to focus on and doesn&apos;t feel stretched or overwhelming on a larger monitor.
          </p>
          <p className="design-hifi-desktop-p">
            Using wide margins on the desktop version keeps the content in a narrow, readable column. This prevents long lines of text which can be difficult for many users to track and makes the overall interface feel more balanced.
          </p>
        </div>



        {COMPUTER_CAROUSEL_IMAGES.length > 0 && (
          <div className="design-hifi-computer-carousel">
            <ImgsCarousel images={COMPUTER_CAROUSEL_IMAGES} visibleCount={3} />
          </div>
        )}

    <div className="design-hifi-mobile">
          <h3 className="design-hifi-mobile-heading">Mobile website</h3>
          <p className="design-hifi-mobile-p">
            I kept the native app and mobile web designs almost identical. This ensures that users like Drake or Natasha get the same simple interface and accessible features, regardless of how they choose to log in while on the go.
          </p>
        </div>

        {FINAL_CAROUSEL_IMAGES.length > 0 && (
          <div className="design-hifi-final-carousel">
            <ImgsCarousel images={FINAL_CAROUSEL_IMAGES} />
          </div>
        )}

      </section> */}

      {/* <div ref={step4Ref} className="stepper-header-container"><StepperHeader number={4} word="Takeaways" /></div> */}

      {/* <section className="takeaways-reflections-next" aria-labelledby="takeaways-reflections-heading">
        <div className="takeaways-reflections">
          <h3 id="takeaways-reflections-heading" className="takeaways-rn-heading">Reflections</h3>
          <ul className="takeaways-rn-list">
            <li>
              <span>Simplicity is key:</span> I learnt that in fintech, less is almost always more. Removing the &apos;intimidation factor&apos; by using familiar iconography and plenty of white space made the app feel far more trustworthy.
            </li>
            <li>
              <span>Accessibility from the start:</span> Designing for users like Natasha taught me that accessibility isn&apos;t a &apos;final coat of paint&apos; but a foundation. Checking the WebAIM contrast early on allowed me to confidently settle on a brand palette that was both visually appealing and inclusive from the very beginning.
            </li>
            <li>
              <span>Platform consistency:</span> Moving from mobile to PC was a challenge at first, as the desktop version initially felt too sparse compared to traditional websites. However, I realised that maintaining this simplicity ensured the interface felt familiar and comfortable for users moving between devices, which was more valuable than adding unnecessary elements.
            </li>
          </ul>
        </div>
        <div className="takeaways-next">
          <h3 id="takeaways-next-heading" className="takeaways-rn-heading">Next steps</h3>
          <p className="takeaways-next-intro">If I were to continue developing Quantex, I would focus on the following:</p>
          <ul className="takeaways-rn-list">
            <li>
              <span>Onboarding guide:</span> I would implement a short, interactive &apos;Quick Start&apos; guide for new users to explain the exchange process and build immediate confidence.
            </li>
            <li>
              <span>Multi-language support:</span> To truly support international travel, I would expand the app to include multiple languages, ensuring the interface remains accessible to non-English speakers.
            </li>
            <li>
              <span>Smart alerts:</span> I would add a feature for &apos;Rate Alerts&apos;, allowing users to set a target exchange rate and receive a notification when the market hits that number.
            </li>
          </ul>
        </div>
      </section> */}


      {/* <section className="takeaways-metrics" aria-labelledby="takeaways-metrics-heading">
        <h4 id="takeaways-metrics-heading" className="takeaways-metrics-heading">Metrics</h4>
        <p className="takeaways-metrics-intro">
          As this is a conceptual project, I haven&apos;t tracked live user data. However, if Quantex were to launch, I would focus on the following metrics to evaluate the design&apos;s impact:
        </p>
        <ul className="takeaways-metrics-list">
          <li>
            <span>Task Success Rate:</span> I would track how easily users can complete an exchange from start to finish. A high success rate would confirm that the &apos;simple and friendly&apos; approach is working.
          </li>
          <li>
            <span>Drop-off Rate:</span> By monitoring where users leave the flow I could identify if any part of the interface remains confusing or intimidating.
          </li>
          <li>
            <span>Accessibility Compliance:</span> Regular audits would ensure the app continues to meet WCAG 2.1 Level AA standards as new currencies or features are added.
          </li>
        </ul>
        {METRICS_IMG && (
          <div className="takeaways-metrics-fig">
            <img src={METRICS_IMG} alt="Metrics graph - Task success rate, Drop-off reduction, WCAG compliance" className="takeaways-metrics-img" />
          </div>
        )}
      </section> */}

    </section>
  )
}
