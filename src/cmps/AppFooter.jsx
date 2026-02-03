import logo from '../assets/imgs/logo.png'
import { SocialLinks } from './SocialLinks'

export function AppFooter() {
  return (
    <footer className="app-footer">
      <img src={logo} />
      <p>Living, learning, & leveling up one day at a time.</p>
      <SocialLinks />
      <p className="copyright">© 2026 All rights reserved to Mika Ridley</p>
    </footer>
  )
}
