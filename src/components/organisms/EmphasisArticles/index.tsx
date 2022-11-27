import ArticleCard from '@components/molecules/ArticleCard';
import { Article } from '@types/Article';
import * as S from './styles';

type EmphasisArticlesProps = {
  articleList: Article[];
}

const EmphasisArticles = ({
  articleList
}:EmphasisArticlesProps) => {
  return (
    <S.Container data-testid="emphasis-articles-container">
      {articleList.map(article => <ArticleCard key={article.url} article={article} />)}
    </S.Container>
  )
}

export default EmphasisArticles;