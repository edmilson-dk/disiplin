import TitlePrimary from '../UI/TitlePrimary';
import Text from '../UI/Text';
import Button from '../UI/Button';
import Container from '../../styles/container';

import {
  BannerWrapper,
  BannerContainer,
  BannerContent,
  BannerImage,
} from './styles';

function BannerHomePage() {
  return (
    <BannerWrapper>
      <Container>
        <BannerContainer>
          <BannerContent>
            <TitlePrimary label="Atur waktu anda lebih produktif"/>
            <Text text="Kami membuat platform untuk membantu Kamu mengatur waktu supaya pekerjaan kamu tidak berantakan."/>
            <Button label="Unduh Sekarang"/>    
          </BannerContent>
          <BannerImage>
            <img src="/bg.png" alt="Disiplin"  />
          </BannerImage>
        </BannerContainer>
      </Container>
    </BannerWrapper>
  )
}

export default BannerHomePage;
