import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { articleMock } from '@mocks/articles';
import formatDate from "@utils/formaters/formatDate";
import { render } from "@utils/testingFunctions/render";
import ArticleCard from '.';

describe('ArticleCard Component', () => {
  test('Possui o titulo', () => {
    render(
      <ArticleCard article={articleMock}/>
    );
    const element = screen.getByTestId('article-title');
    expect(element.innerHTML).toEqual(articleMock.title);
  });
  test('Título possui link para noticia', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-title');
    expect(element).toHaveAttribute('href', articleMock.url);
  });
  test('Possui o descrição', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-abstract');
    expect(element.innerHTML).toEqual(articleMock.abstract);
  });
  test('Possui a seção da noticia', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-section');
    expect(element.innerHTML).toEqual(articleMock.section);
  });
  test('Possui a data de publicação', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-published-date');
    expect(element.innerHTML).toEqual(formatDate(articleMock.published_date));
  });
  test('Possui a Imagem', () => {
    render(<ArticleCard article={articleMock}/>);
    const element = screen.getByTestId('article-image');
    const imagUrl = articleMock.multimedia[0].url;
    expect(element).toHaveAttribute("src", imagUrl);
  });
})