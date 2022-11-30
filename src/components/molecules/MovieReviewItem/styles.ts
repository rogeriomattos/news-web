import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: .5rem;

  >img {
    max-width: 125px;
  }
`;

export const Content =  styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.a`
  font-weight: 700;
`;

export const ShortSumary = styled.span`
  
`;