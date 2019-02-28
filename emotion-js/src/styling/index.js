import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import TopLevelStyles from './globals'
import CurrentTheme from './theme1'

export default ({children}) => <>
  <Global styles={TopLevelStyles} />
  <ThemeProvider theme={CurrentTheme} >
    { children }
  </ThemeProvider>
</>
