import "@/styles/globals.css";
import Head from "next/head";
import ContextProvider from "@/store/StoreContext";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Backflipkart</title>
			</Head>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}