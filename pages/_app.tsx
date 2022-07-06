import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#8857d8',
    primaryHover: '#966ed6',
    primaryActive: '#7240c4',
    gray100: '#d7d2e2',
    gray200: '#9590a0',
    txt: '#3d3d3f',
    bg: '#ede6f7',
    light: '#fff',
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
