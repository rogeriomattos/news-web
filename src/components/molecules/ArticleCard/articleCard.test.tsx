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
  test('Ordem de elementos ', () => {
    render(<ArticleCard article={articleMock}/>);

    const container = screen.getByTestId('article-container');
    const image = screen.getByTestId('article-image');

    const title = screen.getByTestId('article-title');
    const abstract = screen.getByTestId('article-abstract');
    const section = screen.getByTestId('article-section');
    const publishedDate = screen.getByTestId('article-published-date');

    expect(container.childNodes.length).toBe(2);
    expect(container.childNodes[0]).toContainElement(image);

    expect(container.childNodes[1].childNodes.length).toBe(4);
    expect(container.childNodes[1].childNodes[0]).toContainElement(section);
    expect(container.childNodes[1].childNodes[1]).toContainElement(title);
    expect(container.childNodes[1].childNodes[2]).toContainElement(abstract);
    expect(container.childNodes[1].childNodes[3]).toContainElement(publishedDate);
    // expect(container.childNodes[1]).toContainHTML('span');
  });
})