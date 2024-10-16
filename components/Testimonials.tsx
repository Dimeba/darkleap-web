// styles
import styles from '@/styles/Testimonials.module.scss'

// components
import TestimonialCard from './TestimonialCard'

// hooks
import {
	Options,
	useIntersectionObserver
} from '@/hooks/useIntersectionObserver'

// types
import { Testimonial } from '@/types/contentfulTypes'

interface Props {
	testimonials: Testimonial[]
}

const Testimonials: React.FC<Props> = ({ testimonials }) => {
	// animated slider
	const options: Options = { root: null, rootMargin: '0px', threshold: 0 }

	const [targetRef, isIntersecting] = useIntersectionObserver(options) as [
		React.MutableRefObject<HTMLDivElement>,
		boolean
	]

	// There must be 10 testimonials!!!

	return (
		<section id='testimonials' className={styles.testimonials}>
			<div className='grid-container'>
				<h2>Testimonials</h2>
			</div>
			<div ref={targetRef} className={styles.sliderContainer}>
				<div
					className={`${styles.slider} ${
						isIntersecting ? styles.sliderAnimation : ''
					}`}
				>
					{testimonials.map(testimonial => {
						return (
							<TestimonialCard
								key={testimonial.sys.id}
								title={testimonial.fields.title}
								text={testimonial.fields.text}
								client={testimonial.fields.client}
								company={testimonial.fields.company}
								image={'https:' + testimonial.fields.image.fields.file.url}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
