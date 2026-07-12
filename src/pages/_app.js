import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";
import { TestSessionProvider } from "@/context/TestSessionContext";
export default function App({ Component, pageProps }) {
  return (
   <TestSessionProvider>
      <Head>
        <title>NCLEX Practice</title>
      </Head>

      <main>
        <Header />
          <div className="pt-25">
            <Component {...pageProps} />
          </div>
      </main>
    </TestSessionProvider>
  );
}
