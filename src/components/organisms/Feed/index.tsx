import ArticleCard from "@components/molecules/ArticleCard";
import { Article } from "@types/Article";
import { Response } from "@types/Response";
import * as S from './styles';

type FeedProps = {
  response: Response<Article>;
};

const Feed = ({
  response
}:FeedProps) => {
  return (
    <S.FeedContainer>
      {response.results.map((article) => (
        <ArticleCard key={article.uri} article={article}/>
      ))}
    </S.FeedContainer>
  );
}

export default Feed;