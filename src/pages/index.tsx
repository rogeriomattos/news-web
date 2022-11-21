import HomeTemplate from '@components/templates/Home';
import { feedService } from '@services/feedService';
import { Article } from '@types/Article';
import { Response } from '@types/Response';

type HomeProps = {
  response: Response<Article>
}

export default function Home(props: HomeProps) {
  return (
    <HomeTemplate articlesList={props?.response?.results || []}/>
  )
}

export async function getStaticProps() {
  const response = await feedService.getHome();
  return {
    props: {
      response
    }, // will be passed to the page component as props
  }
}