import Header from '@components/organisms/Header';
import Feed from '@components/organisms/Feed';
import { Article } from '@types/Article';
import { Response } from '@types/Response';


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
        <Feed articles={responseArticles.results}/>
      </main>
    </div>
  );
}

export default Home;