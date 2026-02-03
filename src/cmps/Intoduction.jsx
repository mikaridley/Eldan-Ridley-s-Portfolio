import cssIcon from '../assets/imgs/css3.svg'
import expressIcon from '../assets/imgs/express.svg'
import html5Icon from '../assets/imgs/html5.svg'
import javascriptIcon from '../assets/imgs/javascript.svg'
import mongodbIcon from '../assets/imgs/mongodb.svg'
import nodejsIcon from '../assets/imgs/nodejs.svg'
import reactIcon from '../assets/imgs/react.svg'
import figmaIcon from '../assets/imgs/figma.svg'
import photoshopIcon from '../assets/imgs/photoshop.svg'
import sqlIcon from '../assets/imgs/sql.svg'

export function Intoduction() {
  return (
    <section className="introduction">
      <div className="openning">
        <h2>Hi, nice to meet you!</h2>
        <p>
          I’m a full-stack developer who discovered a passion for building
          things through code. After completing an intensive coding bootcamp, I
          continue to learn and improve every day by working on real projects. I
          enjoy solving problems, writing clean code, and taking on new
          challenges that push me forward.
        </p>
      </div>

      <section className="tools">
        <h2>Tools</h2>
        <h3>Frameworks</h3>
        <ul>
          <li>
            <img src={reactIcon} />
            React
          </li>
          <li>
            <img src={nodejsIcon} />
            Node.js
          </li>
          <li>
            <img src={expressIcon} />
            Express.js
          </li>
        </ul>

        <h3>Database</h3>
        <ul>
          <li>
            <img src={mongodbIcon} />
            MongoDB
          </li>
        </ul>

        <h3>Design</h3>
        <ul>
          <li>
            <img src={photoshopIcon} />
            Photoshop
          </li>
          <li>
            <img src={figmaIcon} />
            Figma
          </li>
        </ul>
      </section>

      <section className="core-skills">
        <h2>Core Skills</h2>
        <h3>Languages</h3>
        <ul>
          <li>
            <img src={javascriptIcon} />
            JavaScript
          </li>
          <li>
            <img src={html5Icon} />
            HTML
          </li>
          <li>
            <img src={cssIcon} />
            CSS
          </li>
          <li>
            <img src={sqlIcon} />
            SQL
          </li>
        </ul>

        <h3>Concepts</h3>
        <ul>
          <li>CRUD</li>
          <li>WebSockets</li>
          <li>APIs</li>
        </ul>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>Full-Stack Development</li>
          <li>Product Management</li>
          <li>Project Management</li>
          <li>Mentoring</li>
          <li>Public Speaking</li>
        </ul>
      </section>
    </section>
  )
}
