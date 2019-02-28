/** @jsx jsx */
import { css } from '@emotion/core'

export default css`
  
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: hotpink;
  }

  /*
  for n in 1..6
    h{n}
      margin: 0
  */

  *,:before,:after {
    box-sizing: border-box;
  }

  #root {
    height: 50%;
    padding: 12px;
    background-color: red;
  }
`