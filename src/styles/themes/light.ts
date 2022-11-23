import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  title: 'light',
  colors: {
    primary: {
      main:'#3A3238',
      contrastText: '#ffffff'
    },
    secondary: {
      main:'#9297C4',
      contrastText: '#dddddd'
    }, 
    text: '#333333',
    background: '#eeeeee',
    white: '#ffffff',
  },
  boxShadow: '1px 1px 2px #888888'
}

export default theme;