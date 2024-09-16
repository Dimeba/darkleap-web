// styles
import styles from '@/styles/Testimonials.module.scss'

// components
import Image from 'next/image'

const TestimonialCard = props => {
	return (
		<div className={styles.testimonial}>
			<Image
				src={props.image}
				sizes='(max-width: 768px) 100vw, 768px'
				alt='Team Member Photo'
				priority={false}
				width={100}
				height={100}
				style={{ objectFit: 'cover' }}
			/>

			<div className={styles.testimonialText}>
				<h3>{props.title}</h3>
				<p>{props.text}</p>

				<h4>{props.client}</h4>
				<p>{props.company}</p>
			</div>
		</div>
	)
}

export default TestimonialCard
