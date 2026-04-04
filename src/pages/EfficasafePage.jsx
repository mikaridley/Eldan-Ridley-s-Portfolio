import { useState, useRef, useEffect } from "react";
import {
  efficasafeMedia,
  efficasafeLoFiCarouselImages,
  efficasafeHiFiCarouselImages,
} from "../config/efficasafeMedia";
import { ImgsCarousel } from "../cmps/ImgsCarousel";
import { Stepper } from "../cmps/Stepper";
import { StepperHeader } from "../cmps/StepperHeader";
import { TargetAudience } from "../cmps/projects-cmps/TargetAudience";
import { IdeationStrategy } from "../cmps/projects-cmps/IdeationStrategy";

const EFFICASAFE_PERSONA_IMAGES = [
  efficasafeMedia.personaMargret,
  efficasafeMedia.personaDavid,
];

const STEP_HEADER_OFFSET = 120;

export function EfficasafePage() {
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
    const containerEl = stepRefs[stepNumber - 1]?.current;
    if (!containerEl) return;

    const headerEl = containerEl.querySelector(".stepper-header");
    const marginBlockStartPx = headerEl
      ? parseFloat(getComputedStyle(headerEl).marginBlockStart) || 0
      : 0;

    const stickyStepperEl = document.querySelector(".stepper-container");
    const stickyStepperHeight = stickyStepperEl
      ? stickyStepperEl.getBoundingClientRect().height
      : 0;

    const y =
      containerEl.getBoundingClientRect().top +
      window.scrollY +
      marginBlockStartPx -
      stickyStepperHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <section
      className="efficasafe-page projects-layout"
      style={{
        "--efficasafe-stepper-header-bg": `url("${String(efficasafeMedia.stepperHeader)}")`,
      }}
    >
      <div className="efficasafe-line-bg">
        <img src={efficasafeMedia.lineBg} alt="Efficasafe line background" />
      </div>

      <section className="efficasafe-openning">
        <section className="efficasafe-page-header">
          <h1 className="efficasafe-page-title">EfficaSafe:</h1>
          <h2 className="efficasafe-page-subtitle">
            Clinical e-commerce widget
          </h2>
          <h4 className="efficasafe-page-placeholder">
            A B2B e-commerce widget enabling shoppers to manage and verify
            supplement compatibility with their medications in real time during
            checkout.
          </h4>
        </section>

        <section className="overview">
          <h4>Overview</h4>
          <p>
            This widget was developed to bridge a critical safety gap in
            e-commerce: the lack of real-time clinical guidance for supplement
            shoppers. While consumers increasingly purchase health products
            online, they often unknowingly choose supplements that interact
            dangerously with their existing prescription medications.
            <br />
            <span className="p-gap" aria-hidden="true" />I designed this B2B
            service to integrate a safety check directly into the checkout flow.
            The tool allows users to manage their personal medication lists and
            receive instant, evidence-based compatibility results. Beyond
            providing safety insights, the interface enables shoppers to add,
            remove, or replace items in their cart in real time based on
            clinical facts, ensuring they can complete their purchase with
            confidence.
          </p>
        </section>

        <img
          src={efficasafeMedia.preview}
          alt="Efficasafe page image"
          className="efficasafe-page-img"
        />
      </section>

      <section className="problem-solution">
        <h4 className="problem-heading">Problem</h4>
        <p className="problem-solution-p">
          Online supplement shoppers often lack the clinical context required to
          identify dangerous interactions with their existing prescription
          medications.
          <br />
          While e-commerce platforms offer vast selections, they do not provide
          real-time safety checks during the checkout process. This information
          gap means users may unknowingly purchase products that could harm
          their health or interfere with their medical treatment.
        </p>

        <h4 className="solution-heading">Solution</h4>
        <p className="problem-solution-p">
          EfficaSafe offers a B2B clinical interaction widget designed to
          integrate seamlessly into major e-commerce platforms. It provides an
          interface that empowers users to manage their medication lists and
          receive instant, tiered compatibility feedback. This feedback ranges
          from critical cautions to suggestions for nutritional optimisers.
          <br />
          By showing clear evidence and research summaries directly within the
          shopping flow, the tool replaces uncertainty with facts and ensures
          informed, safer purchasing decisions.
        </p>
      </section>

      <section className="project-details">
        <div className="project-details-col">
          <h4 className="project-details-heading">My role</h4>
          <ul className="project-details-list">
            <li>UX designer</li>
            <li>Visual designer</li>
            <li>UX writer</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Team</h4>
          <ul className="project-details-list">
            <li>UX designer</li>
            <li>Web developer</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Duration</h4>
          <ul className="project-details-list">
            <li>2.5 weeks</li>
          </ul>
        </div>
        <div className="project-details-col">
          <h4 className="project-details-heading">Tools</h4>
          <ul className="project-details-list">
            <li>Figma</li>
            <li>FigJam</li>
            <li>Gen AI</li>
          </ul>
        </div>
      </section>

      <Stepper activeStep={activeStep} onStepClick={handleStepClick} />

      <div ref={step1Ref} className="stepper-header-container">
        <StepperHeader number={1} word="Research & discovery" />
      </div>

      <TargetAudience
        personaImages={EFFICASAFE_PERSONA_IMAGES}
        personasIntro={
          <>
            These personas represent the primary user groups identified during
            the research phase, focusing on the real-world environments where
            the app would be used. They served as a guide for every design
            decision, helping me build a solution that balances the need for
            reliable clinical guidance with the pace and expectations of online
            checkout.
          </>
        }
        empathyChildren={
          <>
            <p className="research-empathy-p">
              The empathy map revealed a tension between the need for clinical
              certainty and a fast shopping flow. By analysing user thoughts and
              behaviours, I identified a demand for a tool that acts as a
              medical authority without disrupting the e-commerce experience.
            </p>
            <p className="research-empathy-p">
              <br />
              This analysis showed that users are jarred by layout shifts and
              annoyed by extra clicks. These insights led me to focus on
              stability and transparency. I ensured that critical data, such as
              caution alerts and references, is accessible in seconds. This
              prevents the user from feeling like they have left their primary
              task of completing a purchase.
            </p>
          </>
        }
        empathyMapSrc={efficasafeMedia.empathyMap}
        empathyMapAlt="Empathy map — says, thinks, does, feels"
      />

      <div ref={step2Ref} className="stepper-header-container">
        <StepperHeader number={2} word="Ideation & strategy" />
      </div>

      <IdeationStrategy
        mappingSectionClassName="user-journey-mapping--efficasafe"
        howMightWeIntro={
          <>
            The research phase uncovered clear friction points, particularly
            regarding user trust and the speed of the checkout process. To
            bridge the gap between these pain points and the final design, I
            framed the core challenges as How Might We statements. These served
            as my guiding principles to ensure that every feature, from clinical
            insights to real-time cart updates, directly addressed a specific
            user need.
          </>
        }
        howMightWeItems={[
          {
            lead: "Trust:",
            text: "How might we provide credible, science-based safety information without overwhelming the user with medical jargon?",
          },
          {
            lead: "Speed:",
            text: "How might we allow shoppers to manage their medication lists quickly so the safety check does not feel like a chore?",
          },
          {
            lead: "Confidence:",
            text: "How might we enable users to update their cart in real time based on clinical advice to ensure a safe purchase?",
          },
          {
            lead: "Stability:",
            text: "How might we integrate the widget into the Amazon checkout flow while maintaining a consistent and non-intrusive layout?",
          },
        ]}
        mappingSections={[
          {
            id: "efficasafe-journey",
            headingId: "efficasafe-user-journey-heading",
            heading: "Mapping the experience",
            subtitle: "User journey map",
            body: (
              <>
                I created a User Journey to map the experience of a shopper
                during a high stakes checkout. By documenting the shift from
                initial health anxiety to informed confidence, I identified
                exactly where clinical transparency was needed. This process
                ensured the final flow felt like a supportive health assistant
                rather than a disruptive hurdle.
              </>
            ),
            imageSrc: efficasafeMedia.userJourneyMap || undefined,
            imageAlt: "EfficaSafe user journey map",
          },
          {
            id: "efficasafe-sitemap",
            headingId: "efficasafe-sitemap-heading",
            heading: "Information architecture (IA)",
            sectionClassName: "user-journey-mapping--efficasafe-ia",
            body: (
              <>
                I designed the Information Architecture to transform complex
                medical data into a clear and actionable checkout experience. By
                categorising findings into a tiered system of Caution,
                Replenish, and Optimisers, I focused on reducing the user's
                cognitive load. This structured approach ensures that shoppers
                can quickly identify critical safety risks while also
                discovering ways to support their long term health without
                leaving the Amazon platform.
              </>
            ),
            imageSrc: efficasafeMedia.sitemap || undefined,
            imageAlt: "EfficaSafe sitemap",
          },
        ]}
      />

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
          flows of the widget—from onboarding and search through compatibility
          states, learn-more panels, and reference content—while keeping the
          checkout context clear and low-friction.
        </p>
        <div className="design-wireframes-carousel imgs-carousel-wrapper">
          {efficasafeLoFiCarouselImages.length > 0 ? (
            <ImgsCarousel images={efficasafeLoFiCarouselImages} />
          ) : null}
        </div>

        <h4 className="design-wireframes-subtitle">
          From insights to iteration
        </h4>
        <p className="design-wireframes-lofi-p">
          <span>1. Reducing click fatigue -</span> During testing, I noticed
          that a multi-step onboarding process felt too slow for a fast
          e-commerce environment. To fix this, I merged the 'Medication Check'
          and 'Compatibility' prompts into a single, clear question. This small
          change cut down on unnecessary clicks and allowed users to get to
          their safety results much faster.
        </p>

        <div
          className="efficasafe-iteration-block"
          role="group"
          aria-labelledby="efficasafe-iteration-before-heading efficasafe-iteration-after-heading"
        >
          <h4
            id="efficasafe-iteration-before-heading"
            className="efficasafe-iteration-label efficasafe-iteration-label--before"
          >
            Before
          </h4>
          <h4
            id="efficasafe-iteration-after-heading"
            className="efficasafe-iteration-label efficasafe-iteration-label--after"
          >
            After
          </h4>
          <img
            src={efficasafeMedia.iterationCompareBefore}
            alt="EfficaSafe iteration — before (screen 1)"
            className="efficasafe-iteration-img"
          />
          <span className="efficasafe-iteration-op" aria-hidden="true">
            +
          </span>
          <img
            src={efficasafeMedia.iterationCompareBefore}
            alt="EfficaSafe iteration — before (screen 2)"
            className="efficasafe-iteration-img"
          />
          <span className="efficasafe-iteration-op" aria-hidden="true">
            =
          </span>
          <img
            src={efficasafeMedia.iterationCompareAfter}
            alt="EfficaSafe iteration — after"
            className="efficasafe-iteration-img"
          />
        </div>

        <p className="design-wireframes-lofi-p">
          <span>2. Standardising widget height -</span> The initial design had
          varying overlay heights, which caused the Amazon page to jump around -
          a problem known as 'layout thrashing'. I updated the interface so that
          every screen, from clinical insights to scientific references, shares
          a consistent height. This keeps the browsing experience steady and
          predictable for the shopper.
        </p>

        <div
          className="efficasafe-iteration-block efficasafe-iteration-block--pair"
          role="group"
          aria-labelledby="efficasafe-iteration-before-v2-heading efficasafe-iteration-after-v2-heading"
        >
          <h4
            id="efficasafe-iteration-before-v2-heading"
            className="efficasafe-iteration-label efficasafe-iteration-label--before"
          >
            Before
          </h4>
          <h4
            id="efficasafe-iteration-after-v2-heading"
            className="efficasafe-iteration-label efficasafe-iteration-label--after"
          >
            After
          </h4>
          <img
            src={efficasafeMedia.iterationCompareBeforeV2}
            alt="EfficaSafe iteration — before (standardised widget height)"
            className="efficasafe-iteration-img"
          />
          <img
            src={efficasafeMedia.iterationCompareAfterV2}
            alt="EfficaSafe iteration — after (standardised widget height)"
            className="efficasafe-iteration-img"
          />
        </div>
      </section>

      <section
        className="user-journey-mapping user-journey-mapping--efficasafe user-journey-mapping--efficasafe-moodboard"
        aria-labelledby="efficasafe-moodboard-heading"
      >
        <h3
          id="efficasafe-moodboard-heading"
          className="user-journey-mapping-heading"
        >
          Moodboard
        </h3>
        <div className="user-journey-mapping-p">
          <p>
            I started with EfficaSafe&apos;s current web and widget designs as a
            foundation to stay consistent with the brand. From there, I looked
            for ways to elevate the UI - specifically by refining the typography
            and opening up the spacing to make the data feel less cramped.
          </p>
          <p>
            My goal was to take their existing functional aesthetic and evolve
            it into a cleaner, more modern interface that handles complex
            clinical information with much better clarity.
          </p>
        </div>
        <div className="user-journey-mapping-fig">
          <img
            src={efficasafeMedia.moodboard}
            alt="EfficaSafe moodboard"
            className="user-journey-mapping-img"
          />
        </div>
      </section>

      <section className="style-guide">
        <h4>Style guide</h4>
        <p>
          I built this sticker sheet with a library of components designed for
          maximum flexibility across different e-commerce platforms. The goal
          was to create a professional, clinical feel that works anywhere, so I
          used a neutral but trustworthy colour palette and focused heavily on
          highly readable typography for accessibility.
          <br /> By building these as modular components, I made it easy to
          switch, edit, and scale the widget while keeping the design system
          perfectly consistent.
        </p>
        <img
          src={efficasafeMedia.stickerSheet}
          alt="EfficaSafe style guide sticker sheet: typography, colours, buttons, search, chips, and icons"
          className="style-guide-img"
        />
      </section>

      <section
        className="hifi-design"
        aria-labelledby="efficasafe-hifi-design-heading"
      >
        <h3
          id="efficasafe-hifi-design-heading"
          className="hifi-design-heading"
        >
          High-fidelity design
        </h3>
        <p className="hifi-design-p">
          The final design creates a clean, professional look that fits into any
          mobile e-commerce app while keeping its clinical identity. I
          prioritised readable typography and a clear hierarchy to make complex
          medical data easy to scan on smaller screens.
          <br /> By keeping the interface neutral and accessible, I ensured the
          widget feels trustworthy and remains easy to use for all mobile users.
        </p>
        <div className="efficasafe-hifi-carousel imgs-carousel-wrapper">
          {efficasafeHiFiCarouselImages.length > 0 ? (
            <ImgsCarousel images={efficasafeHiFiCarouselImages} />
          ) : null}
        </div>
      </section>

      
      <section
        className="efficasafe-inclusive-content"
        aria-labelledby="efficasafe-inclusive-heading"
      >
        <h3
          id="efficasafe-inclusive-heading"
          className="efficasafe-inclusive-title"
        >
          Inclusive content & clarity
        </h3>
        <p className="efficasafe-inclusive-intro">
          I focused on translating technical clinical warnings into clear,
          actionable language. By swapping professional jargon for plain English,
          I ensured that critical safety information is easy for any user to
          understand, reducing the risk of confusion and making the widget more
          inclusive.
        </p>

        <div className="efficasafe-inclusive-pair">
          <div className="efficasafe-inclusive-pair-grid">
            <h4 className="efficasafe-inclusive-label">Before</h4>
            <img
              src={efficasafeMedia.inclusiveContentBefore}
              alt="Compatibility screen with technical caution copy"
              className="efficasafe-inclusive-mockup"
              loading="lazy"
              decoding="async"
            />
            <blockquote className="efficasafe-inclusive-quote">
              <p>
                &lsquo;Concurrent use of <strong>St. John&apos;s Wort</strong>{' '}
                and <strong>Warfarin</strong> is clinically discouraged. This
                interaction may compromise therapeutic efficacy and elevate the
                risk of thromboembolic complications.&rsquo;
              </p>
            </blockquote>
          </div>
        </div>

        <div className="efficasafe-inclusive-pair">
          <div className="efficasafe-inclusive-pair-grid">
            <h4 className="efficasafe-inclusive-label">After</h4>
            <img
              src={efficasafeMedia.inclusiveContentAfter}
              alt="Compatibility screen with plain-language caution copy"
              className="efficasafe-inclusive-mockup"
              loading="lazy"
              decoding="async"
            />
            <blockquote className="efficasafe-inclusive-quote">
              <p>
                &lsquo;Avoid taking <strong>St. John&apos;s Wort</strong> with{' '}
                <strong>Warfarin</strong>. This combination may reduce medication
                effectiveness and increase blood clot risk.&rsquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <div ref={step4Ref} className="stepper-header-container">
        <StepperHeader number={4} word="Takeaways" />
      </div>

      <section
        className="takeaways-reflections-next"
        aria-labelledby="efficasafe-takeaways-reflections-heading"
      >
        <div className="takeaways-reflections">
          <h4
            id="efficasafe-takeaways-reflections-heading"
            className="takeaways-rn-heading"
          >
            Reflections
          </h4>
          <p className="takeaways-reflections-intro">
            Working on a med-tech product was an eye-opening challenge that
            required balancing user needs with strict legal and medical
            constraints.
          </p>
          <ul className="takeaways-rn-list">
            <li>
              <span>Weight of language:</span> I learnt that every word carries
              significant weight when dealing with clinical safety and user
              trust.
            </li>
            <li>
              <span>Legal constraints:</span> I enjoyed the challenge of
              navigating what can and cannot be said within medical-tech
              regulations.
            </li>
            <li>
              <span>Inclusive writing:</span> Interpreting complex jargon into
              plain English reinforced that UX writing is as vital as visual
              design for accessibility.
            </li>
          </ul>
        </div>
        <div className="takeaways-next">
          <h4
            id="efficasafe-takeaways-next-heading"
            className="takeaways-rn-heading"
          >
            Next steps
          </h4>
          <p className="takeaways-next-intro">
            Since the project is currently in the proof of concept (POC) phase,
            I have a clear idea of how I would take it further.
          </p>
          <ul className="takeaways-rn-list">
            <li>
              <span>Going beyond mobile:</span> My first priority would be
              adapting the layout so it looks just as clean and professional on
              a desktop browser.
            </li>
            <li>
              <span>Testing the copy:</span> I want to run real tests to see if
              people actually find the &lsquo;plain English&rsquo; version
              easier to trust than the medical jargon.
            </li>
            <li>
              <span>Expanding the library:</span> I would look at how these
              components can handle even more complex medical categories without
              cluttering the screen.
            </li>
          </ul>
        </div>
      </section>

    </section>
  );
}
