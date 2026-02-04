import logo from '../assets/imgs/logo.png'

export function AppFooter() {
  return (
    <footer className="app-footer">
      <img src={logo} />
      <p>Living, learning, & leveling up one day at a time.</p>
      <p className="copyright">© 2026 All rights reserved to Mika Ridley</p>
    </footer>
  )
}
