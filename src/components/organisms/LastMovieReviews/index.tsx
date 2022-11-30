import MovieReviewItem from "@components/molecules/MovieReviewItem";
import { MovieReview } from "@types/MovieReview";
import * as S from './styles';

type LastMovieReviewsProps = {
  movieReviews: MovieReview[];
}

const LastMovieReviews = ({
  movieReviews
}:LastMovieReviewsProps) => {
  return (
    <S.Container>
      <h3>Movies Review</h3>
      {movieReviews.filter((_,index) => index < 5).map(item => (
        <MovieReviewItem key={item.display_title} movieReview={item}/>
      ))}
    </S.Container>
  )
};

export default LastMovieReviews;