import { Routes, Route, useLocation } from 'react-router'

import { HomePage } from './pages/HomePage'
import { QuantexPage } from './pages/QuantexPage'
import { AboutMePage } from './pages/AboutMePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { ScrollToTop } from './cmps/ScrollToTop'
import { GlobalLightbox } from './cmps/GlobalLightbox'

export function RootCmp() {
  const { pathname } = useLocation()
  const isQuantex = pathname === '/quantex'

  return (
    <div className={`main-layout${isQuantex ? ' on-home' : ''}`}>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="/quantex" element={<QuantexPage />} />
          <Route path="about-me" element={<AboutMePage />} />
        </Routes>
      </main>
      <AppFooter />
      <ScrollToTop />
      <GlobalLightbox />
    </div>
  )
}
