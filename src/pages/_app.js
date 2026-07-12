import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
   <>
      <Head>
        <title>NCLEX Practice</title>
      </Head>

      <main>
        <Header />
          <div className="pt-25">
            <Component {...pageProps} />
          </div>
      </main>
    </>
  );
}
