import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import { ChakraProvider } from "@chakra-ui/react";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import TagManager from "react-gtm-module";
import Layout from "../components/layout";
import SEO from "../../next-seo.config";

import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import theme from "../../theme";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-ZZG5V5QX89" });
  }, []);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ReCaptchaProvider reCaptchaKey="[6LcRSUsjAAAAANkFZrDqjNqolelqkZSXZlqmqnrq]">
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </ReCaptchaProvider>
    </>
  );
};

export default MyApp;
