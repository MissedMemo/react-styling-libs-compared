import React from 'react'
import { render } from 'react-dom'

const App = ({greeting}) => <>{ greeting }</>

render(
  <App greeting='Hello, React!' />,
  document.getElementById('root')
)