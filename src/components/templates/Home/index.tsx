import { useMemo } from 'react';
import Header from '@components/organisms/Header';
import Feed from '@components/organisms/Feed';
import { ArticleListResponse } from '@types/Article';
import EmphasisArticles from '@components/organisms/EmphasisArticles';
import { useIsMobile } from '@hooks/useIsMobile';
import { MovieReviewListResponse } from '@types/MovieReview';

type HomeProps = {
  articleList: ArticleListResponse;
  lastMovieReviews: MovieReviewListResponse;
}

const Home = ({
  articleList
}: HomeProps) => {
  const isMobile = useIsMobile();

  const recentlyThreeArticles = useMemo(() => articleList.results.filter((_, index)=> index <= 2), [articleList]);
  const lastArticles = useMemo(() => articleList.results.filter((_, index)=> isMobile || index > 2), [articleList, isMobile]);

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