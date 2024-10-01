// styles
import styles from '@/styles/Hero.module.scss'

// components
import Button from './Button'
import Image from 'next/image'

// GA
import * as gtag from '@/lib/gtag'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { useState } from 'react'

const Hero = () => {
	const options = {
		root: null,
		rootMargin: '0%',
		threshold: 0
	}

	const [targetRef, isIntersecting] = useIntersectionObserver(options)

	return (
		<div className={styles.hero}>
			<video ref={targetRef} autoPlay loop muted playsInline preload='auto'>
				{isIntersecting && <source src='/hero.mp4' type='video/mp4' />}
			</video>

			<div className={styles.videoOverlay}></div>

			{/* Background Image */}
			{/* <div className={styles.image}>
				<Image
					src='/hero.jpg'
					fill
					quality={100}
					style={{ objectFit: 'cover' }}
					sizes='(max-width: 768px) 100vw, 768px'
					alt='Designer in process'
					priority={true}
				/>
			</div> */}

			{/* Content */}
			<div className={styles.heroContent}>
				<div>
					<h1>Building Your Digital Presence Through Exceptional Design</h1>

					{/* <h1>From Concept to Success: Partnering for Exceptional Results</h1> */}

					<h3>
						Web Development, Branding & Visual Identity, Marketing Material
						Design
					</h3>
				</div>

				<div className={styles.buttons}>
					{/* <a href='#services' aria-label='Link to services section'>
						<Button
							buttonWhite={true}
							event={() => gtag.buttonEvent('Services button on hero')}
						>
							Discover Our Services
						</Button>
					</a> */}
					<a href='#contact' aria-label='Link to contact form'>
						<Button
							buttonWhite={true}
							event={() => gtag.buttonEvent('Get In Touch button on hero')}
						>
							Free Consultation
						</Button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
