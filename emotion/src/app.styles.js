import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'

const theme = {
  colors: {
    primary: 'hotpink'
  }
}

export default () => <ThemeProvider theme={theme} />