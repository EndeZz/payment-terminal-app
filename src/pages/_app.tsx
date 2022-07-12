import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#8857d8',
    primaryHover: '#966ed6',
    primaryActive: '#7240c4',
    success: '#73e600',
    error: '#ff6347',
    gray100: '#d7d2e2',
    gray200: '#9590a0',
    txt: '#3d3d3f',
    bg: '#ede6f7',
    light: '#fff',
  },
  media: {
    xl: '1200px',
    lg: '988px',
    md: '768px',
    sm: '540px',
  },
};

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
