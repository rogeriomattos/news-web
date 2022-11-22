import ArticleCard from "@components/molecules/ArticleCard";
import { Article } from "@types/Article";
import * as S from './styles';

type FeedProps = {
  articles: Article[];
};

const Feed = ({
  articles
}:FeedProps) => {
  console.log('articles', articles);
  return (
    <S.FeedContainer>
      {articles.map((article) => (
        <ArticleCard key={article.uri} article={article}/>
      ))}
    </S.FeedContainer>
  );
}

export default Feed;