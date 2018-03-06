import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'
import styles from './test-modules.cssm'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    <div className={styles.moduleClass}>
      Try changing background in src/test-modules.cssm. App.js - this one seems ok.
    </div>
    </div>
  </Router>
)

export default hot(module)(App)
