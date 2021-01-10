import Head from 'next/head';

import Header from '../components/UI/Header';
import BannerHomePage from '../components/BannerHomePage';

function Home() {
  return (
    <>
      <Head>
        <title>Disiplin - Home</title>
      </Head>
      <Header /> 
      <BannerHomePage />
    </>
  );
}

export default Home;
