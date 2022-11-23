import styled from 'styled-components';

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 600px) { 
    gap: 1.5rem;
  }
`;