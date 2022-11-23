import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { render } from "@utils/testingFunctions/render";
import Logo from '.';

describe('Logo Component', () => {
  test('Possui o titulo NewsWeb', () => {
    render(<Logo />);

    const LogoElement = screen.getByTestId('logo');
    const news = screen.getByText('News');
    const web = screen.getByText('Web');

    expect(LogoElement).toContainElement(web);
    expect(LogoElement).toContainElement(news);

    const newsTitle = screen.getByTestId('logo-title');
    expect(newsTitle.childNodes.length).toBe(2);
    expect(newsTitle.childNodes[0]).toHaveTextContent('News');
    expect(newsTitle.childNodes[1].textContent).toBe('Web');
  });
  test('Possui um SVG da logo', () => {
    render(<Logo />);

    const LogoElement = screen.getByTestId('logo');

    expect(LogoElement).toContainHTML('svg');
  });
  test('Ordem de elementos deve ser primeiro svg depois texto NewsWeb', () => {
    render(<Logo />);

    const LogoElement = screen.getByTestId('logo');

    expect(LogoElement.childNodes.length).toBe(2);
    expect(LogoElement.childNodes[0]).toContainHTML('svg');
    expect(LogoElement.childNodes[1]).toContainHTML('span');
  });
  test('A palavra News deve ser em negrito', () => {
    render(<Logo />);

    const news = screen.getByTestId('logo-title');

    expect(news.childNodes.length).toBe(2);
    expect(news.childNodes[0]).toContainHTML('b');
  });
})