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

  p {
    margin: 0;
    padding: 0;
  }

  main {
    padding: 1.5rem;
    background: ${props => props.theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
      padding: 1.5rem 0;
      background: none;
    }
  }
`;