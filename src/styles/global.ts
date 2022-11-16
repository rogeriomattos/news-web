import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
    background: ${props => props.theme.colors.background};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;