import logo from '../assets/imgs/logo.png'

export function AppFooter() {
  return (
    <footer className="app-footer">
      <p className="msg">Send me a message!</p>
      <p className="email">eldanridley7@gmail.com</p>
      <img src={logo} />
      <p className="copyright">© 2026 All rights reserved to Eldan Ridley</p>
    </footer>
  )
}
