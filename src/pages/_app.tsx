import type { AppProps } from 'next/app';
import ThemeComponent from '@components/atoms/ThemeComponent';

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <ThemeComponent>
      <Component {...pageProps} />
    </ThemeComponent>
  )
}
