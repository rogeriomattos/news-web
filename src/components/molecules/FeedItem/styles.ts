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

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    background: ${props => props.theme.colors.white};
    gap: 0;
    box-shadow: ${props => props.theme.boxShadow};

    >div:last-child { 
      padding: 1rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 150px;
  width: 200px;
  overflow: hidden;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: 200px;
    width: 100%;

    img {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }  
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