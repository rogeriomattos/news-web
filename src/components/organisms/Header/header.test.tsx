import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Logo Component', () => { 
  test('Deve conter o Logo', () => {
    render(<Header/>);
    const logo = screen.getByTestId('header-logo');

    expect(logo).toHaveAttribute('href', '/');
  });
});