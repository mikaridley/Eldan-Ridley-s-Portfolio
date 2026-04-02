import { useState, useRef, useEffect } from "react";
import {
  efficasafeMedia,
  efficasafeLoFiCarouselImages,
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
          <span>1. Reducing click fatigue -</span> During testing, I noticed that a
          multi-step onboarding process felt too slow for a fast e-commerce
          environment. To fix this, I merged the 'Medication Check' and
          'Compatibility' prompts into a single, clear question. This small
          change cut down on unnecessary clicks and allowed users to get to
          their safety results much faster.
        </p>

        <h4 className="design-wireframes-subtitle before">
          Before
        </h4>

        <h4 className="design-wireframes-subtitle after">
          After
        </h4>
        <div
          className="efficasafe-iteration-compare"
          role="group"
          aria-label="Before and after: two steps combined into one"
        >
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
      </section>
    </section>
  );
}
