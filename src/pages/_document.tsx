import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property="og:url"
          content="https://morphex-labs.vercel.app/"
          key="og:url"
        />
        <meta property="og:title" content="Morphex" key="og:title" />
        <meta
          property="og:description"
          content="Derivatives exchange on Fantom"
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://morphex-labs.vercel.app/images/Logo_blue.png"
          key="og:image"
        />
        <meta property="og:site_name" content="Morphex" key="og:site_name" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modals" />
      </body>
    </Html>
  );
}
