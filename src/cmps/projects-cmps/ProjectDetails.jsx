/**
 * @param {{ columns: { heading: string, items: string[] }[] }} props
 */
export function ProjectDetails({ columns }) {
  return (
    <section
      className="project-details"
      aria-labelledby="project-details-first-heading"
    >
      {columns.map((col, colIndex) => (
        <div key={col.heading} className="project-details-col">
          <h4
            className="project-details-heading"
            id={
              colIndex === 0 ? 'project-details-first-heading' : undefined
            }
          >
            {col.heading}
          </h4>
          <ul className="project-details-list">
            {col.items.map((item, itemIndex) => (
              <li key={`${col.heading}-${itemIndex}-${item}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
