export function ProjectPreview({ name, image, description, liveUrl, gitUrl }) {
  return (
    <div className={`project-preview ${name}`}>
      <h2>{name}</h2>
      <div className="img-backgroung">
        <img src={image} />
      </div>

      <p>{description}</p>
      <a className="visit-web" href={liveUrl} target="_blank" rel="noreferrer">
        Visit Website
      </a>
      <a className="open-git" href={gitUrl} target="_blank" rel="noreferrer">
        Open Git
      </a>
    </div>
  )
}
