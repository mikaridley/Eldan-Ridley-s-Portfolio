import { useState, useRef, useEffect } from "react";
import { Stepper } from "../cmps/Stepper";
import { StepperHeader } from "../cmps/StepperHeader";
import { ImgsCarousel } from "../cmps/ImgsCarousel";
import appScreen from "../assets/imgs/kindred/Hand showing Kindred app.png";
import kindredAppGif from "../assets/imgs/kindred/stepper/app-gif.gif";

// —— Constants (module globs & config) —————————————————————————————————————
const kindredStepperModules = import.meta.glob(
  "../assets/imgs/kindred/stepper/*.{png,jpg,jpeg,webp,svg}",
  { eager: true },
);
const lowWireframesCarouselModules = import.meta.glob(
  "../assets/imgs/kindred/stepper/low-fi-carousel/*.{png,jpg,jpeg,webp,svg}",
  { eager: true },
);
const hiFiCarouselModules = import.meta.glob(
  "../assets/imgs/kindred/stepper/hi-fi-carousel/*.{png,jpg,jpeg,webp,svg}",
  { eager: true },
);

const STEP_HEADER_OFFSET = 120;

// —— Helper functions ——————————————————————————————————————————————————————
function getKindredStepperImg(name) {
  const nameLower = name.toLowerCase()
  const matches = Object.keys(kindredStepperModules).filter((k) =>
    k.toLowerCase().includes(nameLower),
  )
  // Prefer SVG when both PNG + SVG exist for the same "name".
  const svgKey = matches.find((k) => k.toLowerCase().endsWith('.svg'))
  const key = svgKey ?? matches[0]
  return key ? kindredStepperModules[key].default : null
}

// —— Derived data (uses helpers above) —————————————————————————————————————
const KINDRED_PERSONA_IMAGES = [
  getKindredStepperImg("Persona - Marco"),
  getKindredStepperImg("Persona - Sarah"),
].filter(Boolean);
const EMPATHY_MAP_IMG = getKindredStepperImg("Empathy map");
const USER_JOURNEY_MAP_IMG = getKindredStepperImg("User journey map");
const SITE_MAP_IMG = getKindredStepperImg("Sitemap");
const ABOVE_THE_FOLD_BEFORE_IMG = getKindredStepperImg(
  "Above the fold comparing - beofre",
);
const ABOVE_THE_FOLD_AFTER_IMG = getKindredStepperImg(
  "Above the fold comparing - after",
);
const MOODBOARD_IMG = getKindredStepperImg("Moodboard");
const STICKER_SHEET_IMG = getKindredStepperImg("Sticker sheet");
const PHONE_HI_FI_IMG = getKindredStepperImg("Phone hi-fi");
const PHONE_LO_FI_IMG = getKindredStepperImg("Phone lo-fi");
const COLOUR_PALETTE_IMG = getKindredStepperImg("Colour palette comparing");
const METRICS_IMG = getKindredStepperImg("Metrics");

const LOW_WIREFRAMES_CAROUSEL_IMAGES = Object.keys(lowWireframesCarouselModules)
  .sort()
  .filter((k) => k.toLowerCase().endsWith('.svg'))
  .map((key) => lowWireframesCarouselModules[key].default)
  .filter(Boolean);

const HI_FI_CAROUSEL_IMAGES = Object.keys(hiFiCarouselModules)
  .sort()
  .filter((k) => k.toLowerCase().endsWith('.svg'))
  .map((key) => hiFiCarouselModules[key].default)
  .filter(Boolean);

const KINDRED_FINAL_DESIGN_IMAGES = [kindredAppGif];

