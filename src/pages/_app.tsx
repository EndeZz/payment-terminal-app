import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalstyles';
import { theme } from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Web-приложение дял пополнения баланса мобильного телефона"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
