// styles
import styles from '@/styles/Testimonials.module.scss'

// components
import Image from 'next/image'

interface Props {
	title: string
	text: string
	client: string
	company: string
	image: string
}

const TestimonialCard: React.FC<Props> = ({
	title,
	text,
	client,
	company,
	image
}) => {
	return (
		<div className={styles.testimonial}>
			<Image
				src={image}
				sizes='(max-width: 768px) 100vw, 768px'
				alt='Team Member Photo'
				priority={false}
				width={100}
				height={100}
				style={{ objectFit: 'cover' }}
			/>

			<div className={styles.testimonialText}>
				<h3>{title}</h3>
				<p>{text}</p>

				<h4>{client}</h4>
				<p>{company}</p>
			</div>
		</div>
	)
}

export default TestimonialCard
