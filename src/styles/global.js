import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-family: "Open Sans", sans-serif;
    font-weight: 400;

    -webkit-font-smoothing: antialiased;
  }

  h1, h2 {
    font-family: "Mochiy Pop P One", sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }
`