import Header from '@components/organisms/Header';
import Feed from '@components/organisms/Feed';
import { Article } from '@types/Article';
import { Response } from '@types/Response';
import ArticleCard from '@components/molecules/ArticleCard';


type HomeProps = {
  responseArticles: Response<Article>;
}

const Home = ({
  responseArticles
}: HomeProps) => {
  return(
    <div>
      <Header/>
      <main>
        {responseArticles.results[0] && <ArticleCard article={responseArticles.results[0]}/>}
        <Feed articles={responseArticles.results}/>
      </main>
    </div>
  );
}

export default Home;