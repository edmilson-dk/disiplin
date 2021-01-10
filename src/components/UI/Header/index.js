import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import Container from '../../../styles/container';
import Logo from '../Logo';

import { 
  HeaderWrapper,
  HeaderContainer,
  HeaderBtnMenu,
  HeaderMenu,
} from './styles';

function Header() {
  const [ isOpenMenu, setIsOpenMenu ] = useState(false);

  return (
    <HeaderWrapper isOpen={isOpenMenu}>
      <Container>
        <HeaderContainer>
          <Logo />
          <HeaderBtnMenu
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            { isOpenMenu 
              ? <FiX size="3rem" color="#fff"/>
              : <FiMenu size="3rem" color="#fff"/>
            }
          </HeaderBtnMenu>
          <HeaderMenu isOpen={isOpenMenu}>
            <ul>
              <li className="menu-item-main">Beranda</li>
              <li>Fitur Produk</li>
              <li>Harga</li>
              <li>Resources</li>
            </ul>
          </HeaderMenu>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
