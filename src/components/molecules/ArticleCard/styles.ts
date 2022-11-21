import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  >div:last-child {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    flex: 1;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 200px;
  overflow: hidden;
`;

export const TitleLink = styled.a`
  
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;

export const Abstract = styled.p`
  
`;