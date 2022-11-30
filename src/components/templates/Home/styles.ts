import styled from 'styled-components';


export const Wrapper = styled.main`
  display: grid;
  grid-template-areas: 
  "emphasys emphasys emphasys"
  "feed feed reviews";
  column-gap: 2rem;
  >:nth-child(1) {
    grid-area: emphasys;
  }
  >:nth-child(2) {
    grid-area: feed;
  }
  >:nth-child(3) {
    grid-area: reviews;
  }
`;