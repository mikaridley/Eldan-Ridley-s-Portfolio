import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo-black.png'

export function AppFooter() {
  return (
    <footer className="app-footer">
      <p className="msg">Send me a message!</p>
      <p className="email">eldanridley7@gmail.com</p>
      <NavLink to="/home" aria-label="Go to home">
        <img src={logo} alt="Logo" />
      </NavLink>
      <p className="copyright p2">© 2026 All rights reserved to Eldan Ridley</p>
    </footer>
  )
}
