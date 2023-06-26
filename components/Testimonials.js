// styles
import styles from '@/styles/Testimonials.module.scss'

// components
import TestimonialCard from './TestimonialCard'

// hooks
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const Testimonials = () => {
	// animated slider
	const [targetRef, isIntersecting] = useIntersectionObserver()

	return (
		<section id='testimonials' className={styles.testimonials}>
			<div className='grid-container'>
				<h2>Testimonials</h2>
			</div>
			<div className={styles.sliderContainer} ref={targetRef}>
				<div
					className={`${styles.slider} ${
						isIntersecting ? styles.sliderAnimation : ''
					}`}
				>
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
					<TestimonialCard />
				</div>
			</div>
		</section>
	)
}

export default Testimonials
