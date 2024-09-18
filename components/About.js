// styles
import styles from '@/styles/About.module.scss'

// components
import Button from './Button'

// GA
import * as gtag from '@/lib/gtag'

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

				<a href='#contact' aria-label='Link to contact form'>
					<Button
						buttonWhite={false}
						event={() =>
							gtag.buttonEvent('Get In Touch button on about us section')
						}
					>
						Get In Touch
					</Button>
				</a>
			</div>
		</section>
	)
}

export default About
