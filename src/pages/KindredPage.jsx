import { useState, useRef, useEffect } from 'react'
import { Stepper } from '../cmps/Stepper'
import { StepperHeader } from '../cmps/StepperHeader'
import { ImgsCarousel } from '../cmps/ImgsCarousel'
import appScreen from '../assets/imgs/kindred/Hand showing Kindred app.png'

// —— Constants (module globs & config) —————————————————————————————————————
const kindredStepperModules = import.meta.glob('../assets/imgs/kindred/stepper/*.{png,jpg,jpeg,webp}', { eager: true })
const lowWireframesCarouselModules = import.meta.glob('../assets/imgs/kindred/stepper/low-fi-carousel/*.{png,jpg,jpeg,webp}', { eager: true })
const computerCarouselModules = import.meta.glob('../assets/imgs/quantex/stepper/computer-carousel/*.{png,jpg,jpeg,webp}', { eager: true })
const finalCarouselModules = import.meta.glob('../assets/imgs/quantex/stepper/final-carousel/*.{png,jpg,jpeg,webp}', { eager: true })

const STEP_HEADER_OFFSET = 120
const STEPPER_SCROLL_OFFSET = 100

// —— Helper functions ——————————————————————————————————————————————————————
function getKindredStepperImg(name) {
  const key = Object.keys(kindredStepperModules).find((k) => k.toLowerCase().includes(name.toLowerCase()))
  return key ? kindredStepperModules[key].default : null
}

// —— Derived data (uses helpers above) —————————————————————————————————————
const KINDRED_PERSONA_IMAGES = [
  getKindredStepperImg('Persona - Marco'),
  getKindredStepperImg('Persona - Sarah'),
].filter(Boolean)
const EMPATHY_MAP_IMG = getKindredStepperImg('Empathy map')
const USER_JOURNEY_MAP_IMG = getKindredStepperImg('User journey map')
const SITE_MAP_IMG = getKindredStepperImg('Sitemap')
const ABOVE_THE_FOLD_IMG = getKindredStepperImg('Above the fold comparing')
const MOODBOARD_IMG = getKindredStepperImg('Moodboard')
const STICKER_SHEET_IMG = getKindredStepperImg('Sticker sheet')
const COLOUR_PALETTE_IMG = getKindredStepperImg('Colour palette comparing')

const LOW_WIREFRAMES_CAROUSEL_IMAGES = Object.keys(lowWireframesCarouselModules)
  .sort()
  .map((key) => lowWireframesCarouselModules[key].default)
  .filter(Boolean)
const COMPUTER_CAROUSEL_IMAGES = Object.keys(computerCarouselModules)
  .sort()
  .map((key) => computerCarouselModules[key].default)
  .filter(Boolean)
const FINAL_CAROUSEL_IMAGES = Object.keys(finalCarouselModules)
  .sort()
  .map((key) => finalCarouselModules[key].default)
  .filter(Boolean)

