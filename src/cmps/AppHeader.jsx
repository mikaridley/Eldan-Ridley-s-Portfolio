import logo from '../assets/imgs/logo.png'

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} />
      </div>
      <nav className="navigation">
        <a>Home</a>
        <a>About Me</a>
        <a>Resume</a>
        <a>LinkedIn</a>
      </nav>
    </header>
  )
}
