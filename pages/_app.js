import '@/styles/globals.scss'

// components
import Layout from '@/components/Layout'

// hooks
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'

export default function App({ Component, pageProps }) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = url => {
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
