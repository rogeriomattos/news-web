import * as S from './styles';
import { FaRegNewspaper } from 'react-icons/fa';

const Logo = () => (
  <S.Logo data-testid="logo">
    <FaRegNewspaper />
    <span data-testid="logo-title"><b>News</b>Web</span>
  </S.Logo>
)

export default Logo;