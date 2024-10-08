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

				{process.env.NODE_ENV === 'production' && (
					<>
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
						/>
						<script
							dangerouslySetInnerHTML={{
								__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                    });
                  `
							}}
						/>
					</>
				)}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
