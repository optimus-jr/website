import "@/styles/globals.scss";

import { League_Spartan } from "@next/font/google";
import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "@/components/Layout";
const league = League_Spartan({
  subsets: ["latin"],
  fallback: ["Roboto", "sans-serif"],
  display: "swap",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* A Tag Viewport não deve ser usada no _document.tsx, por isso está nesse arquivo */}
        {/* Para mais informações acesse: https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <LazyMotion features={domAnimation} strict>
        <Layout font={league}>
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>
    </>
  );
};

export default MyApp;
