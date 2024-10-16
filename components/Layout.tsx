import { ReactNode } from 'react'

// font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Components
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className={inter.className}>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
