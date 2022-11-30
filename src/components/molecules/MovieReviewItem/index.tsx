import { MovieReview } from "@types/MovieReview";
import * as S from './styles';

type MovieReviewItemProps = {
  movieReview: MovieReview;
}

const MovieReviewItem = ({
  movieReview
}: MovieReviewItemProps) => {
  console.log('movieReview', movieReview);
  return (
    <S.Container>
      <S.Content>
        <S.Title href={movieReview.link.suggested_link_text} target="_blank">
          {movieReview.display_title}
        </S.Title>
        <S.ShortSumary>
          {movieReview.summary_short}
        </S.ShortSumary>
      </S.Content>
      <img src={movieReview.multimedia.src} alt={movieReview.display_title}/>
    </S.Container>
  )
}

export default MovieReviewItem;