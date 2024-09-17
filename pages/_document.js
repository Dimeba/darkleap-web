import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<script
					defer
					src='https://shown.io/metrics/Lj3bZLpa3l'
					type='text/javascript'
				></script>

				{/* Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
					strategy='afterInteractive'
				/>
				<script>
					{`
            			window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
            			gtag('js', new Date());
            			gtag('config', '${process.env.GOOGLE_ANALYTICS}');
          			`}
				</script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
