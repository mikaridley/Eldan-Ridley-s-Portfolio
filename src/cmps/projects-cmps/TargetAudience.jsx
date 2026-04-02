export function TargetAudience({
  personasIntro,
  personaImages = [],
  empathyChildren,
  empathyMapSrc,
  empathyMapAlt = '',
}) {
  return (
    <div className="target-audience">
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
        <p className="research-personas-intro">{personasIntro}</p>
        <div className="research-personas-imgs">
          {personaImages.map((src, index) => (
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
        <div className="research-empathy-text">{empathyChildren}</div>
        {empathyMapSrc ? (
          <div className="research-empathy-fig">
            <img
              src={empathyMapSrc}
              alt={empathyMapAlt}
              className="research-empathy-img"
            />
          </div>
        ) : null}
      </section>
    </div>
  )
}
