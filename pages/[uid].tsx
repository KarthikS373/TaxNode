import React from "react";
import { NextSeo } from "next-seo";
import Hero from "../components/advisory/hero";
import GetStarted from "../components/advisory/getStarted";
import TaxCompliance from "../components/advisory/taxCompliance";
import WhatIsRequired from "../components/advisory/whatIsRequired";
import FaqAdvisory from "../components/advisory/faq";
import RequestCallBack from "../components/advisory/requestCallBack";
import BuyNow from "../components/advisory/buyNow";
import { createClient } from "../prismicio";
import * as prismicH from '@prismicio/helpers'
const UIDPage = ({page}:any) => {
    page = {
        "id": "Y6OrvBEAACMAdIK3",
        "uid": "home",
        "url": "/home",
        "type": "page",
        "href": "https://taxnodes.cdn.prismic.io/api/v2/documents/search?ref=Y6QlixEAACAAdT6R&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22Y6OrvBEAACMAdIK3%22%29+%5D%5D",
        "tags": [],
        "first_publication_date": "2022-12-22T00:58:40+0000",
        "last_publication_date": "2022-12-22T00:58:40+0000",
        "slugs": [
        "home"
    ],
        "linked_documents": [],
        "lang": "en-in",
        "alternate_languages": [],
        "data": {
        "slices": []
    }
    }
    // return (
    //     <>
    //         <NextSeo title="Advisory" />
    //         <Hero />
    //         <RequestCallBack />
    //         <TaxCompliance />
    //         <GetStarted />
    //         <WhatIsRequired />
    //         <BuyNow />
    //         <FaqAdvisory />
    //     </>
    // );
};

export default UIDPage;
export async function getStaticPaths() {
    const client = createClient()
    const pages = await client.getAllByType('page')
    return {
        paths: pages.map((page) => prismicH.asLink(page)),
        fallback: false,
    }
}
export async function getStaticProps({ params, previewData }:any) {
    const client = createClient({ previewData })

    const page = await client.getByUID('page', params.uid)

    return {
        props: { page },
    }
}