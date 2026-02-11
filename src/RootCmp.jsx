import { Routes, Route, useLocation } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutMePage } from './pages/AboutMePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

export function RootCmp() {
  const { pathname } = useLocation()
  const isHome = pathname === '/home' || pathname === 'home'

  return (
    <div className={`main-layout${isHome ? ' on-home' : ''}`}>
     <AppHeader />
      <main>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about-me" element={<AboutMePage />} />
        </Routes> 
      </main>
      <AppFooter />
    </div>
  )
}
