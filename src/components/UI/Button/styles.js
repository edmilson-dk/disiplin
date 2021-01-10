import styled from 'styled-components';

export const ButtonItem = styled.button`
  border: none;
  outline: none;
  padding: 1.2rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.violet};
  border-radius: 3rem;
  margin-top: 1rem;
  line-height: 1;
  transition: box-shadow .3s linear;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px rgba(163, 83, 243, .8),
    0 0 0 6px rgba(163, 83, 243, .6),
    0 0 0 9px rgba(163, 83, 243, .4),
    0 0 0 12px rgba(163, 83, 243, .2);
`;
