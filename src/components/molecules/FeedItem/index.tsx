import { Article } from "@types/Article";
import formatDate from "@utils/formaters/formatDate";

import * as S from './styles';

type FeedItemProps = {
  article: Article;
}

const FeedItem = ({
  article
}:FeedItemProps) => {
  return (
    <S.Container data-testid="feed-item-container">
      {article.multimedia?.length > 0 &&
      <S.ImageWrapper>
        <img 
          data-testid="feed-item-image"
          src={article.multimedia[0].url} 
          alt={article.multimedia[0].caption}
        />
      </S.ImageWrapper>}
      <div>
        <div data-testid="feed-item-section">{article.section}</div>
        <S.TitleLink href={article.url} target="_blank" data-testid="feed-item-title">
          {article.title}
        </S.TitleLink>
        <S.Abstract data-testid="feed-item-abstract">
          {article.abstract}
        </S.Abstract>
        <div data-testid="feed-item-published-date">
          {formatDate(article.published_date)}
        </div>
      </div>
    </S.Container>
  )
}

export default FeedItem;