import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import defaultTheme from '../styles/themes/light';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(defaultTheme);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
