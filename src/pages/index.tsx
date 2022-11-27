import HomeTemplate from '@components/templates/Home';
import { feedService } from '@services/feedService';
import { moviesServices } from '@services/moviesServices';
import { ArticleListResponse } from '@types/Article';
import { MovieReviewListResponse } from '@types/MovieReview';

type HomeProps = {
  articleList: ArticleListResponse;
  lastMovieReviews: MovieReviewListResponse;
}

export default function Home({
  lastMovieReviews,
  articleList
}: HomeProps) {
  return (
    <HomeTemplate 
      articleList={articleList}
      lastMovieReviews={lastMovieReviews}
    />
  )
}

export async function getStaticProps() {
  const articleList = await feedService.getHome();
  const lastMovieReviews = await moviesServices.getLastReviews();
  return {
    props: {
      articleList,
      lastMovieReviews
    }, // will be passed to the page component as props
  }
}