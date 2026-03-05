import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorkerRegistration from './services/serviceWorkerRegistration'

import { RootCmp } from './RootCmp'

import './assets/styles/main.css'
import logoUrl from './assets/imgs/logo.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <RootCmp />
  </Router>
)

const favicon = document.querySelector('link[rel="icon"]')
if (favicon) favicon.href = logoUrl

serviceWorkerRegistration.register()
