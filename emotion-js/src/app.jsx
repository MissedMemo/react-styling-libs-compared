/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import React from 'react'
import { useToggle } from './toggle'

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

  const [ isToggled, handleToggle ] = useToggle()

  return <div css={app}>
    <ToggleButton onClick={handleToggle}>
      { `${ isToggled ? 'Hide' : 'Show'} Greeting` }
    </ToggleButton>
    <span>{ isToggled && greeting }</span>
  </div>
}


export default App