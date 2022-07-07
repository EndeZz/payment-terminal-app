import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      primaryActive: string;
      success: string;
      error: string;
      gray100: string;
      gray200: string;
      txt: string;
      bg: string;
      light: string;
    };
    media: {
      xl: string;
      lg: string;
      md: string;
      sm: string;
    };
  }
}