// —— Component —————————————————————————————————————————————————────────────
export function KindredPage() {
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)
  const step4Ref = useRef(null)
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref]
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    function onScroll() {
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

  function handleStepClick(stepNumber) {
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

      <Stepper activeStep={activeStep} onStepClick={handleStepClick} className="stepper" />

      <div ref={step1Ref} className="stepper-header-container"><StepperHeader number={1} word="Research & Discovery" /></div>

      <section className="research-personas" aria-labelledby="research-personas-heading">
        <h3 id="research-personas-heading" className="research-personas-heading">Defining the target audience</h3>
        <h4 className="research-personas-subtitle">Personas</h4>
        <p className="research-personas-intro">
        These personas represent the primary user groups identified during the research phase, focusing on the real-world environments where the app would be used. They served as a guide for every design decision, helping me build a solution that balances the high-pressure needs of busy kitchen managers with the logistical requirements of volunteer couriers.
        </p>
        <div className="research-personas-imgs">
          {KINDRED_PERSONA_IMAGES.map((src, index) => (
            <img key={index} src={src} alt="" className="research-personas-img" />
          ))}
        </div>
      </section>

      <section className="research-empathy" aria-labelledby="research-empathy-heading">
        <h3 id="research-empathy-heading" className="research-empathy-heading">User research & synthesis</h3>
        <h4 className="research-empathy-subtitle">Empathy map</h4>
        <div className="research-empathy-text">
          <p className="research-empathy-p">
          The empathy map highlighted that restaurant staff need an extremely fast process that doesn't disrupt their work.<br/>
          By analysing what they said, thought, did, and felt, I identified a demand for a donation process that removes the logistical 'chore' of arranging pickups. This allowed me to focus on creating a fast, transparent experience that ensures staff can manage surplus food without being distracted from their primary duties.
          </p>
        </div>
        {EMPATHY_MAP_IMG && (
          <div className="research-empathy-fig">
            <img src={EMPATHY_MAP_IMG} alt="Empathy map for Robert - says, thinks, does, feels" className="research-empathy-img" />
          </div>
        )}
      </section>

      <div ref={step2Ref} className="stepper-header-container"><StepperHeader number={2} word="Ideation & Strategy" /></div>

      <section className="challenge" aria-labelledby="challenge">
        <h3 id="challenge-heading" className="challenge-heading">Defining the Challenge</h3>

        <div className="challenge-block">
          <h4 className="challenge-block-title">How might we</h4>
          <p className="challenge-block-p">
          I translated my research findings and persona pain points into 'How Might We' statements, focusing specifically on the unique needs of the donor and the volunteer courier. This process allowed me to reframe logistical hurdles as design opportunities, ensuring the solution prioritised speed for businesses and flexibility for those on the move.
          </p>
          <ul className="challenge-hmw-list">
            <li><span>For the Donor (Marco):</span> How might we make logging a food donation feel as effortless as possible?   </li>
            <li><span>For the Courier (Sarah):</span> How might we provide 'at-a-glance' mission details so volunteers can navigate safely while on the move?</li>
            <li><span>For the Handover:</span> How might we create a seamless, 'grab-and-go' experience that eliminates waiting time for both parties?</li>
          </ul>
        </div>
      </section>

      <section className="user-journey-mapping" aria-labelledby="user-journey-mapping-heading">
        <h3 id="user-journey-mapping-heading" className="user-journey-mapping-heading">Mapping the Experience</h3>
        <h4 className="user-journey-mapping-subtitle">User journey map</h4>
        <p className="user-journey-mapping-p">
        To deeply understand Marco's experience, I mapped his journey from identifying food waste to completing a donation. This allowed me to pinpoint exactly when he feels the most pressure - during the log process - and highlighted the need for a 'grab-and-go' solution that respects his busy schedule.
        </p>
        {USER_JOURNEY_MAP_IMG && (
          <div className="user-journey-mapping-fig">
            <img src={USER_JOURNEY_MAP_IMG} alt="Kindred user journey map" className="user-journey-mapping-img" />
          </div>
        )}
      </section>

      <section className="user-journey-mapping" aria-labelledby="user-journey-mapping-heading">
        <h3 id="user-journey-mapping-heading" className="user-journey-mapping-heading">Information Architecture</h3>
        <h4 className="user-journey-mapping-subtitle">Sitemap</h4>
        <p className="user-journey-mapping-p">
        I designed the Information Architecture to ensure the donation process is as simplified as possible, directly addressing the need for efficiency during a busy restaurant shift. By prioritising a shallow menu structure and creating a dedicated 'Impact Centre', I focused on making the app easy and quick for the donor to use.
        </p>
        {SITE_MAP_IMG && (
          <div className="user-journey-mapping-fig">
            <img src={SITE_MAP_IMG} alt="Kindred user journey map" className="user-journey-mapping-img" />
          </div>
        )}
      </section>

      <div ref={step3Ref} className="stepper-header-container"><StepperHeader number={3} word="Design" /></div>

      <section className="design-wireframes" aria-labelledby="design-wireframes-heading">
        <h4 className="design-wireframes-subtitle">Low-fidelity wireframes</h4>
        <p className="design-wireframes-lofi-p">
        I developed low-fidelity wireframes to establish the core layout and functionality of the app. By focusing on a clean and simple interface, I ensured that Marco could navigate the primary tasks - such as logging a donation or checking his impact - without unnecessary visual distractions.
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

        <h4 className="design-wireframes-subtitle">From Insights to Iteration</h4>
        <p className="design-wireframes-lofi-p">
        During usability testing, I discovered that my "perfectly" aligned layout created a phantom floor. Because the top section ended exactly at the screen's edge, users assumed there was no more content and failed to scroll. This meant the most important action - the Donate button - was being completely missed.<br />
To fix this, I moved the main CTA to the top of the page to ensure the primary user flow was immediately visible above the fold. I also intentionally cut off the bottom of the "Upcoming Pickups" section to provide a clear visual cue that more information exists below.
        </p>
        <img src={ABOVE_THE_FOLD_IMG} alt="above-the-fold-img" className="above-the-fold-img" />
      </section>

      <section className="design-visual-identity" aria-labelledby="design-visual-identity-heading">
        <h3 id="design-visual-identity-heading" className="design-visual-identity-heading">Visual identity & moodboard</h3>

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

      </section>

      <section className="user-journey-mapping" aria-labelledby="user-journey-mapping-heading">
        <h4 className="user-journey-mapping-subtitle">Style guide</h4>
        <p className="user-journey-mapping-p">
        I developed a library of reusable components to ensure a consistent and professional experience across the entire app. By using clear iconography and a structured visual hierarchy, I ensured that the interface remains intuitive for donors like Marco, allowing them to navigate complex tasks - such as managing multiple food categories or tracking deliveries - with ease.
        </p>
        {STICKER_SHEET_IMG && (
          <div className="user-journey-mapping-fig">
            <img src={STICKER_SHEET_IMG} alt="Kindred user journey map" className="user-journey-mapping-img" />
          </div>
        )}
      </section>

      <section className="hi-fi-design">
        <h3 id="hi-fi-design-heading" className="hi-fi-design-heading">High-fidelity design</h3>
        <p className="hi-fi-design-p">
        The final designs bring the Kindred brand to life with a professional and trustworthy aesthetic. After establishing the core layout, I focused on refining the visual details to ensure the app felt reliable for business owners. This stage was about moving beyond the structure and ensuring the interface felt high-quality and ready for a real-world environment.
        </p>

        <h4 className="hi-fi-design-subtitle">Refining for accessibility (WCAG)</h4>
        <img src={COLOUR_PALETTE_IMG} alt="Colour palette comparing" className="color-palette-img" />
      </section>

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