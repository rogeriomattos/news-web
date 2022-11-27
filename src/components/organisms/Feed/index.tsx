import FeedItem from "@components/molecules/FeedItem";
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
        <FeedItem key={article.uri} article={article}/>
      ))}
    </S.FeedContainer>
  );
}

export default Feed;