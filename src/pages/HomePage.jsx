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


      
    </section>
  )
}
