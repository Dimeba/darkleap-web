import { ReactNode } from 'react'

// font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Components
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<main className={inter.className}>
			<Nav />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
