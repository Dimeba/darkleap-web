// styles
import styles from '@/styles/Hero.module.scss'

// components
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
	return (
		<div className={styles.hero}>
			{/* Background Image */}
			<div className={styles.image}>
				<Image
					src='/hero.jpg'
					fill
					quality={100}
					style={{ objectFit: 'cover' }}
					sizes='(max-width: 768px) 100vw, 768px'
					alt='Designer in process'
					priority={true}
				/>
			</div>

			{/* Content */}
			<div className={styles.heroContent}>
				<h1>From Concept to Success: Partnering for Exceptional Results</h1>

				<div className={styles.buttons}>
					<Link href='#services' scroll={false} passHref>
						<Button buttonWhite={true}>Discover Our Services</Button>
					</Link>
					<Link href='#contact' scroll={false} passHref>
						<Button buttonWhite={true}>Get In Touch</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
