import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  box-shadow: #000 -1px -2px 3px 1px;
  padding: 1rem;
  background: ${props => props.theme.colors.primary.main};
  color:  ${props =>  props.theme.colors.primary.contrastText};
`;

