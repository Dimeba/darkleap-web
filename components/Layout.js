import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import Nav from './Nav'

const Layout = ({ children }) => {
	return (
		<main className={inter.className}>
			<Nav />
			{children}
		</main>
	)
}

export default Layout
