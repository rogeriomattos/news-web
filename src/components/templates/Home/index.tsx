import { useMemo } from 'react';
import Header from '@components/organisms/Header';
import Feed from '@components/organisms/Feed';
import { ArticleListResponse } from '@types/Article';
import EmphasisArticles from '@components/organisms/EmphasisArticles';
import { useIsMobile } from '@hooks/useIsMobile';

type HomeProps = {
  responseArticles: ArticleListResponse;
}

const Home = ({
  responseArticles
}: HomeProps) => {
  const isMobile = useIsMobile();

  const recentlyThreeArticles = useMemo(() => responseArticles.results.filter((_, index)=> index <= 2), [responseArticles]);
  const lastArticles = useMemo(() => responseArticles.results.filter((_, index)=> isMobile || index > 2), [responseArticles, isMobile]);

  return(
    <div>
      <Header/>
      <main>
        {!isMobile &&
        <EmphasisArticles articleList={recentlyThreeArticles}/>}
        <Feed articles={lastArticles}/>
      </main>
    </div>
  );
}

export default Home;