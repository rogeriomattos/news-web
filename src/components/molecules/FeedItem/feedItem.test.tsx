import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { articleMock } from '@mocks/articles';
import formatDate from "@utils/formaters/formatDate";
import { render } from "@utils/testingFunctions/render";
import FeedItem from '.';

describe('FeedItem Component', () => {
  test('Possui o titulo', () => {
    render(
      <FeedItem article={articleMock}/>
    );
    const element = screen.getByTestId('feed-item-title');
    expect(element.innerHTML).toEqual(articleMock.title);
  });
  test('Título possui link para noticia', () => {
    render(<FeedItem article={articleMock}/>);
    const element = screen.getByTestId('feed-item-title');
    expect(element).toHaveAttribute('href', articleMock.url);
  });
  test('Possui o descrição', () => {
    render(<FeedItem article={articleMock}/>);
    const element = screen.getByTestId('feed-item-abstract');
    expect(element.innerHTML).toEqual(articleMock.abstract);
  });
  test('Possui a seção da noticia', () => {
    render(<FeedItem article={articleMock}/>);
    const element = screen.getByTestId('feed-item-section');
    expect(element.innerHTML).toEqual(articleMock.section);
  });
  test('Possui a data de publicação', () => {
    render(<FeedItem article={articleMock}/>);
    const element = screen.getByTestId('feed-item-published-date');
    expect(element.innerHTML).toEqual(formatDate(articleMock.published_date));
  });
  test('Possui a Imagem', () => {
    render(<FeedItem article={articleMock}/>);
    const element = screen.getByTestId('feed-item-image');
    const imagUrl = articleMock.multimedia[0].url;
    expect(element).toHaveAttribute("src", imagUrl);
  });
  test('Ordem de elementos ', () => {
    render(<FeedItem article={articleMock}/>);

    const container = screen.getByTestId('feed-item-container');
    const image = screen.getByTestId('feed-item-image');

    const title = screen.getByTestId('feed-item-title');
    const abstract = screen.getByTestId('feed-item-abstract');
    const section = screen.getByTestId('feed-item-section');
    const publishedDate = screen.getByTestId('feed-item-published-date');

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