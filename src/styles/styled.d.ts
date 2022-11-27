// styled.d.ts
import 'styled-components';



interface IColors {
  primary: {
    main: string;
    contrastText: string;
  },
  secondary: {
    main: string;
    contrastText: string;
  },
  background: string;
  text: string;
  white: string;
}

interface IBreakPoints {
  mobile: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: IColors;
    boxShadow: string;
    breakPoints: IBreakPoints;
  }
}