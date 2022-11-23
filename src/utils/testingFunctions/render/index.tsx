import { render as renderFunc } from '@testing-library/react';
import ThemeComponent from '@components/atoms/ThemeComponent';

export const render = (
  ui: JSX.Element
) => renderFunc(
    <ThemeComponent>
      {ui}
    </ThemeComponent>
  );