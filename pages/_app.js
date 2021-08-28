import Head from 'next/head';

import 'tailwindcss/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
