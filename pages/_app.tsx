// styles
import '@/styles/globals.scss'

// types
import type { AppProps } from 'next/app'

// components
import Layout from '@/components/Layout'

// hooks
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}

		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
