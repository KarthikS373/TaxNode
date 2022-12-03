import type { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";

import { ChakraProvider } from "@chakra-ui/react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

import Layout from "../components/layout";
import SEO from "../../next-seo.config";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import theme from "../../theme";

const MyApp = ({ Component, pageProps }: AppProps) => (
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

export default MyApp;
