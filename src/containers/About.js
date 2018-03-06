
import React from 'react'
//

import styles from '../test-modules.cssm'

export default () => (
  <div>
    <h1>This is what we're all about.</h1>
    <p>React, static sites, performance, speed. It's the stuff that makes us tick.</p>
    <div className={styles.moduleClass}>
      Try changing background in src/test-modules.cssm. About.js - this one is buggy.
    </div>
  </div>
)
