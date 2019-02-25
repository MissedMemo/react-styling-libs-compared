import React from 'react'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: 'lightgreen'
  }
}

export default ({children}) => <ThemeProvider theme={theme} >
  { children }
</ThemeProvider>
