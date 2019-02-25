import React from 'react'
import { render } from 'react-dom'

import App from './app'
//import AppStyles from './app.styles'

render(
  <App greeting='Hey, React!' />,
  document.getElementById('root')
)