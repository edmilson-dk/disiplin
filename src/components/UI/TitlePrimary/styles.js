import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.violetDark};
  text-align: left;
  line-height: 1.4;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;
