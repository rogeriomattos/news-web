import HomeTemplate from '@components/templates/Home';
import { feedService } from '@services/feedService';
import { moviesServices } from '@services/moviesServices';
import { ArticleListResponse } from '@types/Article';
import { useEffect } from 'react';

type HomeProps = {
  response: ArticleListResponse;
}

export default function Home(props: HomeProps) {

  useEffect(() => {
    (async () => {
      const res = await moviesServices.getLastFiveReviews();
      console.log('res', res);
    })();
  }, []);

  return (
    <HomeTemplate responseArticles={props.response}/>
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