// —— Component —————————————————————————————————————————————————────────────
export function KindredPage() {
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref];
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    function onScroll() {
      let current = 1;
      stepRefs.forEach((ref, i) => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top <= STEP_HEADER_OFFSET) current = i + 1;
        }
      });
      setActiveStep(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleStepClick(stepNumber) {
    const containerEl = stepRefs[stepNumber - 1]?.current
    if (!containerEl) return

    const headerEl = containerEl.querySelector('.stepper-header')
    const marginBlockStartPx = headerEl
      ? parseFloat(getComputedStyle(headerEl).marginBlockStart) || 0
      : 0

    const stickyStepperEl = document.querySelector('.stepper-container')
    const stickyStepperHeight = stickyStepperEl
      ? stickyStepperEl.getBoundingClientRect().height
      : 0

    const y =
      containerEl.getBoundingClientRect().top +
      window.scrollY +
      marginBlockStartPx -
      stickyStepperHeight

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <section className="kindred-page projects-layout">
      <div className="kindred-opening-bg"></div>
      <section className="kindred-opening">
        <h1>Kindred</h1>
        <h4>
          A community-driven mobile app connecting local food businesses with
          volunteer couriers to rescue and donate surplus food.
        </h4>
        <img src={appScreen} alt="app-screen" />
      </section>

      <section className="overview">
        <h4>Overview</h4>
        <p className="overview-p">
          Kindred was developed to address a significant gap in local food
          sustainability: the difficulty of getting surplus food from businesses
          to those who can use it. Many local food businesses want to reduce
          waste, but they often lack the time to manage logistics or a reliable
          way to connect with volunteers during a busy shift.
          <br />
          <span className="p-gap" aria-hidden="true" />I designed this platform
          to bridge that gap by simplifying the donation process. By focusing on
          high-contrast accessibility and clear role transparency, Kindred
          allows business owners to schedule a rescue in seconds, ensuring that
          surplus food is efficiently redirected to the community instead of
          being thrown away.
        </p>

        <h4 className="problem-heading">Problem</h4>
        <p className="problem-solution-p">
          The logistical gap between local businesses and food rescue
          initiatives is a significant hurdle for sustainability.
          <br />
          Many food business managers want to donate their surplus, but they are
          often too busy during a high-pressure shift to manage complex
          logistics or coordinate with volunteers.
          <br />
          Without a reliable and quick way to bridge this gap, high-quality food
          is frequently thrown away simply because the effort to donate it is
          too high.
        </p>

        <h4 className="solution-heading">Solution</h4>
        <p className="problem-solution-p">
          I designed Kindred to eliminate this friction with a streamlined,
          "seconds-to-submit" donation flow. The platform connects businesses
          directly with volunteer couriers, providing total transparency
          regarding who is collecting the food and when.
          <br />
          By prioritising high-contrast visuals and a clear feedback loop, I
          ensured the app remains accessible and easy to navigate even in a
          hectic kitchen environment, allowing staff to complete a rescue and
          return to their work without delay.
        </p>
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
            <li>FigJam</li>
            <li>Good old fashion<br/> pen & paper</li>
            <li>Gen AI</li>
          </ul>
        </div>
      </section>

      <Stepper
        activeStep={activeStep}
        onStepClick={handleStepClick}
        className="stepper"
      />

      <div ref={step1Ref} className="stepper-header-container">
        <StepperHeader number={1} word="Research & discovery" />
      </div>

      <section
        className="research-personas"
        aria-labelledby="research-personas-heading"
      >
        <h3
          id="research-personas-heading"
          className="research-personas-heading"
        >
          Defining the target audience
        </h3>
        <h4 className="research-personas-subtitle">Personas</h4>
        <p className="research-personas-intro">
          These personas represent the primary user groups identified during the
          research phase, focusing on the real-world environments where the app
          would be used. They served as a guide for every design decision,
          helping me build a solution that balances the high-pressure needs of
          busy kitchen managers with the logistical requirements of volunteer
          couriers.
        </p>
        <div className="research-personas-imgs">
          {KINDRED_PERSONA_IMAGES.map((src, index) => (
            <img
              key={index}
              src={src}
              alt=""
              className="research-personas-img"
            />
          ))}
        </div>
      </section>

      <section
        className="research-empathy"
        aria-labelledby="research-empathy-heading"
      >
        <h3 id="research-empathy-heading" className="research-empathy-heading">
          User research & synthesis
        </h3>
        <h4 className="research-empathy-subtitle">Empathy map</h4>
        <div className="research-empathy-text">
          <p className="research-empathy-p">
            The empathy map highlighted that restaurant staff need an extremely
            fast process that doesn't disrupt their work.
            <br />
            By analysing what they said, thought, did, and felt, I identified a
            demand for a donation process that removes the logistical 'chore' of
            arranging pickups. This allowed me to focus on creating a fast,
            transparent experience that ensures staff can manage surplus food
            without being distracted from their primary duties.
          </p>
        </div>
        {EMPATHY_MAP_IMG && (
          <div className="research-empathy-fig">
            <img
              src={EMPATHY_MAP_IMG}
              alt="Empathy map for Robert - says, thinks, does, feels"
              className="research-empathy-img"
            />
          </div>
        )}
      </section>

      <div ref={step2Ref} className="stepper-header-container">
        <StepperHeader number={2} word="Ideation & strategy" />
      </div>

      <section className="challenge" aria-labelledby="challenge">
        <h3 id="challenge-heading" className="challenge-heading">
          Defining the challenge
        </h3>

        <div className="challenge-block">
          <h4 className="challenge-block-title">How might we</h4>
          <p className="challenge-block-p">
            I translated my research findings and persona pain points into 'How
            Might We' statements, focusing specifically on the unique needs of
            the donor and the volunteer courier. This process allowed me to
            reframe logistical hurdles as design opportunities, ensuring the
            solution prioritised speed for businesses and flexibility for those
            on the move.
          </p>
          <ul className="challenge-hmw-list">
            <li>
              <span>For the Donor (Marco):</span> How might we make logging a
              food donation feel as effortless as possible?{" "}
            </li>
            <li>
              <span>For the Courier (Sarah):</span> How might we provide
              'at-a-glance' mission details so volunteers can navigate safely
              while on the move?
            </li>
            <li>
              <span>For the Handover:</span> How might we create a seamless,
              'grab-and-go' experience that eliminates waiting time for both
              parties?
            </li>
          </ul>
        </div>
      </section>

      <section
        className="user-journey-mapping"
        aria-labelledby="user-journey-mapping-heading"
      >
        <h3
          id="user-journey-mapping-heading"
          className="user-journey-mapping-heading"
        >
          Mapping the experience
        </h3>
        <h4 className="user-journey-mapping-subtitle">User journey map</h4>
        <p className="user-journey-mapping-p">
          To deeply understand Marco's experience, I mapped his journey from
          identifying food waste to completing a donation. This allowed me to
          pinpoint exactly when he feels the most pressure - during the log
          process - and highlighted the need for a 'grab-and-go' solution that
          respects his busy schedule.
        </p>
        {USER_JOURNEY_MAP_IMG && (
          <div className="user-journey-mapping-fig">
            <img
              src={USER_JOURNEY_MAP_IMG}
              alt="Kindred user journey map"
              className="user-journey-mapping-img"
            />
          </div>
        )}
      </section>

      <section
        className="user-journey-mapping"
        aria-labelledby="user-journey-mapping-heading"
      >
        <h3
          id="user-journey-mapping-heading"
          className="user-journey-mapping-heading"
        >
          Information architecture
        </h3>
        <h4 className="user-journey-mapping-subtitle">Sitemap</h4>
        <p className="user-journey-mapping-p">
          I designed the Information Architecture to ensure the donation process
          is as simplified as possible, directly addressing the need for
          efficiency during a busy restaurant shift. By prioritising a shallow
          menu structure and creating a dedicated 'Impact Centre', I focused on
          making the app easy and quick for the donor to use.
        </p>
        {SITE_MAP_IMG && (
          <div className="user-journey-mapping-fig">
            <img
              src={SITE_MAP_IMG}
              alt="Kindred user journey map"
              className="user-journey-mapping-img"
            />
          </div>
        )}
      </section>

      <div ref={step3Ref} className="stepper-header-container">
        <StepperHeader number={3} word="Design" />
      </div>

      <section
        className="design-wireframes"
        aria-labelledby="design-wireframes-heading"
      >
        <h4 className="design-wireframes-subtitle">Low-fidelity wireframes</h4>
        <p className="design-wireframes-lofi-p">
          I developed low-fidelity wireframes to establish the core layout and
          functionality of the app. By focusing on a clean and simple interface,
          I ensured that Marco could navigate the primary tasks - such as
          logging a donation or checking his impact - without unnecessary visual
          distractions.
        </p>
        <div className="design-wireframes-carousel imgs-carousel-wrapper">
          {LOW_WIREFRAMES_CAROUSEL_IMAGES.length > 0 ? (
            <ImgsCarousel images={LOW_WIREFRAMES_CAROUSEL_IMAGES} gap={15} />
          ) : (
            <p className="design-wireframes-carousel-placeholder">
              Add wireframe images to{" "}
              <code>
                src/assets/imgs/quantex/stepper/low-wireframes-carousel/
              </code>{" "}
              to see the carousel.
            </p>
          )}
        </div>

        <h4 className="design-wireframes-subtitle">
          From insights to iteration
        </h4>
        <p className="design-wireframes-lofi-p">
          During usability testing, I discovered that my "perfectly" aligned
          layout created a phantom floor. Because the top section ended exactly
          at the screen's edge, users assumed there was no more content and
          failed to scroll. This meant the most important action - the Donate
          button - was being completely missed.
          <br />
          To fix this, I moved the main CTA to the top of the page to ensure the
          primary user flow was immediately visible above the fold. I also
          intentionally cut off the bottom of the "Upcoming Pickups" section to
          provide a clear visual cue that more information exists below.
        </p>
        <img
          src={ABOVE_THE_FOLD_BEFORE_IMG}
          alt="above-the-fold-img"
          className="above-the-fold-img-1"
        />
        <img
          src={ABOVE_THE_FOLD_AFTER_IMG}
          alt="above-the-fold-img"
          className="above-the-fold-img-2"
        />
      </section>

      <section
        className="design-visual-identity"
        aria-labelledby="design-visual-identity-heading"
      >
        <h3
          id="design-visual-identity-heading"
          className="design-visual-identity-heading"
        >
          Visual identity & moodboard
        </h3>

        <div className="design-visual-identity-block">
          <h4 className="design-visual-identity-subtitle">Moodboard</h4>
          <p className="design-visual-identity-p">
            I looked for visuals that balanced a sense of security with the
            excitement of travel. I chose a blue accent to build professional
            trust, paired with cleaner, lighter tones to ensure the app feels
            like a helpful travel companion rather than a complex financial
            tool.
          </p>
          {MOODBOARD_IMG && (
            <div className="design-visual-identity-fig">
              <img
                src={MOODBOARD_IMG}
                alt="Moodboard - banking and travel app UI inspiration"
                className="design-visual-identity-img"
              />
            </div>
          )}
        </div>
      </section>

      <section
        className="user-journey-mapping"
        aria-labelledby="user-journey-mapping-heading"
      >
        <h4 className="user-journey-mapping-subtitle">Style guide</h4>
        <p className="user-journey-mapping-p">
          I developed a library of reusable components to ensure a consistent
          and professional experience across the entire app. By using clear
          iconography and a structured visual hierarchy, I ensured that the
          interface remains intuitive for donors like Marco, allowing them to
          navigate complex tasks - such as managing multiple food categories or
          tracking deliveries - with ease.
        </p>
        {STICKER_SHEET_IMG && (
          <div className="user-journey-mapping-fig">
            <img
              src={STICKER_SHEET_IMG}
              alt="Kindred user journey map"
              className="user-journey-mapping-img"
            />
          </div>
        )}
      </section>

      <section className="hi-fi-design">
        <h3 id="hi-fi-design-heading" className="hi-fi-design-heading">
          High-fidelity design
        </h3>
        <p className="hi-fi-design-p">
          The final designs bring the Kindred brand to life with a professional
          and trustworthy aesthetic. After establishing the core layout, I
          focused on refining the visual details to ensure the app felt reliable
          for business owners. This stage was about moving beyond the structure
          and ensuring the interface felt high-quality and ready for a
          real-world environment.
        </p>

        <h4 className="hi-fi-design-subtitle">
          Refining for accessibility (WCAG)
        </h4>
        <p className="hi-fi-design-p">
          While the initial green palette served as a placeholder, I found that
          it did not meet the necessary <span>WCAG</span> contrast standards or reflect the
          premium feel of the Kindred brand. I decided to iterate on the colour
          scheme, transitioning to a deep wine and purple palette. This change
          was a dual success.<br/> Technically, the new primary colour (#872847)
          achieved a 8.66:1 contrast ratio, exceeding <span>WCAG AAA</span> standards for
          maximum readability. Visually, it replaced the generic green with a
          warm, trustworthy, and high-quality aesthetic that perfectly captures
          the Kindred brand identity. This final palette ensures the interface
          is both inclusive for all users and stylistically sophisticated.
        </p>
        <div className="hi-fi-imgs">
          <h4>Before</h4>
          <h4>After</h4>
          <h4>Accessibility validation</h4>
          <img
            src={PHONE_LO_FI_IMG}
            alt="above-the-fold-img"
            className="above-the-fold-img-1"
          />
          <img
            src={PHONE_HI_FI_IMG}
            alt="above-the-fold-img"
            className="above-the-fold-img-2"
          />
          <img
            src={COLOUR_PALETTE_IMG}
            alt="Colour palette comparing"
            className="color-palette-img-3"
          />
        </div>
      </section>

      <section
        className="kindred-final-design"
        aria-labelledby="kindred-final-design-heading"
      >
        <div className="kindred-final-design-inner">
          <div className="kindred-final-design-media">
            {KINDRED_FINAL_DESIGN_IMAGES.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Kindred app - Final design"
                className="kindred-final-design-img"
              />
            ))}
          </div>
          <div className="kindred-final-design-content">
            <h3
              id="kindred-final-design-heading"
              className="kindred-final-design-heading"
            >
              Final design
            </h3>
            <p className="kindred-final-design-p">
              The final high-fidelity screens represent a balance between a
              premium brand identity and practical utility.
              <br />
              By focusing on a clean, single-column layout and high-contrast
              elements, I ensured the app remains functional in the fast-paced
              environment of a professional kitchen.
              <br />
              Whether Marco is quickly logging a donation between orders or
              tracking a courier&apos;s arrival, the interface provides the
              clarity and speed he needs to manage food waste without disrupting
              his workflow.
            </p>
          </div>
        </div>
      </section>

      <div className="hi-fi-carousel imgs-carousel-wrapper">
        {HI_FI_CAROUSEL_IMAGES.length > 0 ? (
          <ImgsCarousel images={HI_FI_CAROUSEL_IMAGES} gap={15} />
        ) : (
          <p className="hi-fi-carousel-placeholder">
            Add wireframe images to{" "}
            <code>
              src/assets/imgs/quantex/stepper/low-wireframes-carousel/
            </code>{" "}
            to see the carousel.
          </p>
        )}
      </div>

      <div ref={step4Ref} className="stepper-header-container">
        <StepperHeader number={4} word="Takeaways" />
      </div>

      <section
        className="takeaways-reflections-next"
        aria-labelledby="takeaways-reflections-heading"
      >
        <div className="takeaways-reflections">
          <h3
            id="takeaways-reflections-heading"
            className="takeaways-rn-heading"
          >
            Reflections
          </h3>
          <ul className="takeaways-rn-list">
            <li>
              <span>Design for the real world:</span> Working on Marco’s journey
              taught me that a design has to work in the user's actual
              environment. For a busy restaurant owner, this meant prioritising
              speed and clarity above all else, ensuring the app fits into a
              high-pressure kitchen routine rather than slowing it down.
            </li>
            <li>
              <span>The danger of the 'perfect' layout:</span> My experience
              with the 'phantom floor' was a massive lesson in user behaviour. I
              learnt that a visually 'perfect' or tidy design can sometimes be a
              barrier to usability. Intentionally creating visual cues for
              scrolling is often more important than a static, 'complete' look.
            </li>
            <li>
              <span>brand vs accessibility:</span> I learnt that accessibility
              and brand identity should work in harmony. Swapping the
              placeholder green for the WCAG-compliant wine palette proved that
              you don't have to sacrifice a sophisticated aesthetic to meet
              inclusive design standards.
            </li>
          </ul>
        </div>
        <div className="takeaways-next">
          <h3 id="takeaways-next-heading" className="takeaways-rn-heading">
            Next steps
          </h3>
          <p className="takeaways-next-intro">
            If I were to continue developing Kindred, I would focus on the
            following:
          </p>
          <ul className="takeaways-rn-list">
            <li>
              <span>The recipient experience:</span> I would design the
              secondary side of the app for community members. This would
              involve creating a discovery flow where users can browse available
              donations, filter by dietary requirements, and coordinate
              pick-ups.
            </li>
            <li>
              <span>Communication & messaging:</span> I would design a dedicated
              Messaging System to allow donors and couriers to coordinate
              smoothly, handling quick updates regarding collection times or
              building access.
            </li>
            <li>
              <span>The impact centre:</span> While the homepage offers a teaser
              of the donor's contributions, I would design the full Impact
              Centre flow. This would include detailed data visualisations of
              food saved and the ability for businesses to share these
              milestones with their customers.
            </li>
          </ul>
        </div>
      </section>

      <section
        className="takeaways-metrics"
        aria-labelledby="takeaways-metrics-heading"
      >
        <h3
          id="takeaways-metrics-heading"
          className="takeaways-metrics-heading"
        >
          Metrics
        </h3>
        <p className="takeaways-metrics-intro">
          As this is a conceptual project, I haven't tracked live user data.
          However, To evaluate the success of Kindred in a real-world setting, I
          would track:
        </p>
        <ul className="takeaways-metrics-list">
          <li>
            <span>Time to donate:</span> I would measure the average time it
            takes for a donor to log a new item. For a user like Marco, success
            means completing the task in under 60 seconds.
          </li>
          <li>
            <span>Scroll depth on homepage:</span> Following my fix for the
            'phantom floor', I would track how many users scroll below the fold
            to ensure the 'Upcoming Pickups' section is being utilised.
          </li>
          <li>
            <span>Retention rate:</span> By monitoring how often businesses
            return to log donations, I could gauge if the app provides enough
            value and ease of use to become a regular part of their kitchen
            closing routine.
          </li>
        </ul>
        {METRICS_IMG && (
          <div className="takeaways-metrics-fig">
            <img
              src={METRICS_IMG}
              alt="Metrics graph - Task success rate, Drop-off reduction, WCAG compliance"
              className="takeaways-metrics-img"
            />
          </div>
        )}
      </section>
    </section>
  );
}
