import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { render } from "@utils/testingFunctions/render";
import Header from '.';

describe('Logo Component', () => { 
  test('Deve conter o Logo', () => {
    render(<Header/>);
    const logo = screen.getByTestId('header-logo');

    expect(logo).toHaveAttribute('href', '/');
  });
});