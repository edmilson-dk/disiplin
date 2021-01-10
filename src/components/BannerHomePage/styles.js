import styled from 'styled-components';

export const BannerWrapper = styled.main`
  width: 100%;
  padding: 4rem 0 8rem 0; 
  background-color: ${({ theme }) => theme.colors.white};
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
`;

export const BannerContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerImage = styled.div`
  width: 100%;
  margin-top: 3rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;
