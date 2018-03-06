import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import styles from '../test-modules.cssm'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
    <div className={styles.moduleClass}>
      Try changing background in src/test-modules.cssm. Home.js - this one is buggy.
    </div>
  </div>
))
