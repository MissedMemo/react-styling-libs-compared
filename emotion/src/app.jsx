/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'

const app = css`
  display: flex;
  padding: 12px;
  background-color: lightblue;
`

const textwrapper = css`
  flex: 1;
  font-size: 24px;
  font-style: bold;
  text-align: center;
  text-transform: uppercase;
  align-self: center;
  color: blue;
`

// color: yellow; /* var(--error-text-color); */

const ToggleButton = styled.button`
  font-size: 18px;
  color: yellow;
  padding: 8px 20px;
  margin-right: 5px;
  background-color: lightgreen;
`

const App = ({greeting}) => {

  const [ isToggled, setIsToggled ] = useState(false)

  const handleToggle = () => setIsToggled( toggled => !toggled )

  return <div css={app}>
    <ToggleButton onClick={handleToggle}>
      { `${ isToggled ? 'Hide' : 'Show'} Greeting` }
    </ToggleButton>
    <div css={textwrapper}>{ isToggled && greeting }</div>
  </div>
}

export default App