import eldanImg1 from '../assets/imgs/eldan1.jpg'
import eldanImg2 from '../assets/imgs/eldan2.jpg'
import eldanImg3 from '../assets/imgs/eldan3.png'
import eldanImg4 from '../assets/imgs/eldan4.png'
import eldanImg5 from '../assets/imgs/eldan5.png'
import eldanImg6 from '../assets/imgs/eldan6.png'
import eldanImg7 from '../assets/imgs/eldan7.png'
import eldanImg8 from '../assets/imgs/eldan8.png'
import eldanImg9 from '../assets/imgs/eldan9.png'
import { AppHeader } from '../cmps/AppHeader'
import { ImgsCarousel } from '../cmps/ImgsCarousel'

const CAROUSEL_IMAGES = [
  eldanImg3,
  eldanImg4,
  eldanImg5,
  eldanImg6,
  eldanImg7,
  eldanImg8,
  eldanImg9,
]

export function AboutMePage() {
  return (
    <section className="about-me-page">
      <img src={eldanImg1} alt="Eldan" className="eldan-img-1"/>
      <div className="about-me">
        <h4>About Me</h4>
        <p>My name is Eldan Ridley, and for as long as I can remember, I’ve been obsessed with games. Whether it’s board games, cards, or video games, I’ve always been drawn to the way they work. This passion led me into the gaming industry, where I set my sights on becoming a Game Designer. I was fascinated by the challenge of making a product as pleasurable and intuitive as possible - which, at its heart, is what game design is all about.</p>
        <p>Recently, I decided to pivot my focus purely toward UX design. While I’ve just completed the Google UX Design Certificate, I’ve actually been looking at the world through a professional UX lens for over six years. I’m the kind of person who has spent my whole life subconsciously analysing how every product I touch could be improved - now, I’m just making it official. :)</p>
      </div>

      <div className="what-i-do">
        <h4>What I do in my spare time</h4>
        <p>I’m a very curious person and love trying new things. Whether it’s a freediving course or wall climbing, I’m usually open to trying anything at least once.</p>
        <p>My latest obsession is MESBG (Middle-Earth Strategy Battle Game). It’s a tabletop game with miniatures from JRR Tolkien’s world, like Lord of the Rings. Being a huge Tolkien fan, I really enjoy the process of cleaning and painting the models before I actually get to play them.</p>
        <p>When I’m not geeking out, I enjoy cooking, casual sports like billiards or fishing, reading, and playing games. I even create my own video games here and there for mobile or PC, and occasionally design my own board and card games too.</p>
      </div>
      <img src={eldanImg2} alt="Eldan" className="eldan-img-2"/>

      <div className="about-me-page-carousel">
        <ImgsCarousel images={CAROUSEL_IMAGES} />
      </div>
    </section>
  )
}