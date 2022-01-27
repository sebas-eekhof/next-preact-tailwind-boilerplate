import { Html, Head, Main, NextScript } from 'next/document'

export default function NextDocument() {
    return (
        <Html lang={`nl`}>
            <Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={`true`} />
				<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;500&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />    
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}