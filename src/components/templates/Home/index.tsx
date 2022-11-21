import Header from '@components/organisms/Header';
import Feed from '@components/organisms/Feed';
import { Article } from '@types/Article';
import { Response } from '@types/Response';


type HomeProps = {
  response: Response<Article>;
}

const Home = ({
  response
}: HomeProps) => {
  return(
    <div>
      <Header/>
      <main>
        <Feed response={response}/>
      </main>
    </div>
  );
}

export default Home;