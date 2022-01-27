import '@styles/index.scss';
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function NextApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>

			</Head>
			<Component {...pageProps} />
		</>
  	)
}
