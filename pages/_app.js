import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TinyTerra</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>
      <div className='content-center bg-bg bg-cover min-h-screen'>
        <div className='min-h-screen'>
          <Navbar />
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>
    </>
  );
}
