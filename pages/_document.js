/** @format */

import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preload' href='/fonts/Poppins-Bold.ttf' as='font' crossOrigin='anonymous' />
					<link rel='preload' href='/fonts/Poppins-Light.ttf' as='font' crossOrigin='anonymous' />
					<link rel='preload' href='/fonts/Poppins-Medium.ttf' as='font' crossOrigin='anonymous' />
					<link rel='preload' href='/fonts/Satisfy-Regular.ttf' as='font' crossOrigin='anonymous' />
				</Head>
				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}


export default MyDocument;