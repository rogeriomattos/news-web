import { ThemeProvider } from 'styled-components';
import { ReactNode, useState, FC } from 'react';
import defaultTheme from '@styles/themes/light';
import GlobalStyle from '@styles/global';

type ThemeComponentProps = {
  children?: ReactNode;
}

const ThemeComponent:FC<ThemeComponentProps> = ({
  children
}) => {
  const [theme, setTheme] = useState(defaultTheme);
  
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent;