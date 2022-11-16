import Link from 'next/link';
import Logo from '@components/molecules/Logo';
import * as S from './styles';

const Header = () => (
  <S.Header data-testid="header">
    <Link href="/" data-testid="header-logo">
      <Logo/>
    </Link>
  </S.Header>
);

export default Header;