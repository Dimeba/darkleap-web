// styles
import styles from '@/styles/About.module.scss'

// components
import Button from './Button'
import Link from 'next/link'

const About = () => {
	return (
		<section id='about-us' className={`${styles.about} grid-container`}>
			<h2>About Us</h2>
			<div className={styles.aboutText}>
				<p>
					At Dark Leap, we thrive on every aspect of your project, from research
					and design to development, testing, and maintenance. We are passionate
					about delivering the highest quality products while caring deeply
					about the success of our clients. Building great relationships is our
					priority, ensuring clients return to us for exceptional results. Trust
					us to be your reliable partner in creating outstanding web design,
					development, and graphic solutions.
				</p>

				<Link href='#contact' scroll={false} passHref>
					<Button buttonWhite={false}>Get In Touch</Button>
				</Link>
			</div>
		</section>
	)
}

export default About
