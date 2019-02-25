/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import ThemeStyles from './app.styles'

const app = css`
  
  display: flex;
  background-color: lightblue;
  padding: 12px;

  span {
    flex: 1;
    align-self: center;
    text-align: center;
    color: blue;
    font-size: 24px;
    font-style: bold;
    text-transform: uppercase;
  }
`

const ToggleButton = styled.button`
  font-size: 18px;
  color: yellow;
  padding: 8px 20px;
  background-color: ${ props => props.theme.colors.primary };
`

const App = ({greeting}) => {

  const [ isToggled, setIsToggled ] = useState(false)

  const handleToggle = () => setIsToggled( toggled => !toggled )

  return <ThemeStyles>
    <div css={app}>
      <ToggleButton onClick={handleToggle}>
        { `${ isToggled ? 'Hide' : 'Show'} Greeting` }
      </ToggleButton>
      <span>{ isToggled && greeting }</span>
    </div>
  </ThemeStyles>
}


export default App