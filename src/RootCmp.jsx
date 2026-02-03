import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { AboutMePage } from './pages/AboutMePage'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'

export function RootCmp() {
  return (
    <div className="main-layout">
      <AppHeader />
      <main>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="" element={<AboutMePage />} />
        </Routes> 
      </main>
      <AppFooter />
    </div>
  )
}
