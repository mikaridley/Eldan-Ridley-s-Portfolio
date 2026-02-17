import appScreen from '../assets/imgs/quantex/first-page.png'
import appGif from '../assets/imgs/quantex/app-gif.gif'
import { AppHeader } from '../cmps/AppHeader'



export function HomePage() {
  return (
    <section className="home-page">
      
      <section className="home-opening">
        <h1>Quantex</h1>
        <h4>A multi-currency wallet for travellers to spend local currencies worldwide via mobile app and responsive web.</h4>
        <img src={appScreen} alt="app-screen" />
      </section>

      <section className="overview">
      <h4>Overview</h4>
      <p>Quantex was born from a simple observation: the traditional way of exchanging money is a bit of a chore. Whether people are too busy to visit a physical exchange shop, can't find one nearby, or simply prefer the security of digital over physical cash, there is a clear need for a more flexible solution.
        <br /><span className="p-gap" aria-hidden="true" />I designed this multi-currency wallet to give travellers total control. With just a few taps, users can convert their funds at fair rates and immediately use their device to pay at a cashier or online, anywhere in the world.</p>
      <img src={appGif} alt="Quantex app" className="overview-gif" />
      </section>

      <section className="problem-solution">
        <div className="problem-solution-col">
          <h4 className="problem-solution-heading">Problem</h4>
          <p>The traditional currency exchange process is an inconvenient hurdle. Many travellers are simply too busy to visit a physical exchange shop before a trip, or they find it difficult to locate one when they actually need it. Beyond the chore of the errand, many people now prefer the security and ease of digital payments over carrying bundles of physical cash.</p>
        </div>
        <div className="problem-solution-col">
          <h4 className="problem-solution-heading">Solution</h4>
          <p>I designed Quantex to replace the physical errand with a digital-first approach. The platform allows users to convert currencies instantly with a single tap, enabling them to pay at cashiers or online without delay. By prioritising a simple, high-contrast interface, I ensured the product is easy to navigate for everyone, from tech-savvy travellers to those who typically struggle with complex digital tools.</p>
        </div>
      </section>
      
    </section>
  )
}
