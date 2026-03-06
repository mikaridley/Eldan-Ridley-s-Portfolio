import { useState, useRef, useEffect } from 'react'
import { ImgsCarousel } from '../cmps/ImgsCarousel'
import { Stepper } from '../cmps/Stepper'
import { StepperHeader } from '../cmps/StepperHeader'

import kindredProjectImg from '../assets/imgs/kindred/Project image - Kindred.png'

const kindredStepperModules = import.meta.glob('../assets/imgs/kindred/stepper/*.{png,jpg,jpeg,webp}', { eager: true })
const getKindredStepperImg = (name) => {
  const key = Object.keys(kindredStepperModules).find((k) => k.toLowerCase().includes(name.toLowerCase()))
  return key ? kindredStepperModules[key].default : null
}

const kindredCarouselModules = import.meta.glob('../assets/imgs/kindred/carousel/*', { eager: true })
const KINDRED_CAROUSEL_IMAGES = Object.keys(kindredCarouselModules)
  .sort()
  .map((key) => kindredCarouselModules[key].default)
  .filter(Boolean)

const STEP_HEADER_OFFSET = 120

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

  return (
    <section className="quantex-page">
      <section className="quantex-opening">
        <h1>Kindred</h1>
        <h4>A community-driven mobile app connecting local food businesses with volunteer couriers to rescue and donate surplus food.</h4>
        <img src={kindredProjectImg} alt="Kindred app" />
      </section>

      <section className="overview">
        <h4>Overview</h4>
        <p>
          Kindred was born from a simple observation: good food is thrown away every day while people in our communities go hungry. Restaurants, cafés and bakeries often have surplus at closing time, but lack an easy way to get it to those who need it.
          <br /><span className="p-gap" aria-hidden="true" />
          I designed this app to connect local food businesses with volunteer couriers. Businesses can list surplus food; volunteers can claim a run and deliver it to community fridges or charities. The result is less waste, stronger communities, and a straightforward way for anyone to help.
        </p>
        {kindredProjectImg && (
          <img src={kindredProjectImg} alt="Kindred app" className="overview-gif" />
        )}
      </section>

      <section className="problem-solution">
        <div className="problem-solution-col">
          <h4 className="problem-solution-heading">Problem</h4>
          <p>Surplus food from local businesses often goes to waste because there’s no simple, reliable way to get it to people in need. Logistics are ad hoc, and many businesses don’t have time to coordinate pickups or donations. At the same time, volunteers who want to help don’t always know where to start.</p>
        </div>
        <div className="problem-solution-col">
          <h4 className="problem-solution-heading">Solution</h4>
          <p>I designed Kindred to make food rescue a routine, not a one-off. The app gives businesses a quick way to list surplus, and volunteers a clear way to claim and deliver it. By keeping the flow simple and community-centred, I aimed to make it easy for both sides to participate and see the impact of their actions.</p>
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
            <li>Pen & paper</li>
          </ul>
        </div>
      </section>

      {KINDRED_CAROUSEL_IMAGES.length > 0 && (
        <section className="quantex-page-carousel">
          <ImgsCarousel images={KINDRED_CAROUSEL_IMAGES} gap={15} />
        </section>
      )}

      <Stepper activeStep={activeStep} />
      <div ref={step1Ref}><StepperHeader number={1} word="Research" /></div>

      <section className="research-personas" aria-labelledby="kindred-research-personas-heading">
        <h3 id="kindred-research-personas-heading" className="research-personas-heading">1.1. Defining the target audience</h3>
        <h4 className="research-personas-subtitle">Personas</h4>
        <p className="research-personas-intro">
          I defined personas for both sides of the platform: local business staff who have surplus to give, and volunteers who want to help. These helped steer every design decision so the app stays quick to use for busy staff and motivating for couriers.
        </p>
        {getKindredStepperImg('persona') && (
          <div className="research-personas-imgs">
            <img src={getKindredStepperImg('persona')} alt="" className="research-personas-img" />
          </div>
        )}
      </section>

      <section className="research-empathy" aria-labelledby="kindred-research-empathy-heading">
        <h3 id="kindred-research-empathy-heading" className="research-empathy-heading">1.2. User research & synthesis</h3>
        <h4 className="research-empathy-subtitle">Empathy map</h4>
        <div className="research-empathy-text">
          <p className="research-empathy-p darker">
            The main insight was that both businesses and volunteers wanted something simple and trustworthy—no extra admin, and clear impact.
          </p>
          <p className="research-empathy-p">
            I used an empathy map to align the product with what users say, think, do, and feel. This highlighted the need for a low-friction flow and visible outcomes so people stay engaged.
          </p>
        </div>
        {getKindredStepperImg('empathy') && (
          <div className="research-empathy-fig">
            <img src={getKindredStepperImg('empathy')} alt="Empathy map for Kindred users" className="research-empathy-img" />
          </div>
        )}
      </section>

      <div ref={step2Ref}><StepperHeader number={2} word="Ideation" /></div>

      <section className="ideation-user-stories" aria-labelledby="kindred-ideation-heading">
        <h3 id="kindred-ideation-heading" className="ideation-user-stories-heading">2.1. User stories & requirements</h3>
        <div className="ideation-block">
          <h4 className="ideation-block-title">User stories</h4>
          <p className="ideation-block-p">
            I wrote user stories for businesses (listing surplus, confirming pickups) and volunteers (browsing runs, claiming and completing deliveries). Each story tied to a clear outcome so the core flow stayed focused.
          </p>
        </div>
        <div className="ideation-block">
          <h4 className="ideation-block-title">How might we</h4>
          <p className="ideation-block-p">
            I turned research into &apos;How Might We&apos; questions to keep the solution centred on ease and impact.
          </p>
          <ul className="ideation-hmw-list">
            <li>How might we make it quick for busy staff to list surplus without adding extra work?</li>
            <li>How might we make volunteers feel their effort is visible and meaningful?</li>
            <li>How might we keep the handover between business and courier simple and reliable?</li>
          </ul>
        </div>
      </section>

      <section className="ideation-mapping" aria-labelledby="kindred-mapping-heading">
        <h3 id="kindred-mapping-heading" className="ideation-mapping-heading">2.2. Mapping the journey</h3>
        <h4 className="ideation-mapping-subtitle">Sitemap</h4>
        <p className="ideation-mapping-p">
          I designed a sitemap to keep the information architecture shallow: businesses can list and manage surplus in a few taps, and volunteers can find and complete runs without getting lost.
        </p>
        {kindredProjectImg && (
          <div className="ideation-mapping-fig">
            <img src={kindredProjectImg} alt="Kindred sitemap or structure" className="ideation-mapping-img" />
          </div>
        )}
      </section>

      <div ref={step3Ref}><StepperHeader number={3} word="Design" /></div>

      <section className="design-wireframes" aria-labelledby="kindred-wireframes-heading">
        <h3 id="kindred-wireframes-heading" className="design-wireframes-heading">3.1. Sketches to low-fidelity</h3>
        <h4 className="design-wireframes-subtitle">Wireframes</h4>
        <p className="design-wireframes-p">
          I used paper and then digital wireframes to focus on the core flows: listing surplus, claiming a run, and completing a delivery. I kept the steps minimal so the app stays fast to use for both businesses and volunteers.
        </p>
        <div className="design-wireframes-carousel">
          <p className="design-wireframes-carousel-placeholder">
            Add wireframe images to <code>src/assets/imgs/kindred/stepper/</code> or <code>carousel/</code> to show wireframes or screens here.
          </p>
        </div>
      </section>

      <section className="design-visual-identity" aria-labelledby="kindred-visual-heading">
        <h3 id="kindred-visual-heading" className="design-visual-identity-heading">3.2. Visual identity</h3>
        <div className="design-visual-identity-block">
          <h4 className="design-visual-identity-subtitle">Moodboard & style</h4>
          <p className="design-visual-identity-p">
            I aimed for a warm, community-friendly look: approachable colours and clear typography so the app feels trustworthy and easy to use for both businesses and volunteers.
          </p>
        </div>
        <div className="design-hifi-intro">
          <h3 className="design-hifi-heading">3.3. High-fidelity mockups</h3>
          <h4 className="design-hifi-subtitle">Final design</h4>
          <p className="design-hifi-p">
            The high-fidelity designs focus on the main screens: listing surplus, browsing and claiming runs, and completing a delivery. I kept the layout consistent so the experience feels familiar across the app.
          </p>
        </div>
      </section>

      <section className="design-hifi" aria-labelledby="kindred-hifi-heading">
        <div className="design-hifi-final">
          <h3 className="design-hifi-final-heading">Final design</h3>
          <p className="design-hifi-final-p">
            Kindred is designed as a mobile-first app so that businesses can list surplus on the go and volunteers can pick up runs from anywhere. The flow is built to be quick and clear for both sides.
          </p>
          {kindredProjectImg && (
            <img src={kindredProjectImg} alt="Kindred final design" className="design-hifi-final-img" />
          )}
        </div>
        <div className="design-hifi-mobile">
          <h3 className="design-hifi-mobile-heading">Mobile app</h3>
          <p className="design-hifi-mobile-p">
            The app is optimised for mobile so listing surplus and completing runs can happen in real time, with minimal friction for busy staff and volunteers.
          </p>
        </div>
      </section>

      <div ref={step4Ref}><StepperHeader number={4} word="Takeaways" /></div>

      <section className="takeaways-reflections-next" aria-labelledby="kindred-reflections-heading">
        <div className="takeaways-reflections">
          <h3 id="kindred-reflections-heading" className="takeaways-rn-heading">Reflections</h3>
          <ul className="takeaways-rn-list">
            <li>
              <span>Simplicity for both sides:</span> Keeping the flow short and clear was essential so that busy staff and volunteers could use the app without extra cognitive load.
            </li>
            <li>
              <span>Community-first:</span> Designing for trust and visibility of impact helped shape the tone and structure of the app so it feels like a community tool, not just a task list.
            </li>
          </ul>
        </div>
        <div className="takeaways-next">
          <h3 id="kindred-next-heading" className="takeaways-rn-heading">Next steps</h3>
          <p className="takeaways-next-intro">If I were to continue developing Kindred, I would focus on:</p>
          <ul className="takeaways-rn-list">
            <li>
              <span>Notifications:</span> Clear alerts for new surplus and claimed runs so both sides stay in sync.
            </li>
            <li>
              <span>Impact dashboard:</span> A simple view of food rescued and deliveries completed to reinforce the value for volunteers and businesses.
            </li>
            <li>
              <span>Partnerships:</span> Onboarding flows for community fridges and charities so they can receive deliveries through the app.
            </li>
          </ul>
        </div>
      </section>

      <section className="takeaways-metrics" aria-labelledby="kindred-metrics-heading">
        <h4 id="kindred-metrics-heading" className="takeaways-metrics-heading">Metrics</h4>
        <p className="takeaways-metrics-intro">
          As a conceptual project, I haven&apos;t tracked live data. If Kindred were to launch, I would focus on: task success (listing and completing a run), drop-off points in the flow, and repeat use by both businesses and volunteers.
        </p>
      </section>
    </section>
  )
}
