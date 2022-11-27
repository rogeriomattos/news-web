import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { articleList } from '@mocks/articles';
import { render } from "@utils/testingFunctions/render";
import EmphasisArticles from '.';

describe('EmphasisArticles Component', () => {
  test('A quantiadade de artigos esta correta na listagem', () => {
    render(
      <EmphasisArticles articleList={articleList}/>
    );

    const articleContainer = screen.getByTestId('emphasis-articles-container');
    
    expect(articleContainer.childNodes.length).toBe(articleList.length);
  });
})