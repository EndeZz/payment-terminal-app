import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      gray100: string;
      gray200: string;
      txt: string;
      bg: string;
      light: string;
    }
  }
}
