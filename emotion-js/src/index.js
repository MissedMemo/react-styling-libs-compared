import React from 'react'
import { render } from 'react-dom'

import GlobalStyles from './styling'
import App from './app'

render(
  <GlobalStyles>
    <App greeting='Hey, React!' />
  </GlobalStyles>,
  document.getElementById('root')
)