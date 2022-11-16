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
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: IColors;
  }
}