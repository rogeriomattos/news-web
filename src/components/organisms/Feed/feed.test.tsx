import '@testing-library/jest-dom'
import { screen } from '@testing-library/react';
import { articleList } from '@mocks/articles';
import { render } from "@utils/testingFunctions/render";
import Feed from '.';

describe('Feed Component', () => {
  test('A quantiadade de artigos esta correta na listagem', () => {
    render(
      <Feed articles={articleList}/>
    );

    const articleContainer = screen.getByTestId('feed-container');
    
    expect(articleContainer.childNodes.length).toBe(articleList.length);
  });
})