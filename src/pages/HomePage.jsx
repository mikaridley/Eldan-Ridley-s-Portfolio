import appScreen from '../assets/imgs/quantex/first-page.png'
import { AppHeader } from '../cmps/AppHeader'



export function HomePage() {
  return (
    <section className="home-page">
      
      <section className="home-opening">
        <h1>Quantex</h1>
        <p>A multi-currency wallet for travellers to spend local currencies worldwide via mobile app and responsive web.</p>
        <img src={appScreen} alt="app-screen" />
      </section>


      
    </section>
  )
}
