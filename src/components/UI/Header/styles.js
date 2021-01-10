import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  ${({ isOpen }) => isOpen && css`
    position: fixed;
    top: 0;
  `}
`;

export const HeaderContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderBtnMenu = styled.button`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.violet};
  border-radius: 100%;
  box-shadow: 3px 3px 3px rgba(0,0,0,0.050),
  -3px -3px 3px rgba(0,0,0,0.050);
  border: none;
  outline: none;
  transition: box-shadow .3s linear;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px rgba(163, 83, 243, .8),
    0 0 0 6px rgba(163, 83, 243, .6),
    0 0 0 9px rgba(163, 83, 243, .4),
    0 0 0 12px rgba(163, 83, 243, .2);
  }

  > svg {
    transiation: all .3s linear;
  }

  @media (min-width: 740px) {
    display: none !important;
  }
`;

export const HeaderMenu = styled.nav`
  width: 100%;
  position: fixed;
  top: 8rem;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: flex-start;
  height: 0;
  max-height: 0;
  padding: 0;
  overflow: hidden;
  transition: all .8s linear;

  ${({ isOpen }) => isOpen && css`
    height: 100vh;
    max-height: 100vh;
    padding: 4rem 0;
    overflow: scroll;
  `} 

  &,
  > ul {
    display: flex;
  }

  > ul {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > li {
      display: block;
      padding: 1.2rem 1rem;
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 400;
      line-height: 1;
      letter-spacing: 1;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.violet};
        transition: width .3s linear;  
      }

      &:hover::after {
        width: 100%;
      }
    }

    > li.menu-item-main {
      color: ${({ theme }) => theme.colors.violetDark};
      font-weight: 500;
    }
    
    > li + li {
      margin-top: 3rem;
    }
  }

  @media (min-width: 740px) {
    position: initial;
    max-height: 100%;
    height: auto;
    width: auto;
    overflow: scroll;
    align-items: flex-end;

  > ul {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    > li {
      padding: 1rem;
    }
    > li + li {
      margin-top: 0;
    }
  }
`;
