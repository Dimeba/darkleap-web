// styles
import styles from '@/styles/Hero.module.scss'

// components
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
	return (
		<div className={`${styles.hero} grid-container`}>
			<div className={styles.heroContent}>
				<h1>
					From Concept to Success:
					<br /> Partnering for Exceptional Results
				</h1>

				<div className={styles.buttons}>
					<Link href='#' scroll={false} passHref>
						<Button buttonWhite={true}>Discover Our Services</Button>
					</Link>
					<Link href='#' scroll={false} passHref>
						<Button buttonWhite={true}>Get In Touch</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
