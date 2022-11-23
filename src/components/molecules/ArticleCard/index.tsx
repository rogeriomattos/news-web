import { Article } from "@types/Article";
import formatDate from "@utils/formaters/formatDate";

import * as S from './styles';

type ArticleCardProps = {
  article: Article;
}

const ArticleCard = ({
  article
}:ArticleCardProps) => {
  return (
    <S.Container data-testid="article-container">
      {article.multimedia?.length > 0 &&
      <S.ImageWrapper>
        <img 
          data-testid="article-image"
          src={article.multimedia[0].url} 
          alt={article.multimedia[0].caption}
        />
      </S.ImageWrapper>}
      <div>
        <div data-testid="article-section">{article.section}</div>
        <S.TitleLink href={article.url} target="_blank" data-testid="article-title">
          {article.title}
        </S.TitleLink>
        <S.Abstract data-testid="article-abstract">
          {article.abstract}
        </S.Abstract>
        <div data-testid="article-published-date">
          {formatDate(article.published_date)}
        </div>
      </div>
    </S.Container>
  )
}

export default ArticleCard;