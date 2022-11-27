import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: .5rem;
  position: relative;
  padding: 1rem;
  width: 100%;
  min-height: 350px;
  overflow: hidden;
  >* {
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, #000);
    top: 0;
    left: 0;
    z-index: 0;
  }
  &:hover {
    img{
      transform: translate(-50%,-50%) scale(1.05,1.05);
    }
  }
`;

export const BackgroundImage =  styled.img`
  position: absolute;
  width: 100%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: .5s transform;
  z-index: 0;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin: 0;
`;

export const SectionText = styled.span`
  background: #f8e100;
  padding: 3px 8px;
  color: ${props => props.theme.colors.text};
  font-weight: 700;
`;

export const PublishedDate = styled.span`
  color: ${props => props.theme.colors.white};
`;