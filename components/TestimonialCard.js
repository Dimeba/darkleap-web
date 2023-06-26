// styles
import styles from '@/styles/Testimonials.module.scss'

// components
import Image from 'next/image'

const TestimonialCard = () => {
	return (
		<div className={styles.testimonial}>
			<div className={styles.testimonialPhoto}>
				<Image
					src='/square-placeholder.jpg'
					fill
					sizes='(max-width: 768px) 100vw, 768px'
					alt='Team Member Photo'
					priority={false}
				/>
			</div>

			<div className={styles.testimonialText}>
				<h3>Sign, center console (pedestal)</h3>
				<p>
					"I was thoroughly impressed with his work quality and professionalism.
					He delivered an eye-catching sign design and realistic textures
					efficiently, while maintaining excellent communication throughout the
					process. I highly recommend this talented designer for anyone seeking
					creative and professional design and 3D modeling services."
				</p>

				<h4>Jeff Goin</h4>
				<p>Reaction Simulation</p>
			</div>
		</div>
	)
}

export default TestimonialCard
