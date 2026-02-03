import marshmelloPreview from '../assets/imgs/marshmelloPreview.png'
import simplePenPreview from '../assets/imgs/simplePenPreview.png'
import memeCraftPreview from '../assets/imgs/memeCraftPreview.png'
import { ProjectPreview } from './ProjectPreview'

export function ProjectList() {
  return (
    <section className="Project-list ">
      <h2>Top Projects</h2>
      <ProjectPreview
        name={'marshmello'}
        description={
          'Full-stack Trello clone. Developed with two teammates, it is a real-time, collaborative task management app with React, Node.js, MongoDB, and Socket.io.'
        }
        image={marshmelloPreview}
        liveUrl={'https://marshmello-0v1f.onrender.com/'}
        gitUrl={'https://github.com/mikaridley/Marshmello'}
      />

      <ProjectPreview
        name={'simple-pen'}
        description={
          'Google Keep clone focusing on dynamic UI components and persistent client-side data management via localStorage.'
        }
        image={simplePenPreview}
        liveUrl={'https://mikaridley.github.io/SimplePen/#/note'}
        gitUrl={'https://github.com/mikaridley/SimplePen'}
      />

      <ProjectPreview
        name={'meme-craft'}
        description={
          'A vanilla JavaScript project that enables users to design memes with flexible text, featuring instant downloads and a responsive, interactive interface.'
        }
        image={memeCraftPreview}
        liveUrl={'https://mikaridley.github.io/Meme-Craft/'}
        gitUrl={'https://github.com/mikaridley/Meme-Craft'}
      />
    </section>
  )
}
