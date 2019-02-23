/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'

const app = css`
  padding: 12px;
  color: yellow;
  background-color: lightblue;
`

// color: yellow; /* var(--error-text-color); */

const App = ({greeting}) => <div css={app}>
  {greeting}
</div>

export default App