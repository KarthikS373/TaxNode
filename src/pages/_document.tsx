import { Html, Head, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "../components/theme";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZZG5V5QX89"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZZG5V5QX89');
        </script>
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
