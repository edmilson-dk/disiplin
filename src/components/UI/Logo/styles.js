import styled from 'styled-components';

export const LogoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.colors.violet};
  
  > svg {
    margin-right: 0.5rem;
  }

  > span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
