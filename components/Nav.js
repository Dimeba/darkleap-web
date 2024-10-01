import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

// Components
import Hamburger from './Hamburger'

// styles
import styles from '@/styles/Nav.module.scss'

const Header = () => {
	// Scrolling Header
	const [targetRef, isIntersecting] = useIntersectionObserver()

	// Mobile Menu

	const [menuOpen, setMenuOpen] = useState(false)
	const [menuClass, setMenuClass] = useState(styles.menuBtnClosed)
	const [hiddenMenuClass, setHiddenMenuClas] = useState(styles.hidden)

	const toggleMenu = () => {
		if (!menuOpen) {
			setMenuClass(styles.menuBtnOpen)
			setMenuOpen(true)
			setHiddenMenuClas('')
		} else {
			setMenuClass(styles.menuBtnClosed)
			setMenuOpen(false)
			setHiddenMenuClas(styles.hidden)
		}
	}

	const closeMenu = () => {
		setMenuClass(styles.menuBtnClosed)
		setMenuOpen(false)
		setHiddenMenuClas(styles.hidden)
	}

	return (
		<nav ref={targetRef}>
			<header
				className={isIntersecting ? styles.headerTop : styles.headerScroll}
			>
				<div className={styles.nav}>
					<a href='/'>
						<div className={styles.logo}>
							<Image
								src={isIntersecting ? 'logo-white.svg' : 'logo-dark.svg'}
								width={134}
								height={30}
								alt='DarkLeap Logo'
								priority={true}
							/>
						</div>
					</a>

					<Hamburger toggleMenu={toggleMenu} menuClass={menuClass} />

					<ul className={hiddenMenuClass}>
						<a href='/#about-us'>
							<li onClick={() => closeMenu()}>About Us</li>
						</a>

						<a href='/#services'>
							<li onClick={() => closeMenu()}>Our Services</li>
						</a>

						<a href='/#team'>
							<li onClick={() => closeMenu()}>Our Team</li>
						</a>

						{/* <a href='/#testimonials'  >
							<li onClick={() => closeMenu()}>Testimonials</li>
						</a> */}

						<a href='/#work'>
							<li onClick={() => closeMenu()}>Our Work</li>
						</a>

						<a href='/#contact'>
							<li
								className={`${styles.contactButton} ${
									!isIntersecting ? styles.animatedButton : ''
								}`}
								onClick={() => closeMenu()}
							>
								Contact
							</li>
						</a>
					</ul>
				</div>
			</header>
		</nav>
	)
}

export default Header
