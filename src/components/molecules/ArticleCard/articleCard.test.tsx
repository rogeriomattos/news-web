import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { render } from "@utils/testingFunctions/render";
import { articleMock } from '@mocks/articles';
import formatDate from "@utils/formaters/formatDate";
import ArticleCard from '.';

describe('ArticleCard Component', () => {
  test('Possui o titulo', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-card-title');
    expect(element.innerHTML).toEqual(articleMock.title);
  });
  test('Possui a section', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-card-section');
    expect(element.innerHTML).toEqual(articleMock.section);
  });
  test('Possui a data de publicação', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-card-published-date');
    expect(element.innerHTML).toEqual(formatDate(articleMock.published_date));
  });
  test('Possui a Imagem', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-card-image');
    const imagUrl = articleMock.multimedia[0].url;
    expect(element).toHaveAttribute("src", imagUrl);
  });
  test('Possui link para noticia no click do card', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-card-container');
    expect(element).toHaveAttribute('href', articleMock.url);
  });
  test('Ordem de elementos ', () => {
    render(<ArticleCard article={articleMock}/>);

    const container = screen.getByTestId('article-card-container');

    const title = screen.getByTestId('article-card-title');
    const section = screen.getByTestId('article-card-section');
    const publishedDate = screen.getByTestId('article-card-published-date');

    expect(container.childNodes.length).toBeGreaterThanOrEqual(3);
    expect(container.childNodes[0]).toContainElement(section);
    expect(container.childNodes[1]).toContainElement(title);
    expect(container.childNodes[2]).toContainElement(publishedDate);
  });
})