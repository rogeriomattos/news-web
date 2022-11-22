import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { articleMock } from '@mocks/articles';
import formatDate from "@utils/formaters/formatDate";
import ArticleCard from '.';
// import Image from 'next/image';

describe('ArticleCard Component', () => {
  test('Possui o titulo', () => {
    render(<ArticleCard article={articleMock}/>);
    const titleElement = screen.getByTestId('article-title');
    expect(titleElement).toHaveTextContent(articleMock.title);
  });
  test('Possui o descrição', () => {
    render(<ArticleCard article={articleMock}/>);
    const titleElement = screen.getByTestId('article-abstract');
    expect(titleElement).toHaveTextContent(articleMock.abstract);
  });
  test('Possui a seção da noticia', () => {
    render(<ArticleCard article={articleMock}/>);
    const titleElement = screen.getByTestId('article-section');
    expect(titleElement).toHaveTextContent(articleMock.section);
  });
  test('Possui a data de publicação', () => {
    render(<ArticleCard article={articleMock}/>);
    const titleElement = screen.getByTestId('article-published-date');
    expect(titleElement).toHaveTextContent(formatDate(articleMock.published_date));
  });
  // test('Possui a Imagem', () => {
  //   render(<ArticleCard article={articleMock}/>);
  //   const imageMock = render(<Image src={articleMock.multimedia[0].url} alt={""} width={100} height={100} />);

  //   const titleElement = screen.getByTestId('article-image');
  //   expect(titleElement).toHaveAttribute("src", imageMock.);
  // });
})