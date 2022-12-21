import type {AppProps} from "next/app";

import {DefaultSeo} from "next-seo";

import {ChakraProvider} from "@chakra-ui/react";

import Layout from "../components/layout";
import SEO from "../../next-seo.config";
import {PrismicProvider} from '@prismicio/react'
import {PrismicPreview} from '@prismicio/next'
import {repositoryName} from '../../prismicio'

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import theme from '../../theme'
import Link from "next/link";

// const theme = extendTheme({
//   fonts: {
//     body: "Poppins, -apple-system",
//     heading: "Poppins, -apple-system",
//   },
// });

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <DefaultSeo {...SEO} />
        <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
            <PrismicPreview repositoryName={repositoryName}>
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            </PrismicPreview>
        </PrismicProvider>
    </>
);

export default MyApp;
