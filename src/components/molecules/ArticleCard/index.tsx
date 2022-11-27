import { Article } from '@types/Article';
import formatDate from '@utils/formaters/formatDate';
import * as S from './styles';

type ArticleCardProps = {
  article: Article;
}

const ArticleCard = ({
  article
}:ArticleCardProps) => {
  return (
    <S.Container data-testid="article-card-container" href={article.url}>
      <S.SectionText data-testid="article-card-section">{article.section}</S.SectionText>
      <S.Title data-testid="article-card-title">{article.title}</S.Title>
      <S.PublishedDate data-testid="article-card-published-date">{formatDate(article.published_date)}</S.PublishedDate>
      <S.BackgroundImage data-testid="article-card-image" src={article.multimedia[0]?.url}/>
    </S.Container>
  )
}

export default ArticleCard;