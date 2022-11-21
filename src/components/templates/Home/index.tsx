import Header from '@components/organisms/Header';
import { Article } from '@types/Article';


type HomeProps = {
  articlesList: Article[];
}

const Home = ({
    articlesList
}: HomeProps) => {
  console.log('articlesList', articlesList);
  return(
    <div>
      <Header/>
    </div>
  );
}

export default Home;