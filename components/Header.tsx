import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// Components
import { Spin as Hamburger } from 'hamburger-react'

// styles
import styles from '@/styles/Header.module.scss'

const Header = () => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver() as [
		React.MutableRefObject<HTMLElement | null>,
		boolean
	]

	// Mobile Menu
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const [isMobile, setIsMobile] = useState<boolean>(false)

	// Menu
	interface MenuItem {
		title: string
		link: string
	}

	type Menu = MenuItem[]

	const menu: Menu = [
		{ title: 'About Us', link: '/#about-us' },
		{ title: 'Our Services', link: '/#services' },
		{ title: 'Our Team', link: '/#team' },
		// { title: 'Testimonials', link: '/#testimonials' },
		{ title: 'Our Work', link: '/#work' }
	]

	// Check if mobile and close menu on resize
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1024)
			setMenuOpen(false)
		}

		handleResize()

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuOpen(true)
		} else {
			setMenuOpen(false)
		}
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<nav ref={targetRef}>
			<header
				className={styles.header}
				style={{
					backgroundColor: isIntersecting && !menuOpen ? '' : 'white',
					padding: isIntersecting ? '1.5rem' : '2.75rem',
					height: menuOpen && isMobile ? '100vh' : 'auto'
				}}
			>
				<div>
					<a href='/'>
						<div className={styles.logo}>
							<Image
								src={
									isIntersecting && !menuOpen
										? 'logo-white.svg'
										: 'logo-dark.svg'
								}
								width={134}
								height={30}
								alt='DarkLeap Logo'
								priority={true}
							/>
						</div>
					</a>

					{isMobile && (
						<Hamburger
							color={isIntersecting && !menuOpen ? 'white' : 'black'}
							size={20}
							toggled={menuOpen}
							toggle={toggleMenu}
						/>
					)}
				</div>

				{(menuOpen || !isMobile) && (
					<ul>
						{menu.map(item => (
							<a key={item.title} href={item.link}>
								<li
									style={{ color: isIntersecting ? 'white' : '#16171a' }}
									onClick={() => closeMenu()}
								>
									{item.title}
								</li>
							</a>
						))}

						<a
							href='/#contact'
							className={isIntersecting || menuOpen ? '' : styles.hiddenButton}
						>
							<li className={styles.contactButton} onClick={() => closeMenu()}>
								Contact
							</li>
						</a>
					</ul>
				)}
			</header>
		</nav>
	)
}

export default Header
