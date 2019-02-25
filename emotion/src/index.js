import React from 'react'
import { render } from 'react-dom'

import App from './app'
import AppStyles from './app.styles'

render(
  <AppStyles>
    <App greeting='Hey, React!' />
  </AppStyles>,
  document.getElementById('root')
)