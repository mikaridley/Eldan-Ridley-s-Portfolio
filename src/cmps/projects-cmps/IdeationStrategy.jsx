/**
 * Shared "Ideation & strategy" block: HMW challenge + journey / IA mapping sections.
 * Used on Kindred and EfficaSafe (not Quantex).
 */
export function IdeationStrategy({
  howMightWeIntro,
  howMightWeItems = [],
  mappingSections = [],
  mappingSectionClassName,
}) {
  function mappingSectionClassNames(section) {
    return [
      'user-journey-mapping',
      mappingSectionClassName,
      section.sectionClassName,
    ]
      .filter(Boolean)
      .join(' ')
  }

  return (
    <div className="ideation-strategy">
      <section
        className="challenge"
        aria-labelledby="ideation-strategy-challenge-heading"
      >
        <h3
          id="ideation-strategy-challenge-heading"
          className="challenge-heading"
        >
          Defining the challenge
        </h3>

        <div className="challenge-block">
          <h4 className="challenge-block-title">How might we (HMW)</h4>
          <div className="challenge-block-p">{howMightWeIntro}</div>
          <ul className="challenge-hmw-list">
            {howMightWeItems.map((item, index) => (
              <li key={index}>
                <span>{item.lead}</span> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {mappingSections.map((section, index) => (
        <section
          key={section.id ?? index}
          className={mappingSectionClassNames(section)}
          aria-labelledby={section.headingId}
        >
          <h3
            id={section.headingId}
            className="user-journey-mapping-heading"
          >
            {section.heading}
          </h3>
          {section.subtitle != null &&
          String(section.subtitle).trim() !== '' ? (
            <h4 className="user-journey-mapping-subtitle">
              {section.subtitle}
            </h4>
          ) : null}
          <div className="user-journey-mapping-p">{section.body}</div>
          {section.imageSrc ? (
            <div className="user-journey-mapping-fig">
              <img
                src={section.imageSrc}
                alt={section.imageAlt ?? ''}
                className="user-journey-mapping-img"
              />
            </div>
          ) : null}
        </section>
      ))}
    </div>
  )
}
