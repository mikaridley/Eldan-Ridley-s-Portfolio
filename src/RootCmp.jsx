import { Routes, Route, useLocation } from 'react-router'

import { HomePage } from './pages/HomePage'
import { QuantexPage } from './pages/QuantexPage'
import { KindredPage } from './pages/KindredPage'
import { AboutMePage } from './pages/AboutMePage'
import { EfficasafePage } from './pages/EfficasafePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { ScrollToTop } from './cmps/ScrollToTop'
import { GlobalLightbox } from './cmps/GlobalLightbox'

export function RootCmp() {
  const { pathname } = useLocation()
  const isProjectPage = pathname === '/quantex' || pathname === '/kindred'
  const isQuantex = pathname === '/quantex'
  const isKindred = pathname === '/kindred'
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const isEfficasafe = normalizedPath === '/efficasafe'
  const isHomeOrAboutMe =
    normalizedPath === '/' ||
    normalizedPath === '/home' ||
    normalizedPath === '/about-me' ||
    normalizedPath === '/efficasafe'

  return (
    <div className={`main-layout${isProjectPage ? ' on-home' : ''}${isQuantex ? ' on-quantex' : ''}${isKindred ? ' on-kindred' : ''}${isEfficasafe ? ' on-efficasafe' : ''}${isHomeOrAboutMe ? ' header-white-bg' : ''}`}>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="/quantex" element={<QuantexPage />} />
          <Route path="/kindred" element={<KindredPage />} />
          <Route path="/efficasafe" element={<EfficasafePage />} />
          <Route path="about-me" element={<AboutMePage />} />
        </Routes>
      </main>
      <AppFooter />
      <ScrollToTop />
      <GlobalLightbox />
    </div>
  )
}
