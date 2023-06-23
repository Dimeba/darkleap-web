import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<main className={inter.className}>
			<Nav />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
