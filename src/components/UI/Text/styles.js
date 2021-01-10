import styled from 'styled-components';

export const TextItem = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  tetx-align: left;
  line-height: 1.5;
  margin-bottom: 2.5rem;
`;
