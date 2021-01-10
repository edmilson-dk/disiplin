import GlobalStyles from '../styles/globals';
import Theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  )
}

export default MyApp;
