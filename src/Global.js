import { css } from "@emotion/react"

const GlobalStyle = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --padding: 2rem;
  }

  body {
    background: #000;
    font-family: "Work Sans", sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    cursor: pointer;
  }
  button,
  input {
    border: 0;
    font-family: inherit;
  }
`

export default GlobalStyle
