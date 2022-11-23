import ArticleCard from "@components/molecules/ArticleCard";
import { Article } from "@types/Article";
import * as S from './styles';

type FeedProps = {
  articles: Article[];
};

const Feed = ({
  articles
}:FeedProps) => {
  
  return (
    <S.FeedContainer data-testid="feed-container">
      {articles.map((article) => (
        <ArticleCard key={article.uri} article={article}/>
      ))}
    </S.FeedContainer>
  );
}

export default Feed;