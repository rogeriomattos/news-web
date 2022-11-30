import { useMemo } from 'react';
import { ArticleListResponse } from '@types/Article';
import { MovieReviewListResponse } from '@types/MovieReview';
import { useIsMobile } from '@hooks/useIsMobile';
import Header from '@components/organisms/Header';
import Feed from '@components/organisms/Feed';
import EmphasisArticles from '@components/organisms/EmphasisArticles';
import LastMovieReviews from '@components/organisms/LastMovieReviews';
import * as S from './styles';

type HomeProps = {
  articleList: ArticleListResponse;
  lastMovieReviews: MovieReviewListResponse;
}

const Home = ({
  articleList,
  lastMovieReviews
}: HomeProps) => {
  const isMobile = useIsMobile();

  const recentlyThreeArticles = useMemo(() => articleList.results.filter((_, index)=> index <= 2), [articleList]);
  const lastArticles = useMemo(() => articleList.results.filter((_, index)=> isMobile || index > 2), [articleList, isMobile]);

  return(
    <>
      <Header/>
      <S.Wrapper>
        {!isMobile &&
        <EmphasisArticles articleList={recentlyThreeArticles}/>}
        <Feed articles={lastArticles}/>
        <div>
          <LastMovieReviews movieReviews={lastMovieReviews.results}/>
        </div>
      </S.Wrapper>
    </>
  );
}

export default Home;