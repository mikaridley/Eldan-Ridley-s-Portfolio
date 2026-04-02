import { useState, useRef, useEffect } from "react";
import { efficasafeMedia } from "../config/efficasafeMedia";
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
        '--efficasafe-stepper-header-bg': `url("${String(efficasafeMedia.stepperHeader)}")`,
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
            the research phase, focusing on the real-world environments where the
            app would be used. They served as a guide for every design decision,
            helping me build a solution that balances the need for reliable
            clinical guidance with the pace and expectations of online checkout.
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
            <br/>
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
        howMightWeIntro={
          <>
            I translated research and persona pain points into &apos;How Might
            We&apos; statements focused on the shopper managing medications and
            supplements during checkout. This reframed clinical and UX
            constraints as design opportunities: keep the flow fast, make
            safety visible, and avoid breaking trust at the moment of purchase.
          </>
        }
        howMightWeItems={[
          {
            lead: 'For Margret (busy parent):',
            text: 'How might we surface interaction risk without turning checkout into a medical questionnaire?',
          },
          {
            lead: 'For David (health-conscious shopper):',
            text: "How might we give evidence-backed reassurance in seconds so he never doubts the widget's authority?",
          },
          {
            lead: 'For the purchase flow:',
            text: 'How might we keep users oriented in the cart so critical cautions never feel like a detour?',
          },
        ]}
        mappingSections={[
          {
            id: 'efficasafe-journey',
            headingId: 'efficasafe-user-journey-heading',
            heading: 'Mapping the experience',
            subtitle: 'User journey map',
            body: (
              <>
                I mapped the journey from reviewing a supplement in the cart
                through adding medications, running the compatibility check, and
                completing checkout. It highlighted where hesitation and
                cognitive load spike—especially when results conflict with the
                user’s intent to buy—and informed how I prioritised clarity and
                stability in the UI.
              </>
            ),
            imageSrc: efficasafeMedia.userJourneyMap || undefined,
            imageAlt: 'EfficaSafe user journey map',
          },
          {
            id: 'efficasafe-sitemap',
            headingId: 'efficasafe-sitemap-heading',
            heading: 'Information architecture',
            subtitle: 'Sitemap',
            body: (
              <>
                I structured the widget so users can manage medications, view
                tiered compatibility results, and access references without
                leaving the checkout context. The goal was a shallow hierarchy
                with a single clear path back to the cart, reducing extra clicks
                and layout shifts.
              </>
            ),
            imageSrc: efficasafeMedia.sitemap || undefined,
            imageAlt: 'EfficaSafe sitemap',
          },
        ]}
      />

    </section>
  );
}
