import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import NotificationProvider from "../context/NotificationContext";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Layout>
        <Head>
          <meta name="description" content="Next Events" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationProvider>
  );
}

export default MyApp;
