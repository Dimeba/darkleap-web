import Link from 'next/link'
import Image from 'next/image'

// styles
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={`grid-container ${styles.footerContainer}`}>
				<div className={styles.footerColumn}>
					<ul className={styles.footerMenu}>
						<Link href='#about-us' scroll={false} passHref>
							<li>About Us</li>
						</Link>

						<Link href='#services' scroll={false} passHref>
							<li>Our Services</li>
						</Link>

						<Link href='#team' scroll={false} passHref>
							<li>Our Team</li>
						</Link>
					</ul>
				</div>
				<div className={styles.footerColumn}>
					<ul className={styles.footerMenu}>
						<Link href='#testimonials' scroll={false} passHref>
							<li>Testimonials</li>
						</Link>

						<Link href='#work' scroll={false} passHref>
							<li>Our Work</li>
						</Link>

						<Link href='#contact' scroll={false} passHref>
							<li>Get In Touch</li>
						</Link>
					</ul>
				</div>
				<div className={styles.footerColumn}>
					<ul>
						<li>
							<a href='mailto:office@darkleap.dev'>office@darkleap.dev</a>
						</li>
						{/* <li>Instagram</li> */}
					</ul>
				</div>
				<div className={`${styles.logoCredit} ${styles.footerColumn}`}>
					<Link href='/' scroll={false} passHref>
						<div className={styles.logo}>
							<Image
								src='logo-white.svg'
								width={102}
								height={23}
								alt='DarkLeap Logo'
								priority={true}
							/>
						</div>
					</Link>
					<p className={styles.credit}>
						© {year} Dark Leap. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
