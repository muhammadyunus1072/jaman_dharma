import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Layout from "../../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
