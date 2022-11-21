import Image from 'next/image';
import { Article } from "@types/Article";
import formatDate from "@utils/formaters/formatDate";

import * as S from './styles';

type ArticleCardProps = {
  article: Article;
}

const ArticleCard = ({
  article
}:ArticleCardProps) => {
  return (
    <S.Container>
      {article.multimedia.length > 0 &&
      <S.ImageWrapper>
        <Image 
          src={article.multimedia[0].url} 
          alt={article.multimedia[0].caption}
          layout='fill'
          objectFit='cover'
        />
      </S.ImageWrapper>}
      <div>
        <div>{article.section}</div>
        <S.TitleLink href={article.url} target="_blank">
          {article.title}
        </S.TitleLink>
        <S.Abstract>
          {article.abstract}
        </S.Abstract>
        <div>{formatDate(article.published_date)}</div>
      </div>
    </S.Container>
  )
}

export default ArticleCard;